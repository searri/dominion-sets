/* Dominion Recommended Sets - Modern UI Controller */

// DOM Elements
const tabExtras = document.getElementById("tab_extras");
const tabOfficial = document.getElementById("tab_official");
const tabDailies = document.getElementById("tab_dailies");
const tabAbout = document.getElementById("tab_about");

const locKingdoms = document.getElementById("loc_kingdoms");
const locAbout = document.getElementById("loc_about");

const kingdomsTitleElement = document.getElementById("kingdoms_title");
const disabledNoteElement = document.getElementById("disabledNote");
const errorsElement = document.getElementById("errors");
const kingdomContainerElement = document.getElementById("kingdomContainer");
const paginationContainer = document.getElementById("paginationContainer");
const selectionCountBadge = document.getElementById("selectionCountBadge");
const resultsSummaryElement = document.getElementById("resultsSummary");

// Search & Autocomplete DOM Elements
const cardSearchInput = document.getElementById("cardSearchInput");
const cardSearchClearBtn = document.getElementById("cardSearchClearBtn");
const cardAutocompleteDropdown = document.getElementById("cardAutocompleteDropdown");
const cardSearchResultsHeader = document.getElementById("cardSearchResultsHeader");
const searchResultsTitle = document.getElementById("searchResultsTitle");
const searchResultsSubtitle = document.getElementById("searchResultsSubtitle");
const searchCategoryFilters = document.getElementById("searchCategoryFilters");
const expansionSelectorCard = document.getElementById("expansionSelectorCard");

// Expansion Definitions
const expansionKeys = [
  "base", "intrigue", "seaside", "alchemy", "prosperity", "hinterlands",
  "darkages", "cornguilds", "adventures", "empires", "nocturne",
  "renaissance", "menagerie", "allies", "plunder", "risingsun"
];

// Expansion Metadata (Display names & badge styling)
const expansionMeta = {
  base: { name: "Base", colorClass: "exp-badge-base" },
  intrigue: { name: "Intrigue", colorClass: "exp-badge-intrigue" },
  seaside: { name: "Seaside", colorClass: "exp-badge-seaside" },
  alchemy: { name: "Alchemy", colorClass: "exp-badge-alchemy" },
  prosperity: { name: "Prosperity", colorClass: "exp-badge-prosperity" },
  hinterlands: { name: "Hinterlands", colorClass: "exp-badge-hinterlands" },
  darkages: { name: "Dark Ages", colorClass: "exp-badge-darkages" },
  cornguilds: { name: "Cornucopia & Guilds", colorClass: "exp-badge-cornguilds" },
  adventures: { name: "Adventures", colorClass: "exp-badge-adventures" },
  empires: { name: "Empires", colorClass: "exp-badge-empires" },
  nocturne: { name: "Nocturne", colorClass: "exp-badge-nocturne" },
  renaissance: { name: "Renaissance", colorClass: "exp-badge-renaissance" },
  menagerie: { name: "Menagerie", colorClass: "exp-badge-menagerie" },
  allies: { name: "Allies", colorClass: "exp-badge-allies" },
  plunder: { name: "Plunder", colorClass: "exp-badge-plunder" },
  risingsun: { name: "Rising Sun", colorClass: "exp-badge-risingsun" }
};

// Set of expansions enabled via expansions.json (populated at startup)
let enabledExpansions = new Set(expansionKeys);

// Pagination & State
const PAGE_SIZE = 10;
let currentPage = 1;
let currentFilteredKingdoms = [];
let setCategory = "extras";

// Search State
let isCardSearchActive = false;
let activeSearchCard = "";
let searchCategoryFilter = "all"; // 'all' | 'extras' | 'dailies' | 'official'
let searchAllResults = [];
let searchCategoryResults = { extras: [], dailies: [], official: [] };
let searchableCards = [];
let activeSuggestionIndex = -1;
let currentSuggestions = [];

