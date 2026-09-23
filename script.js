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

// Expansion Definitions
const expansionKeys = [
  "base", "intrigue", "seaside", "alchemy", "prosperity", "hinterlands",
  "darkages", "cornguilds", "adventures", "empires", "nocturne",
  "renaissance", "menagerie", "allies", "plunder", "risingsun"
];

// Set of expansions enabled via expansions.json (populated at startup)
let enabledExpansions = new Set(expansionKeys);

// Pagination & State
const PAGE_SIZE = 10;
let currentPage = 1;
let currentFilteredKingdoms = [];
let setCategory = "extras";

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
      if (!isFiltered) {
        countText.textContent = `All Sets (${total} total) • Showing sets ${start + 1}–${end} (Page ${currentPage} of ${totalPages})`;
      } else {
        countText.textContent = `Found ${total} recommended set${total === 1 ? '' : 's'}${totalPages > 1 ? ` • Showing ${start + 1}–${end} (Page ${currentPage} of ${totalPages})` : ''}`;
      }
    }
    resultsSummaryElement.classList.remove("hidden");
  }

  pageKingdoms.forEach(kingdom => {
    const container = createKingdomContainer(kingdom);
    kingdomContainerElement.appendChild(container);
  });

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

  goToLocation("extras");
});
