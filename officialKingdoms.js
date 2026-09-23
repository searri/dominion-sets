/* Array of official kingdoms
-----
id: A number matching its position in the array.
name: The kingdom name
cards: An array of card names
colony: A boolean to include Colony and Platinum (optional)
shelters: A boolean to include Shelters (optional)
extras: An array of extra component names (optional)
landscapes: An array of landscape names (optional)
obelisk: The obelisk target, should already be listed in the cards list (optional)
bane: Which card is the bane, should already be listed in the cards list (optional)
ferryman: Which card is the ferryman target, should not be listed in the cards list (optional)
mouse: Which card is the Way of the Mouse target, should not be listed in the cards list (optional)
druid: An array of boons, 3 max (optional)
traits: An array containing a comma separated list with pairs of cards, a trait first then the card it applies to next, both should already be in the cards and landscapes lists (optional)
riverboat: Which card is the Riverboat target, should not be listed in the cards list (optional)
notes: Any extra notes (optional)
expansions: Array of expansion keys required, e.g. ["base", "intrigue"]
-----*/
var officialKingdoms = [
    {
        name: "First Game",
        cards: ["Cellar", "Moat", "Merchant", "Village", "Workshop", "Militia", "Remodel", "Smithy", "Market", "Mine"],
        expansions: ["base"]
    },
    {
        name: "Size Distortion",
        cards: ["Chapel", "Workshop", "Bureaucrat", "Gardens", "Throne Room", "Bandit", "Festival", "Sentry", "Witch", "Artisan"],
        expansions: ["base"]
    },
    {
        name: "Deck Top",
        cards: ["Harbinger", "Vassal", "Village", "Bureaucrat", "Moneylender", "Council Room", "Festival", "Laboratory", "Sentry", "Artisan"],
        expansions: ["base"]
    },
    {
        name: "Sleight of Hand",
        cards: ["Cellar", "Harbinger", "Gardens", "Militia", "Poacher", "Smithy", "Throne Room", "Council Room", "Festival", "Library"],
        expansions: ["base"]
    },
    {
        name: "Improvements",
        cards: ["Cellar", "Moat", "Merchant", "Moneylender", "Poacher", "Remodel", "Market", "Mine", "Witch", "Artisan"],
        expansions: ["base"]
    },
    {
        name: "Silver & Gold",
        cards: ["Chapel", "Harbinger", "Merchant", "Vassal", "Bureaucrat", "Moneylender", "Throne Room", "Bandit", "Laboratory", "Mine"],
        expansions: ["base"]
    },
    {
        name: "Underlings",
        cards: ["Cellar", "Vassal", "Festival", "Library", "Sentry", "Pawn", "Diplomat", "Courtier", "Minion", "Nobles"],
        expansions: ["base", "intrigue"]
    },
    {
        name: "Grand Scheme",
        cards: ["Workshop", "Militia", "Council Room", "Market", "Artisan", "Shanty Town", "Bridge", "Mill", "Mining Village", "Patrol"],
        expansions: ["base", "intrigue"]
    },
    {
        name: "Deconstruction",
        cards: ["Village", "Remodel", "Throne Room", "Bandit", "Mine", "Lurker", "Swindler", "Diplomat", "Replace", "Harem"],
        expansions: ["base", "intrigue"]
    },
    {
        name: "Reach for Tomorrow",
        cards: ["Cellar", "Vassal", "Village", "Council Room", "Artisan", "Lookout", "Monkey", "Cutpurse", "Treasure Map", "Sea Witch"],
        expansions: ["base", "seaside"]
    },
    {
        name: "Repetition",
        cards: ["Harbinger", "Workshop", "Militia", "Remodel", "Festival", "Sea Chart", "Caravan", "Outpost", "Pirate", "Treasury"],
        expansions: ["base", "seaside"]
    },
    {
        name: "Forbidden Arts",
        cards: ["Cellar", "Gardens", "Throne Room", "Bandit", "Council Room", "Laboratory", "University", "Familiar", "Apprentice", "Possession"],
        extras: ["Potion"],
        expansions: ["base", "alchemy"]
    },
    {
        name: "Potion Mixers",
        cards: ["Cellar", "Militia", "Poacher", "Smithy", "Festival", "Transmute", "Herbalist", "Apothecary", "Alchemist", "Golem"],
        extras: ["Potion"],
        expansions: ["base", "alchemy"]
    },
    {
        name: "Chemistry Lesson",
        cards: ["Moat", "Vassal", "Bureaucrat", "Remodel", "Market", "Witch", "University", "Alchemist", "Philosopher's Stone", "Golem"],
        extras: ["Potion"],
        expansions: ["base", "alchemy"]
    },
    {
        name: "Biggest Money",
        cards: ["Harbinger", "Moneylender", "Laboratory", "Mine", "Artisan", "Tiara", "Crystal Ball", "Mint", "Grand Market", "Bank"],
        colony: true,
        expansions: ["base", "prosperity"]
    },
    {
        name: "The King's Army",
        cards: ["Moat", "Merchant", "Village", "Bureaucrat", "Council Room", "Collection", "Rabble", "Vault", "Expand", "King's Court"],
        colony: true,
        expansions: ["base", "prosperity"]
    },
    {
        name: "Happy Trails",
        cards: ["Cellar", "Workshop", "Moneylender", "Throne Room", "Library", "Oasis", "Nomads", "Trail", "Berserker", "Highway"],
        expansions: ["base", "hinterlands"]
    },
    {
        name: "Adventures Abroad",
        cards: ["Vassal", "Remodel", "Festival", "Laboratory", "Sentry", "Crossroads", "Fool's Gold", "Guard Dog", "Souk", "Witch's Hut"],
        expansions: ["base", "hinterlands"]
    },
    {
        name: "High and Low",
        cards: ["Cellar", "Workshop", "Moneylender", "Throne Room", "Witch", "Poor House", "Hermit", "Wandering Minstrel", "Mystic", "Hunting Grounds"],
        shelters: true,
        extras: ["Madman"],
        expansions: ["base", "darkages"]
    },
    {
        name: "Chivalry and Revelry",
        cards: ["Gardens", "Remodel", "Festival", "Laboratory", "Library", "Squire", "Rats", "Scavenger", "Knights", "Altar"],
        shelters: true,
        expansions: ["base", "darkages"]
    },
    {
        name: "Bounty of the Hunt",
        cards: ["Cellar", "Militia", "Moneylender", "Smithy", "Festival", "Menagerie", "Ferryman", "Horn of Plenty", "Hunting Party", "Joust"],
        extras: ["Rewards"],
        ferryman: "Farrier",
        notes: "Farrier is not a legal choice for Ferryman, this is an error. Donald X suggests to play with it like this anyway.",
        expansions: ["base", "cornguilds"]
    },
    {
        name: "Gilding the Lily",
        cards: ["Merchant", "Vassal", "Remodel", "Library", "Market", "Sentry", "Candlestick Maker", "Plaza", "Remake", "Young Witch", "Footpad"],
        bane: "Vassal",
        expansions: ["base", "cornguilds"]
    },
    {
        name: "Level Up",
        cards: ["Merchant", "Workshop", "Militia", "Throne Room", "Market", "Dungeon", "Gear", "Guide", "Miser", "Lost City"],
        landscapes: ["Training"],
        expansions: ["base", "adventures"]
    },
    {
        name: "Son of Size Distortion",
        cards: ["Bureaucrat", "Gardens", "Moneylender", "Bandit", "Witch", "Amulet", "Duplicate", "Messenger", "Giant", "Treasure Trove"],
        landscapes: ["Bonfire", "Raid"],
        expansions: ["base", "adventures"]
    },
    {
        name: "Everything in Moderation",
        cards: ["Cellar", "Village", "Workshop", "Remodel", "Library", "Overlord", "Enchantress", "Temple", "Forum", "Legionary"],
        landscapes: ["Orchard", "Windfall"],
        expansions: ["base", "empires"]
    },
    {
        name: "Silver Bullets",
        cards: ["Bureaucrat", "Gardens", "Moneylender", "Laboratory", "Market", "Patrician / Emporium", "Catapult / Rocks", "Farmers' Market", "Charm", "Groundskeeper"],
        landscapes: ["Aqueduct", "Conquest"],
        expansions: ["base", "empires"]
    },
    {
        name: "Night Shift",
        cards: ["Gardens", "Poacher", "Smithy", "Bandit", "Mine", "Druid", "Ghost Town", "Night Watchman", "Exorcist", "Idol"],
        extras: ["Boons", "Will-O'-Wisp", "Imp", "Ghost"],
        druid: ["The Earth's Gift", "The Flame's Gift", "The Forest's Gift"],
        expansions: ["base", "nocturne"]
    },
    {
        name: "Idle Hands",
        cards: ["Cellar", "Harbinger", "Merchant", "Moneylender", "Market", "Bard", "Conclave", "Devil's Workshop", "Cursed Village", "Tragic Hero"],
        extras: ["Boons", "Hexes", "Will-O'-Wisp", "Imp"],
        expansions: ["base", "nocturne"]
    },
    {
        name: "It Takes a Villager",
        cards: ["Merchant", "Vassal", "Smithy", "Market", "Mine", "Acting Troupe", "Cargo Ship", "Recruiter", "Seer", "Treasurer"],
        extras: ["Key"],
        landscapes: ["Road Network"],
        expansions: ["base", "renaissance"]
    },
    {
        name: "Capture the Flag",
        cards: ["Cellar", "Harbinger", "Workshop", "Remodel", "Festival", "Lackeys", "Flag Bearer", "Scholar", "Swashbuckler", "Villain"],
        extras: ["Flag", "Treasure Chest"],
        landscapes: ["Barracks", "Pageant"],
        expansions: ["base", "renaissance"]
    },
    {
        name: "Pony Express",
        cards: ["Cellar", "Village", "Market", "Mine", "Artisan", "Supplies", "Stockpile", "Barge", "Paddock", "Destrier"],
        extras: ["Horse"],
        landscapes: ["Stampede", "Way of the Seal"],
        expansions: ["base", "menagerie"]
    },
    {
        name: "Garden of Cats",
        cards: ["Moat", "Harbinger", "Merchant", "Gardens", "Bandit", "Black Cat", "Scrap", "Snowy Village", "Displace", "Sanctuary"],
        extras: ["Horse"],
        landscapes: ["Toil", "Way of the Mole"],
        expansions: ["base", "menagerie"]
    },
    {
        name: "Allies for Beginners",
        cards: ["Harbinger", "Vassal", "Gardens", "Remodel", "Market", "Sycophant", "Odysseys", "Broker", "Capital City", "Galleria"],
        landscapes: ["Crafter's Guild"],
        expansions: ["base", "allies"]
    },
    {
        name: "Warring Shopkeepers",
        cards: ["Moat", "Merchant", "Moneylender", "Bandit", "Laboratory", "Clashes", "Royal Galley", "Town", "Emissary", "Guildmaster"],
        landscapes: ["League of Shopkeepers"],
        expansions: ["base", "allies"]
    },
    {
        name: "Victory Dance",
        cards: ["Masquerade", "Baron", "Ironworks", "Mill", "Courtier", "Duke", "Patrol", "Replace", "Harem", "Nobles"],
        expansions: ["intrigue"]
    },
    {
        name: "The Plot Thickens",
        cards: ["Lurker", "Pawn", "Steward", "Swindler", "Conspirator", "Ironworks", "Mining Village", "Secret Passage", "Torturer", "Trading Post"],
        expansions: ["intrigue"]
    },
    {
        name: "Best Wishes",
        cards: ["Courtyard", "Shanty Town", "Wishing Well", "Baron", "Conspirator", "Diplomat", "Secret Passage", "Duke", "Torturer", "Upgrade"],
        expansions: ["intrigue"]
    },
    {
        name: "A Star to Steer By",
        cards: ["Swindler", "Wishing Well", "Diplomat", "Secret Passage", "Courtier", "Lookout", "Monkey", "Tide Pools", "Treasure Map", "Bazaar"],
        expansions: ["intrigue", "seaside"]
    },
    {
        name: "Shore Patrol",
        cards: ["Pawn", "Shanty Town", "Patrol", "Replace", "Trading Post", "Lighthouse", "Sea Chart", "Cutpurse", "Island", "Wharf"],
        expansions: ["intrigue", "seaside"]
    },
    {
        name: "Servants",
        cards: ["Pawn", "Steward", "Conspirator", "Mill", "Minion", "Transmute", "Vineyard", "Scrying Pool", "Golem", "Possession"],
        extras: ["Potion"],
        expansions: ["intrigue", "alchemy"]
    },
    {
        name: "Secret Research",
        cards: ["Masquerade", "Shanty Town", "Bridge", "Minion", "Torturer", "Nobles", "Herbalist", "University", "Familiar", "Philosopher's Stone"],
        extras: ["Potion"],
        expansions: ["intrigue", "alchemy"]
    },
    {
        name: "Pools, Tools and Fools",
        cards: ["Lurker", "Wishing Well", "Baron", "Ironworks", "Trading Post", "Nobles", "Apothecary", "Scrying Pool", "Golem", "Apprentice"],
        extras: ["Potion"],
        expansions: ["intrigue", "alchemy"]
    },
    {
        name: "Paths to Victory",
        cards: ["Pawn", "Shanty Town", "Baron", "Upgrade", "Harem", "Bishop", "Monument", "Collection", "Magnate", "Peddler"],
        colony: true,
        expansions: ["intrigue", "prosperity"]
    },
    {
        name: "Lucky Seven",
        cards: ["Wishing Well", "Baron", "Mining Village", "Patrol", "Upgrade", "Tiara", "Bank", "Expand", "Forge", "King's Court"],
        colony: true,
        expansions: ["intrigue", "prosperity"]
    },
    {
        name: "Money for Nothing",
        cards: ["Pawn", "Shanty Town", "Patrol", "Replace", "Torturer", "Tunnel", "Jack of all Trades", "Weaver", "Cartographer", "Wheelwright"],
        expansions: ["intrigue", "hinterlands"]
    },
    {
        name: "The Duke's Ball",
        cards: ["Masquerade", "Conspirator", "Duke", "Upgrade", "Harem", "Guard Dog", "Scheme", "Trail", "Inn", "Wheelwright"],
        expansions: ["intrigue", "hinterlands"]
    },
    {
        name: "Prophecy",
        cards: ["Wishing Well", "Baron", "Conspirator", "Secret Passage", "Nobles", "Vagrant", "Armory", "Ironmonger", "Mystic", "Rebuild"],
        shelters: true,
        expansions: ["intrigue", "darkages"]
    },
    {
        name: "Invasion",
        cards: ["Swindler", "Diplomat", "Torturer", "Upgrade", "Harem", "Beggar", "Squire", "Urchin", "Marauder", "Rogue"],
        shelters: true,
        extras: ["Mercenary", "Ruins", "Spoils"],
        expansions: ["intrigue", "darkages"]
    },
    {
        name: "The Spice of Life",
        cards: ["Courtyard", "Wishing Well", "Diplomat", "Mining Village", "Courtier", "Replace", "Remake", "Young Witch", "Horn of Plenty", "Joust", "Fairgrounds"],
        extras: ["Rewards"],
        bane: "Wishing Well",
        expansions: ["intrigue", "cornguilds"]
    },
    {
        name: "Tricks of the Trade",
        cards: ["Masquerade", "Conspirator", "Mill", "Secret Passage", "Nobles", "Stonemason", "Herald", "Butcher", "Journeyman", "Soothsayer"],
        expansions: ["intrigue", "cornguilds"]
    },
    {
        name: "Royalty Factory",
        cards: ["Swindler", "Conspirator", "Courtier", "Harem", "Nobles", "Page", "Raze", "Duplicate", "Bridge Troll", "Royal Carriage"],
        extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
        landscapes: ["Pilgrimage"],
        expansions: ["intrigue", "adventures"]
    },
    {
        name: "Masters of Finance",
        cards: ["Pawn", "Shanty Town", "Steward", "Bridge", "Upgrade", "Gear", "Transmogrify", "Artificer", "Distant Lands", "Wine Merchant"],
        landscapes: ["Ball", "Borrow"],
        expansions: ["intrigue", "adventures"]
    },
    {
        name: "Delicious Torture",
        cards: ["Baron", "Bridge", "Ironworks", "Torturer", "Harem", "Settlers / Bustling Village", "Castles", "Enchantress", "Sacrifice", "Crown"],
        landscapes: ["Arena", "Banquet"],
        expansions: ["intrigue", "empires"]
    },
    {
        name: "Buddy System",
        cards: ["Pawn", "Masquerade", "Mining Village", "Trading Post", "Nobles", "Engineer", "Catapult / Rocks", "Archive", "Capital", "Forum"],
        landscapes: ["Salt the Earth", "Wolf Den"],
        expansions: ["intrigue", "empires"]
    },
    {
        name: "Shadowy Figures",
        cards: ["Bridge", "Conspirator", "Mill", "Secret Passage", "Nobles", "Faithful Hound", "Conclave", "Shepherd", "Cobbler", "Tragic Hero"],
        extras: ["Pasture"],
        expansions: ["intrigue", "nocturne"]
    },
    {
        name: "Impending Doom",
        cards: ["Lurker", "Swindler", "Mining Village", "Courtier", "Upgrade", "Monastery", "Leprechaun", "Necromancer", "Tormentor", "Werewolf"],
        extras: ["Hexes", "Wish", "Zombie Apprentice", "Zombie Mason", "Zombie Spy"],
        expansions: ["intrigue", "nocturne"]
    },
    {
        name: "Memento Mori",
        cards: ["Lurker", "Swindler", "Ironworks", "Patrol", "Upgrade", "Experiment", "Flag Bearer", "Patron", "Silk Merchant", "Recruiter"],
        extras: ["Flag"],
        landscapes: ["Citadel"],
        expansions: ["intrigue", "renaissance"]
    },
    {
        name: "Clockwork Court",
        cards: ["Steward", "Mining Village", "Courtier", "Replace", "Nobles", "Acting Troupe", "Inventor", "Research", "Scepter", "Scholar"],
        landscapes: ["Fleet", "Sinister Plot"],
        expansions: ["intrigue", "renaissance"]
    },
    {
        name: "Dog & Pony Show",
        cards: ["Pawn", "Mill", "Torturer", "Upgrade", "Nobles", "Camel Train", "Goatherd", "Sheepdog", "Cavalry", "Paddock"],
        extras: ["Horse"],
        landscapes: ["Commerce", "Way of the Horse"],
        expansions: ["intrigue", "menagerie"]
    },
    {
        name: "Explosions",
        cards: ["Courtyard", "Lurker", "Wishing Well", "Diplomat", "Replace", "Scrap", "Bounty Hunter", "Coven", "Hunting Lodge", "Animal Fair"],
        extras: ["Horse"],
        landscapes: ["Populate", "Way of the Squirrel"],
        expansions: ["intrigue", "menagerie"]
    },
    {
        name: "Dark Dealings",
        cards: ["Lurker", "Steward", "Secret Passage", "Courtier", "Nobles", "Townsfolk", "Broker", "Courier", "Contract", "Hunter"],
        landscapes: ["Circle of Witches"],
        expansions: ["intrigue", "allies"]
    },
    {
        name: "Pawns and Underlings",
        cards: ["Pawn", "Baron", "Conspirator", "Patrol", "Replace", "Merchant Camp", "Underling", "Wizards", "Innkeeper", "Swap"],
        landscapes: ["Plateau Shepherds"],
        expansions: ["intrigue", "allies"]
    },
    {
        name: "High Seas",
        cards: ["Haven", "Lookout", "Warehouse", "Blockade", "Caravan", "Island", "Bazaar", "Corsair", "Pirate", "Wharf"],
        expansions: ["seaside"]
    },
    {
        name: "Buried Treasure",
        cards: ["Lighthouse", "Astrolabe", "Fishing Village", "Monkey", "Sea Chart", "Cutpurse", "Sailor", "Treasure Map", "Outpost", "Tactician"],
        expansions: ["seaside"]
    },
    {
        name: "Gummed Up",
        cards: ["Haven", "Sea Chart", "Warehouse", "Sailor", "Sea Witch", "Vineyard", "Herbalist", "Familiar", "Philosopher's Stone", "Apprentice"],
        extras: ["Potion"],
        expansions: ["seaside", "alchemy"]
    },
    {
        name: "Exploding Kingdom",
        cards: ["Fishing Village", "Lookout", "Outpost", "Tactician", "Wharf", "Bishop", "Quarry", "City", "Grand Market", "King's Court"],
        colony: true,
        expansions: ["seaside", "prosperity"]
    },
    {
        name: "Pirate Bay",
        cards: ["Native Village", "Astrolabe", "Monkey", "Corsair", "Treasury", "Investment", "Charlatan", "Magnate", "Mint", "Hoard"],
        colony: true,
        expansions: ["seaside", "prosperity"]
    },
    {
        name: "Travelers",
        cards: ["Lookout", "Warehouse", "Cutpurse", "Island", "Merchant Ship", "Crossroads", "Cartographer", "Souk", "Stables", "Farmland"],
        expansions: ["seaside", "hinterlands"]
    },
    {
        name: "Runners",
        cards: ["Smugglers", "Blockade", "Caravan", "Sailor", "Bazaar", "Guard Dog", "Nomads", "Berserker", "Cauldron", "Wheelwright"],
        expansions: ["seaside", "hinterlands"]
    },
    {
        name: "Watery Graves",
        cards: ["Native Village", "Salvager", "Treasure Map", "Corsair", "Treasury", "Hermit", "Rats", "Scavenger", "Count", "Graverobber"],
        shelters: true,
        extras: ["Madman"],
        expansions: ["seaside", "darkages"]
    },
    {
        name: "Peasants",
        cards: ["Haven", "Lighthouse", "Fishing Village", "Warehouse", "Island", "Poor House", "Vagrant", "Forager", "Armory", "Band of Misfits"],
        shelters: true,
        expansions: ["seaside", "darkages"]
    },
    {
        name: "Collecting",
        cards: ["Fishing Village", "Monkey", "Smugglers", "Blockade", "Tide Pools", "Farrier", "Farmhands", "Footpad", "Hunting Party", "Fairgrounds"],
        expansions: ["seaside", "cornguilds"]
    },
    {
        name: "Island Builder",
        cards: ["Native Village", "Sea Chart", "Island", "Salvager", "Treasury", "Stonemason", "Advisor", "Plaza", "Baker", "Merchant Guild"],
        expansions: ["seaside", "cornguilds"]
    },
    {
        name: "Prince of Orange",
        cards: ["Astrolabe", "Fishing Village", "Caravan", "Sailor", "Merchant Ship", "Page", "Amulet", "Dungeon", "Haunted Woods", "Swamp Hag"],
        extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
        landscapes: ["Mission"],
        expansions: ["seaside", "adventures"]
    },
    {
        name: "Gifts and Mathoms",
        cards: ["Haven", "Smugglers", "Blockade", "Sailor", "Salvager", "Caravan Guard", "Messenger", "Bridge Troll", "Lost City", "Hireling"],
        landscapes: ["Expedition", "Quest"],
        expansions: ["seaside", "adventures"]
    },
    {
        name: "Boxed In",
        cards: ["Smugglers", "Warehouse", "Salvager", "Tactician", "Wharf", "Encampment / Plunder", "Castles", "Chariot Race", "Enchantress", "Gladiator / Fortune"],
        landscapes: ["Tax", "Wall"],
        expansions: ["seaside", "empires"]
    },
    {
        name: "King of the Sea",
        cards: ["Haven", "Native Village", "Corsair", "Pirate", "Sea Witch", "Overlord", "Farmers' Market", "Temple", "Archive", "Wild Hunt"],
        landscapes: ["Delve", "Fountain"],
        expansions: ["seaside", "empires"]
    },
    {
        name: "The New Black",
        cards: ["Caravan", "Sailor", "Corsair", "Merchant Ship", "Tactician", "Ghost Town", "Secret Cave", "Cobbler", "Den of Sin", "Raider"],
        extras: ["Magic Lamp", "Wish"],
        expansions: ["seaside", "nocturne"]
    },
    {
        name: "Forbidden Isle",
        cards: ["Monkey", "Salvager", "Tide Pools", "Bazaar", "Pirate", "Tracker", "Blessed Village", "Cemetery", "Idol", "Tragic Hero"],
        extras: ["Haunted Mirror", "Pouch", "Boons", "Will-O'-Wisp", "Ghost"],
        expansions: ["seaside", "nocturne"]
    },
    {
        name: "Free Shipping",
        cards: ["Smugglers", "Blockade", "Island", "Outpost", "Wharf", "Lackeys", "Acting Troupe", "Cargo Ship", "Research", "Spices"],
        landscapes: ["Innovation"],
        expansions: ["seaside", "renaissance"]
    },
    {
        name: "Digging For Treasure",
        cards: ["Native Village", "Astrolabe", "Caravan", "Salvager", "Treasure Map", "Border Guard", "Flag Bearer", "Inventor", "Sculptor", "Swashbuckler"],
        extras: ["Flag", "Horn", "Lantern", "Treasure Chest"],
        landscapes: ["Crop Rotation", "Silos"],
        expansions: ["seaside", "renaissance"]
    },
    {
        name: "Innsmouth",
        cards: ["Lighthouse", "Fishing Village", "Caravan", "Tide Pools", "Pirate", "Sheepdog", "Groom", "Coven", "Barge", "Animal Fair"],
        extras: ["Horse"],
        landscapes: ["Invest", "Way of the Goat"],
        expansions: ["seaside", "menagerie"]
    },
    {
        name: "Ruritania",
        cards: ["Astrolabe", "Warehouse", "Tide Pools", "Outpost", "Tactician", "Sleigh", "Bounty Hunter", "Cavalry", "Village Green", "Falconer"],
        extras: ["Horse"],
        landscapes: ["Alliance", "Way of the Monkey"],
        expansions: ["seaside", "menagerie"]
    },
    {
        name: "Forward Thinking",
        cards: ["Native Village", "Warehouse", "Cutpurse", "Sea Witch", "Tactician", "Odysseys", "Sentinel", "Royal Galley", "Guildmaster", "Highwayman"],
        landscapes: ["Cave Dwellers"],
        expansions: ["seaside", "allies"]
    },
    {
        name: "Treasure Hunt",
        cards: ["Haven", "Lookout", "Treasure Map", "Outpost", "Treasury", "Forts", "Town", "Emissary", "Swap", "Marquis"],
        landscapes: ["Market Towns"],
        expansions: ["seaside", "allies"]
    },
    {
        name: "Lower Learning",
        cards: ["Vineyard", "University", "Familiar", "Apprentice", "Anvil", "Bishop", "Worker's Village", "Charlatan", "Mint", "Peddler"],
        colony: true,
        extras: ["Potion"],
        expansions: ["alchemy", "prosperity"]
    },
    {
        name: "Wine Country",
        cards: ["Vineyard", "University", "Familiar", "Golem", "Apprentice", "Guard Dog", "Nomads", "Highway", "Margrave", "Farmland"],
        extras: ["Potion"],
        expansions: ["alchemy", "hinterlands"]
    },
    {
        name: "Infestations",
        cards: ["Transmute", "Vineyard", "Scrying Pool", "Apprentice", "Market Square", "Armory", "Feodum", "Rats", "Wandering Minstrel", "Cultist"],
        shelters: true,
        extras: ["Potion", "Ruins"],
        expansions: ["alchemy", "darkages"]
    },
    {
        name: "Lamentations",
        cards: ["Apothecary", "Herbalist", "University", "Golem", "Beggar", "Forager", "Ironmonger", "Catacombs", "Counterfeit", "Pillage"],
        shelters: true,
        extras: ["Potion", "Spoils"],
        expansions: ["alchemy", "darkages"]
    },
    {
        name: "Clown College",
        cards: ["University", "Apothecary", "Familiar", "Golem", "Candlestick Maker", "Infirmary", "Menagerie", "Herald", "Carnival", "Jester"],
        extras: ["Potion"],
        expansions: ["alchemy", "cornguilds"]
    },
    {
        name: "Haste Potion",
        cards: ["Transmute", "Vineyard", "Scrying Pool", "University", "Apprentice", "Magpie", "Messenger", "Port", "Royal Carriage", "Treasure Trove"],
        extras: ["Potion"],
        landscapes: ["Plan"],
        expansions: ["alchemy", "adventures"]
    },
    {
        name: "Cursecatchers",
        cards: ["Apothecary", "Herbalist", "Familiar", "Philosopher's Stone", "Golem", "Peasant", "Ratcatcher", "Amulet", "Caravan Guard", "Bridge Troll"],
        extras: ["Potion", "Soldier", "Fugitive", "Disciple", "Teacher"],
        landscapes: ["Save", "Trade"],
        expansions: ["alchemy", "adventures"]
    },
    {
        name: "Collectors",
        cards: ["Transmute", "Apothecary", "Herbalist", "University", "Apprentice", "City Quarter", "Encampment / Plunder", "Enchantress", "Farmers' Market", "Crown"],
        extras: ["Potion"],
        landscapes: ["Colonnade", "Museum"],
        expansions: ["alchemy", "empires"]
    },
    {
        name: "Nightmare Fuel",
        cards: ["Transmute", "Vineyard", "Alchemist", "Apprentice", "Tracker", "Bard", "Blessed Village", "Cemetery", "Skulk", "Sacred Grove"],
        extras: ["Potion", "Haunted Mirror", "Pouch", "Boons", "Hexes", "Will-O'-Wisp", "Ghost"],
        expansions: ["alchemy", "nocturne"]
    },
    {
        name: "Peek-a-Boo",
        cards: ["Apothecary", "Scrying Pool", "Alchemist", "Golem", "Lackeys", "Cargo Ship", "Improve", "Patron", "Silk Merchant", "Sculptor"],
        extras: ["Potion"],
        landscapes: ["Cathedral"],
        expansions: ["alchemy", "renaissance"]
    },
    {
        name: "Class of 20",
        cards: ["Transmute", "Vineyard", "University", "Snowy Village", "Cavalry", "Coven", "Hunting Lodge", "Kiln", "Livery", "Wayfarer"],
        extras: ["Horse", "Potion"],
        landscapes: ["Delay", "Way of the Owl"],
        expansions: ["alchemy", "menagerie"]
    },
    {
        name: "Recursion",
        cards: ["Scrying Pool", "Alchemist", "Golem", "Apprentice", "Importer", "Merchant Camp", "Wizards", "Barbarian", "Galleria", "Modify"],
        extras: ["Potion"],
        landscapes: ["Coastal Haven"],
        expansions: ["alchemy", "allies"]
    },
    {
        name: "Beginners",
        cards: ["Watchtower", "Clerk", "Monument", "Tiara", "Worker's Village", "Crystal Ball", "Magnate", "Rabble", "Bank", "Expand"],
        colony: true,
        expansions: ["prosperity"]
    },
    {
        name: "Friendly Interactive",
        cards: ["Bishop", "Tiara", "Worker's Village", "City", "Collection", "War Chest", "Vault", "Hoard", "Forge", "Peddler"],
        colony: true,
        expansions: ["prosperity"]
    },
    {
        name: "Instant Gratification",
        cards: ["Watchtower", "Bishop", "Mint", "Hoard", "Expand", "Oasis", "Trail", "Berserker", "Cauldron", "Haggler"],
        colony: true,
        expansions: ["prosperity", "hinterlands"]
    },
    {
        name: "Treasure Trove",
        cards: ["Clerk", "Monument", "Tiara", "Crystal Ball", "Bank", "Fool's Gold", "Develop", "Guard Dog", "Cauldron", "Inn"],
        colony: true,
        expansions: ["prosperity", "hinterlands"]
    },
    {
        name: "One Man's Trash",
        cards: ["Anvil", "City", "Crystal Ball", "Magnate", "War Chest", "Squire", "Forager", "Market Square", "Counterfeit", "Pillage"],
        colony: true,
        shelters: true,
        extras: ["Spoils"],
        expansions: ["prosperity", "darkages"]
    },
    {
        name: "Honor Among Thieves",
        cards: ["Watchtower", "Quarry", "Collection", "Hoard", "Forge", "Squire", "Marauder", "Procession", "Bandit Camp", "Rogue"],
        colony: true,
        shelters: true,
        extras: ["Ruins", "Spoils"],
        expansions: ["prosperity", "darkages"]
    },
    {
        name: "Detours",
        cards: ["Clerk", "Crystal Ball", "Magnate", "Hoard", "Forge", "Farmhands", "Remake", "Horn of Plenty", "Jester", "Joust"],
        colony: true,
        extras: ["Rewards"],
        expansions: ["prosperity", "cornguilds"]
    },
    {
        name: "Quarrymen",
        cards: ["Quarry", "Charlatan", "City", "Grand Market", "Expand", "Candlestick Maker", "Baker", "Butcher", "Merchant Guild", "Soothsayer"],
        colony: true,
        expansions: ["prosperity", "cornguilds"]
    },
    {
        name: "Last Will and Monument",
        cards: ["Bishop", "Monument", "Collection", "Magnate", "Vault", "Coin of the Realm", "Dungeon", "Messenger", "Port", "Relic"],
        colony: true,
        landscapes: ["Inheritance"],
        expansions: ["prosperity", "adventures"]
    },
    {
        name: "Think Big",
        cards: ["War Chest", "Hoard", "Expand", "King's Court", "Peddler", "Miser", "Distant Lands", "Giant", "Storyteller", "Hireling"],
        colony: true,
        landscapes: ["Ball", "Ferry"],
        expansions: ["prosperity", "adventures"]
    },
    {
        name: "Big Time",
        cards: ["Investment", "Tiara", "Grand Market", "Bank", "Forge", "Royal Blacksmith", "Patrician / Emporium", "Gladiator / Fortune", "Villa", "Capital"],
        colony: true,
        landscapes: ["Dominate", "Obelisk"],
        notes: "Obelisk randomly assigned",
        expansions: ["prosperity", "empires"]
    },
    {
        name: "Gilded Gates",
        cards: ["Anvil", "Collection", "Mint", "War Chest", "Peddler", "City Quarter", "Encampment / Plunder", "Chariot Race", "Groundskeeper", "Wild Hunt"],
        colony: true,
        landscapes: ["Basilica", "Palace"],
        expansions: ["prosperity", "empires"]
    },
    {
        name: "Treasures of the Night",
        cards: ["Investment", "Tiara", "Charlatan", "Crystal Ball", "War Chest", "Guardian", "Night Watchman", "Crypt", "Vampire", "Raider"],
        colony: true,
        extras: ["Hexes", "Bat"],
        expansions: ["prosperity", "nocturne"]
    },
    {
        name: "Day at the Races",
        cards: ["Anvil", "Watchtower", "Bishop", "Clerk", "Peddler", "Druid", "Blessed Village", "Cemetery", "Tormentor", "Tragic Hero"],
        colony: true,
        extras: ["Haunted Mirror", "Boons", "Hexes", "Will-O'-Wisp", "Ghost"],
        druid: ["The Swamp's Gift", "The River's Gift", "The Forest's Gift"],
        expansions: ["prosperity", "nocturne"]
    },
    {
        name: "Dreamers of Dreams",
        cards: ["Watchtower", "Monument", "Worker's Village", "Charlatan", "Vault", "Cargo Ship", "Priest", "Old Witch", "Scepter", "Scholar"],
        colony: true,
        landscapes: ["Academy"],
        expansions: ["prosperity", "renaissance"]
    },
    {
        name: "Movers and Shakers",
        cards: ["Investment", "City", "Rabble", "Grand Market", "Bank", "Hideout", "Patron", "Research", "Treasurer", "Villain"],
        colony: true,
        extras: ["Key"],
        landscapes: ["Capitalism", "Citadel"],
        expansions: ["prosperity", "renaissance"]
    },
    {
        name: "Limited Time Offer",
        cards: ["Anvil", "Worker's Village", "Mint", "Grand Market", "Peddler", "Supplies", "Displace", "Fisherman", "Destrier", "Wayfarer"],
        colony: true,
        extras: ["Horse"],
        landscapes: ["Desperation", "Way of the Frog"],
        expansions: ["prosperity", "menagerie"]
    },
    {
        name: "Otter Chaos",
        cards: ["Clerk", "Monument", "Quarry", "City", "War Chest", "Camel Train", "Hunting Lodge", "Mastermind", "Paddock", "Animal Fair"],
        colony: true,
        extras: ["Horse"],
        landscapes: ["Reap", "Way of the Otter"],
        expansions: ["prosperity", "menagerie"]
    },
    {
        name: "Inventing Mania",
        cards: ["Anvil", "Quarry", "Rabble", "Expand", "King's Court", "Bauble", "Augurs", "Importer", "Carpenter", "Capital City"],
        colony: true,
        landscapes: ["Family of Inventors"],
        expansions: ["prosperity", "allies"]
    },
    {
        name: "Bank of Toadies",
        cards: ["Clerk", "Investment", "City", "Vault", "Bank", "Sycophant", "Odysseys", "Broker", "Town", "Marquis"],
        colony: true,
        landscapes: ["League of Bankers"],
        expansions: ["prosperity", "allies"]
    },
    {
        name: "Introduction",
        cards: ["Crossroads", "Develop", "Oasis", "Jack of all Trades", "Nomads", "Spice Merchant", "Weaver", "Cartographer", "Margrave", "Stables"],
        expansions: ["hinterlands"]
    },
    {
        name: "Bargains",
        cards: ["Fool's Gold", "Scheme", "Trader", "Trail", "Cauldron", "Haggler", "Highway", "Souk", "Wheelwright", "Border Village"],
        expansions: ["hinterlands"]
    },
    {
        name: "Far From Home",
        cards: ["Fool's Gold", "Develop", "Weaver", "Cartographer", "Witch's Hut", "Feodum", "Fortress", "Wandering Minstrel", "Catacombs", "Count"],
        shelters: true,
        expansions: ["hinterlands", "darkages"]
    },
    {
        name: "Expeditions",
        cards: ["Oasis", "Scheme", "Nomads", "Spice Merchant", "Highway", "Poor House", "Storeroom", "Ironmonger", "Catacombs", "Altar"],
        shelters: true,
        expansions: ["hinterlands", "darkages"]
    },
    {
        name: "Blue Harvest",
        cards: ["Fool's Gold", "Trail", "Tunnel", "Weaver", "Witch's Hut", "Farrier", "Hamlet", "Ferryman", "Horn of Plenty", "Joust"],
        extras: ["Rewards"],
        ferryman: "Guard Dog",
        expansions: ["hinterlands", "cornguilds"]
    },
    {
        name: "Exchanges",
        cards: ["Develop", "Oasis", "Trader", "Cauldron", "Stables", "Border Village", "Stonemason", "Herald", "Young Witch", "Butcher", "Soothsayer"],
        bane: "Oasis",
        expansions: ["hinterlands", "cornguilds"]
    },
    {
        name: "Traders and Raiders",
        cards: ["Guard Dog", "Spice Merchant", "Trader", "Berserker", "Haggler", "Page", "Port", "Haunted Woods", "Lost City", "Wine Merchant"],
        extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
        landscapes: ["Raid"],
        expansions: ["hinterlands", "adventures"]
    },
    {
        name: "Journeys",
        cards: ["Crossroads", "Trail", "Cartographer", "Highway", "Inn", "Guide", "Ranger", "Bridge Troll", "Distant Lands", "Giant"],
        landscapes: ["Expedition", "Inheritance"],
        expansions: ["hinterlands", "adventures"]
    },
    {
        name: "Simple Plans",
        cards: ["Cauldron", "Haggler", "Stables", "Wheelwright", "Border Village", "Patrician / Emporium", "Catapult / Rocks", "Enchantress", "Villa", "Forum"],
        landscapes: ["Donate", "Labyrinth"],
        expansions: ["hinterlands", "empires"]
    },
    {
        name: "Expansion",
        cards: ["Tunnel", "Spice Merchant", "Highway", "Stables", "Farmland", "Engineer", "Encampment / Plunder", "Castles", "Charm", "Legionary"],
        landscapes: ["Battlefield", "Fountain"],
        expansions: ["hinterlands", "empires"]
    },
    {
        name: "Search Party",
        cards: ["Oasis", "Scheme", "Cartographer", "Inn", "Souk", "Druid", "Faithful Hound", "Conclave", "Cobbler", "Werewolf"],
        extras: ["Boons", "Hexes", "Will-O'-Wisp"],
        druid: ["The Mountain's Gift", "The Sky's Gift", "The Sun's Gift"],
        expansions: ["hinterlands", "nocturne"]
    },
    {
        name: "Counting Sheep",
        cards: ["Crossroads", "Oasis", "Tunnel", "Weaver", "Farmland", "Leprechaun", "Secret Cave", "Shepherd", "Crypt", "Pooka"],
        extras: ["Cursed Gold", "Magic Lamp", "Pasture", "Hexes", "Wish"],
        expansions: ["hinterlands", "nocturne"]
    },
    {
        name: "Sweetened Deals",
        cards: ["Develop", "Guard Dog", "Spice Merchant", "Haggler", "Witch's Hut", "Lackeys", "Flag Bearer", "Mountain Village", "Silk Merchant", "Spices"],
        extras: ["Flag"],
        landscapes: ["Silos"],
        expansions: ["hinterlands", "renaissance"]
    },
    {
        name: "A Penny Saved",
        cards: ["Oasis", "Trader", "Berserker", "Souk", "Border Village", "Ducat", "Patron", "Scepter", "Seer", "Swashbuckler"],
        extras: ["Treasure Chest"],
        landscapes: ["Barracks", "Guildhall"],
        expansions: ["hinterlands", "renaissance"]
    },
    {
        name: "Big Blue",
        cards: ["Tunnel", "Trader", "Trail", "Weaver", "Witch's Hut", "Black Cat", "Sleigh", "Sheepdog", "Village Green", "Falconer"],
        extras: ["Horse"],
        landscapes: ["Banish", "Way of the Turtle"],
        expansions: ["hinterlands", "menagerie"]
    },
    {
        name: "Intersection",
        cards: ["Develop", "Nomads", "Stables", "Wheelwright", "Farmland", "Supplies", "Cardinal", "Hostelry", "Livery", "Mastermind"],
        extras: ["Horse"],
        landscapes: ["Gamble", "Way of the Mouse"],
        mouse: "Crossroads",
        expansions: ["hinterlands", "menagerie"]
    },
    {
        name: "Longest Tunnel",
        cards: ["Tunnel", "Jack of all Trades", "Trail", "Haggler", "Margrave", "Bauble", "Carpenter", "Innkeeper", "Capital City", "Contract"],
        landscapes: ["Fellowship of Scribes"],
        expansions: ["hinterlands", "allies"]
    },
    {
        name: "Expertise",
        cards: ["Crossroads", "Spice Merchant", "Highway", "Inn", "Border Village", "Townsfolk", "Underling", "Barbarian", "Highwayman", "Specialist"],
        landscapes: ["Order of Masons"],
        expansions: ["hinterlands", "allies"]
    },
    {
        name: "Grim Parade",
        cards: ["Forager", "Market Square", "Armory", "Fortress", "Procession", "Band of Misfits", "Catacombs", "Cultist", "Knights", "Hunting Grounds"],
        shelters: true,
        extras: ["Ruins"],
        expansions: ["darkages"]
    },
    {
        name: "Chess With Death",
        cards: ["Vagrant", "Sage", "Storeroom", "Rats", "Scavenger", "Bandit Camp", "Graverobber", "Junk Dealer", "Mystic", "Pillage"],
        shelters: true,
        extras: ["Spoils"],
        expansions: ["darkages"]
    },
    {
        name: "Dark Carnival",
        cards: ["Hermit", "Death Cart", "Cultist", "Junk Dealer", "Knights", "Hamlet", "Menagerie", "Ferryman", "Horn of Plenty", "Fairgrounds"],
        shelters: true,
        extras: ["Madman", "Ruins"],
        ferryman: "Fortress",
        expansions: ["darkages", "cornguilds"]
    },
    {
        name: "Stoneground",
        cards: ["Ironmonger", "Procession", "Marauder", "Rogue", "Hunting Grounds", "Farrier", "Stonemason", "Shop", "Advisor", "Plaza"],
        shelters: true,
        extras: ["Ruins", "Spoils"],
        expansions: ["darkages", "cornguilds"]
    },
    {
        name: "Cemetery Polka",
        cards: ["Marauder", "Procession", "Wandering Minstrel", "Graverobber", "Rogue", "Peasant", "Amulet", "Caravan Guard", "Relic", "Hireling"],
        shelters: true,
        extras: ["Ruins", "Spoils", "Soldier", "Fugitive", "Disciple", "Teacher"],
        landscapes: ["Alms"],
        expansions: ["darkages", "adventures"]
    },
    {
        name: "Groovy Decay",
        cards: ["Death Cart", "Fortress", "Rats", "Cultist", "Knights", "Ratcatcher", "Raze", "Dungeon", "Transmogrify", "Haunted Woods"],
        shelters: true,
        extras: ["Ruins"],
        landscapes: ["Lost Arts", "Pathfinding"],
        expansions: ["darkages", "adventures"]
    },
    {
        name: "Tomb of the Rat King",
        cards: ["Storeroom", "Death Cart", "Fortress", "Rats", "Pillage", "City Quarter", "Castles", "Chariot Race", "Sacrifice", "Legionary"],
        shelters: true,
        extras: ["Ruins", "Spoils"],
        landscapes: ["Advance", "Tomb"],
        expansions: ["darkages", "empires"]
    },
    {
        name: "Triumph of the Bandit King",
        cards: ["Market Square", "Procession", "Bandit Camp", "Catacombs", "Hunting Grounds", "Engineer", "Capital", "Charm", "Groundskeeper", "Legionary"],
        shelters: true,
        extras: ["Spoils"],
        landscapes: ["Defiled Shrine", "Triumph"],
        expansions: ["darkages", "empires"]
    },
    {
        name: "The Squire's Ritual",
        cards: ["Squire", "Hermit", "Feodum", "Ironmonger", "Rogue", "Patrician / Emporium", "Settlers / Bustling Village", "Catapult / Rocks", "Archive", "Crown"],
        shelters: true,
        extras: ["Madman"],
        landscapes: ["Museum", "Ritual"],
        expansions: ["darkages", "empires"]
    },
    {
        name: "Grave Matters",
        cards: ["Squire", "Forager", "Market Square", "Armory", "Graverobber", "Cemetery", "Necromancer", "Skulk", "Cursed Village", "Tormentor"],
        shelters: true,
        extras: ["Haunted Mirror", "Hexes", "Ghost", "Zombie Apprentice", "Zombie Mason", "Zombie Spy"],
        expansions: ["darkages", "nocturne"]
    },
    {
        name: "Rats and Bats",
        cards: ["Hermit", "Fortress", "Rats", "Catacombs", "Count", "Tracker", "Changeling", "Devil's Workshop", "Sacred Grove", "Vampire"],
        shelters: true,
        extras: ["Madman", "Pouch", "Boons", "Hexes", "Will-O'-Wisp", "Bat"],
        expansions: ["darkages", "nocturne"]
    },
    {
        name: "Stargazing",
        cards: ["Hermit", "Sage", "Procession", "Wandering Minstrel", "Mystic", "Border Guard", "Patron", "Silk Merchant", "Seer", "Swashbuckler"],
        shelters: true,
        extras: ["Madman", "Horn", "Lantern", "Treasure Chest"],
        landscapes: ["Star Chart"],
        expansions: ["darkages", "renaissance"]
    },
    {
        name: "Sewer Rats",
        cards: ["Rats", "Count", "Counterfeit", "Cultist", "Graverobber", "Lackeys", "Improve", "Flag Bearer", "Mountain Village", "Research"],
        shelters: true,
        extras: ["Ruins", "Flag"],
        landscapes: ["Crop Rotation", "Sewers"],
        expansions: ["darkages", "renaissance"]
    },
    {
        name: "Friendly Carnage",
        cards: ["Beggar", "Market Square", "Fortress", "Catacombs", "Altar", "Goatherd", "Cardinal", "Falconer", "Hunting Lodge", "Animal Fair"],
        shelters: true,
        extras: ["Horse"],
        landscapes: ["Ride", "Way of the Camel"],
        expansions: ["darkages", "menagerie"]
    },
    {
        name: "Gift Horses",
        cards: ["Squire", "Sage", "Rats", "Pillage", "Hunting Grounds", "Camel Train", "Scrap", "Displace", "Paddock", "Destrier"],
        shelters: true,
        extras: ["Horse", "Spoils"],
        landscapes: ["Bargain", "Way of the Butterfly"],
        expansions: ["darkages", "menagerie"]
    },
    {
        name: "Grave Business",
        cards: ["Poor House", "Beggar", "Forager", "Bandit Camp", "Graverobber", "Wizards", "Broker", "Barbarian", "Contract", "Highwayman"],
        shelters: true,
        extras: ["Spoils"],
        landscapes: ["Cave Dwellers"],
        expansions: ["darkages", "allies"]
    },
    {
        name: "Rat Traders",
        cards: ["Squire", "Death Cart", "Rats", "Count", "Knights", "Townsfolk", "Importer", "Emissary", "Skirmisher", "Swap"],
        shelters: true,
        extras: ["Ruins"],
        landscapes: ["Desert Guides"],
        expansions: ["darkages", "allies"]
    },
    {
        name: "Misfortune",
        cards: ["Candlestick Maker", "Infirmary", "Advisor", "Farmhands", "Carnival", "Horn of Plenty", "Jester", "Merchant Guild", "Soothsayer", "Fairgrounds"],
        expansions: ["cornguilds"]
    },
    {
        name: "Baking Contest",
        cards: ["Farrier", "Hamlet", "Stonemason", "Menagerie", "Shop", "Herald", "Remake", "Baker", "Hunting Party", "Joust"],
        extras: ["Rewards"],
        expansions: ["cornguilds"]
    },
    {
        name: "The Hero's Return",
        cards: ["Menagerie", "Shop", "Farmhands", "Carnival", "Footpad", "Page", "Miser", "Ranger", "Artificer", "Relic"],
        extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
        landscapes: ["Travelling Fair"],
        expansions: ["cornguilds", "adventures"]
    },
    {
        name: "Queen of Tan",
        cards: ["Advisor", "Herald", "Young Witch", "Journeyman", "Merchant Guild", "Coin of the Realm", "Ratcatcher", "Guide", "Duplicate", "Transmogrify", "Royal Carriage"],
        landscapes: ["Pathfinding", "Save"],
        bane: "Coin of the Realm",
        expansions: ["cornguilds", "adventures"]
    },
    {
        name: "Zookeepers",
        cards: ["Menagerie", "Shop", "Remake", "Ferryman", "Jester", "Overlord", "Settlers / Bustling Village", "Sacrifice", "Groundskeeper", "Wild Hunt"],
        landscapes: ["Annex", "Colonnade"],
        ferryman: "Villa",
        expansions: ["cornguilds", "empires"]
    },
    {
        name: "Cash Flow",
        cards: ["Infirmary", "Herald", "Baker", "Carnival", "Soothsayer", "Engineer", "City Quarter", "Royal Blacksmith", "Castles", "Gladiator / Fortune"],
        landscapes: ["Baths", "Mountain Pass"],
        expansions: ["cornguilds", "empires"]
    },
    {
        name: "The Endless Fair",
        cards: ["Farmhands", "Baker", "Carnival", "Merchant Guild", "Fairgrounds", "Monastery", "Pixie", "Devil's Workshop", "Exorcist", "Shepherd"],
        extras: ["Goat", "Pasture", "Boons", "Will-O'-Wisp", "Imp", "Ghost"],
        expansions: ["cornguilds", "nocturne"]
    },
    {
        name: "Happy Chaos",
        cards: ["Infirmary", "Shop", "Young Witch", "Carnival", "Jester", "Faithful Hound", "Changeling", "Leprechaun", "Secret Cave", "Blessed Village", "Sacred Grove"],
        extras: ["Magic Lamp", "Boons", "Hexes", "Will-O'-Wisp", "Wish"],
        bane: "Leprechaun",
        expansions: ["cornguilds", "nocturne"]
    },
    {
        name: "Combo Corner",
        cards: ["Farrier", "Stonemason", "Ferryman", "Horn of Plenty", "Jester", "Ducat", "Experiment", "Hideout", "Sculptor", "Seer"],
        landscapes: ["Canal"],
        ferryman: "Mountain Village",
        expansions: ["cornguilds", "renaissance"]
    },
    {
        name: "Filling the Coffers",
        cards: ["Farrier", "Plaza", "Baker", "Butcher", "Merchant Guild", "Priest", "Recruiter", "Spices", "Swashbuckler", "Treasurer"],
        extras: ["Key", "Treasure Chest"],
        landscapes: ["City Gate", "Star Chart"],
        expansions: ["cornguilds", "renaissance"]
    },
    {
        name: "Living in Exile",
        cards: ["Hamlet", "Infirmary", "Farmhands", "Footpad", "Journeyman", "Scrap", "Stockpile", "Hostelry", "Gatekeeper", "Livery"],
        extras: ["Horse"],
        landscapes: ["Enclave", "Way of the Mule"],
        expansions: ["cornguilds", "menagerie"]
    },
    {
        name: "Thrill of the Hunt",
        cards: ["Hamlet", "Butcher", "Carnival", "Hunting Party", "Joust", "Black Cat", "Camel Train", "Bounty Hunter", "Village Green", "Mastermind"],
        extras: ["Rewards"],
        landscapes: ["Pursue", "Way of the Rat"],
        expansions: ["cornguilds", "menagerie"]
    },
    {
        name: "Huge Collections",
        cards: ["Shop", "Advisor", "Plaza", "Hunting Party", "Fairgrounds", "Clashes", "Forts", "Sentinel", "Contract", "Galleria"],
        landscapes: ["Woodworker's Guild"],
        expansions: ["cornguilds", "allies"]
    },
    {
        name: "Forest Scouts",
        cards: ["Candlestick Maker", "Farmhands", "Baker", "Footpad", "Journeyman", "Augurs", "Sentinel", "Innkeeper", "Royal Galley", "Emissary"],
        landscapes: ["Forest Dwellers"],
        expansions: ["cornguilds", "allies"]
    },
    {
        name: "Gentle Intro",
        cards: ["Ratcatcher", "Amulet", "Dungeon", "Duplicate", "Port", "Ranger", "Distant Lands", "Giant", "Treasure Trove", "Hireling"],
        landscapes: ["Scouting Party"],
        expansions: ["adventures"]
    },
    {
        name: "Expert Intro",
        cards: ["Coin of the Realm", "Peasant", "Raze", "Caravan Guard", "Magpie", "Transmogrify", "Haunted Woods", "Lost City", "Swamp Hag", "Wine Merchant"],
        extras: ["Soldier", "Fugitive", "Disciple", "Teacher"],
        landscapes: ["Mission", "Plan"],
        expansions: ["adventures"]
    },
    {
        name: "Area Control",
        cards: ["Coin of the Realm", "Page", "Relic", "Treasure Trove", "Wine Merchant", "Catapult / Rocks", "Farmers' Market", "Capital", "Charm", "Crown"],
        extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
        landscapes: ["Banquet", "Keep"],
        expansions: ["adventures", "empires"]
    },
    {
        name: "No Money No Problems",
        cards: ["Peasant", "Dungeon", "Duplicate", "Transmogrify", "Hireling", "Royal Blacksmith", "Encampment / Plunder", "Temple", "Villa", "Archive"],
        extras: ["Soldier", "Fugitive", "Disciple", "Teacher"],
        landscapes: ["Bandit Fort", "Mission"],
        expansions: ["adventures", "empires"]
    },
    {
        name: "Monster Mash",
        cards: ["Ratcatcher", "Messenger", "Bridge Troll", "Giant", "Storyteller", "Guardian", "Pixie", "Conclave", "Vampire", "Werewolf"],
        extras: ["Goat", "Boons", "Hexes", "Bat", "Will-O'-Wisp"],
        landscapes: ["Quest"],
        expansions: ["adventures", "nocturne"]
    },
    {
        name: "Lost in the Woods",
        cards: ["Caravan Guard", "Guide", "Ranger", "Haunted Woods", "Hireling", "Druid", "Tracker", "Fool", "Blessed Village", "Sacred Grove"],
        extras: ["Lucky Coin", "Pouch", "Boons", "Will-O'-Wisp"],
        landscapes: ["Pilgrimage"],
        druid: ["The Sky's Gift", "The Field's Gift", "The Sea's Gift"],
        expansions: ["adventures", "nocturne"]
    },
    {
        name: "Progress",
        cards: ["Raze", "Ranger", "Transmogrify", "Swamp Hag", "Hireling", "Experiment", "Improve", "Silk Merchant", "Recruiter", "Seer"],
        landscapes: ["Piazza", "Training"],
        expansions: ["adventures", "renaissance"]
    },
    {
        name: "Once Upon a Time",
        cards: ["Duplicate", "Distant Lands", "Haunted Woods", "Royal Carriage", "Storyteller", "Lackeys", "Acting Troupe", "Priest", "Sculptor", "Spices"],
        landscapes: ["Ferry", "Innovation"],
        expansions: ["adventures", "renaissance"]
    },
    {
        name: "Horse Feathers",
        cards: ["Ratcatcher", "Magpie", "Ranger", "Relic", "Royal Carriage", "Sleigh", "Stockpile", "Displace", "Falconer", "Destrier"],
        extras: ["Horse"],
        landscapes: ["Pilgrimage", "Way of the Ox"],
        expansions: ["adventures", "menagerie"]
    },
    {
        name: "Sooner or Later",
        cards: ["Raze", "Amulet", "Caravan Guard", "Dungeon", "Giant", "Groom", "Village Green", "Barge", "Gatekeeper", "Mastermind"],
        extras: ["Horse"],
        landscapes: ["Mission", "Toil"],
        expansions: ["adventures", "menagerie"]
    },
    {
        name: "Adventures in Pickpocketing",
        cards: ["Duplicate", "Miser", "Artificer", "Lost City", "Treasure Trove", "Bauble", "Augurs", "Innkeeper", "Modify", "Specialist"],
        landscapes: ["Mission", "Gang of Pickpockets"],
        expansions: ["adventures", "allies"]
    },
    {
        name: "Future Perfect",
        cards: ["Caravan Guard", "Gear", "Port", "Transmogrify", "Haunted Woods", "Sycophant", "Forts", "Sentinel", "Skirmisher", "Marquis"],
        landscapes: ["Seaway", "Market Towns"],
        expansions: ["adventures", "allies"]
    },
    {
        name: "Basic Intro",
        cards: ["Engineer", "City Quarter", "Patrician / Emporium", "Castles", "Chariot Race", "Farmers' Market", "Sacrifice", "Villa", "Forum", "Legionary"],
        landscapes: ["Tower", "Wedding"],
        expansions: ["empires"]
    },
    {
        name: "Advanced Intro",
        cards: ["Royal Blacksmith", "Settlers / Bustling Village", "Catapult / Rocks", "Enchantress", "Gladiator / Fortune", "Temple", "Archive", "Capital", "Crown", "Groundskeeper"],
        landscapes: ["Arena", "Triumphal Arch"],
        expansions: ["empires"]
    },
    {
        name: "Luftschloss",
        cards: ["Engineer", "Castles", "Catapult / Rocks", "Temple", "Archive", "Changeling", "Fool", "Cemetery", "Exorcist", "Shepherd"],
        extras: ["Haunted Mirror", "Lucky Coin", "Pasture", "Boons", "Will-O'-Wisp", "Imp", "Ghost"],
        landscapes: ["Tomb"],
        expansions: ["empires", "nocturne"]
    },
    {
        name: "Pooka Pranks",
        cards: ["Settlers / Bustling Village", "Chariot Race", "Sacrifice", "Forum", "Groundskeeper", "Faithful Hound", "Pixie", "Ghost Town", "Skulk", "Pooka"],
        extras: ["Cursed Gold", "Goat", "Boons", "Hexes", "Will-O'-Wisp"],
        landscapes: ["Banquet"],
        expansions: ["empires", "nocturne"]
    },
    {
        name: "Exploring the City",
        cards: ["City Quarter", "Farmers' Market", "Sacrifice", "Groundskeeper", "Wild Hunt", "Cargo Ship", "Experiment", "Mountain Village", "Priest", "Sculptor"],
        landscapes: ["Battlefield", "Exploration"],
        expansions: ["empires", "renaissance"]
    },
    {
        name: "Navigating the Sewers",
        cards: ["Patrician / Emporium", "Chariot Race", "Enchantress", "Gladiator / Fortune", "Villa", "Acting Troupe", "Improve", "Flag Bearer", "Old Witch", "Scepter"],
        extras: ["Flag"],
        landscapes: ["Ritual", "Sewers"],
        expansions: ["empires", "renaissance"]
    },
    {
        name: "No Money Down",
        cards: ["Engineer", "City Quarter", "Catapult / Rocks", "Villa", "Crown", "Sleigh", "Stockpile", "Cavalry", "Wayfarer", "Animal Fair"],
        extras: ["Horse"],
        landscapes: ["Advance", "Way of the Pig"],
        expansions: ["empires", "menagerie"]
    },
    {
        name: "Detours and Shortcuts",
        cards: ["Overlord", "Settlers / Bustling Village", "Enchantress", "Sacrifice", "Wild Hunt", "Camel Train", "Snowy Village", "Fisherman", "Gatekeeper", "Sanctuary"],
        landscapes: ["Transport", "Triumphal Arch"],
        expansions: ["empires", "menagerie"]
    },
    {
        name: "Island Empire",
        cards: ["City Quarter", "Settlers / Bustling Village", "Enchantress", "Farmers' Market", "Wild Hunt", "Sycophant", "Forts", "Contract", "Specialist", "Swap"],
        landscapes: ["Orchard", "Island Folk"],
        expansions: ["empires", "allies"]
    },
    {
        name: "Castle Wars",
        cards: ["Patrician / Emporium", "Castles", "Catapult / Rocks", "Charm", "Crown", "Clashes", "Importer", "Carpenter", "Capital City", "Hunter"],
        landscapes: ["Triumph", "Trappers' Lodge"],
        expansions: ["empires", "allies"]
    },
    {
        name: "Dusk",
        cards: ["Faithful Hound", "Monastery", "Fool", "Night Watchman", "Blessed Village", "Shepherd", "Cobbler", "Den of Sin", "Tormentor", "Tragic Hero"],
        extras: ["Lucky Coin", "Pasture", "Boons", "Hexes", "Will-O'-Wisp"],
        expansions: ["nocturne"]
    },
    {
        name: "Midnight",
        cards: ["Druid", "Leprechaun", "Secret Cave", "Conclave", "Devil's Workshop", "Exorcist", "Crypt", "Cursed Village", "Pooka", "Raider"],
        extras: ["Cursed Gold", "Magic Lamp", "Boons", "Hexes", "Will-O'-Wisp", "Imp", "Ghost", "Wish"],
        druid: ["The Swamp's Gift", "The Flame's Gift", "The Wind's Gift"],
        expansions: ["nocturne"]
    },
    {
        name: "Becoming a Monster",
        cards: ["Monastery", "Devil's Workshop", "Shepherd", "Skulk", "Tragic Hero", "Experiment", "Mountain Village", "Research", "Old Witch", "Spices"],
        extras: ["Pasture", "Hexes", "Imp"],
        landscapes: ["Exploration"],
        expansions: ["nocturne", "renaissance"]
    },
    {
        name: "True Believers",
        cards: ["Faithful Hound", "Secret Cave", "Blessed Village", "Crypt", "Sacred Grove", "Border Guard", "Cargo Ship", "Scholar", "Sculptor", "Villain"],
        extras: ["Horn", "Lantern", "Magic Lamp", "Boons", "Will-O'-Wisp", "Wish"],
        landscapes: ["Cathedral", "Piazza"],
        expansions: ["nocturne", "renaissance"]
    },
    {
        name: "Seize the Night",
        cards: ["Monastery", "Devil's Workshop", "Exorcist", "Skulk", "Cobbler", "Supplies", "Sheepdog", "Hostelry", "Barge", "Falconer"],
        extras: ["Horse", "Hexes", "Will-O'-Wisp", "Imp", "Ghost"],
        landscapes: ["Seize the Day", "Way of the Sheep"],
        expansions: ["nocturne", "menagerie"]
    },
    {
        name: "Animal Crackers",
        cards: ["Faithful Hound", "Pixie", "Shepherd", "Pooka", "Sacred Grove", "Black Cat", "Goatherd", "Groom", "Hunting Lodge", "Kiln"],
        extras: ["Horse", "Cursed Gold", "Goat", "Pasture", "Boons", "Will-O'-Wisp"],
        landscapes: ["Enhance", "Way of the Chameleon"],
        expansions: ["nocturne", "menagerie"]
    },
    {
        name: "Love and Death",
        cards: ["Faithful Hound", "Conclave", "Necromancer", "Den of Sin", "Idol", "Bauble", "Sycophant", "Augurs", "Carpenter", "Hunter"],
        extras: ["Boons", "Will-O'-Wisp", "Zombie Apprentice", "Zombie Mason", "Zombie Spy"],
        landscapes: ["Peaceful Cult"],
        expansions: ["nocturne", "allies"]
    },
    {
        name: "Play it Again Sam",
        cards: ["Tracker", "Leprechaun", "Blessed Village", "Skulk", "Tormentor", "Wizards", "Courier", "Royal Galley", "Hunter", "Swap"],
        extras: ["Pouch", "Boons", "Hexes", "Will-O'-Wisp", "Wish"],
        landscapes: ["Woodworker's Guild"],
        expansions: ["nocturne", "allies"]
    },
    {
        name: "Overture",
        cards: ["Lackeys", "Acting Troupe", "Experiment", "Improve", "Flag Bearer", "Hideout", "Inventor", "Old Witch", "Seer", "Treasurer"],
        extras: ["Flag", "Key"],
        landscapes: ["Fair"],
        expansions: ["renaissance"]
    },
    {
        name: "Prelude",
        cards: ["Border Guard", "Ducat", "Cargo Ship", "Mountain Village", "Priest", "Silk Merchant", "Recruiter", "Sculptor", "Swashbuckler", "Villain"],
        extras: ["Horn", "Lantern", "Treasure Chest"],
        landscapes: ["Citadel", "Star Chart"],
        expansions: ["renaissance"]
    },
    {
        name: "Biding Time",
        cards: ["Ducat", "Priest", "Recruiter", "Scepter", "Swashbuckler", "Goatherd", "Cavalry", "Coven", "Displace", "Fisherman"],
        extras: ["Horse", "Treasure Chest"],
        landscapes: ["Sinister Plot", "Way of the Turtle"],
        expansions: ["renaissance", "menagerie"]
    },
    {
        name: "Villager Madness",
        cards: ["Border Guard", "Flag Bearer", "Patron", "Silk Merchant", "Spices", "Cardinal", "Groom", "Kiln", "Livery", "Wayfarer"],
        extras: ["Horse", "Flag", "Horn", "Lantern"],
        landscapes: ["Academy", "Demand"],
        expansions: ["renaissance", "menagerie"]
    },
    {
        name: "Production Line",
        cards: ["Experiment", "Mountain Village", "Patron", "Spices", "Treasurer", "Townsfolk", "Importer", "Wizards", "Courier", "Modify"],
        extras: ["Key"],
        landscapes: ["Exploration", "Band of Nomads"],
        expansions: ["renaissance", "allies"]
    },
    {
        name: "Age of Scribes",
        cards: ["Acting Troupe", "Inventor", "Research", "Old Witch", "Villain", "Odysseys", "Underling", "Capital City", "Galleria", "Specialist"],
        landscapes: ["Sinister Plot", "Fellowship of Scribes"],
        expansions: ["renaissance", "allies"]
    },
    {
        name: "Intro to Horses",
        cards: ["Supplies", "Goatherd", "Scrap", "Sheepdog", "Hostelry", "Barge", "Livery", "Paddock", "Destrier", "Animal Fair"],
        extras: ["Horse"],
        landscapes: ["Enhance", "Way of the Sheep"],
        expansions: ["menagerie"]
    },
    {
        name: "Intro to Exile",
        cards: ["Black Cat", "Camel Train", "Snowy Village", "Stockpile", "Bounty Hunter", "Cardinal", "Falconer", "Mastermind", "Sanctuary", "Wayfarer"],
        landscapes: ["March", "Way of the Worm"],
        expansions: ["menagerie"]
    },
    {
        name: "Wise Owls",
        cards: ["Black Cat", "Bounty Hunter", "Hostelry", "Hunting Lodge", "Animal Fair", "Merchant Camp", "Wizards", "Town", "Barbarian", "Marquis"],
        extras: ["Horse"],
        landscapes: ["Way of the Owl", "Architects' Guild"],
        expansions: ["menagerie", "allies"]
    },
    {
        name: "Mountain Kings",
        cards: ["Supplies", "Scrap", "Snowy Village", "Barge", "Coven", "Forts", "Broker", "Courier", "Guildmaster", "Skirmisher"],
        extras: ["Horse"],
        landscapes: ["Toil", "Mountain Folk"],
        expansions: ["menagerie", "allies"]
    },
    {
        name: "Decisions Decisions",
        cards: ["Bauble", "Townsfolk", "Merchant Camp", "Courier", "Innkeeper", "Royal Galley", "Highwayman", "Hunter", "Modify", "Marquis"],
        landscapes: ["City-State"],
        expansions: ["allies"]
    },
    {
        name: "Foresight",
        cards: ["Augurs", "Sentinel", "Underling", "Carpenter", "Town", "Barbarian", "Emissary", "Galleria", "Skirmisher", "Specialist"],
        landscapes: ["Order of Astrologers"],
        expansions: ["allies"]
    },
    {
        name: "Flotsam",
        cards: ["Jewelled Egg", "Secluded Shrine", "Abundance", "Crucible", "Fortune Hunter", "Landing Party", "First Mate", "Mining Road", "Silver Mine", "Wealthy Village"],
        landscapes: ["Hasty"],
        traits: ["Hasty", "First Mate"],
        expansions: ["plunder"]
    },
    {
        name: "Jetsam",
        cards: ["Grotto", "Search", "Siren", "Stowaway", "Gondola", "Crew", "Cutthroat", "Longship", "Pickaxe", "Quartermaster"],
        landscapes: ["Pious", "Prepare"],
        traits: ["Pious", "Grotto"],
        expansions: ["plunder"]
    },
    {
        name: "Basic Looting",
        cards: ["Cellar", "Moat", "Vassal", "Market", "Mine", "Harbor Village", "Maroon", "Frigate", "Pilgrim", "Sack of Loot"],
        landscapes: ["Tireless"],
        traits: ["Tireless", "Harbor Village"],
        expansions: ["base", "plunder"]
    },
    {
        name: "Voodoo",
        cards: ["Bureaucrat", "Moneylender", "Remodel", "Festival", "Artisan", "Shaman", "Flagship", "Gondola", "Buried Treasure", "First Mate"],
        landscapes: ["Cursed", "Maelstrom"],
        traits: ["Cursed", "Festival"],
        expansions: ["base", "plunder"]
    },
    {
        name: "Breaking Eggs",
        cards: ["Mining Village", "Courtier", "Replace", "Harem", "Nobles", "Jewelled Egg", "Mapmaker", "Maroon", "Buried Treasure", "Quartermaster"],
        landscapes: ["Reckless"],
        traits: ["Reckless", "Maroon"],
        expansions: ["intrigue", "plunder"]
    },
    {
        name: "Landlubbers",
        cards: ["Pawn", "Wishing Well", "Conspirator", "Mill", "Secret Passage", "Fortune Hunter", "Cutthroat", "Pendant", "Pilgrim", "Wealthy Village"],
        landscapes: ["Avoid", "Friendly"],
        traits: ["Friendly", "Conspirator"],
        expansions: ["intrigue", "plunder"]
    },
    {
        name: "Wine-dark Seas",
        cards: ["Astrolabe", "Fishing Village", "Caravan", "Sailor", "Sea Witch", "Cage", "Cabin Boy", "Rope", "Enlarge", "Frigate"],
        landscapes: ["Cheap"],
        traits: ["Cheap", "Frigate"],
        expansions: ["seaside", "plunder"]
    },
    {
        name: "Treasure Island",
        cards: ["Lookout", "Sea Chart", "Island", "Treasure Map", "Corsair", "Stowaway", "Abundance", "Buried Treasure", "Crew", "Longship"],
        landscapes: ["Inherited", "Launch"],
        traits: ["Inherited", "Treasure Map"],
        expansions: ["seaside", "plunder"]
    },
    {
        name: "Special Delivery",
        cards: ["Transmute", "Apothecary", "Alchemist", "Golem", "Jewelled Egg", "Flagship", "Swamp Shacks", "Tools", "Mining Road", "Trickster"],
        landscapes: ["Cursed", "Deliver"],
        traits: ["Cursed", "Golem"],
        expansions: ["alchemy", "plunder"]
    },
    {
        name: "Pretty Trinkets",
        cards: ["Investment", "Tiara", "Crystal Ball", "War Chest", "Bank", "Jewelled Egg", "Rope", "Figurine", "Silver Mine", "King's Cache"],
        colony: true,
        landscapes: ["Fated"],
        traits: ["Fated", "Rope"],
        expansions: ["prosperity", "plunder"]
    },
    {
        name: "Buying Happiness",
        cards: ["Anvil", "Bishop", "Clerk", "Worker's Village", "Magnate", "Cage", "Stowaway", "Swamp Shacks", "Mining Road", "Pendant"],
        colony: true,
        landscapes: ["Fawning", "Looting"],
        traits: ["Fawning", "Magnate"],
        expansions: ["prosperity", "plunder"]
    },
    {
        name: "Desert Dreams",
        cards: ["Oasis", "Nomads", "Weaver", "Haggler", "Souk", "Grotto", "Harbor Village", "Mapmaker", "Enlarge", "Pendant"],
        landscapes: ["Reckless"],
        traits: ["Reckless", "Nomads"],
        expansions: ["hinterlands", "plunder"]
    },
    {
        name: "Viking Schemes",
        cards: ["Fool's Gold", "Scheme", "Berserker", "Cauldron", "Stables", "Cabin Boy", "Crucible", "Crew", "Frigate", "Wealthy Village"],
        landscapes: ["Rich", "Scrounge"],
        traits: ["Rich", "Berserker"],
        expansions: ["hinterlands", "plunder"]
    },
    {
        name: "Dad's Rats",
        cards: ["Poor House", "Squire", "Vagrant", "Death Cart", "Rats", "Search", "Shaman", "Maroon", "Rope", "First Mate"],
        shelters: true,
        extras: ["Ruins"],
        landscapes: ["Inherited"],
        traits: ["Inherited", "Rats"],
        expansions: ["darkages", "plunder"]
    },
    {
        name: "Ravagers",
        cards: ["Forager", "Storeroom", "Ironmonger", "Counterfeit", "Pillage", "Grotto", "Cutthroat", "Enlarge", "Trickster", "King's Cache"],
        shelters: true,
        extras: ["Spoils"],
        landscapes: ["Invasion", "Tireless"],
        traits: ["Tireless", "Forager"],
        expansions: ["darkages", "plunder"]
    },
    {
        name: "Of Heralds and Hunters",
        cards: ["Stonemason", "Infirmary", "Herald", "Soothsayer", "Fairgrounds", "Cabin Boy", "Flagship", "Fortune Hunter", "Pendant", "Pickaxe"],
        landscapes: ["Inspiring"],
        traits: ["Inspiring", "Fortune Hunter"],
        expansions: ["cornguilds", "plunder"]
    },
    {
        name: "Through the Swamp",
        cards: ["Hamlet", "Menagerie", "Baker", "Horn of Plenty", "Merchant Guild", "Cage", "Taskmaster", "Swamp Shacks", "Tools", "Pilgrim"],
        landscapes: ["Journey", "Patient"],
        traits: ["Patient", "Pilgrim"],
        expansions: ["cornguilds", "plunder"]
    },
    {
        name: "Set Sail",
        cards: ["Ratcatcher", "Port", "Artificer", "Distant Lands", "Treasure Trove", "Search", "Fortune Hunter", "Mapmaker", "Figurine", "First Mate"],
        landscapes: ["Ferry", "Patient"],
        traits: ["Patient", "Artificer"],
        expansions: ["adventures", "plunder"]
    },
    {
        name: "Rush Job",
        cards: ["Coin of the Realm", "Gear", "Haunted Woods", "Wine Merchant", "Hireling", "Secluded Shrine", "Stowaway", "Swamp Shacks", "Tools", "Quartermaster"],
        landscapes: ["Rush", "Shy"],
        traits: ["Shy", "Wine Merchant"],
        expansions: ["adventures", "plunder"]
    },
    {
        name: "City Builders",
        cards: ["City Quarter", "Patrician / Emporium", "Farmers' Market", "Groundskeeper", "Wild Hunt", "Taskmaster", "Abundance", "Crucible", "Tools", "Frigate"],
        landscapes: ["Museum", "Nearby"],
        traits: ["Nearby", "Patrician / Emporium"],
        expansions: ["empires", "plunder"]
    },
    {
        name: "Plenty",
        cards: ["Enchantress", "Gladiator / Fortune", "Sacrifice", "Charm", "Crown", "Landing Party", "Rope", "Figurine", "Mining Road", "Wealthy Village"],
        landscapes: ["Friendly", "Prosper"],
        traits: ["Friendly", "Figurine"],
        expansions: ["empires", "plunder"]
    },
    {
        name: "Night of the Loot",
        cards: ["Faithful Hound", "Blessed Village", "Crypt", "Tragic Hero", "Werewolf", "Taskmaster", "Cabin Boy", "Figurine", "Pendant", "Sack of Loot"],
        extras: ["Boons", "Will-O'-Wisp"],
        landscapes: ["Pious"],
        traits: ["Pious", "Taskmaster"],
        expansions: ["nocturne", "plunder"]
    },
    {
        name: "Skeleton Isle",
        cards: ["Tracker", "Ghost Town", "Devil's Workshop", "Skulk", "Idol", "Secluded Shrine", "Cutthroat", "Longship", "Pilgrim", "King's Cache"],
        extras: ["Pouch", "Boons", "Hexes", "Will-O'-Wisp", "Imp"],
        landscapes: ["Foray", "Hasty"],
        traits: ["Hasty", "Idol"],
        expansions: ["nocturne", "plunder"]
    },
    {
        name: "Circle of Life",
        cards: ["Acting Troupe", "Experiment", "Patron", "Scholar", "Swashbuckler", "Jewelled Egg", "Search", "Shaman", "Frigate", "Pickaxe"],
        extras: ["Treasure Chest"],
        landscapes: ["Cathedral", "Inspiring"],
        traits: ["Inspiring", "Scholar"],
        expansions: ["renaissance", "plunder"]
    },
    {
        name: "Mirror Masters",
        cards: ["Border Guard", "Cargo Ship", "Flag Bearer", "Seer", "Spices", "Taskmaster", "Crucible", "Gondola", "Quartermaster", "Trickster"],
        extras: ["Horn", "Lantern", "Flag"],
        landscapes: ["Fated", "Mirror"],
        traits: ["Fated", "Spices"],
        expansions: ["renaissance", "plunder"]
    },
    {
        name: "Going Home",
        cards: ["Supplies", "Snowy Village", "Barge", "Gatekeeper", "Kiln", "Secluded Shrine", "Gondola", "Landing Party", "Mapmaker", "Silver Mine"],
        extras: ["Horse"],
        landscapes: ["Cheap", "Way of the Squirrel"],
        traits: ["Cheap", "Gatekeeper"],
        expansions: ["menagerie", "plunder"]
    },
    {
        name: "Going Big",
        cards: ["Camel Train", "Sheepdog", "Mastermind", "Sanctuary", "Animal Fair", "Grotto", "Siren", "Harbor Village", "Enlarge", "Sack of Loot"],
        landscapes: ["Nearby", "Peril"],
        traits: ["Nearby", "Animal Fair"],
        expansions: ["menagerie", "plunder"]
    },
    {
        name: "Shipmates",
        cards: ["Sycophant", "Forts", "Broker", "Innkeeper", "Modify", "Shaman", "Flagship", "Harbor Village", "Crew", "Sack of Loot"],
        landscapes: ["Cave Dwellers", "Fawning"],
        traits: ["Fawning", "Sycophant"],
        expansions: ["allies", "plunder"]
    },
    {
        name: "Buried and Sunk",
        cards: ["Merchant Camp", "Odysseys", "Courier", "Highwayman", "Skirmisher", "Abundance", "Landing Party", "Maroon", "Buried Treasure", "King's Cache"],
        landscapes: ["Bury", "Shy"],
        traits: ["Shy", "Merchant Camp"],
        expansions: ["allies", "plunder"]
    },
    {
        name: "Heading East",
        cards: ["Alley", "Artist", "Craftsman", "Fishmonger", "Litter", "Rice", "River Shrine", "Rustic Village", "Samurai", "Tea House"],
        landscapes: ["Progress"],
        expansions: ["risingsun"]
    },
    {
        name: "Dawn of an Era",
        cards: ["Aristocrat", "Change", "Daimyo", "Gold Mine", "Imperial Envoy", "Kitsune", "Mountain Shrine", "Ninja", "Rice Broker", "Ronin"],
        landscapes: ["Practice", "Kind Emperor"],
        expansions: ["risingsun"]
    },
    {
        name: "Spring Forward",
        cards: ["Artisan", "Harbinger", "Smithy", "Throne Room", "Workshop", "Gold Mine", "Mountain Shrine", "Riverboat", "Root Cellar", "Tanuki"],
        landscapes: ["Rapid Expansion"],
        riverboat: "Market",
        expansions: ["base", "risingsun"]
    },
    {
        name: "Money to Burn",
        cards: ["Bureaucrat", "Cellar", "Festival", "Merchant", "Poacher", "Change", "Craftsman", "Poet", "Ronin", "Snake Witch"],
        landscapes: ["Panic", "Gather"],
        expansions: ["base", "risingsun"]
    },
    {
        name: "Solving the Puzzle",
        cards: ["Conspirator", "Courtier", "Ironworks", "Lurker", "Wishing Well", "Artist", "Gold Mine", "Mountain Shrine", "Riverboat", "Ronin"],
        landscapes: ["Enlightenment"],
        riverboat: "Upgrade",
        expansions: ["intrigue", "risingsun"]
    },
    {
        name: "Cold Calculation",
        cards: ["Baron", "Diplomat", "Duke", "Secret Passage", "Shanty Town", "Craftsman", "Ninja", "Snake Witch", "Tea House", "Tanuki"],
        landscapes: ["Harsh Winter, Amass"],
        expansions: ["intrigue", "risingsun"]
    },
    {
        name: "Invasion Fleet",
        cards: ["Blockade", "Corsair", "Outpost", "Salvager", "Sea Chart", "Treasure Map", "Alley", "Kitsune", "Ninja", "Rice Broker", "Riverboat"],
        landscapes: ["Approaching Army"],
        riverboat: "Bazaar",
        expansions: ["seaside", "risingsun"]
    },
    {
        name: "Island People",
        cards: ["Caravan", "Haven", "Pirate", "Sea Witch", "Tide Pools", "Craftsman", "Imperial Envoy", "Rice", "River Shrine", "Snake Witch"],
        landscapes: ["Great Leader", "Kintsugi"],
        expansions: ["seaside", "risingsun"]
    },
    {
        name: "Fast Track",
        cards: ["Alchemist", "Golem", "University", "Vineyard", "Fishmonger", "Imperial Envoy", "Riverboat", "Root Cellar", "Rustic Village", "Samurai"],
        landscapes: ["Progress"],
        riverboat: "Apprentice",
        expansions: ["alchemy", "risingsun"]
    },
    {
        name: "Lazy Mischief",
        cards: ["Apothecary", "Familiar", "Herbalist", "Transmute", "Alley", "Aristocrat", "Change", "Kitsune", "Litter", "Ninja"],
        landscapes: ["Biding Time", "Receive Tribute"],
        expansions: ["alchemy", "risingsun"]
    },
    {
        name: "River Trade",
        cards: ["Anvil", "Collection", "Crystal Ball", "Grand Market", "War Chest", "Craftsman", "Litter", "River Shrine", "Riverboat", "Root Cellar"],
        landscapes: ["Flourishing Trade"],
        riverboat: "City",
        colony: true,
        expansions: ["prosperity", "risingsun"]
    },
    {
        name: "Autumn Harvest",
        cards: ["Bank", "Investment", "Magnate", "Quarry", "Watchtower", "Aristocrat", "Change", "Imperial Envoy", "Ninja", "Rustic Village"],
        landscapes: ["Good Harvest", "Continue"],
        colony: true,
        expansions: ["prosperity", "risingsun"]
    },
    {
        name: "Winter Solstice",
        cards: ["Advisor", "Baker", "Farrier", "Hunting Party", "Jester", "Change", "Daimyo", "Gold Mine", "Snake Witch", "Tea House"],
        landscapes: ["Harsh Winter"],
        expansions: ["cornguilds", "risingsun"]
    },
    {
        name: "From the Shadows",
        cards: ["Carnival", "Farmhands", "Horn of Plenty", "Infirmary", "Shop", "Alley", "Artist", "Fishmonger", "Poet", "Tanuki"],
        landscapes: ["Rapid Expansion", "Gather"],
        expansions: ["cornguilds", "risingsun"]
    },
    {
        name: "Swift Hands",
        cards: ["Cauldron", "Haggler", "Oasis", "Scheme", "Weaver", "Alley", "Ronin", "Rustic Village", "Samurai", "Snake Witch"],
        landscapes: ["Progress"],
        expansions: ["hinterlands", "risingsun"]
    },
    {
        name: "Paperwork",
        cards: ["Border Village", "Crossroads", "Spice Merchant", "Tunnel", "Wheelwright", "Craftsman", "Imperial Envoy", "River Shrine", "Riverboat", "Tanuki"],
        landscapes: ["Bureaucracy", "Foresight"],
        riverboat: "Witch's Hut",
        expansions: ["hinterlands", "risingsun"]
    },
    {
        name: "Pandemic",
        cards: ["Catacombs", "Procession", "Rogue", "Scavenger", "Vagrant", "Aristocrat", "Fishmonger", "Litter", "Mountain Shrine", "Rice Broker"],
        landscapes: ["Sickness"],
        shelters: true,
        expansions: ["darkages", "risingsun"]
    },
    {
        name: "Distant Hordes",
        cards: ["Armory", "Forager", "Hermit", "Hunting Grounds", "Knights", "Squire", "Poet", "Rice", "Ronin", "Samurai", "Snake Witch"],
        landscapes: ["Approaching Army", "Asceticism"],
        shelters: true,
        extras: ["Madman"],
        expansions: ["darkages", "risingsun"]
    },
    {
        name: "Wanderers",
        cards: ["Amulet", "Caravan Guard", "Guide", "Hireling", "Miser", "Imperial Envoy", "Litter", "Poet", "Ronin", "Tanuki"],
        landscapes: ["Flourishing Trade", "Ball"],
        expansions: ["adventures", "risingsun"]
    },
    {
        name: "Hero's Journey",
        cards: ["Artificer", "Distant Lands", "Dungeon", "Duplicate", "Page", "Aristocrat", "Artist", "Kitsune", "Root Cellar", "Samurai"],
        landscapes: ["Biding Time", "Kintsugi"],
        extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
        expansions: ["adventures", "risingsun"]
    },
    {
        name: "Summer Castles",
        cards: ["Capital", "Castles", "City Quarter", "Forum", "Patrician / Emporium", "Aristocrat", "Change", "Rice", "River Shrine", "Snake Witch"],
        landscapes: ["Kind Emperor", "Museum"],
        expansions: ["empires", "risingsun"]
    },
    {
        name: "Swept Clean",
        cards: ["Chariot Race", "Charm", "Crown", "Overlord", "Temple", "Artist", "Kitsune", "Mountain Shrine", "Rice Broker", "Root Cellar"],
        landscapes: ["Divine Wind", "Sea Trade"],
        expansions: ["empires", "risingsun"]
    },
    {
        name: "Priceless Rice",
        cards: ["Blessed Village", "Cursed Village", "Devil's Workshop", "Faithful Hound", "Shepherd", "Alley", "Daimyo", "Rice", "Samurai", "Tea House"],
        landscapes: ["Growth"],
        extras: ["Pasture", "Boons", "Hexes", "Will-O'-Wisp"],
        expansions: ["nocturne", "risingsun"]
    },
    {
        name: "Dark Corners",
        cards: ["Changeling", "Conclave", "Sacred Grove", "Skulk", "Werewolf", "Artist", "Gold Mine", "Litter", "River Shrine", "Tanuki"],
        landscapes: ["Sickness", "Amass"],
        extras: ["Boons", "Hexes", "Will-O'-Wisp"],
        expansions: ["nocturne", "risingsun"]
    },
    {
        name: "Mountain of Money",
        cards: ["Ducat", "Experiment", "Hideout", "Scholar", "Treasurer", "Alley", "Gold Mine", "Kitsune", "Rice Broker", "Riverboat"],
        landscapes: ["Bureaucracy", "Guildhall"],
        riverboat: "Seer",
        extras: ["Key"],
        expansions: ["renaissance", "risingsun"]
    },
    {
        name: "Fresh Start",
        cards: ["Border Guard", "Cargo Ship", "Inventor", "Patron", "Sculptor", "Change", "Daimyo", "Ninja", "Poet", "Tea House"],
        landscapes: ["Divine Wind, Receive Tribute"],
        extras: ["Horn", "Lantern"],
        expansions: ["renaissance", "risingsun"]
    },
    {
        name: "Become the Ox",
        cards: ["Animal Fair", "Camel Train", "Destrier", "Livery", "Wayfarer", "Aristocrat", "Artist", "Fishmonger", "Poet", "Samurai"],
        landscapes: ["Enlightenment", "Way of the Ox"],
        extras: ["Horse"],
        expansions: ["menagerie", "risingsun"]
    },
    {
        name: "Alternatives",
        cards: ["Bounty Hunter", "Coven", "Paddock", "Sleigh", "Supplies", "Alley", "Craftsman", "Daimyo", "Ronin", "Rustic Village"],
        landscapes: ["Panic", "Sea Trade"],
        extras: ["Horse"],
        expansions: ["menagerie", "risingsun"]
    },
    {
        name: "Expert Traders",
        cards: ["Augurs", "Contract", "Courier", "Hunter", "Swap", "Daimyo", "Fishmonger", "Rice Broker", "Riverboat", "Rustic Village"],
        landscapes: ["Enlightenment", "Crafter's Guild"],
        riverboat: "Barbarian",
        expansions: ["allies", "risingsun"]
    },
    {
        name: "Feverish Crafting",
        cards: ["Capital City", "Clashes", "Innkeeper", "Marquis", "Skirmisher", "Aristocrat", "Craftsman", "Fishmonger", "Snake Witch", "Tea House"],
        landscapes: ["Rapid Expansion", "Credit"],
        expansions: ["allies", "risingsun"]
    },
    {
        name: "Buried in Booty",
        cards: ["First Mate", "Flagship", "King's Cache", "Pendant", "Taskmaster", "Gold Mine", "Ninja", "Poet", "Rice Broker", "Tanuki"],
        landscapes: ["Growth", "Prosper"],
        expansions: ["plunder", "risingsun"]
    },
    {
        name: "Shiny Things",
        cards: ["Cabin Boy", "Cutthroat", "Jewelled Egg", "Pilgrim", "Tools", "Daimyo", "Litter", "Rice", "River Shrine", "Root Cellar"],
        landscapes: ["Good Harvest", "Credit"],
        expansions: ["plunder", "risingsun"]
    }
]