// ==========================================
// Theme Controller
// ==========================================
function initTheme() {
  const savedTheme = localStorage.getItem("dominion_theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = savedTheme ? savedTheme === "dark" : prefersDark;
  
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  updateThemeIcon(isDark);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("dominion_theme", isDark ? "dark" : "light");
  updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
  const sunIcon = document.getElementById("themeSunIcon");
  const moonIcon = document.getElementById("themeMoonIcon");
  if (!sunIcon || !moonIcon) return;
  if (isDark) {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  } else {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }
}

/**
 * Helper function to retrieve the active dataset based on selected category tab
 */
function getActiveDataset() {
  if (setCategory === "extras") return typeof kingdoms !== "undefined" ? kingdoms : [];
  if (setCategory === "official") return typeof officialKingdoms !== "undefined" ? officialKingdoms : [];
  if (setCategory === "dailies") return typeof dailyKingdoms !== "undefined" ? dailyKingdoms : [];
  return [];
}

// ==========================================
// Navigation & Tabs
// ==========================================
function goToLocation(loc) {
  if (isCardSearchActive) {
    clearCardSearch(false);
  }

  const allLocs = [locKingdoms, locAbout];
  const allTabs = [tabExtras, tabOfficial, tabDailies, tabAbout];

  allLocs.forEach(el => el && el.classList.remove("active"));
  allTabs.forEach(el => el && el.classList.remove("active"));

  switch (loc) {
    case "extras":
      setCategory = "extras";
      if (locKingdoms) locKingdoms.classList.add("active");
      if (tabExtras) tabExtras.classList.add("active");
      if (disabledNoteElement) disabledNoteElement.classList.add("hidden");
      if (kingdomsTitleElement) kingdomsTitleElement.textContent = "Extra Recommended Sets";
      updateExpansionAvailability();
      clearSets();
      break;

    case "official":
      setCategory = "official";
      if (locKingdoms) locKingdoms.classList.add("active");
      if (tabOfficial) tabOfficial.classList.add("active");
      if (disabledNoteElement) disabledNoteElement.classList.add("hidden");
      if (kingdomsTitleElement) kingdomsTitleElement.textContent = "Official Recommended Sets";
      updateExpansionAvailability();
      clearSets();
      break;

    case "dailies": // ADD THIS CASE
      setCategory = "dailies";
      if (locKingdoms) locKingdoms.classList.add("active");
      if (tabDailies) tabDailies.classList.add("active");
      if (disabledNoteElement) disabledNoteElement.classList.add("hidden");
      if (kingdomsTitleElement) kingdomsTitleElement.textContent = "Daily Recommended Sets";
      updateExpansionAvailability();
      clearSets();
      break;

    case "about":
      if (locAbout) locAbout.classList.add("active");
      if (tabAbout) tabAbout.classList.add("active");
      break;
  }
}

function updateExpansionAvailability() {
  const fullDataset = getActiveDataset();
  
  // Filter dataset to only include kingdoms where every required expansion is enabled
  const dataset = fullDataset.filter(k => {
    if (!Array.isArray(k.expansions)) return true;
    return k.expansions.every(key => enabledExpansions.has(key));
  });

  // Identify all expansions that have at least one kingdom in the filtered dataset
  const availableExpansions = new Set();
  dataset.forEach(k => {
    if (Array.isArray(k.expansions)) {
      k.expansions.forEach(key => availableExpansions.add(key));
    }
  });

  expansionKeys.forEach(key => {
    const chip = document.getElementById("chip_" + key);
    const cb = document.getElementById(key);
    if (!chip || !cb) return;

    const isConfigEnabled = enabledExpansions.has(key);
    const isAvailable = isConfigEnabled && availableExpansions.has(key);
    cb.disabled = !isAvailable;

    if (!isAvailable) {
      // Hide completely if disabled by config or no sets available
      chip.classList.add("hidden");
      chip.classList.remove("selected");
      cb.checked = false;
    } else {
      chip.classList.remove("hidden");
      chip.classList.remove("disabled");
    }
  });

  updateSelectionCount();
}

function toggleExpansion(key) {
  const cb = document.getElementById(key);
  const chip = document.getElementById("chip_" + key);
  if (!cb || !chip || cb.disabled) return;

  cb.checked = !cb.checked;
  if (cb.checked) {
    chip.classList.add("selected");
  } else {
    chip.classList.remove("selected");
  }
  updateSelectionCount();
}

function updateSelectionCount() {
  const selected = expansionKeys.filter(key => {
    const cb = document.getElementById(key);
    return cb && cb.checked;
  });

  if (selectionCountBadge) {
    const count = selected.length;
    selectionCountBadge.textContent = `${count} selected`;
    if (count > 0) {
      selectionCountBadge.className = "text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-300 dark:border-amber-700";
    } else {
      selectionCountBadge.className = "text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-400 border border-slate-300 dark:border-slate-700";
    }
  }

  updateCombinationHighlights(selected);
}

function updateCombinationHighlights(selectedKeys) {
  const fullDataset = getActiveDataset();

  // Use the same enabledExpansions-filtered dataset
  const dataset = fullDataset.filter(k => {
    if (!Array.isArray(k.expansions)) return true;
    return k.expansions.every(key => enabledExpansions.has(key));
  });

  expansionKeys.forEach(key => {
    const chip = document.getElementById("chip_" + key);
    if (!chip || chip.classList.contains("hidden")) return;

    // Always clear combination state classes
    chip.classList.remove("has-combination", "no-combination");

    // Only apply highlights when there is at least one selection and this chip isn't selected
    if (selectedKeys.length === 0 || selectedKeys.includes(key)) return;

    // Check if any kingdom in the dataset includes all selected keys AND this key
    const hasCombination = dataset.some(k => {
      if (!Array.isArray(k.expansions)) return false;
      const allRequired = [...selectedKeys, key];
      return allRequired.every(req => k.expansions.includes(req));
    });

    chip.classList.add(hasCombination ? "has-combination" : "no-combination");
  });
}

function clearSets() {
  if (isCardSearchActive) {
    clearCardSearch(false);
  }

  if (errorsElement) errorsElement.textContent = "";
  if (resultsSummaryElement) resultsSummaryElement.classList.add("hidden");
  if (kingdomContainerElement) kingdomContainerElement.innerHTML = "";
  if (paginationContainer) paginationContainer.innerHTML = "";

  expansionKeys.forEach(key => {
    const cb = document.getElementById(key);
    const chip = document.getElementById("chip_" + key);
    if (cb) cb.checked = false;
    if (chip) chip.classList.remove("selected");
  });
  updateSelectionCount();
  getSets(1);
}

// ==========================================
// Sets Retrieval & Generation (with Pagination)
// ==========================================
function getSets(page = 1) {
  if (errorsElement) errorsElement.textContent = "";
  if (resultsSummaryElement) resultsSummaryElement.classList.add("hidden");
  if (kingdomContainerElement) kingdomContainerElement.innerHTML = "";
  if (paginationContainer) paginationContainer.innerHTML = "";

  const selectedKeys = expansionKeys.filter(key => {
    const cb = document.getElementById(key);
    return cb && cb.checked;
  });

  const fullDataset = getActiveDataset();
  const dataset = fullDataset.filter(k => {
    if (!Array.isArray(k.expansions)) return true;
    return k.expansions.every(key => enabledExpansions.has(key));
  });

  if (selectedKeys.length === 0) {
    // If no expansions selected, show all sets in a paginated list
    currentFilteredKingdoms = dataset;
  } else {
    const alchemyCb = document.getElementById("alchemy");
    if (selectedKeys.length === 1 && alchemyCb && alchemyCb.checked) {
      showError("Alchemy has no kingdoms on its own due to its limited card pool. Please add another expansion.");
      return;
    }

    currentFilteredKingdoms = dataset.filter(k => {
      if (!Array.isArray(k.expansions)) return false;
      if (k.expansions.length !== selectedKeys.length) return false;
      return selectedKeys.every(key => k.expansions.includes(key));
    });

    if (!currentFilteredKingdoms || currentFilteredKingdoms.length === 0) {
      showError("No sets found for this combination. They might not be implemented yet.");
      return;
    }
  }

  if (setCategory === "dailies") {
    currentFilteredKingdoms.sort((a, b) => {
      if (a.date && b.date) {
        return a.date.localeCompare(b.date);
      }
      const dateA = a.date ? new Date(a.date) : new Date(a.name.replace(" Daily", ""));
      const dateB = b.date ? new Date(b.date) : new Date(b.name.replace(" Daily", ""));
      if (!isNaN(dateA) && !isNaN(dateB)) {
        return dateA - dateB;
      }
      return a.name.localeCompare(b.name);
    });
  } else {
    currentFilteredKingdoms.sort((a, b) => a.name.localeCompare(b.name));
  }
  currentPage = page;
  renderCurrentPage();
}

/**
 * Helper function to extract expansion name from cardImages image path
 * e.g., "images/plunder/plunder_abundance.jpg" -> "plunder"
 */
function getCardExpansion(cardName) {
  const lookupKey = cardName === "Harem / Farm" ? "Harem" : cardName;
  const imgSrc = cardImages[lookupKey] || cardImages[cardName] || "";
  if (!imgSrc) return "unknown";
  
  const parts = imgSrc.split("/");
  return parts.length > 1 ? parts[1] : "unknown";
}

/**
 * Strips trailing digits and suffixes so that edition variants sort together.
 * e.g. "intrigue2add" → "intrigue", "baseset2" → "baseset"
 */
function normalizeExpansionForSort(exp) {
  return exp.replace(/\d.*$/, "");
}

function renderCurrentPage() {
  if (!kingdomContainerElement) return;
  kingdomContainerElement.innerHTML = "";

  const total = currentFilteredKingdoms.length;
  const totalPages = Math.ceil(total / PAGE_SIZE) || 1;
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = Math.min(start + PAGE_SIZE, total);
  const pageKingdoms = currentFilteredKingdoms.slice(start, end);

  // Check if filtered or browsing all sets
  const isFiltered = expansionKeys.some(key => {
    const cb = document.getElementById(key);
    return cb && cb.checked;
  });

  if (resultsSummaryElement) {
    const countText = document.getElementById("resultsCountText");
    if (countText) {
      if (isCardSearchActive) {
        const catLabel = searchCategoryFilter === "all" ? "all categories" :
          (searchCategoryFilter === "extras" ? "Extra Sets" :
          (searchCategoryFilter === "dailies" ? "Daily Sets" : "Official Sets"));
        if (total === 0) {
          countText.textContent = `No sets found containing "${activeSearchCard}" in ${catLabel}`;
        } else {
          countText.textContent = `Found ${total} set${total === 1 ? '' : 's'} containing "${activeSearchCard}" in ${catLabel}${totalPages > 1 ? ` • Showing sets ${start + 1}–${end} (Page ${currentPage} of ${totalPages})` : ''}`;
        }
      } else if (!isFiltered) {
        countText.textContent = `All Sets (${total} total) • Showing sets ${start + 1}–${end} (Page ${currentPage} of ${totalPages})`;
      } else {
        countText.textContent = `Found ${total} recommended set${total === 1 ? '' : 's'}${totalPages > 1 ? ` • Showing ${start + 1}–${end} (Page ${currentPage} of ${totalPages})` : ''}`;
      }
    }
    resultsSummaryElement.classList.remove("hidden");
  }

  if (total === 0) {
    const emptyMsg = document.createElement("div");
    emptyMsg.className = "p-8 text-center bg-white dark:bg-[#131b2e] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm";
    emptyMsg.innerHTML = `
      <div class="inline-flex p-3 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-3">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <h4 class="text-lg font-bold text-slate-900 dark:text-white">No Matching Sets Found</h4>
      <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
        ${isCardSearchActive
          ? `No sets containing "${escapeHtml(activeSearchCard)}" found in the selected category.`
          : 'No sets match your current expansion combination.'}
      </p>
      ${isCardSearchActive ? `
        <button onclick="clearCardSearch()" class="mt-4 px-4 py-2 rounded-xl text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-slate-950 transition-all">
          Clear Search & Return
        </button>
      ` : ''}
    `;
    kingdomContainerElement.appendChild(emptyMsg);
  } else {
    pageKingdoms.forEach(kingdom => {
      const container = createKingdomContainer(kingdom);
      kingdomContainerElement.appendChild(container);
    });
  }

  renderPaginationControls(totalPages, total, start, end);
}

function renderPaginationControls(totalPages, total, start, end) {
  if (!paginationContainer) return;
  if (totalPages <= 1) {
    paginationContainer.innerHTML = "";
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-[#131b2e] border border-slate-200 dark:border-slate-800 shadow-sm";

  // Left: Page info
  const info = document.createElement("div");
  info.className = "text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium";
  info.textContent = `Showing sets ${start + 1}–${end} of ${total}`;
  wrapper.appendChild(info);

  // Right: Navigation buttons
  const nav = document.createElement("div");
  nav.className = "flex items-center gap-1.5 flex-wrap justify-center";

  // Prev Button
  const prevBtn = document.createElement("button");
  prevBtn.className = "px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all " +
    (currentPage > 1
      ? "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 active:scale-95"
      : "opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800/50 text-slate-400 border border-slate-200 dark:border-slate-800");
  prevBtn.innerHTML = "&larr; Prev";
  prevBtn.disabled = currentPage <= 1;
  prevBtn.onclick = () => goToPage(currentPage - 1);
  nav.appendChild(prevBtn);

  // Page Numbers
  const pages = getPaginationPages(currentPage, totalPages);
  pages.forEach(p => {
    if (p === "...") {
      const ellipsis = document.createElement("span");
      ellipsis.className = "px-2 py-1 text-xs text-slate-400 select-none";
      ellipsis.textContent = "...";
      nav.appendChild(ellipsis);
    } else {
      const pageBtn = document.createElement("button");
      const isActive = p === currentPage;
      pageBtn.className = "min-w-[2rem] px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all " +
        (isActive
          ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm shadow-amber-500/30"
          : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 active:scale-95");
      pageBtn.textContent = p;
      pageBtn.onclick = () => goToPage(p);
      nav.appendChild(pageBtn);
    }
  });

  // Next Button
  const nextBtn = document.createElement("button");
  nextBtn.className = "px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all " +
    (currentPage < totalPages
      ? "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 active:scale-95"
      : "opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800/50 text-slate-400 border border-slate-200 dark:border-slate-800");
  nextBtn.innerHTML = "Next &rarr;";
  nextBtn.disabled = currentPage >= totalPages;
  nextBtn.onclick = () => goToPage(currentPage + 1);
  nav.appendChild(nextBtn);

  wrapper.appendChild(nav);
  paginationContainer.innerHTML = "";
  paginationContainer.appendChild(wrapper);
}

function getPaginationPages(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, "...", total];
  if (current >= total - 3) return [1, "...", total - 4, total - 3, total - 2, total - 1, total];
  return [1, "...", current - 1, current, current + 1, "...", total];
}

function goToPage(p) {
  const totalPages = Math.ceil(currentFilteredKingdoms.length / PAGE_SIZE) || 1;
  if (p < 1 || p > totalPages) return;
  currentPage = p;
  renderCurrentPage();
  if (resultsSummaryElement) {
    resultsSummaryElement.scrollIntoView({ block: "start", behavior: "smooth" });
  }
}

function showError(msg) {
  if (!errorsElement) return;
  errorsElement.innerHTML = `
    <div class="flex items-center gap-2 p-4 my-3 text-red-800 bg-red-100 rounded-lg dark:bg-red-900/40 dark:text-red-300 border border-red-300 dark:border-red-800">
      <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span class="font-medium">${msg}</span>
    </div>
  `;
}

// ==========================================
// Kingdom Container Creation
// ==========================================
function createKingdomContainer(kingdom) {
  const container = document.createElement("div");
  container.className = "kingdom-card p-5 md:p-6 mb-8";

  // Header row: Name
  const header = document.createElement("div");
  header.className = "flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800";

  const titleGroup = document.createElement("div");
  titleGroup.className = "flex items-center gap-3";

  // Title
  const titleText = document.createElement("h3");
  titleText.className = "kingdom-title-text text-xl md:text-2xl font-bold text-slate-900 dark:text-white";
  titleText.textContent = kingdom.name;
  titleGroup.appendChild(titleText);

  // Category Badge (shown during search or if kingdom has category)
  if (kingdom.category) {
    let catBadgeClass = "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30";
    let catLabel = "Extra Set";
    if (kingdom.category === "dailies") {
      catBadgeClass = "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30";
      catLabel = "Daily Set";
    } else if (kingdom.category === "official") {
      catBadgeClass = "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30";
      catLabel = "Official Set";
    }
    const catBadge = document.createElement("span");
    catBadge.className = `px-2.5 py-0.5 rounded-full text-xs font-bold border ${catBadgeClass}`;
    catBadge.textContent = catLabel;
    titleGroup.appendChild(catBadge);
  }

  header.appendChild(titleGroup);
  container.appendChild(header);

  // 10 Kingdom Cards Grid
  const cardGrid = document.createElement("div");
  cardGrid.className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 my-5";

  // --- SORT CARDS BY EXPANSION, THEN ALPHABETICALLY ---
  const sortedCards = [...kingdom.cards].sort((a, b) => {
    const normA = normalizeExpansionForSort(getCardExpansion(a));
    const normB = normalizeExpansionForSort(getCardExpansion(b));

    // Primary sort: normalized expansion (treats intrigue/intrigue2/intrigue2add as one group)
    if (normA !== normB) {
      return normA.localeCompare(normB);
    }
    // Secondary sort: alphabetical card name within the expansion group
    return a.localeCompare(b);
  });

  sortedCards.forEach(cardName => {
    const tile = createCardTile(cardName, false);
    cardGrid.appendChild(tile);
  });
  container.appendChild(cardGrid);

  // Landscapes Section (Events, Projects, Ways, Landmarks, Traits)
  if (kingdom.landscapes && kingdom.landscapes.length > 0) {
    const landscapeSection = document.createElement("div");
    landscapeSection.className = "mt-4 pt-4 border-t border-slate-200 dark:border-slate-800";

    const landscapeHeader = document.createElement("div");
    landscapeHeader.className = "flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400";
    landscapeHeader.innerHTML = `
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
      <span>Landscapes & Modifiers</span>
    `;
    landscapeSection.appendChild(landscapeHeader);

    const landscapeGrid = document.createElement("div");
    landscapeGrid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5";

    kingdom.landscapes.forEach(landscapeName => {
      // If landscape string contains comma (e.g. "Harsh Winter, Amass")
      if (landscapeName.includes(",") && !cardImages[landscapeName]) {
        landscapeName.split(",").forEach(sub => {
          const tile = createCardTile(sub.trim(), true);
          landscapeGrid.appendChild(tile);
        });
      } else {
        const tile = createCardTile(landscapeName, true);
        landscapeGrid.appendChild(tile);
      }
    });

    landscapeSection.appendChild(landscapeGrid);
    container.appendChild(landscapeSection);
  }

  // Extras & Tags Row
  const extrasRow = document.createElement("div");
  extrasRow.className = "flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60";

  // Platinum / Colony tag
  if (kingdom.colony) {
    extrasRow.appendChild(createTag("Platinum & Colony", "bg-yellow-500/15 text-yellow-700 dark:text-yellow-300 border-yellow-500/30"));
  }
  // Shelters tag
  if (kingdom.shelters) {
    extrasRow.appendChild(createTag("Shelters", "bg-stone-500/15 text-stone-700 dark:text-stone-300 border-stone-500/30"));
  }
  // Extras
  if (kingdom.extras && kingdom.extras.length > 0) {
    kingdom.extras.forEach(extra => {
      extrasRow.appendChild(createTag(extra, "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30"));
    });
  }
  // Specific targets
  if (kingdom.bane) extrasRow.appendChild(createTag(`Bane: ${kingdom.bane}`, "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30"));
  if (kingdom.obelisk) extrasRow.appendChild(createTag(`Obelisk: ${kingdom.obelisk}`, "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30"));
  if (kingdom.mouse) extrasRow.appendChild(createTag(`Way of the Mouse: ${kingdom.mouse}`, "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30"));
  if (kingdom.ferryman) extrasRow.appendChild(createTag(`Ferryman: ${kingdom.ferryman}`, "bg-teal-500/15 text-teal-700 dark:text-teal-300 border-teal-500/30"));
  if (kingdom.riverboat) extrasRow.appendChild(createTag(`Riverboat: ${kingdom.riverboat}`, "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30"));

  if (extrasRow.children.length > 0) {
    container.appendChild(extrasRow);
  }

  // Setup Notes
  const notes = buildNotesString(kingdom);
  if (notes) {
    const notesBox = document.createElement("div");
    notesBox.className = "mt-3 p-3 text-xs md:text-sm bg-slate-50 dark:bg-slate-900/60 rounded-lg text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800";
    notesBox.innerHTML = `<strong>Setup Notes: </strong>${notes}`;
    container.appendChild(notesBox);
  }

  return container;
}

// Create a visual card or landscape tile
function createCardTile(cardName, isLandscape) {
  const tile = document.createElement("div");
  tile.className = isLandscape ? "landscape-tile" : "card-tile";

  // Highlight tile if it matches the searched card
  if (isCardSearchActive && activeSearchCard) {
    const normSearch = activeSearchCard.trim().toLowerCase();
    const normName = cardName.trim().toLowerCase();
    let matches = (normName === normSearch);
    if (!matches && cardName.includes("/")) {
      const parts = cardName.split("/").map(p => p.trim().toLowerCase());
      if (parts.includes(normSearch)) matches = true;
    }
    if (!matches && normName.includes(normSearch)) {
      matches = true;
    }
    if (matches) {
      tile.classList.add("search-highlighted");
      tile.setAttribute("title", `Matched search: ${cardName}`);
    }
  }

  // Check display name
  const displayName = cardName === "Harem" ? "Harem / Farm" : cardName;
  const lookupKey = cardName === "Harem / Farm" ? "Harem" : cardName;
  const imgSrc = cardImages[lookupKey] || cardImages[cardName] || "";

  if (imgSrc) {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = displayName;
    img.loading = "lazy";
    tile.appendChild(img);

    // Hover zoom on desktop
    tile.addEventListener("mouseenter", (e) => showHoverPreview(imgSrc, e));
    tile.addEventListener("mousemove", (e) => moveHoverPreview(e));
    tile.addEventListener("mouseleave", hideHoverPreview);
  } else {
    // Fallback if image path not found
    tile.classList.add("flex", "items-center", "justify-center", "p-2", "text-center");
    tile.innerHTML = `<span class="text-xs font-semibold text-slate-700 dark:text-slate-300">${displayName}</span>`;
  }

  return tile;
}

function createTag(text, colorClasses) {
  const tag = document.createElement("span");
  tag.className = `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${colorClasses}`;
  tag.textContent = text;
  return tag;
}

// ==========================================
// Hover Preview
// ==========================================
function showHoverPreview(imgSrc, event) {
  // Only activate on devices with fine pointer (mouse)
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const popup = document.getElementById("hoverPreviewPopup");
  const img = document.getElementById("hoverPreviewImg");
  if (!popup || !img) return;

  img.src = imgSrc;
  popup.classList.add("active");
  moveHoverPreview(event);
}

function moveHoverPreview(event) {
  const popup = document.getElementById("hoverPreviewPopup");
  if (!popup || !popup.classList.contains("active")) return;

  const offset = 20;
  let left = event.clientX;
  let top = event.clientY - offset;

  // Prevent overflowing window boundaries
  const rect = popup.getBoundingClientRect();
  const width = rect.width || 280;
  const height = rect.height || 400;

  if (top - height < 10) {
    // If overflowing top, show below cursor
    top = event.clientY + height + offset;
  }
  if (left - width / 2 < 10) {
    left = width / 2 + 10;
  } else if (left + width / 2 > window.innerWidth - 10) {
    left = window.innerWidth - width / 2 - 10;
  }

  popup.style.left = `${left}px`;
  popup.style.top = `${top}px`;
}

function hideHoverPreview() {
  const popup = document.getElementById("hoverPreviewPopup");
  if (popup) popup.classList.remove("active");
}



function buildNotesString(kingdom) {
  let notesString = "";
  if (kingdom.obelisk) notesString += `<strong>${kingdom.obelisk}</strong> is the Obelisk target. `;
  if (kingdom.bane) notesString += `<strong>${kingdom.bane}</strong> is the Bane. `;
  if (kingdom.ferryman) notesString += `<strong>${kingdom.ferryman}</strong> is the Ferryman target. `;
  if (kingdom.riverboat) notesString += `<strong>${kingdom.riverboat}</strong> is the Riverboat target. `;
  if (kingdom.druid) {
    notesString += "Druid boons are " + kingdom.druid.join(", ") + ". ";
  }
  if (kingdom.mouse) notesString += `Way of the Mouse uses <strong>${kingdom.mouse}</strong>. `;
  if (kingdom.traits) {
    for (let i = 0; i < kingdom.traits.length; i += 2) {
      notesString += `<strong>${kingdom.traits[i + 1]}</strong> is <em>${kingdom.traits[i]}</em>. `;
    }
  }
  if (kingdom.notes) notesString += kingdom.notes + " ";
  return notesString.trim();
}

// ==========================================
// Card Search & Autocomplete Controller
// ==========================================

function getExpansionKeyFromFolder(folder) {
  if (!folder) return "unknown";
  if (folder.startsWith("baseset")) return "base";
  if (folder.startsWith("intrigue")) return "intrigue";
  if (folder.startsWith("seaside")) return "seaside";
  if (folder === "cornucopia" || folder === "guilds" || folder.startsWith("guildscornucopia")) return "cornguilds";
  if (folder.startsWith("prosperity")) return "prosperity";
  if (folder.startsWith("hinterlands")) return "hinterlands";
  return folder;
}

function getCardExpansionKey(cardName) {
  const folder = getCardExpansion(cardName);
  return getExpansionKeyFromFolder(folder);
}

function getCardImage(cardName) {
  if (typeof cardImages === "undefined") return "";
  if (cardImages[cardName]) return cardImages[cardName];
  if (cardName === "Harem / Farm" && cardImages["Harem"]) return cardImages["Harem"];
  if (cardName === "Harem" && cardImages["Harem"]) return cardImages["Harem"];
  if (cardName === "Farm" && cardImages["Harem"]) return cardImages["Harem"];

  for (const key in cardImages) {
    if (key.includes("/")) {
      const parts = key.split("/").map(p => p.trim().toLowerCase());
      if (parts.includes(cardName.toLowerCase())) {
        return cardImages[key];
      }
    }
  }
  return "";
}

function isKingdomEnabled(k) {
  if (!Array.isArray(k.expansions)) return true;
  return k.expansions.every(key => enabledExpansions.has(key));
}

function buildCardSearchIndex() {
  const cardMap = new Map();

  const allDatasets = [
    { cat: "extras", list: typeof kingdoms !== "undefined" ? kingdoms : [] },
    { cat: "dailies", list: typeof dailyKingdoms !== "undefined" ? dailyKingdoms : [] },
    { cat: "official", list: typeof officialKingdoms !== "undefined" ? officialKingdoms : [] }
  ];

  allDatasets.forEach(({ cat, list }) => {
    list.forEach(k => {
      const enabled = isKingdomEnabled(k);
      const cardsInSet = new Set();

      if (Array.isArray(k.cards)) {
        k.cards.forEach(c => {
          cardsInSet.add(c);
          if (c.includes("/")) {
            c.split("/").forEach(sub => cardsInSet.add(sub.trim()));
          }
        });
      }

      if (Array.isArray(k.landscapes)) {
        k.landscapes.forEach(l => {
          if (l.includes(",") && (typeof cardImages === "undefined" || !cardImages[l])) {
            l.split(",").forEach(sub => cardsInSet.add(sub.trim()));
          } else {
            cardsInSet.add(l.trim());
          }
        });
      }

      [k.bane, k.obelisk, k.mouse, k.ferryman, k.riverboat].forEach(target => {
        if (typeof target === "string" && target.trim()) {
          cardsInSet.add(target.trim());
        }
      });

      if (Array.isArray(k.druid)) {
        k.druid.forEach(boon => cardsInSet.add(boon.trim()));
      }

      cardsInSet.forEach(cardName => {
        if (!cardName) return;
        if (!cardMap.has(cardName)) {
          const expKey = getCardExpansionKey(cardName);
          const meta = expansionMeta[expKey] || { name: expKey !== "unknown" ? expKey : "Dominion", colorClass: "exp-badge-base" };
          cardMap.set(cardName, {
            name: cardName,
            expansion: expKey,
            expansionName: meta.name,
            colorClass: meta.colorClass,
            image: getCardImage(cardName),
            enabledCount: 0,
            totalCount: 0,
            counts: { extras: 0, dailies: 0, official: 0 }
          });
        }

        const entry = cardMap.get(cardName);
        entry.totalCount++;
        if (enabled) {
          entry.enabledCount++;
          entry.counts[cat]++;
        }
      });
    });
  });

  searchableCards = Array.from(cardMap.values());
  searchableCards.sort((a, b) => {
    if (a.enabledCount > 0 && b.enabledCount === 0) return -1;
    if (a.enabledCount === 0 && b.enabledCount > 0) return 1;
    return a.name.localeCompare(b.name);
  });
}

function kingdomContainsCard(kingdom, targetCardName) {
  const normTarget = targetCardName.trim().toLowerCase();
  if (!normTarget) return false;

  // 1. Check cards list
  if (Array.isArray(kingdom.cards)) {
    for (const card of kingdom.cards) {
      const normCard = card.trim().toLowerCase();
      if (normCard === normTarget) return true;
      if (card.includes("/")) {
        const parts = card.split("/").map(p => p.trim().toLowerCase());
        if (parts.includes(normTarget)) return true;
      }
    }
  }

  // 2. Check landscapes
  if (Array.isArray(kingdom.landscapes)) {
    for (const land of kingdom.landscapes) {
      const normLand = land.trim().toLowerCase();
      if (normLand === normTarget) return true;
      if (land.includes(",")) {
        const parts = land.split(",").map(p => p.trim().toLowerCase());
        if (parts.includes(normTarget)) return true;
      }
    }
  }

  // 3. Check targets
  const targets = [kingdom.bane, kingdom.obelisk, kingdom.mouse, kingdom.ferryman, kingdom.riverboat];
  for (const t of targets) {
    if (typeof t === "string" && t.trim().toLowerCase() === normTarget) {
      return true;
    }
  }

  // 4. Check boons
  if (Array.isArray(kingdom.druid)) {
    for (const boon of kingdom.druid) {
      if (boon.trim().toLowerCase() === normTarget) return true;
    }
  }

  return false;
}

function kingdomContainsCardQuery(kingdom, query) {
  if (kingdomContainsCard(kingdom, query)) return true;

  const normQuery = query.trim().toLowerCase();
  if (normQuery.length < 2) return false;

  if (Array.isArray(kingdom.cards)) {
    for (const card of kingdom.cards) {
      if (card.toLowerCase().includes(normQuery)) return true;
    }
  }
  if (Array.isArray(kingdom.landscapes)) {
    for (const land of kingdom.landscapes) {
      if (land.toLowerCase().includes(normQuery)) return true;
    }
  }
  const targets = [kingdom.bane, kingdom.obelisk, kingdom.mouse, kingdom.ferryman, kingdom.riverboat];
  for (const t of targets) {
    if (typeof t === "string" && t.toLowerCase().includes(normQuery)) return true;
  }
  return false;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
}

function highlightMatch(text, query) {
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1) return escapeHtml(text);
  const before = text.substring(0, index);
  const match = text.substring(index, index + query.length);
  const after = text.substring(index + query.length);
  return `${escapeHtml(before)}<span class="highlighted-match">${escapeHtml(match)}</span>${escapeHtml(after)}`;
}

function getCardSuggestions(query) {
  const normQuery = query.trim().toLowerCase();
  if (!normQuery) return [];

  const matched = [];

  for (const card of searchableCards) {
    const effectiveCount = enabledExpansions.size < expansionKeys.length ? card.enabledCount : card.totalCount;
    // Only suggest cards that have sets in enabled expansions if any enabled cards exist
    if (effectiveCount === 0 && searchableCards.some(c => c.enabledCount > 0)) {
      continue;
    }

    const cardLower = card.name.toLowerCase();
    let score = -1;

    if (cardLower === normQuery) {
      score = 0;
    } else if (cardLower.startsWith(normQuery)) {
      score = 1;
    } else {
      const words = cardLower.split(/[\s/]+/);
      if (words.some(w => w.startsWith(normQuery))) {
        score = 2;
      } else if (cardLower.includes(normQuery)) {
        score = 3;
      }
    }

    if (score >= 0) {
      matched.push({ ...card, score, effectiveCount });
    }
  }

  matched.sort((a, b) => {
    if (a.score !== b.score) return a.score - b.score;
    if (b.effectiveCount !== a.effectiveCount) return b.effectiveCount - a.effectiveCount;
    return a.name.localeCompare(b.name);
  });

  return matched.slice(0, 8);
}

function renderAutocompleteDropdown(suggestions, query) {
  if (!cardAutocompleteDropdown) return;
  cardAutocompleteDropdown.innerHTML = "";

  if (suggestions.length === 0) {
    const empty = document.createElement("div");
    empty.className = "px-4 py-3 text-xs text-slate-500 dark:text-slate-400 text-center";
    empty.textContent = `No cards found matching "${query}"`;
    cardAutocompleteDropdown.appendChild(empty);
    cardAutocompleteDropdown.classList.remove("hidden");
    if (cardSearchInput) cardSearchInput.setAttribute("aria-expanded", "true");
    return;
  }

  suggestions.forEach((s, idx) => {
    const item = document.createElement("div");
    item.className = "autocomplete-item flex items-center justify-between gap-3 px-3.5 py-2 cursor-pointer rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors";
    item.setAttribute("role", "option");
    item.setAttribute("data-index", idx);

    item.innerHTML = `
      <div class="flex items-center gap-2.5 min-w-0">
        ${s.image ? `
          <img src="${s.image}" alt="" class="w-7 h-9 rounded object-cover shadow-sm bg-slate-200 dark:bg-slate-700 flex-shrink-0" loading="lazy" />
        ` : `
          <div class="w-7 h-9 rounded bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
            🃏
          </div>
        `}
        <div class="min-w-0">
          <div class="text-sm font-semibold text-slate-900 dark:text-white truncate">
            ${highlightMatch(s.name, query)}
          </div>
          <div class="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            <span class="w-2 h-2 rounded-full ${s.colorClass || 'bg-slate-400'} flex-shrink-0"></span>
            <span class="truncate">${escapeHtml(s.expansionName)}</span>
          </div>
        </div>
      </div>
      <div class="flex-shrink-0">
        <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
          ${s.effectiveCount} ${s.effectiveCount === 1 ? 'set' : 'sets'}
        </span>
      </div>
    `;

    item.addEventListener("mousedown", (e) => {
      e.preventDefault();
      selectCardSuggestion(s.name);
    });

    item.addEventListener("mouseenter", () => {
      activeSuggestionIndex = idx;
      updateActiveSuggestion();
    });

    cardAutocompleteDropdown.appendChild(item);
  });

  cardAutocompleteDropdown.classList.remove("hidden");
  if (cardSearchInput) cardSearchInput.setAttribute("aria-expanded", "true");
}

function updateActiveSuggestion() {
  if (!cardAutocompleteDropdown) return;
  const items = cardAutocompleteDropdown.querySelectorAll(".autocomplete-item");
  items.forEach((item, idx) => {
    if (idx === activeSuggestionIndex) {
      item.classList.add("active-item");
      item.scrollIntoView({ block: "nearest" });
    } else {
      item.classList.remove("active-item");
    }
  });
}

function selectCardSuggestion(cardName) {
  if (cardSearchInput) {
    cardSearchInput.value = cardName;
  }
  if (cardSearchClearBtn) {
    cardSearchClearBtn.classList.remove("hidden");
  }
  if (cardAutocompleteDropdown) {
    cardAutocompleteDropdown.classList.add("hidden");
    cardAutocompleteDropdown.innerHTML = "";
    if (cardSearchInput) cardSearchInput.setAttribute("aria-expanded", "false");
  }
  executeCardSearch(cardName);
}

function executeCardSearch(cardName) {
  if (!cardName || !cardName.trim()) {
    clearCardSearch();
    return;
  }

  const query = cardName.trim();
  isCardSearchActive = true;
  activeSearchCard = query;

  const exactMatch = searchableCards.find(c => c.name.toLowerCase() === query.toLowerCase());
  const searchTarget = exactMatch ? exactMatch.name : query;

  if (locAbout) locAbout.classList.remove("active");
  if (locKingdoms) locKingdoms.classList.add("active");
  [tabExtras, tabOfficial, tabDailies, tabAbout].forEach(t => t && t.classList.remove("active"));

  if (errorsElement) errorsElement.textContent = "";
  if (expansionSelectorCard) expansionSelectorCard.classList.add("hidden");
  if (cardSearchResultsHeader) cardSearchResultsHeader.classList.remove("hidden");

  if (cardSearchClearBtn) cardSearchClearBtn.classList.remove("hidden");
  if (cardSearchInput) cardSearchInput.value = searchTarget;

  const allExtras = typeof kingdoms !== "undefined" ? kingdoms : [];
  const allDailies = typeof dailyKingdoms !== "undefined" ? dailyKingdoms : [];
  const allOfficial = typeof officialKingdoms !== "undefined" ? officialKingdoms : [];

  const filterFn = (k) => {
    if (!isKingdomEnabled(k)) return false;
    return exactMatch
      ? kingdomContainsCard(k, exactMatch.name)
      : kingdomContainsCardQuery(k, query);
  };

  searchCategoryResults.extras = allExtras.filter(filterFn).map(k => ({ ...k, category: "extras" }));
  searchCategoryResults.dailies = allDailies.filter(filterFn).map(k => ({ ...k, category: "dailies" }));
  searchCategoryResults.official = allOfficial.filter(filterFn).map(k => ({ ...k, category: "official" }));

  searchCategoryResults.dailies.sort((a, b) => {
    if (a.date && b.date) return a.date.localeCompare(b.date);
    return a.name.localeCompare(b.name);
  });
  searchCategoryResults.extras.sort((a, b) => a.name.localeCompare(b.name));
  searchCategoryResults.official.sort((a, b) => a.name.localeCompare(b.name));

  searchAllResults = [
    ...searchCategoryResults.extras,
    ...searchCategoryResults.dailies,
    ...searchCategoryResults.official
  ];

  if (searchResultsTitle) {
    searchResultsTitle.textContent = `Sets with "${searchTarget}"`;
  }
  if (searchResultsSubtitle) {
    const total = searchAllResults.length;
    if (total > 0) {
      searchResultsSubtitle.textContent = `Found ${total} recommended set${total === 1 ? '' : 's'} across Extra Sets, Dailies, and Official Sets.`;
    } else {
      const disabledMatches = [
        ...allExtras.filter(k => kingdomContainsCardQuery(k, query)),
        ...allDailies.filter(k => kingdomContainsCardQuery(k, query)),
        ...allOfficial.filter(k => kingdomContainsCardQuery(k, query))
      ];
      if (disabledMatches.length > 0) {
        searchResultsSubtitle.textContent = `0 sets found in your enabled expansions. (Note: Found in ${disabledMatches.length} set(s) requiring expansions currently disabled in your configuration).`;
      } else {
        searchResultsSubtitle.textContent = `No sets found containing "${searchTarget}" across all categories.`;
      }
    }
  }

  renderSearchCategoryFilters();
  filterSearchResultsCategory("all");
}

function renderSearchCategoryFilters() {
  if (!searchCategoryFilters) return;
  searchCategoryFilters.innerHTML = "";

  const totalCount = searchAllResults.length;
  const extrasCount = searchCategoryResults.extras.length;
  const dailiesCount = searchCategoryResults.dailies.length;
  const officialCount = searchCategoryResults.official.length;

  const categories = [
    { id: "all", label: "All Categories", count: totalCount },
    { id: "extras", label: "Extra Sets", count: extrasCount },
    { id: "dailies", label: "Dailies", count: dailiesCount },
    { id: "official", label: "Official Sets", count: officialCount }
  ];

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `search-cat-pill ${searchCategoryFilter === cat.id ? 'active' : ''}`;
    btn.innerHTML = `<span>${cat.label}</span> <span class="text-xs opacity-75">(${cat.count})</span>`;
    btn.onclick = () => filterSearchResultsCategory(cat.id);
    searchCategoryFilters.appendChild(btn);
  });
}

function filterSearchResultsCategory(cat) {
  searchCategoryFilter = cat;

  if (searchCategoryFilters) {
    const buttons = searchCategoryFilters.querySelectorAll("button");
    const catIds = ["all", "extras", "dailies", "official"];
    buttons.forEach((btn, idx) => {
      if (catIds[idx] === cat) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  if (cat === "all") {
    currentFilteredKingdoms = searchAllResults;
  } else if (cat === "extras") {
    currentFilteredKingdoms = searchCategoryResults.extras;
  } else if (cat === "dailies") {
    currentFilteredKingdoms = searchCategoryResults.dailies;
  } else if (cat === "official") {
    currentFilteredKingdoms = searchCategoryResults.official;
  }

  currentPage = 1;
  renderCurrentPage();
}

function clearCardSearch(shouldRerender = true) {
  isCardSearchActive = false;
  activeSearchCard = "";
  searchCategoryFilter = "all";
  searchAllResults = [];
  searchCategoryResults = { extras: [], dailies: [], official: [] };

  if (cardSearchInput) cardSearchInput.value = "";
  if (cardSearchClearBtn) cardSearchClearBtn.classList.add("hidden");
  if (cardAutocompleteDropdown) {
    cardAutocompleteDropdown.classList.add("hidden");
    cardAutocompleteDropdown.innerHTML = "";
    if (cardSearchInput) cardSearchInput.setAttribute("aria-expanded", "false");
  }
  if (cardSearchResultsHeader) cardSearchResultsHeader.classList.add("hidden");
  if (expansionSelectorCard) expansionSelectorCard.classList.remove("hidden");

  if (setCategory === "extras" && tabExtras) tabExtras.classList.add("active");
  if (setCategory === "dailies" && tabDailies) tabDailies.classList.add("active");
  if (setCategory === "official" && tabOfficial) tabOfficial.classList.add("active");

  if (shouldRerender) {
    getSets(1);
  }
}

function clearCardSearchInput() {
  if (cardSearchInput) {
    cardSearchInput.value = "";
    cardSearchInput.focus();
  }
  if (cardSearchClearBtn) cardSearchClearBtn.classList.add("hidden");
  if (cardAutocompleteDropdown) {
    cardAutocompleteDropdown.classList.add("hidden");
    cardAutocompleteDropdown.innerHTML = "";
    if (cardSearchInput) cardSearchInput.setAttribute("aria-expanded", "false");
  }
  if (isCardSearchActive) {
    clearCardSearch(true);
  }
}

function initCardSearch() {
  if (!cardSearchInput || !cardAutocompleteDropdown) return;

  cardSearchInput.addEventListener("input", (e) => {
    const val = e.target.value;
    if (cardSearchClearBtn) {
      if (val.length > 0) {
        cardSearchClearBtn.classList.remove("hidden");
      } else {
        cardSearchClearBtn.classList.add("hidden");
      }
    }

    if (!val.trim()) {
      cardAutocompleteDropdown.classList.add("hidden");
      cardAutocompleteDropdown.innerHTML = "";
      cardSearchInput.setAttribute("aria-expanded", "false");
      currentSuggestions = [];
      activeSuggestionIndex = -1;
      return;
    }

    currentSuggestions = getCardSuggestions(val);
    activeSuggestionIndex = -1;
    renderAutocompleteDropdown(currentSuggestions, val);
  });

  cardSearchInput.addEventListener("focus", () => {
    const val = cardSearchInput.value;
    if (val.trim()) {
      currentSuggestions = getCardSuggestions(val);
      activeSuggestionIndex = -1;
      renderAutocompleteDropdown(currentSuggestions, val);
    }
  });

  cardSearchInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cardAutocompleteDropdown.classList.contains("hidden")) {
        const val = cardSearchInput.value;
        if (val.trim()) {
          currentSuggestions = getCardSuggestions(val);
          renderAutocompleteDropdown(currentSuggestions, val);
        }
        return;
      }
      if (currentSuggestions.length > 0) {
        activeSuggestionIndex = (activeSuggestionIndex + 1) % currentSuggestions.length;
        updateActiveSuggestion();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (currentSuggestions.length > 0 && !cardAutocompleteDropdown.classList.contains("hidden")) {
        activeSuggestionIndex = (activeSuggestionIndex - 1 + currentSuggestions.length) % currentSuggestions.length;
        updateActiveSuggestion();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeSuggestionIndex >= 0 && activeSuggestionIndex < currentSuggestions.length) {
        selectCardSuggestion(currentSuggestions[activeSuggestionIndex].name);
      } else if (cardSearchInput.value.trim()) {
        cardAutocompleteDropdown.classList.add("hidden");
        cardSearchInput.setAttribute("aria-expanded", "false");
        executeCardSearch(cardSearchInput.value.trim());
      }
    } else if (e.key === "Escape") {
      cardAutocompleteDropdown.classList.add("hidden");
      cardSearchInput.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("click", (e) => {
    const wrapper = document.getElementById("cardSearchWrapper");
    if (wrapper && !wrapper.contains(e.target)) {
      cardAutocompleteDropdown.classList.add("hidden");
      cardSearchInput.setAttribute("aria-expanded", "false");
    }
  });
}

// ==========================================
// Initialization
// ==========================================
document.addEventListener("DOMContentLoaded", async () => {
  initTheme();

  // Load expansion config from expansions.json
  try {
    const response = await fetch("./expansions.json");
    if (response.ok) {
      const config = await response.json();
      enabledExpansions = new Set(
        expansionKeys.filter(key => config[key] !== false)
      );
    }
  } catch (e) {
    console.warn("Could not load expansions.json, defaulting to all expansions enabled.", e);
  }

  buildCardSearchIndex();
  initCardSearch();

  goToLocation("extras");
});
