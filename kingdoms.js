/* Array of kingdoms
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
var kingdoms = [
    {
        name: "Simplicity",
        cards: ["Harbinger", "Merchant", "Village", "Gardens", "Moneylender", "Smithy", "Council Room", "Festival", "Laboratory", "Market"],
        expansions: ["base"]
    },
    {
        name: "Ups and Downs",
        cards: ["Cellar", "Chapel", "Vassal", "Bureaucrat", "Poacher", "Remodel", "Bandit", "Festival", "Library", "Artisan"],
        expansions: ["base"]
    },
    {
        name: "Put In The Effort",
        cards: ["Moat", "Merchant", "Workshop", "Poacher", "Smithy", "Throne Room", "Laboratory", "Sentry", "Witch", "Artisan"],
        expansions: ["base"]
    },
    {
        name: "Playing It Safe",
        cards: ["Cellar", "Harbinger", "Merchant", "Vassal", "Workshop", "Moneylender", "Bandit", "Market", "Mine", "Sentry"],
        expansions: ["base"]
    },
    {
        name: "Slow And Steady",
        cards: ["Cellar", "Moat", "Village", "Gardens", "Militia", "Throne Room", "Laboratory", "Market", "Mine", "Artisan"],
        expansions: ["base"]
    },
    {
        name: "Work It Out",
        cards: ["Chapel", "Vassal", "Village", "Workshop", "Poacher", "Smithy", "Throne Room", "Festival", "Laboratory", "Market"],
        expansions: ["base"]
    },
    {
        name: "Beatdown",
        cards: ["Cellar", "Gardens", "Militia", "Moneylender", "Poacher", "Bandit", "Council Room", "Festival", "Market", "Witch"],
        expansions: ["base"]
    },
    {
        name: "Making Do",
        cards: ["Cellar", "Moat", "Merchant", "Village", "Workshop", "Militia", "Remodel", "Throne Room", "Bandit", "Festival"],
        expansions: ["base"]
    },
    {
        name: "Progression System",
        cards: ["Cellar", "Chapel", "Harbinger", "Village", "Workshop", "Bureaucrat", "Remodel", "Laboratory", "Mine", "Sentry"],
        expansions: ["base"]
    },
    {
        name: "Maintain Focus",
        cards: ["Chapel", "Village", "Workshop", "Gardens", "Militia", "Remodel", "Library", "Market", "Witch", "Artisan"],
        expansions: ["base"]
    },
    {
        name: "Kickback",
        cards: ["Courtyard", "Masquerade", "Shanty Town", "Wishing Well", "Bridge", "Ironworks", "Mining Village", "Courtier", "Replace", "Torturer"],
        expansions: ["intrigue"]
    },
    {
        name: "Change Alliegance",
        cards: ["Lurker", "Pawn", "Swindler", "Conspirator", "Mining Village", "Secret Passage", "Patrol", "Trading Post", "Upgrade", "Harem"],
        expansions: ["intrigue"]
    },
    {
        name: "Territorial Army",
        cards: ["Lurker", "Pawn", "Shanty Town", "Bridge", "Conspirator", "Courtier", "Minion", "Replace", "Upgrade", "Nobles"],
        expansions: ["intrigue"]
    },
    {
        name: "Cheat Code",
        cards: ["Pawn", "Shanty Town", "Wishing Well", "Ironworks", "Secret Passage", "Courtier", "Duke", "Trading Post", "Upgrade", "Harem"],
        expansions: ["intrigue"]
    },
    {
        name: "The Upper Crust",
        cards: ["Courtyard", "Swindler", "Baron", "Mill", "Mining Village", "Duke", "Minion", "Patrol", "Trading Post", "Nobles"],
        expansions: ["intrigue"]
    },
    {
        name: "In The Shadows",
        cards: ["Lurker", "Steward", "Baron", "Bridge", "Conspirator", "Duke", "Mill", "Replace", "Torturer", "Nobles"],
        expansions: ["intrigue"]
    },
    {
        name: "Insurance Policy",
        cards: ["Courtyard", "Masquerade", "Shanty Town", "Swindler", "Baron", "Diplomat", "Ironworks", "Mill", "Mining Village", "Harem"],
        expansions: ["intrigue"]
    },
    {
        name: "Keep Your Head Down",
        cards: ["Steward", "Baron", "Diplomat", "Ironworks", "Mill", "Secret Passage", "Minion", "Torturer", "Upgrade", "Harem"],
        expansions: ["intrigue"]
    },
    {
        name: "I Have A Bridge To Sell You",
        cards: ["Pawn", "Shanty Town", "Swindler", "Bridge", "Conspirator", "Diplomat", "Secret Passage", "Courtier", "Trading Post", "Upgrade"],
        expansions: ["intrigue"]
    },
    {
        name: "Pick Your Poison",
        cards: ["Lurker", "Steward", "Wishing Well", "Baron", "Ironworks", "Mill", "Duke", "Minion", "Patrol", "Torturer"],
        expansions: ["intrigue"]
    },
    {
        name: "Rule the Waves",
        cards: ["Native Village", "Astrolabe", "Blockade", "Caravan", "Sailor", "Treasure Map", "Bazaar", "Corsair", "Merchant Ship", "Wharf"],
        expansions: ["seaside"]
    },
    {
        name: "Coastal Bombardment",
        cards: ["Lighthouse", "Fishing Village", "Lookout", "Monkey", "Smugglers", "Island", "Salvager", "Bazaar", "Outpost", "Sea Witch"],
        expansions: ["seaside"]
    },
    {
        name: "Beach Buddies",
        cards: ["Lighthouse", "Native Village", "Warehouse", "Blockade", "Cutpurse", "Island", "Tide Pools", "Merchant Ship", "Tactician", "Treasury"],
        expansions: ["seaside"]
    },
    {
        name: "Open Seas",
        cards: ["Haven", "Astrolabe", "Fishing Village", "Monkey", "Sea Chart", "Warehouse", "Caravan", "Sailor", "Corsair", "Pirate"],
        expansions: ["seaside"]
    },
    {
        name: "Plain Sailing",
        cards: ["Sea Chart", "Smugglers", "Warehouse", "Sailor", "Tide Pools", "Bazaar", "Outpost", "Pirate", "Sea Witch", "Wharf"],
        expansions: ["seaside"]
    },
    {
        name: "The Doldrums",
        cards: ["Haven", "Fishing Village", "Lookout", "Blockade", "Cutpurse", "Island", "Treasure Map", "Corsair", "Merchant Ship", "Treasury"],
        expansions: ["seaside"]
    },
    {
        name: "Wave Machine",
        cards: ["Haven", "Lighthouse", "Astrolabe", "Lookout", "Caravan", "Cutpurse", "Tide Pools", "Treasure Map", "Corsair", "Tactician"],
        expansions: ["seaside"]
    },
    {
        name: "The Shipping Forecast",
        cards: ["Haven", "Native Village", "Lookout", "Sea Chart", "Smugglers", "Blockade", "Cutpurse", "Tide Pools", "Treasury", "Wharf"],
        expansions: ["seaside"]
    },
    {
        name: "Maritime Law",
        cards: ["Fishing Village", "Monkey", "Sea Chart", "Smugglers", "Blockade", "Island", "Salvager", "Bazaar", "Outpost", "Pirate"],
        expansions: ["seaside"]
    },
    {
        name: "Cursed Sea",
        cards: ["Native Village", "Smugglers", "Warehouse", "Caravan", "Bazaar", "Merchant Ship", "Sea Witch", "Tactician", "Treasury", "Wharf"],
        expansions: ["seaside"]
    },
    {
        name: "Soft Cap",
        cards: ["Watchtower", "Clerk", "Investment", "Monument", "Tiara", "Worker's Village", "Vault", "Grand Market", "Hoard", "Expand"],
        colony: true,
        expansions: ["prosperity"]
    },
    {
        name: "Before and After",
        cards: ["Bishop", "Quarry", "Tiara", "Charlatan", "City", "Magnate", "Mint", "War Chest", "Bank", "Peddler"],
        colony: true,
        expansions: ["prosperity"]
    },
    {
        name: "Future Imperfect",
        cards: ["Anvil", "Watchtower", "Bishop", "Clerk", "Monument", "Crystal Ball", "Mint", "Rabble", "Hoard", "Bank"],
        colony: true,
        expansions: ["prosperity"]
    },
    {
        name: "For Sale",
        cards: ["Anvil", "Investment", "Quarry", "Worker's Village", "Collection", "Rabble", "War Chest", "Grand Market", "Forge", "King's Court"],
        colony: true,
        expansions: ["prosperity"]
    },
    {
        name: "Defective Goods",
        cards: ["Watchtower", "Monument", "Worker's Village", "Charlatan", "Crystal Ball", "Magnate", "Vault", "Expand", "King's Court", "Peddler"],
        colony: true,
        expansions: ["prosperity"]
    },
    {
        name: "Interest Rates",
        cards: ["Bishop", "Clerk", "Investment", "Tiara", "City", "Crystal Ball", "Magnate", "Vault", "War Chest", "Hoard"],
        colony: true,
        expansions: ["prosperity"]
    },
    {
        name: "Low Standards",
        cards: ["Clerk", "Tiara", "Collection", "Crystal Ball", "Mint", "Rabble", "Vault", "War Chest", "Grand Market", "Peddler"],
        colony: true,
        expansions: ["prosperity"]
    },
    {
        name: "At Great Expense",
        cards: ["Anvil", "Monument", "Worker's Village", "Magnate", "Mint", "Vault", "Hoard", "Bank", "Forge", "King's Court"],
        colony: true,
        expansions: ["prosperity"]
    },
    {
        name: "The Taste of Success",
        cards: ["Bishop", "Investment", "Quarry", "City", "Collection", "Mint", "Rabble", "War Chest", "Grand Market", "Bank"],
        colony: true,
        expansions: ["prosperity"]
    },
    {
        name: "Don't Blink",
        cards: ["Anvil", "Watchtower", "Quarry", "Charlatan", "City", "Collection", "Expand", "Forge", "King's Court", "Peddler"],
        colony: true,
        expansions: ["prosperity"]
    },
    {
        name: "Meet the Neighbours",
        cards: ["Guard Dog", "Oasis", "Scheme", "Nomads", "Spice Merchant", "Haggler", "Highway", "Stables", "Wheelwright", "Border Village"],
        expansions: ["hinterlands"]
    },
    {
        name: "Medium Large",
        cards: ["Jack of all Trades", "Trader", "Trail", "Weaver", "Cartographer", "Cauldron", "Inn", "Margrave", "Witch's Hut", "Farmland"],
        expansions: ["hinterlands"]
    },
    {
        name: "The Lowlands",
        cards: ["Crossroads", "Develop", "Guard Dog", "Scheme", "Tunnel", "Spice Merchant", "Berserker", "Souk", "Wheelwright", "Border Village"],
        expansions: ["hinterlands"]
    },
    {
        name: "Serenity",
        cards: ["Fool's Gold", "Oasis", "Scheme", "Nomads", "Trader", "Trail", "Berserker", "Cartographer", "Stables", "Farmland"],
        expansions: ["hinterlands"]
    },
    {
        name: "Going the Distance",
        cards: ["Crossroads", "Scheme", "Tunnel", "Jack of all Trades", "Cartographer", "Highway", "Inn", "Souk", "Stables", "Witch's Hut"],
        expansions: ["hinterlands"]
    },
    {
        name: "Cruel or Kind?",
        cards: ["Fool's Gold", "Develop", "Scheme", "Nomads", "Cauldron", "Haggler", "Highway", "Margrave", "Souk", "Border Village"],
        expansions: ["hinterlands"]
    },
    {
        name: "Alternative Markets",
        cards: ["Crossroads", "Develop", "Guard Dog", "Spice Merchant", "Weaver", "Cauldron", "Inn", "Stables", "Wheelwright", "Farmland"],
        expansions: ["hinterlands"]
    },
    {
        name: "Jacking Up Prices",
        cards: ["Crossroads", "Oasis", "Jack of all Trades", "Nomads", "Spice Merchant", "Trader", "Haggler", "Inn", "Souk", "Wheelwright"],
        expansions: ["hinterlands"]
    },
    {
        name: "All That Glistens",
        cards: ["Fool's Gold", "Develop", "Oasis", "Jack of all Trades", "Weaver", "Cauldron", "Highway", "Inn", "Stables", "Witch's Hut"],
        expansions: ["hinterlands"]
    },
    {
        name: "Passive Aggressive",
        cards: ["Fool's Gold", "Guard Dog", "Tunnel", "Trader", "Berserker", "Cartographer", "Haggler", "Margrave", "Stables", "Border Village"],
        expansions: ["hinterlands"]
    },
    {
        name: "Rags to Riches",
        cards: ["Squire", "Market Square", "Sage", "Storeroom", "Armory", "Wandering Minstrel", "Band of Misfits", "Catacombs", "Junk Dealer", "Pillage"],
        extras: ["Shelters", "Spoils"],
        expansions: ["darkages"]
    },
    {
        name: "Party Time",
        cards: ["Vagrant", "Hermit", "Sage", "Death Cart", "Procession", "Rats", "Counterfeit", "Graverobber", "Mystic", "Hunting Grounds"],
        extras: ["Madman", "Ruins", "Shelters"],
        expansions: ["darkages"]
    },
    {
        name: "Marching Band",
        cards: ["Poor House", "Squire", "Vagrant", "Hermit", "Urchin", "Ironmonger", "Marauder", "Band of Misfits", "Count", "Hunting Grounds"],
        extras: ["Madman", "Mercenary", "Ruins", "Shelters", "Spoils"],
        expansions: ["darkages"]
    },
    {
        name: "Warzone",
        cards: ["Beggar", "Forager", "Feodum", "Fortress", "Bandit Camp", "Catacombs", "Cultist", "Knights", "Pillage", "Altar"],
        extras: ["Ruins", "Shelters", "Spoils"],
        expansions: ["darkages"]
    },
    {
        name: "Drinking the Punch",
        cards: ["Poor House", "Squire", "Storeroom", "Urchin", "Procession", "Wandering Minstrel", "Cultist", "Junk Dealer", "Rogue", "Altar"],
        extras: ["Mercenary", "Ruins", "Shelters"],
        expansions: ["darkages"]
    },
    {
        name: "Lurching Forward",
        cards: ["Poor House", "Vagrant", "Forager", "Urchin", "Armory", "Fortress", "Bandit Camp", "Count", "Counterfeit", "Mystic"],
        extras: ["Mercenary", "Shelters", "Spoils"],
        expansions: ["darkages"]
    },
    {
        name: "Rise to the Challenge",
        cards: ["Beggar", "Market Square", "Sage", "Ironmonger", "Wandering Minstrel", "Bandit Camp", "Count", "Knights", "Rebuild", "Hunting Grounds"],
        extras: ["Shelters", "Spoils"],
        expansions: ["darkages"]
    },
    {
        name: "Crazytown",
        cards: ["Forager", "Hermit", "Storeroom", "Armory", "Feodum", "Fortress", "Marauder", "Graverobber", "Pillage", "Altar"],
        extras: ["Madman", "Ruins", "Shelters", "Spoils"],
        expansions: ["darkages"]
    },
    {
        name: "High Five",
        cards: ["Squire", "Storeroom", "Death Cart", "Fortress", "Procession", "Bandit Camp", "Catacombs", "Graverobber", "Junk Dealer", "Mystic"],
        extras: ["Ruins", "Shelters", "Spoils"],
        expansions: ["darkages"]
    },
    {
        name: "Pest Control",
        cards: ["Poor House", "Squire", "Sage", "Feodum", "Rats", "Wandering Minstrel", "Band of Misfits", "Graverobber", "Knights", "Hunting Grounds"],
        extras: ["Shelters"],
        expansions: ["darkages"]
    },
    {
        name: "Basic Standards",
        cards: ["Candlestick Maker", "Masterpiece", "Farming Village", "Horse Traders", "Plaza", "Remake", "Taxman", "Baker", "Jester", "Journeyman"],
        expansions: ["cornguilds"]
    },
    {
        name: "Second Opinion",
        cards: ["Hamlet", "Doctor", "Advisor", "Farming Village", "Young Witch", "Butcher", "Horn of Plenty", "Hunting Party", "Merchant Guild", "Soothsayer", "Fairgrounds"],
        notes: "Doctor is the Bane.",
        expansions: ["cornguilds"]
    },
    {
        name: "Variety Hour",
        cards: ["Candlestick Maker", "Hamlet", "Menagerie", "Horse Traders", "Plaza", "Tournament", "Young Witch", "Baker", "Hunting Party", "Jester", "Fairgrounds"],
        extras: ["Prizes"],
        notes: "Candlestick Maker is the Bane.",
        expansions: ["cornguilds"]
    },
    {
        name: "Chaos Control",
        cards: ["Hamlet", "Stonemason", "Fortune Teller", "Menagerie", "Advisor", "Herald", "Horse Traders", "Baker", "Jester", "Merchant Guild"],
        expansions: ["cornguilds"]
    },
    {
        name: "Fine Dining",
        cards: ["Candlestick Maker", "Stonemason", "Menagerie", "Advisor", "Farming Village", "Remake", "Taxman", "Young Witch", "Horn of Plenty", "Journeyman", "Fairgrounds"],
        notes: "Menagerie is the Bane.",
        expansions: ["cornguilds"]
    },
    {
        name: "Surgery",
        cards: ["Hamlet", "Doctor", "Masterpiece", "Plaza", "Taxman", "Baker", "Butcher", "Harvest", "Hunting Party", "Journeyman"],
        expansions: ["cornguilds"]
    },
    {
        name: "Trust Issues",
        cards: ["Stonemason", "Masterpiece", "Advisor", "Farming Village", "Horse Traders", "Remake", "Tournament", "Butcher", "Horn of Plenty", "Merchant Guild"],
        extras: ["Prizes"],
        expansions: ["cornguilds"]
    },
    {
        name: "Bandaid",
        cards: ["Hamlet", "Stonemason", "Doctor", "Menagerie", "Herald", "Plaza", "Baker", "Journeyman", "Merchant Guild", "Soothsayer"],
        expansions: ["cornguilds"]
    },
    {
        name: "Hodgepodge",
        cards: ["Candlestick Maker", "Doctor", "Fortune Teller", "Farming Village", "Horse Traders", "Taxman", "Tournament", "Young Witch", "Harvest", "Jester", "Fairgrounds"],
        extras: ["Prizes"],
        notes: "Fortune Teller is the Bane.",
        expansions: ["cornguilds"]
    },
    {
        name: "Bath Time",
        cards: ["Candlestick Maker", "Fortune Teller", "Masterpiece", "Menagerie", "Remake", "Plaza", "Baker", "Hunting Party", "Jester", "Merchant Guild"],
        expansions: ["cornguilds"]
    },
    {
        name: "Going the Distance",
        cards: ["Raze", "Amulet", "Guide", "Duplicate", "Messenger", "Distant Lands", "Giant", "Lost City", "Relic", "Hireling"],
        landscapes: ["Borrow", "Expedition"],
        expansions: ["adventures"]
    },
    {
        name: "Learning New Tricks",
        cards: ["Peasant", "Caravan Guard", "Gear", "Dungeon", "Port", "Transmogrify", "Artificer", "Royal Carriage", "Swamp Hag", "Wine Merchant"],
        extras: ["Soldier", "Fugitive", "Disciple", "Teacher"],
        landscapes: ["Scouting Party", "Pilgrimage"],
        expansions: ["adventures"]
    },
    {
        name: "Pay to Win",
        cards: ["Coin of the Realm", "Ratcatcher", "Guide", "Magpie", "Messenger", "Ranger", "Bridge Troll", "Storyteller", "Treasure Trove", "Hireling"],
        landscapes: ["Trade", "Training"],
        expansions: ["adventures"]
    },
    {
        name: "Return on Investment",
        cards: ["Page", "Caravan Guard", "Dungeon", "Miser", "Ranger", "Artificer", "Distant Lands", "Haunted Woods", "Lost City", "Wine Merchant"],
        extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
        landscapes: ["Alms", "Inheritance"],
        expansions: ["adventures"]
    },
    {
        name: "Through the Undergrowth",
        cards: ["Caravan Guard", "Guide", "Duplicate", "Magpie", "Port", "Giant", "Haunted Woods", "Royal Carriage", "Treasure Trove", "Wine Merchant"],
        landscapes: ["Mission", "Seaway"],
        expansions: ["adventures"]
    },
    {
        name: "Workarounds",
        cards: ["Coin of the Realm", "Ratcatcher", "Gear", "Duplicate", "Messenger", "Port", "Transmogrify", "Artificer", "Royal Cariage", "Swamp Hag"],
        landscapes: ["Quest", "Save"],
        expansions: ["adventures"]
    },
    {
        name: "Galaxy Brain",
        cards: ["Peasant", "Raze", "Amulet", "Magpie", "Miser", "Giant", "Haunted Woods", "Relic", "Storyteller", "Hireling"],
        extras: ["Soldier", "Fugitive", "Disciple", "Teacher"],
        landscapes: ["Ferry", "Pathfinding"],
        expansions: ["adventures"]
    },
    {
        name: "Long Term Goals",
        cards: ["Coin of the Realm", "Caravan Guard", "Dungeon", "Ranger", "Transmogrify", "Artificer", "Bridge Troll", "Relic", "Royal Carriage", "Swamp Hag"],
        landscapes: ["Plan", "Lost Arts"],
        expansions: ["adventures"]
    },
    {
        name: "Escalation",
        cards: ["Page", "Ratcatcher", "Amulet", "Gear", "Magpie", "Distant Lands", "Haunted Woods", "Storyteller", "Treasure Trove", "Hireling"],
        extras: ["Treasure Hunter", "Warrior", "Hero", "Champion"],
        landscapes: ["Travelling Fair", "Bonfire"],
        expansions: ["adventures"]
    },
    {
        name: "Bargain Bin",
        cards: ["Coin of the Realm", "Raze", "Amulet", "Caravan Guard", "Dungeon", "Duplicate", "Gear", "Guide", "Messenger", "Giant"],
        landscapes: ["Ball", "Raid"],
        expansions: ["adventures"]
    },
    {
        name: "Anything Goes",
        cards: ["Royal Blacksmith", "Encampment / Plunder", "Patrician / Emporium", "Farmers' Market", "Sacrifice", "Temple", "Charm", "Crown", "Forum", "Legionary"],
        landscapes: ["Wedding", "Obelisk"],
        obelisk: "Royal Blacksmith",
        expansions: ["empires"]
    },
    {
        name: "Patience",
        cards: ["Engineer", "City Quarter", "Settlers / Bustling Village", "Catapult / Rocks", "Chariot Race", "Enchantress", "Archive", "Charm", "Forum", "Wild Hunt"],
        landscapes: ["Banquet", "Mountain Pass"],
        expansions: ["empires"]
    },
    {
        name: "By Royal Decree",
        cards: ["Overlord", "Castles", "Enchantress", "Gladiator / Fortune", "Sacrifice", "Villa", "Crown", "Groundskeeper", "Legionary", "Wild Hunt"],
        landscapes: ["Windfall", "Colonnade"],
        expansions: ["empires"]
    },
    {
        name: "Look But Don't Touch",
        cards: ["Engineer", "City Quarter", "Royal Blacksmith", "Settlers / Bustling Village", "Enchantress", "Gladiator / Fortune", "Villa", "Archive", "Charm", "Groundskeeper"],
        landscapes: ["Triumph", "Fountain"],
        expansions: ["empires"]
    },
    {
        name: "Elitist",
        cards: ["Encampment / Plunder", "Patrician / Emporium", "Castles", "Chariot Race", "Enchantress", "Sacrifice", "Capital", "Forum", "Legionary", "Wild Hunt"],
        landscapes: ["Dominate", "Labyrinth"],
        expansions: ["empires"]
    },
    {
        name: "Money Laundering",
        cards: ["City Quarter", "Overlord", "Patrician / Emporium", "Settlers / Bustling Village", "Gladiator / Fortune", "Temple", "Villa", "Capital", "Crown", "Groundskeeper"],
        landscapes: ["Advance", "Bandit Fort"],
        expansions: ["empires"]
    },
    {
        name: "Participation Trophy",
        cards: ["Engineer", "Overlord", "Encampment / Plunder", "Catapult / Rocks", "Farmers' Market", "Sacrifice", "Villa", "Archive", "Forum", "Legionary"],
        landscapes: ["Basilica", "Baths"],
        expansions: ["empires"]
    },
    {
        name: "Balance",
        cards: ["Patrician / Emporium", "Catapult / Rocks", "Chariot Race", "Enchantress", "Farmers' Market", "Sacrifice", "Villa", "Capital", "Groundskeeper", "Wild Hunt"],
        landscapes: ["Conquest", "Orchard"],
        expansions: ["empires"]
    },
    {
        name: "Dominion: Turbo Edition",
        cards: ["Engineer", "Royal Blacksmith", "Settlers / Bustling Village", "Castles", "Enchantress", "Gladiator / Fortune", "Villa", "Charm", "Crown", "Legionary"],
        landscapes: ["Donate", "Arena"],
        expansions: ["empires"]
    },
    {
        name: "Bring a Ladder",
        cards: ["Overlord", "Patrician / Emporium", "Settlers / Bustling Village", "Castles", "Farmers' Market", "Sacrifice", "Temple", "Archive", "Crown", "Wild Hunt"],
        landscapes: ["Museum", "Wall"],
        expansions: ["empires"]
    },
    {
        name: "Feeling Lucky",
        cards: ["Faithful Hound", "Monastery", "Tracker", "Fool", "Night Watchman", "Blessed Village", "Conclave", "Cobbler", "Idol", "Pooka"],
        extras: ["Pouch", "Lucky Coin", "Cursed Gold", "Boons", "Will-O'-Wisp"],
        expansions: ["nocturne"]
    },
    {
        name: "After Hours",
        cards: ["Guardian", "Ghost Town", "Leprechaun", "Blessed Village", "Devil's Workshop", "Exorcist", "Den of Sin", "Sacred Grove", "Tormentor", "Werewolf"],
        extras: ["Boons", "Hexes", "Will-O'-Wisp", "Imp", "Ghost", "Wish"],
        expansions: ["nocturne"]
    },
    {
        name: "Life's Ups and Downs",
        cards: ["Druid", "Pixie", "Changeling", "Bard", "Conclave", "Cursed Village", "Idol", "Sacred Grove", "Tragic Hero", "Raider"],
        extras: ["Goat", "Boons", "Hexes", "Will-O'-Wisp"],
        druid: ["The Field's Gift", "The River's Gift", "The Sky's Gift"],
        expansions: ["nocturne"]
    },
    {
        name: "Come Out to Play",
        cards: ["Tracker", "Ghost Town", "Changeling", "Bard", "Devil's Workshop", "Shepherd", "Skulk", "Crypt", "Vampire", "Werewolf"],
        extras: ["Pasture", "Pouch", "Boons", "Hexes", "Will-O'-Wisp", "Imp", "Bat"],
        expansions: ["nocturne"]
    },
    {
        name: "In Memoriam",
        cards: ["Faithful Hound", "Monastery", "Blessed Village", "Cemetary", "Necromancer", "Cobbler", "Den of Sin", "Tragic Hero", "Vampire", "Raider"],
        extras: ["Haunted Mirror", "Boons", "Will-O'-Wisp", "Ghost", "Bat", "Zombie Apprentice", "Zombie Mason", "Zombie Spy"],
        expansions: ["nocturne"]
    },
    {
        name: "Lazy Town",
        cards: ["Guardian", "Monastery", "Night Watchman", "Secret Cave", "Skulk", "Crypt", "Den of Sin", "Pooka", "Tormentor", "Werewolf"],
        extras: ["Magic Lamp", "Cursed Gold", "Hexes", "Wish", "Imp"],
        expansions: ["nocturne"]
    },
    {
        name: "Subdued",
        cards: ["Pixie", "Tracker", "Leprechaun", "Blessed Village", "Necromancer", "Shepherd", "Skulk", "Den of Sin", "Idol", "Vampire"],
        extras: ["Goat", "Pasture", "Pouch", "Boons", "Hexes", "Will-O'-Wisp", "Wish", "Bat", "Zombie Apprentice", "Zombie Mason", "Zombie Spy"],
        expansions: ["nocturne"]
    },
    {
        name: "Looks Can Be Deceiving",
        cards: ["Faithful Hound", "Changeling", "Fool", "Ghost Town", "Bard", "Exorcist", "Crypt", "Pooka", "Sacred Grove", "Tormentor"],
        extras: ["Lucky Coin", "Cursed Gold", "Boons", "Hexes", "Will-O'-Wisp", "Imp", "Ghost"],
        expansions: ["nocturne"]
    },
    {
        name: "Factory Method",
        cards: ["Druid", "Guardian", "Tracker", "Night Watchman", "Cemetary", "Conclave", "Shepherd", "Skulk", "Cobbler", "Werewolf"],
        extras: ["Haunted Mirror", "Pasture", "Pouch", "Boons", "Hexes", "Will-O'-Wisp", "Ghost"],
        druid: ["The Forest's Gift", "The Swamp's Gift", "The Wind's Gift"],
        expansions: ["nocturne"]
    },
    {
        name: "High Spirits",
        cards: ["Changeling", "Leprechaun", "Secret Cave", "Cemetary", "Devil's Workshop", "Exorcist", "Necromancer", "Cursed Village", "Idol", "Sacred Grove"],
        extras: ["Haunted Mirror", "Magic Lamp", "Boons", "Hexes", "Will-O'-Wisp", "Imp", "Ghost", "Wish", "Zombie Apprentice", "Zombie Mason", "Zombie Spy"],
        expansions: ["nocturne"]
    },
    {
        name: "A New Age",
        cards: ["Lackeys", "Cargo Ship", "Experiment", "Improve", "Flag Bearer", "Mountain Village", "Priest", "Sculptor", "Spices", "Villain"],
        extras: ["Flag"],
        landscapes: ["Fair", "Sinister Plot"],
        expansions: ["renaissance"]
    },
    {
        name: "Every Little Helps",
        cards: ["Ducat", "Acting Troupe", "Cargo Ship", "Hideout", "Silk Merchant", "Old Witch", "Scepter", "Sculptor", "Seer", "Treasurer"],
        extras: ["Key"],
        landscapes: ["Canal", "Pageant"],
        expansions: ["renaissance"]
    },
    {
        name: "Deja Vu",
        cards: ["Border Guard", "Acting Troupe", "Experiment", "Improve", "Inventor", "Mountain Village", "Research", "Silk Merchant", "Scholar", "Villain"],
        extras: ["Horn", "Lantern"],
        landscapes: ["City Gate", "Silos"],
        expansions: ["renaissance"]
    },
    {
        name: "Starch Art",
        cards: ["Border Guard", "Ducat", "Lackeys", "Hideout", "Patron", "Priest", "Recruiter", "Scholar", "Spices", "Swashbuckler"],
        extras: ["Horn", "Lantern", "Treasure Chest"],
        landscapes: ["Fleet", "Star Chart"],
        expansions: ["renaissance"]
    },
    {
        name: "Offering",
        cards: ["Ducat", "Acting Troupe", "Cargo Ship", "Improve", "Inventor", "Patron", "Scepter", "Seer", "Swashbuckler", "Villain"],
        extras: ["Treasure Chest"],
        landscapes: ["Cathedral", "Crop Rotation"],
        expansions: ["renaissance"]
    },
    {
        name: "The Villager People",
        cards: ["Border Guard", "Lackeys", "Improve", "Flag Bearer", "Silk Merchant", "Old Witch", "Recruiter", "Scepter", "Sculptor", "Treasurer"],
        extras: ["Horn", "Lantern", "Flag", "Key"],
        landscapes: ["Piazza", "Road Network"],
        expansions: ["renaissance"]
    },
    {
        name: "Unlocked Knowledge",
        cards: ["Lackeys", "Experiment", "Flag Bearer", "Hideout", "Mountain Village", "Research", "Scholar", "Seer", "Spices", "Treasurer"],
        extras: ["Flag", "Key"],
        landscapes: ["Barracks", "Sewers"],
        expansions: ["renaissance"]
    },
    {
        name: "Hoarder",
        cards: ["Ducat", "Acting Troupe", "Cargo Ship", "Experiment", "Mountain Village", "Priest", "Recruiter", "Scepter", "Scholar", "Villain"],
        landscapes: ["Citadel", "Guildhall"],
        expansions: ["renaissance"]
    },
    {
        name: "Funny Money",
        cards: ["Border Guard", "Ducat", "Flag Bearer", "Hideout", "Patron", "Priest", "Research", "Old Witch", "Swashbuckler", "Treasurer"],
        extras: ["Horn", "Lantern", "Flag", "Treasure Chest", "Key"],
        landscapes: ["Capitalism", "Exploration"],
        expansions: ["renaissance"]
    },
    {
        name: "Gainsville",
        cards: ["Experiment", "Flag Bearer", "Hideout", "Patron", "Research", "Silk Merchant", "Old Witch", "Sculptor", "Spices", "Swashbuckler"],
        extras: ["Flag", "Treasure Chest"],
        landscapes: ["Academy", "Innovation"],
        expansions: ["renaissance"]
    },
    {
        name: "Hop to It",
        cards: ["Supplies", "Scrap", "Sheepdog", "Snowy Village", "Hostelry", "Barge", "Displace", "Fisherman", "Paddock", "Wayfarer"],
        extras: ["Horse"],
        landscapes: ["Bargain", "Way of the Frog"],
        expansions: ["menagerie"]
    },
    {
        name: "Give A Hoot",
        cards: ["Camel Train", "Goatherd", "Bounty Hunter", "Cardinal", "Groom", "Village Green", "Coven", "Hunting Lodge", "Kiln", "Animal Fair"],
        extras: ["Horse"],
        landscapes: ["March", "Way of the Owl"],
        expansions: ["menagerie"]
    },
    {
        name: "Karma",
        cards: ["Sleigh", "Supplies", "Sheepdog", "Stockpile", "Cavalry", "Falconer", "Gatekeeper", "Livery", "Paddock", "Sanctuary"],
        extras: ["Horse"],
        landscapes: ["Toil", "Way of the Chameleon"],
        expansions: ["menagerie"]
    },
    {
        name: "Unleash the Power Within",
        cards: ["Black Cat", "Camel Train", "Sheepdog", "Bounty Hunter", "Cardinal", "Displace", "Falconer", "Kiln", "Mastermind", "Animal Fair"],
        landscapes: ["Delay", "Way of the Pig"],
        expansions: ["menagerie"]
    },
    {
        name: "Herd Immunity",
        cards: ["Black Cat", "Goatherd", "Groom", "Hostelry", "Village Green", "Fisherman", "Kiln", "Livery", "Paddock", "Destrier"],
        extras: ["Horse"],
        landscapes: ["Alliance", "Way of the Seal"],
        expansions: ["menagerie"]
    },
    {
        name: "Card Printer",
        cards: ["Black Cat", "Sleigh", "Scrap", "Snowy Village", "Village Green", "Barge", "Falconer", "Mastermind", "Sanctuary", "Destrier"],
        extras: ["Horse"],
        landscapes: ["Commerce", "Way of the Rat"],
        expansions: ["menagerie"]
    },
    {
        name: "Olly Olly Oxen Free",
        cards: ["Sleigh", "Supplies", "Camel Train", "Cardinal", "Cavalry", "Coven", "Barge", "Fisherman", "Livery", "Animal Fair"],
        extras: ["Horse"],
        landscapes: ["Enhance", "Way of the Ox"],
        expansions: ["menagerie"]
    },
    {
        name: "Monkey Seize Monkey Does",
        cards: ["Supplies", "Goatherd", "Stockpile", "Groom", "Hostelry", "Displace", "Gatekeeper", "Hunting Lodge", "Mastermind", "Wayfarer"],
        extras: ["Horse"],
        landscapes: ["Seize the Day", "Way of the Monkey"],
        expansions: ["menagerie"]
    },
    {
        name: "Switch On",
        cards: ["Sleigh", "Camel Train", "Scrap", "Sheepdog", "Coven", "Displace", "Hunting Lodge", "Paddock", "Destrier", "Animal Fair"],
        extras: ["Horse"],
        landscapes: ["Banish", "Way of the Worm"],
        expansions: ["menagerie"]
    },
    {
        name: "Snowed In",
        cards: ["Black Cat", "Snowy Village", "Stockpile", "Bounty Hunter", "Fisherman", "Kiln", "Livery", "Paddock", "Sanctuary", "Animal Fair"],
        extras: ["Horse"],
        landscapes: ["Stampede", "Way of the Horse"],
        expansions: ["menagerie"]
    },
    {
        name: "Hobby Shop",
        cards: ["Village", "Workshop", "Militia", "Throne Room", "Mine", "Courtyard", "Mill", "Patrol", "Replace", "Trading Post"],
        expansions: ["base", "intrigue"]
    },
    {
        name: "Gee Whiz",
        cards: ["Cellar", "Vassal", "Village", "Moneylender", "Artisan", "Wishing Well", "Baron", "Conspirator", "Diplomat", "Minion"],
        expansions: ["base", "intrigue"]
    },
    {
        name: "Roguelike",
        cards: ["Chapel", "Poacher", "Remodel", "Library", "Market", "Lurker", "Shanty Town", "Swindler", "Courtier", "Nobles"],
        expansions: ["base", "intrigue"]
    },
    {
        name: "Carnival",
        cards: ["Merchant", "Workshop", "Council Room", "Festival", "Sentry", "Masquerade", "Shanty Town", "Conspirator", "Diplomat", "Courtier"],
        expansions: ["base", "intrigue"]
    },
    {
        name: "Oh Green World",
        cards: ["Harbinger", "Bureaucrat", "Gardens", "Witch", "Artisan", "Steward", "Mill", "Duke", "Patrol", "Nobles"],
        expansions: ["base", "intrigue"]
    },
    {
        name: "Obselescence",
        cards: ["Moat", "Village", "Poacher", "Bandit", "Laboratory", "Pawn", "Ironworks", "Torturer", "Upgrade", "Harem"],
        expansions: ["base", "intrigue"]
    },
    {
        name: "Four Play",
        cards: ["Chapel", "Bureaucrat", "Militia", "Smithy", "Throne Room", "Baron", "Conspirator", "Mining Village", "Secret Passage", "Upgrade"],
        expansions: ["base", "intrigue"]
    },
    {
        name: "Double-Crossing",
        cards: ["Moat", "Vassal", "Throne Room", "Market", "Sentry", "Pawn", "Swindler", "Bridge", "Diplomat", "Secret Passage"],
        expansions: ["base", "intrigue"]
    },
    {
        name: "Keep the Change",
        cards: ["Moat", "Militia", "Council Room", "Festival", "Witch", "Lurker", "Steward", "Mining Village", "Upgrade", "Harem"],
        expansions: ["base", "intrigue"]
    },
    {
        name: "Solo",
        cards: ["Vassal", "Gardens", "Remodel", "Laboratory", "Market", "Masquerade", "Wishing Well", "Bridge", "Mill", "Courtier"],
        expansions: ["base", "intrigue"]
    },
    {
        name: "Sunken Treasure",
        cards: ["Village", "Bureaucrat", "Moneylender", "Smithy", "Bandit", "Native Village", "Astrolabe", "Treasure Map", "Corsair", "Pirate"],
        expansions: ["base", "seaside"]
    },
    {
        name: "Speed Boats",
        cards: ["Militia", "Remodel", "Throne Room", "Festival", "Mine", "Haven", "Lighthouse", "Fishing Village", "Warehouse", "Wharf"],
        expansions: ["base", "seaside"]
    },
    {
        name: "Wade Through the Wreckage",
        cards: ["Cellar", "Moat", "Gardens", "Market", "Artisan", "Caravan", "Tide Pools", "Bazaar", "Outpost", "Sea Witch"],
        expansions: ["base", "seaside"]
    },
    {
        name: "Row Blocks",
        cards: ["Harbinger", "Merchant", "Village", "Festival", "Sentry", "Lookout", "Monkey", "Sea Chart", "Blockade", "Cutpurse"],
        expansions: ["base", "seaside"]
    },
    {
        name: "Nothing to Declare",
        cards: ["Chapel", "Poacher", "Council Room", "Laboratory", "Witch", "Fishing Village", "Smugglers", "Island", "Salvager", "Treasury"],
        expansions: ["base", "seaside"]
    },
    {
        name: "Setting Sail",
        cards: ["Cellar", "Harbinger", "Vassal", "Workshop", "Festival", "Native Village", "Sailor", "Bazaar", "Merchant Ship", "Tactician"],
        expansions: ["base", "seaside"]
    },
    {
        name: "Diversion",
        cards: ["Village", "Remodel", "Bandit", "Library", "Sentry", "Haven", "Native Village", "Astrolabe", "Blockade", "Corsair"],
        expansions: ["base", "seaside"]
    },
    {
        name: "Boats in Moats",
        cards: ["Moat", "Workshop", "Market", "Witch", "Artisan", "Monkey", "Smugglers", "Island", "Bazaar", "Wharf"],
        expansions: ["base", "seaside"]
    },
    {
        name: "Knowledge is Quay",
        cards: ["Chapel", "Bureaucrat", "Remodel", "Library", "Mine", "Lighthouse", "Astrolabe", "Fishing Village", "Tide Pools", "Sea Witch"],
        expansions: ["base", "seaside"]
    },
    {
        name: "Forward Planning",
        cards: ["Village", "Gardens", "Militia", "Throne Room", "Laboratory", "Sailor", "Salvager", "Outpost", "Pirate", "Tactician"],
        expansions: ["base", "seaside"]
    },
    {
        name: "Morning Cuppa",
        cards: ["Cellar", "University", "Harbinger", "Merchant", "Militia", "Smithy", "Golem", "Laboratory", "Market", "Sentry"],
        extras: ["Potion"],
        expansions: ["base", "alchemy"]
    },
    {
        name: "Grape Expectations",
        cards: ["Transmute", "Vineyard", "Cellar", "Scrying Pool", "Workshop", "Poacher", "Throne Room", "Bandit", "Festival", "Market"],
        extras: ["Potion"],
        expansions: ["base", "alchemy"]
    },
    {
        name: "Advance Party",
        cards: ["Cellar", "Apothecary", "Vassal", "Village", "Gardens", "Poacher", "Apprentice", "Council Room", "Laboratory", "Witch"],
        extras: ["Potion"],
        expansions: ["base", "alchemy"]
    },
    {
        name: "Handle With Care",
        cards: ["Chapel", "Herbalist", "Merchant", "Alchemist", "Bureaucrat", "Remodel", "Golem", "Laboratory", "Witch", "Artisan"],
        extras: ["Potion"],
        expansions: ["base", "alchemy"]
    },
    {
        name: "Now Or Later",
        cards: ["Vineyard", "Moat", "Village", "Workshop", "Familiar", "Militia", "Remodel", "Council Room", "Mine", "Sentry"],
        extras: ["Potion"],
        expansions: ["base", "alchemy"]
    },
    {
        name: "Forgetfulness",
        cards: ["Apothecary", "Merchant", "Village", "Moneylender", "Apprentice", "Bandit", "Market", "Sentry", "Witch", "Possession"],
        extras: ["Potion"],
        expansions: ["base", "alchemy"]
    },
    {
        name: "The Great Outdoors",
        cards: ["University", "Harbinger", "Vassal", "Gardens", "Poacher", "Throne Room", "Apprentice", "Festival", "Library", "Mine"],
        extras: ["Potion"],
        expansions: ["base", "alchemy"]
    },
    {
        name: "Too Efficient",
        cards: ["Cellar", "Chapel", "Moat", "Apothecary", "Scrying Pool", "Merchant", "Remodel", "Golem", "Bandit", "Witch"],
        extras: ["Potion"],
        expansions: ["base", "alchemy"]
    },
    {
        name: "Total Recall",
        cards: ["Transmute", "Herbalist", "Harbinger", "Familiar", "Philosopher's Stone", "Bureaucrat", "Gardens", "Militia", "Festival", "Mine"],
        extras: ["Potion"],
        expansions: ["base", "alchemy"]
    },
    {
        name: "Rube Goldberg Machine",
        cards: ["Chapel", "Vassal", "Workshop", "Alchemist", "Militia", "Smithy", "Throne Room", "Golem", "Market", "Sentry"],
        extras: ["Potion"],
        expansions: ["base", "alchemy"]
    },
    {
        name: "I Didn't Want It Anyway",
        cards: ["Militia", "Throne Room", "Bandit", "Laboratory", "Sentry", "Bishop", "Worker's Village", "Magnate", "War Chest", "Grand Market"],
        colony: true,
        expansions: ["base", "prosperity"]
    },
    {
        name: "Runaway Inflation",
        cards: ["Chapel", "Vassal", "Workshop", "Poacher", "Festival", "Watchtower", "Monument", "City", "Collection", "Expand"],
        colony: true,
        expansions: ["base", "prosperity"]
    },
    {
        name: "Reduce, Reuse, Recycle",
        cards: ["Moat", "Village", "Moneylender", "Mine", "Witch", "Anvil", "Tiara", "Charlatan", "Hoard", "Bank"],
        colony: true,
        expansions: ["base", "prosperity"]
    },
    {
        name: "Con Artist",
        cards: ["Merchant", "Gardens", "Library", "Market", "Artisan", "Quarry", "Crystal Ball", "Vault", "King's Court", "Peddler"],
        colony: true,
        expansions: ["base", "prosperity"]
    },
    {
        name: "Rewind",
        cards: ["Merchant", "Village", "Workshop", "Council Room", "Festival", "Clerk", "Magnate", "War Chest", "Hoard", "Forge"],
        colony: true,
        expansions: ["base", "prosperity"]
    },
    {
        name: "Back to Basics",
        cards: ["Cellar", "Harbinger", "Militia", "Remodel", "Smithy", "Tiara", "Worker's Vilage", "City", "Mint", "Rabble"],
        colony: true,
        expansions: ["base", "prosperity"]
    },
    {
        name: "Market Squared",
        cards: ["Vassal", "Moneylender", "Poacher", "Market", "Sentry", "Investment", "Quarry", "Charlatan", "Grand Market", "Expand"],
        colony: true,
        expansions: ["base", "prosperity"]
    },
    {
        name: "Stop and Swap",
        cards: ["Cellar", "Harbinger", "Bureaucrat", "Laboratory", "Mine", "Bishop", "Investment", "Worker's Village", "Collection", "Crystal Ball"],
        colony: true,
        expansions: ["base", "prosperity"]
    },
    {
        name: "Security Flaw",
        cards: ["Cellar", "Village", "Bandit", "Festival", "Witch", "Anvil", "Watchtower", "Monument", "King's Court", "Peddler"],
        colony: true,
        expansions: ["base", "prosperity"]
    },
    {
        name: "Seeing Double",
        cards: ["Moat", "Militia", "Remodel", "Throne Room", "Sentry", "Tiara", "Rabble", "Hoard", "Bank", "Peddler"],
        colony: true,
        expansions: ["base", "prosperity"]
    },
    {
        name: "Chop and Change",
        cards: ["Gardens", "Remodel", "Bandit", "Market", "Sentry", "Crossroads", "Fool's Gold", "Stables", "Witch's Hut", "Farmland"],
        expansions: ["base", "hinterlands"]
    },
    {
        name: "Underground Network",
        cards: ["Cellar", "Merchant", "Poacher", "Smithy", "Mine", "Develop", "Nomads", "Trail", "Weaver", "Cauldron"],
        expansions: ["base", "hinterlands"]
    },
    {
        name: "The Long Long Road",
        cards: ["Moat", "Village", "Bureaucrat", "Witch", "Artisan", "Crossroads", "Oasis", "Spice Merchant", "Cartographer", "Highway"],
        expansions: ["base", "hinterlands"]
    },
    {
        name: "Tough Love",
        cards: ["Vassal", "Village", "Moneylender", "Council Room", "Festival", "Scheme", "Cauldron", "Haggler", "Souk", "Farmland"],
        expansions: ["base", "hinterlands"]
    },
    {
        name: "Bulging Veins",
        cards: ["Chapel", "Harbinger", "Throne Room", "Laboratory", "Library", "Guard Dog", "Tunnel", "Nomads", "Berserker", "Inn"],
        expansions: ["base", "hinterlands"]
    },
    {
        name: "The Great Outdoors",
        cards: ["Cellar", "Harbinger", "Gardens", "Bandit", "Market", "Develop", "Trader", "Weaver", "Stables", "Border Village"],
        expansions: ["base", "hinterlands"]
    },
    {
        name: "Rollercoaster",
        cards: ["Vassal", "Militia", "Festival", "Laboratory", "Artisan", "Oasis", "Scheme", "Jack of all Trades", "Spice Merchant", "Wheelwright"],
        expansions: ["base", "hinterlands"]
    },
    {
        name: "Slim Pickings",
        cards: ["Chapel", "Moat", "Smithy", "Throne Room", "Bandit", "Fool's Gold", "Scheme", "Nomads", "Berserker", "Inn"],
        expansions: ["base", "hinterlands"]
    },
    {
        name: "Your Deck Souks",
        cards: ["Village", "Bureaucrat", "Poacher", "Market", "Witch", "Crossroads", "Guard Dog", "Tunnel", "Souk", "Farmland"],
        expansions: ["base", "hinterlands"]
    },
    {
        name: "Building an Empire",
        cards: ["Harbinger", "Bureaucrat", "Poacher", "Remodel", "Market", "Royal Blacksmith", "Settlers / Bustling Village", "Enchantress", "Villa", "Groundskeeper"],
        landscapes: ["Ritual", "Tomb"],
        expansions: ["base", "empires"]
    },
    {
        name: "Welcome Your New Overlords",
        cards: ["Vassal", "Village", "Moneylender", "Library", "Artisan", "Overlord", "Patrician / Emporium", "Capital", "Forum", "Legionary"],
        landscapes: ["Tax", "Triumphal Arch"],
        expansions: ["base", "empires"]
    },
    {
        name: "Wacky Races",
        cards: ["Moat", "Militia", "Smithy", "Throne Room", "Witch", "Engineer", "Settlers / Bustling Village", "Chariot Race", "Sacrifice", "Archive"],
        landscapes: ["Museum", "Tower"],
        expansions: ["base", "empires"]
    },
    {
        name: "Yellow and Green",
        cards: ["Chapel", "Bureaucrat", "Gardens", "Council Room", "Mine", "Encampment / Plunder", "Castles", "Farmers' Market", "Crown", "Groundskeeper"],
        landscapes: ["Battlefield", "Salt the Earth"],
        expansions: ["base", "empires"]
    },
    {
        name: "Grand Feast",
        cards: ["Cellar", "Harbinger", "Festival", "Market", "Mine", "Castles", "Archive", "Forum", "Legionary", "Wild Hunt"],
        landscapes: ["Banquet", "Palace"],
        expansions: ["base", "empires"]
    },
    {
        name: "Preparations",
        cards: ["Merchant", "Workshop", "Festival", "Library", "Sentry", "Chariot Race", "Enchantress", "Farmers' Market", "Gladiator / Fortune", "Villa"],
        landscapes: ["Conquest", "Defiled Shrine"],
        expansions: ["base", "empires"]
    },
    {
        name: "Most Treasured Engine",
        cards: ["Chapel", "Remodel", "Bandit", "Laboratory", "Witch", "City Quarter", "Encampment / Plunder", "Gladiator / Fortune", "Charm", "Crown"],
        landscapes: ["Delve", "Keep"],
        expansions: ["base", "empires"]
    },
    {
        name: "Pile Trial",
        cards: ["Vassal", "Village", "Militia", "Council Room", "Artisan", "Engineer", "Patrician / Emporium", "Temple", "Capital", "Crown"],
        landscapes: ["Annex", "Wolf Den"],
        expansions: ["base", "empires"]
    },
    {
        name: "Limited Arsenal",
        cards: ["Moat", "Gardens", "Poacher", "Laboratory", "Witch", "Overlord", "Catapult / Rocks", "Charm", "Groundskeeper", "Legionary"],
        landscapes: ["Aqueduct", "Colonnade"],
        expansions: ["base", "empires"]
    },
    {
        name: "Another Way",
        cards: ["Village", "Workshop", "Moneylender", "Festival", "Market", "Encampment / Plunder", "Patrician / Emporium", "Enchantress", "Sacrifice", "Wild Hunt"],
        landscapes: ["Bandit Fort", "Wall"],
        expansions: ["base", "empires"]
    },
    {
        name: "Cursed Quarter",
        cards: ["Courtyard", "Pawn", "Shanty Town", "Conspirator", "Torturer", "Engineer", "City Quarter", "Settlers / Bustling Village", "Castles", "Sacrifice"],
        landscapes: ["Baths", "Defiled Shrine"],
        expansions: ["intrigue", "empires"]
    },
    {
        name: "Big Daddies",
        cards: ["Swindler", "Ironworks", "Mining Village", "Courtier", "Upgrade", "Overlord", "Royal Blacksmith", "Villa", "Forum", "Legionary"],
        landscapes: ["Aqueduct", "Dominate"],
        expansions: ["intrigue", "empires"]
    },
    {
        name: "Long Distance Negotiations",
        cards: ["Bridge", "Diplomat", "Minion", "Trading Post", "Nobles", "Settlers / Bustling Village", "Chariot Race", "Enchantress", "Crown", "Forum"],
        landscapes: ["Basilica", "Wolf Den"],
        expansions: ["intrigue", "empires"]
    },
    {
        name: "Book Burning",
        cards: ["Lurker", "Wishing Well", "Conspirator", "Mill", "Harem", "Patrician / Emporium", "Castles", "Farmers' Market", "Temple", "Archive"],
        landscapes: ["Arena", "Tomb"],
        expansions: ["intrigue", "empires"]
    },
    {
        name: "Bombardment",
        cards: ["Masquerade", "Shanty Town", "Secret Passage", "Patrol", "Nobles", "Engineer", "Catapult / Rocks", "Enchantress", "Gladiator / Fortune", "Charm"],
        landscapes: ["Conquest", "Tower"],
        expansions: ["intrigue", "empires"]
    },
    {
        name: "Small Packages",
        cards: ["Swindler", "Wishing Well", "Duke", "Replace", "Harem", "Patrician / Emporium", "Villa", "Capital", "Forum", "Wild Hunt"],
        landscapes: ["Delve", "Fountain"],
        expansions: ["intrigue", "empires"]
    },
    {
        name: "Landlords",
        cards: ["Steward", "Baron", "Mining Village", "Courtier", "Nobles", "Enchantress", "Villa", "Crown", "Groundskeeper", "Wild Hunt"],
        landscapes: ["Obelisk", "Triumph"],
        obelisk: "Crown",
        expansions: ["intrigue", "empires"]
    },
    {
        name: "Upper Management",
        cards: ["Pawn", "Masquerade", "Bridge", "Ironworks", "Nobles", "Encampment / Plunder", "Chariot Race", "Temple", "Archive", "Groundskeeper"],
        landscapes: ["Museum", "Wedding"],
        expansions: ["intrigue", "empires"]
    },
    {
        name: "Corruption",
        cards: ["Courtyard", "Ironworks", "Mining Village", "Minion", "Trading Post", "City Quarter", "Overlord", "Castles", "Chariot Race", "Wild Hunt"],
        landscapes: ["Tax", "Triumphal Arch"],
        expansions: ["intrigue", "empires"]
    },
    {
        name: "Matchmakers",
        cards: ["Shanty Town", "Baron", "Conspirator", "Secret Passage", "Duke", "Royal Blacksmith", "Encampment / Plunder", "Enchantress", "Gladiator / Fortune", "Archive"],
        landscapes: ["Labyrinth", "Orchard"],
        expansions: ["intrigue", "empires"]
    },
    {
        name: "Remote Territory",
        cards: ["Baron", "Secret Passage", "Courtier", "Trading Post", "Harem", "Native Village", "Monkey", "Smugglers", "Corsair", "Treasury"],
        expansions: ["intrigue", "seaside"]
    },
    {
        name: "Investigation",
        cards: ["Courtyard", "Swindler", "Conspirator", "Torturer", "Nobles", "Lighthouse", "Astrolabe", "Lookout", "Warehouse", "Bazaar"],
        expansions: ["intrigue", "seaside"]
    },
    {
        name: "The Navigator",
        cards: ["Bridge", "Ironworks", "Mining Village", "Duke", "Patrol", "Fishing Village", "Sea Chart", "Island", "Sailor", "Pirate"],
        expansions: ["intrigue", "seaside"]
    },
    {
        name: "Keeping Above Water",
        cards: ["Pawn", "Masquerade", "Shanty Town", "Mill", "Minion", "Lighthouse", "Blockade", "Salvager", "Tide Pools", "Sea Witch"],
        expansions: ["intrigue", "seaside"]
    },
    {
        name: "Undercover",
        cards: ["Lurker", "Steward", "Baron", "Conspirator", "Replace", "Haven", "Bazaar", "Merchant Ship", "Outpost", "Tactician"],
        expansions: ["intrigue", "seaside"]
    },
    {
        name: "Officer's Mess",
        cards: ["Pawn", "Swindler", "Wishing Well", "Diplomat", "Duke", "Blockade", "Island", "Sailor", "Treasure Map", "Treasury"],
        expansions: ["intrigue", "seaside"]
    },
    {
        name: "Sea Monsters",
        cards: ["Mining Village", "Secret Passage", "Replace", "Torturer", "Nobles", "Smugglers", "Warehouse", "Caravan", "Corsair", "Wharf"],
        expansions: ["intrigue", "seaside"]
    },
    {
        name: "Submarine",
        cards: ["Wishing Well", "Diplomat", "Ironworks", "Upgrade", "Harem", "Astrolabe", "Tide Pools", "Merchant Ship", "Outpost", "Pirate"],
        expansions: ["intrigue", "seaside"]
    },
    {
        name: "Banished",
        cards: ["Wishing Well", "Mill", "Courtier", "Duke", "Patrol", "Haven", "Native Village", "Blockade", "Island", "Sea Witch"],
        expansions: ["intrigue", "seaside"]
    },
    {
        name: "Sea Shanty",
        cards: ["Shanty Town", "Bridge", "Minion", "Trading Post", "Nobles", "Haven", "Monkey", "Cutpurse", "Treasure Map", "Wharf"],
        expansions: ["intrigue", "seaside"]
    },
    {
        name: "Capital Gains",
        cards: ["Lookout", "Monkey", "Sea Chart", "Smugglers", "Treasure Map", "Engineer", "Encampment / Plunder", "Villa", "Capital", "Wild Hunt"],
        landscapes: ["Palace", "Triumph"],
        expansions: ["seaside", "empires"]
    },
    {
        name: "From Humble Beginnings",
        cards: ["Native Village", "Astrolabe", "Blockade", "Island", "Wharf", "City Quarter", "Patrician / Emporium", "Catapult / Rocks", "Enchantress", "Groundskeeper"],
        landscapes: ["Advance", "Battlefield"],
        expansions: ["seaside", "empires"]
    },
    {
        name: "Royal Heist",
        cards: ["Haven", "Cutpurse", "Bazaar", "Pirate", "Sea Witch", "Royal Blacksmith", "Farmers' Market", "Sacrifice", "Charm", "Crown"],
        landscapes: ["Aqueduct", "Tower"],
        expansions: ["seaside", "empires"]
    },
    {
        name: "Take the Risk",
        cards: ["Fishing Village", "Lookout", "Warehouse", "Tide Pools", "Corsair", "Settlers / Bustling Village", "Chariot Race", "Gladiator / Fortune", "Archive", "Legionary"],
        landscapes: ["Dominate", "Museum"],
        expansions: ["seaside", "empires"]
    },
    {
        name: "Admirals",
        cards: ["Sea Chart", "Island", "Salvager", "Bazaar", "Wharf", "Engineer", "Overlord", "Castles", "Gladiator / Fortune", "Forum"],
        landscapes: ["Colonnade", "Wedding"],
        expansions: ["seaside", "empires"]
    },
    {
        name: "Changing Tides",
        cards: ["Lighthouse", "Astrolabe", "Smugglers", "Sailor", "Tactician", "Patrician / Emporium", "Temple", "Villa", "Capital", "Legionary"],
        landscapes: ["Arena", "Windfall"],
        expansions: ["seaside", "empires"]
    },
    {
        name: "Anti-Competitive Practice",
        cards: ["Haven", "Native Village", "Sea Chart", "Cutpurse", "Outpost", "Patrician / Emporium", "Chariot Race", "Enchantress", "Archive", "Crown"],
        landscapes: ["Bandit Fort", "Wolf Den"],
        expansions: ["seaside", "empires"]
    },
    {
        name: "Sea of Copper",
        cards: ["Astrolabe", "Warehouse", "Tide Pools", "Merchant Ship", "Treasury", "Enchantress", "Sacrifice", "Charm", "Forum", "Legionary"],
        landscapes: ["Annex", "Fountain"],
        expansions: ["seaside", "empires"]
    },
    {
        name: "Score and Draw",
        cards: ["Lighthouse", "Fishing Village", "Monkey", "Pirate", "Sea Witch", "Royal Blacksmith", "Encampment / Plunder", "Catapult / Rocks", "Farmers' Market", "Groundskeeper"],
        landscapes: ["Conquest", "Delve"],
        expansions: ["seaside", "empires"]
    },
    {
        name: "The Aristocrats",
        cards: ["Shanty Town", "Secret Passage", "Patrol", "Trading Post", "Nobles", "Monument", "Quarry", "Tiara", "Bank", "Expand"],
        colony: true,
        expansions: ["intrigue", "prosperity"]
    },
    {
        name: "Jester Imposter",
        cards: ["Lurker", "Steward", "Swindler", "Conspirator", "Mill", "Anvil", "Watchtower", "Bishop", "Worker's Village", "King's Court"],
        colony: true,
        expansions: ["intrigue", "prosperity"]
    },
    {
        name: "Stuck in the Mud",
        cards: ["Masquerade", "Diplomat", "Replace", "Torturer", "Harem", "Clerk", "Charlatan", "Mint", "War Chest", "Hoard"],
        colony: true,
        expansions: ["intrigue", "prosperity"]
    },
    {
        name: "Changing Priorities",
        cards: ["Pawn", "Bridge", "Ironworks", "Mining Village", "Minion", "Watchtower", "Quarry", "City", "Forge", "Peddler"],
        colony: true,
        expansions: ["intrigue", "prosperity"]
    },
    {
        name: "Fundraising Party",
        cards: ["Courtyard", "Masquerade", "Mill", "Secret Passage", "Minion", "Investment", "Tiara", "Collection", "Crystal Ball", "Grand Market"],
        colony: true,
        expansions: ["intrigue", "prosperity"]
    },
    {
        name: "Rise Through the Ranks",
        cards: ["Wishing Well", "Conspirator", "Diplomat", "Courtier", "Upgrade", "Bishop", "War Chest", "Grand Market", "King's Court", "Peddler"],
        colony: true,
        expansions: ["intrigue", "prosperity"]
    },
    {
        name: "It Adds Up",
        cards: ["Courtyard", "Baron", "Mining Village", "Trading Post", "Harem", "Anvil", "Magnate", "Vault", "Hoard", "Expand"],
        colony: true,
        expansions: ["intrigue", "prosperity"]
    },
    {
        name: "Luddites",
        cards: ["Swindler", "Ironworks", "Mill", "Duke", "Patrol", "Clerk", "Monument", "Charlatan", "War Chest", "Hoard"],
        colony: true,
        expansions: ["intrigue", "prosperity"]
    },
    {
        name: "Master Exploder",
        cards: ["Pawn", "Steward", "Bridge", "Mill", "Minion", "Watchtower", "Investment", "Worker's Village", "King's Court", "Peddler"],
        colony: true,
        expansions: ["intrigue", "prosperity"]
    },
    {
        name: "Cost of Living",
        cards: ["Lurker", "Courtier", "Replace", "Torturer", "Nobles", "Clerk", "Quarry", "City", "Grand Market", "Forge"],
        colony: true,
        expansions: ["intrigue", "prosperity"]
    },
    {
        name: "Bubbles",
        cards: ["Haven", "Lighthouse", "Sea Chart", "Blockade", "Salvager", "Investment", "City", "Rabble", "Hoard", "Peddler"],
        colony: true,
        expansions: ["seaside", "prosperity"]
    },
    {
        name: "Copper Strategist",
        cards: ["Haven", "Fishing Village", "Island", "Corsair", "Outpost", "Monument", "Worker's Village", "Magnate", "Grand Market", "Bank"],
        colony: true,
        expansions: ["seaside", "prosperity"]
    },
    {
        name: "Final Thoughts",
        cards: ["Native Village", "Cutpurse", "Pirate", "Sea Witch", "Tactician", "Anvil", "Watchtower", "Quarry", "Crystal Ball", "Forge"],
        colony: true,
        expansions: ["seaside", "prosperity"]
    },
    {
        name: "Hard Carry",
        cards: ["Smugglers", "Cutpurse", "Merchant Ship", "Treasury", "Wharf", "Clerk", "Charlatan", "Collection", "Mint", "King's Court"],
        colony: true,
        expansions: ["seaside", "prosperity"]
    },
    {
        name: "Push Your Luck",
        cards: ["Monkey", "Blockade", "Caravan", "Sailor", "Merchant Ship", "Tiara", "Worker's Village", "Vault", "Hoard", "Expand"],
        colony: true,
        expansions: ["seaside", "prosperity"]
    },
    {
        name: "Crowded Harbour",
        cards: ["Lighthouse", "Fishing Village", "Warehouse", "Blockade", "Tide Pools", "Watchtower", "Worker's Village", "Charlatan", "Crystal Ball", "Grand Market"],
        colony: true,
        expansions: ["seaside", "prosperity"]
    },
    {
        name: "Tidal Wave",
        cards: ["Lighthouse", "Treasure Map", "Bazaar", "Corsair", "Wharf", "Bishop", "Clerk", "Rabble", "War Chest", "King's Court"],
        colony: true,
        expansions: ["seaside", "prosperity"]
    },
    {
        name: "Plunder the Seas",
        cards: ["Caravan", "Island", "Bazaar", "Pirate", "Sea Witch", "Investment", "Quarry", "Tiara", "Collection", "Magnate"],
        colony: true,
        expansions: ["seaside", "prosperity"]
    },
    {
        name: "Excess Capacity",
        cards: ["Haven", "Lookout", "Warehouse", "Tide Pools", "Tactician", "Monument", "City", "Vault", "King's Court", "Peddler"],
        colony: true,
        expansions: ["seaside", "prosperity"]
    },
    {
        name: "Monkey Business",
        cards: ["Native Village", "Astrolabe", "Monkey", "Sea Chart", "Salvager", "Anvil", "Charlatan", "Mint", "Bank", "Expand"],
        colony: true,
        expansions: ["seaside", "prosperity"]
    },
    {
        name: "Mega-Money",
        cards: ["Tiara", "Worker's Village", "War Chest", "Bank", "Forge", "Royal Blacksmith", "Enchantress", "Archive", "Crown", "Forum"],
        colony: true,
        landscapes: ["Conquest", "Fountain"],
        expansions: ["prosperity", "empires"]
    },
    {
        name: "Going Through Phases",
        cards: ["Watchtower", "Charlatan", "Collection", "Rabble", "Peddler", "Overlord", "Patrician / Emporium", "Settlers / Bustling Village", "Catapult / Rocks", "Sacrifice"],
        colony: true,
        landscapes: ["Arena", "Banquet"],
        expansions: ["prosperity", "empires"]
    },
    {
        name: "How Charming",
        cards: ["Clerk", "Grand Market", "Hoard", "Expand", "King's Court", "Castles", "Temple", "Villa", "Charm", "Wild Hunt"],
        colony: true,
        landscapes: ["Orchard", "Triumphal Arch"],
        expansions: ["prosperity", "empires"]
    },
    {
        name: "Tale of Two Cities",
        cards: ["Bishop", "Clerk", "City", "Crystal Ball", "Vault", "City Quarter", "Encampment / Plunder", "Farmers' Market", "Forum", "Legionary"],
        colony: true,
        landscapes: ["Dominate", "Wall"],
        expansions: ["prosperity", "empires"]
    },
    {
        name: "Competing Concerns",
        cards: ["Anvil", "Investment", "Worker's Village", "Magnate", "Hoard", "Chariot Race", "Enchantress", "Capital", "Groundskeeper", "Legionary"],
        colony: true,
        landscapes: ["Battlefield", "Tax"],
        expansions: ["prosperity", "empires"]
    },
    {
        name: "Looming Threats",
        cards: ["Monument", "Quarry", "Grand Market", "Expand", "Peddler", "Engineer", "Encampment / Plunder", "Gladiator / Fortune", "Temple", "Crown"],
        colony: true,
        landscapes: ["Mountain Pass", "Salt the Earth"],
        expansions: ["prosperity", "empires"]
    },
    {
        name: "Unorthodox",
        cards: ["Anvil", "Bishop", "Charlatan", "Crystal Ball", "Mint", "Royal Blacksmith", "Settlers / Bustling Village", "Castles", "Sacrifice", "Villa"],
        colony: true,
        landscapes: ["Colonnade", "Windfall"],
        expansions: ["prosperity", "empires"]
    },
    {
        name: "Siege Weapons",
        cards: ["Watchtower", "Worker's Village", "City", "Collection", "War Chest", "Engineer", "Patrician / Emporium", "Catapult / Rocks", "Farmers' Market", "Archive"],
        colony: true,
        landscapes: ["Museum", "Tower"],
        expansions: ["prosperity", "empires"]
    },
    {
        name: "Regulations",
        cards: ["Investment", "Quarry", "Charlatan", "King's Court", "Peddler", "Overlord", "Enchantress", "Groundskeeper", "Legionary", "Wild Hunt"],
        colony: true,
        landscapes: ["Wolf Den", "Annex"],
        expansions: ["prosperity", "empires"]
    },
    {
        name: "Victory Parade",
        cards: ["Watchtower", "Tiara", "Magnate", "Hoard", "Forge", "City Quarter", "Settlers / Bustling Village", "Chariot Race", "Charm", "Forum"],
        colony: true,
        landscapes: ["Tomb", "Triumph"],
        expansions: ["prosperity", "empires"]
    },
    {
        name: "Spinning Your Wheels",
        cards: ["Pawn", "Shanty Town", "Mill", "Secret Passage", "Upgrade", "Guard Dog", "Tunnel", "Weaver", "Highway", "Wheelwright"],
        expansions: ["intrigue", "hinterlands"]
    },
    {
        name: "False Advertising",
        cards: ["Courtyard", "Swindler", "Ironworks", "Mining Village", "Secret Passage", "Crossroads", "Tunnel", "Jack of all Trades", "Spice Merchant", "Stables"],
        expansions: ["intrigue", "hinterlands"]
    },
    {
        name: "Negotiators",
        cards: ["Lurker", "Conspirator", "Torturer", "Trading Post", "Nobles", "Scheme", "Cauldron", "Haggler", "Inn", "Margrave"],
        expansions: ["intrigue", "hinterlands"]
    },
    {
        name: "Dance Party",
        cards: ["Masquerade", "Bridge", "Duke", "Minion", "Replace", "Oasis", "Trail", "Berserker", "Highway", "Farmland"],
        expansions: ["intrigue", "hinterlands"]
    },
    {
        name: "Opportunity Knocks",
        cards: ["Masquerade", "Diplomat", "Minion", "Replace", "Upgrade", "Fool's Gold", "Oasis", "Tunnel", "Nomads", "Wheelwright"],
        expansions: ["intrigue", "hinterlands"]
    },
    {
        name: "Souk It Up",
        cards: ["Lurker", "Pawn", "Swindler", "Mining Village", "Torturer", "Guard Dog", "Jack of all Trades", "Souk", "Stables", "Border Village"],
        expansions: ["intrigue", "hinterlands"]
    },
    {
        name: "Walk the Walk",
        cards: ["Ironworks", "Duke", "Patrol", "Trading Post", "Nobles", "Develop", "Scheme", "Spice Merchant", "Trail", "Cauldron"],
        expansions: ["intrigue", "hinterlands"]
    },
    {
        name: "Black Markets",
        cards: ["Shanty Town", "Swindler", "Conspirator", "Diplomat", "Secret Passage", "Trader", "Berserker", "Inn", "Souk", "Witch's Hut"],
        expansions: ["intrigue", "hinterlands"]
    },
    {
        name: "The High Court",
        cards: ["Courtyard", "Steward", "Wishing Well", "Baron", "Courtier", "Fool's Gold", "Oasis", "Haggler", "Margrave", "Border Village"],
        expansions: ["intrigue", "hinterlands"]
    },
    {
        name: "Bendy Bananas",
        cards: ["Lighthouse", "Monkey", "Smugglers", "Caravan", "Treasury", "Spice Merchant", "Cauldron", "Haggler", "Witch's Hut", "Border Village"],
        expansions: ["seaside", "hinterlands"]
    },
    {
        name: "Cease Side",
        cards: ["Fishing Village", "Lookout", "Blockade", "Bazaar", "Outpost", "Develop", "Guard Dog", "Tunnel", "Nomads", "Highway"],
        expansions: ["seaside", "hinterlands"]
    },
    {
        name: "Bumpy Ride",
        cards: ["Haven", "Tide Pools", "Merchant Ship", "Pirate", "Sea Witch", "Scheme", "Jack of all Trades", "Cauldron", "Inn", "Stables"],
        expansions: ["seaside", "hinterlands"]
    },
    {
        name: "Error in Translation",
        cards: ["Astrolabe", "Sailor", "Salvager", "Treasure Map", "Tactician", "Trail", "Berserker", "Cartographer", "Highway", "Wheelwright"],
        expansions: ["seaside", "hinterlands"]
    },
    {
        name: "Tailwind",
        cards: ["Native Village", "Smugglers", "Corsair", "Sea Witch", "Wharf", "Oasis", "Scheme", "Cartographer", "Souk", "Border Village"],
        expansions: ["seaside", "hinterlands"]
    },
    {
        name: "Counterfeit Goods",
        cards: ["Lighthouse", "Fishing Village", "Warehouse", "Island", "Pirate", "Crossroads", "Fool's Gold", "Tunnel", "Weaver", "Margrave"],
        expansions: ["seaside", "hinterlands"]
    },
    {
        name: "Preparation",
        cards: ["Lookout", "Sea Chart", "Blockade", "Tide Pools", "Outpost", "Crossroads", "Nomads", "Trail", "Haggler", "Farmland"],
        expansions: ["seaside", "hinterlands"]
    },
    {
        name: "Tourist Trap",
        cards: ["Astrolabe", "Cutpurse", "Island", "Treasure Map", "Treasury", "Fool's Gold", "Guard Dog", "Inn", "Stables", "Wheelwright"],
        expansions: ["seaside", "hinterlands"]
    },
    {
        name: "Deep Dive",
        cards: ["Native Village", "Monkey", "Bazaar", "Pirate", "Tactician", "Develop", "Tunnel", "Nomads", "Spice Merchant", "Cartographer"],
        expansions: ["seaside", "hinterlands"]
    },
    {
        name: "Price Range",
        cards: ["Watchtower", "City", "Grand Market", "Hoard", "Forge", "Develop", "Oasis", "Nomads", "Margrave", "Farmland"],
        colony: true,
        expansions: ["prosperity", "hinterlands"]
    },
    {
        name: "Tricky Treasure",
        cards: ["Tiara", "Crystal Ball", "Magnate", "Vault", "War Chest", "Scheme", "Cauldron", "Inn", "Souk", "Stables"],
        colony: true,
        expansions: ["prosperity", "hinterlands"]
    },
    {
        name: "Fool's Curse",
        cards: ["Anvil", "Bishop", "Clerk", "Worker's Village", "Charlatan", "Fool's Gold", "Guard Dog", "Trail", "Haggler", "Stables"],
        colony: true,
        expansions: ["prosperity", "hinterlands"]
    },
    {
        name: "Interest Rate",
        cards: ["Investment", "Collection", "Rabble", "King's Court", "Peddler", "Jack of all Trades", "Berserker", "Cartographer", "Haggler", "Border Village"],
        colony: true,
        expansions: ["prosperity", "hinterlands"]
    },
    {
        name: "Precious Materials",
        cards: ["Quarry", "Tiara", "Mint", "Bank", "Expand", "Crossroads", "Scheme", "Tunnel", "Trail", "Witch's Hut"],
        colony: true,
        expansions: ["prosperity", "hinterlands"]
    },
    {
        name: "Inns and Outs",
        cards: ["Monument", "Charlatan", "Mint", "Grand Market", "Expand", "Guard Dog", "Weaver", "Cartographer", "Highway", "Inn"],
        colony: true,
        expansions: ["prosperity", "hinterlands"]
    },
    {
        name: "Grand Exchange",
        cards: ["Clerk", "Monument", "Magnate", "King's Court", "Peddler", "Nomads", "Spice Merchant", "Cauldron", "Wheelwright", "Farmland"],
        colony: true,
        expansions: ["prosperity", "hinterlands"]
    },
    {
        name: "Paying With Cash",
        cards: ["Tiara", "Crystal Ball", "Grand Market", "Hoard", "Bank", "Crossroads", "Scheme", "Trader", "Witch's Hut", "Farmland"],
        colony: true,
        expansions: ["prosperity", "hinterlands"]
    },
    {
        name: "Pushed Around",
        cards: ["Investment", "Worker's Village", "Collection", "Vault", "War Chest", "Fool's Gold", "Jack of all Trades", "Trail", "Berserker", "Stables"],
        colony: true,
        expansions: ["prosperity", "hinterlands"]
    },
    {
        name: "Fast vs Slow",
        cards: ["Bishop", "Quarry", "City", "Forge", "Peddler", "Tunnel", "Spice Merchant", "Weaver", "Margrave", "Souk"],
        colony: true,
        expansions: ["prosperity", "hinterlands"]
    },
    {
        name: "Keep On Carrying On",
        cards: ["Crossroads", "Fool's Gold", "Stables", "Wheelwright", "Farmland", "Settlers / Bustling Village", "Enchantress", "Archive", "Capital", "Legionary"],
        landscapes: ["Keep", "Windfall"],
        expansions: ["hinterlands", "empires"]
    },
    {
        name: "Appease the Gods",
        cards: ["Nomads", "Spice Merchant", "Trader", "Trail", "Berserker", "Engineer", "Castles", "Gladiator / Fortune", "Sacrifice", "Wild Hunt"],
        landscapes: ["Orchard", "Ritual"],
        expansions: ["hinterlands", "empires"]
    },
    {
        name: "Hunting Dogs",
        cards: ["Guard Dog", "Tunnel", "Cauldron", "Inn", "Margrave", "Encampment / Plunder", "Patrician / Emporium", "Farmers' Market", "Charm", "Forum"],
        landscapes: ["Labyrinth", "Triumph"],
        expansions: ["hinterlands", "empires"]
    },
    {
        name: "Hidden Buys",
        cards: ["Scheme", "Weaver", "Haggler", "Highway", "Border Village", "Royal Blacksmith", "Chariot Race", "Temple", "Crown", "Forum"],
        landscapes: ["Mountain Pass", "Museum"],
        expansions: ["hinterlands", "empires"]
    },
    {
        name: "Two Little Two Late",
        cards: ["Oasis", "Jack of all Trades", "Weaver", "Souk", "Witch's Hut", "City Quarter", "Patrician / Emporium", "Catapult / Rocks", "Villa", "Groundskeeper"],
        landscapes: ["Salt the Earth", "Wolf Den"],
        expansions: ["hinterlands", "empires"]
    },
    {
        name: "Imperialism",
        cards: ["Guard Dog", "Tunnel", "Cartographer", "Inn", "Border Village", "Overlord", "Settlers / Bustling Village", "Farmers' Market", "Legionary", "Wild Hunt"],
        landscapes: ["Dominate", "Fountain"],
        expansions: ["hinterlands", "empires"]
    },
    {
        name: "Blazing Saddles",
        cards: ["Fool's Gold", "Oasis", "Nomads", "Trail", "Stables", "Engineer", "Royal Blacksmith", "Chariot Race", "Enchantress", "Temple"],
        landscapes: ["Baths", "Battlefield"],
        expansions: ["hinterlands", "empires"]
    },
    {
        name: "Transience",
        cards: ["Crossroads", "Develop", "Nomads", "Trader", "Margrave", "Encampment / Plunder", "Castles", "Villa", "Capital", "Crown"],
        landscapes: ["Advance", "Donate"],
        expansions: ["hinterlands", "empires"]
    },
    {
        name: "Sacrifice the Middleman",
        cards: ["Develop", "Cauldron", "Souk", "Wheelwright", "Farmland", "Patrician / Emporium", "Sacrifice", "Archive", "Charm", "Groundskeeper"],
        landscapes: ["Arena", "Annex"],
        expansions: ["hinterlands", "empires"]
    },
    {
        name: "Spare Change",
        cards: ["Spice Merchant", "Weaver", "Cartographer", "Highway", "Witch's Hut", "City Quarter", "Overlord", "Settlers / Bustling Village", "Catapult / Rocks", "Gladiator / Fortune"],
        landscapes: ["Banquet", "Colonnade"],
        expansions: ["hinterlands", "empires"]
    },
    {
        name: "Garden Centre",
        cards: ["Merchant", "Gardens", "Militia", "Smithy", "Market", "Border Guard", "Mountain Village", "Sculptor", "Seer", "Treasurer"],
        extras: ["Horn", "Lantern", "Key"],
        landscapes: ["Guildhall", "Road Network"],
        expansions: ["base", "renaissance"]
    },
    {
        name: "A Learning Opportunity",
        cards: ["Vassal", "Workshop", "Poacher", "Throne Room", "Festival", "Experiment", "Flag Bearer", "Patron", "Silk Merchant", "Scholar"],
        extras: ["Flag"],
        landscapes: ["Cathedral", "City Gate"],
        expansions: ["base", "renaissance"]
    },
    {
        name: "Searching for Love",
        cards: ["Chapel", "Village", "Bureaucrat", "Council Room", "Mine", "Ducat", "Lackeys", "Cargo Ship", "Patron", "Villain"],
        landscapes: ["Exploration", "Fleet"],
        expansions: ["base", "renaissance"]
    },
    {
        name: "Lost and Found",
        cards: ["Cellar", "Harbinger", "Laboratory", "Witch", "Artisan", "Improve", "Mountain Village", "Priest", "Spices", "Swashbuckler"],
        extras: ["Treasure Chest"],
        landscapes: ["Piazza", "Sinister Plot"],
        expansions: ["base", "renaissance"]
    },
    {
        name: "Smash and Grab",
        cards: ["Moat", "Moneylender", "Remodel", "Bandit", "Market", "Acting Troupe", "Flag Bearer", "Old Witch", "Recruiter", "Spices"],
        extras: ["Flag"],
        landscapes: ["Citadel", "Innovation"],
        expansions: ["base", "renaissance"]
    },
    {
        name: "The Bourgeoisie",
        cards: ["Militia", "Poacher", "Bandit", "Library", "Sentry", "Border Guard", "Cargo Ship", "Hideout", "Patron", "Silk Merchant"],
        extras: ["Horn", "Lantern"],
        landscapes: ["Capitalism", "Pageant"],
        expansions: ["base", "renaissance"]
    },
    {
        name: "Quick on the Draw",
        cards: ["Cellar", "Remodel", "Smithy", "Council Room", "Witch", "Lackeys", "Acting Troupe", "Flag Bearer", "Inventor", "Sculptor"],
        extras: ["Flag"],
        landscapes: ["Academy", "Sewers"],
        expansions: ["base", "renaissance"]
    },
    {
        name: "Henchmen",
        cards: ["Moat", "Merchant", "Workshop", "Moneylender", "Market", "Improve", "Recruiter", "Scepter", "Scholar", "Villain"],
        landscapes: ["Canal", "Silos"],
        expansions: ["base", "renaissance"]
    },
    {
        name: "Gaze into the Abyss",
        cards: ["Harbinger", "Gardens", "Bandit", "Laboratory", "Mine", "Ducat", "Research", "Silk Merchant", "Spices", "Swashbuckler"],
        extras: ["Treasure Chest"],
        landscapes: ["Barracks", "Star Chart"],
        expansions: ["base", "renaissance"]
    },
    {
        name: "Fair Play",
        cards: ["Vassal", "Militia", "Poacher", "Throne Room", "Artisan", "Mountain Village", "Priest", "Old Witch", "Seer", "Treasurer"],
        extras: ["Key"],
        landscapes: ["Crop Rotation", "Fair"],
        expansions: ["base", "renaissance"]
    },
    {
        name: "Organised",
        cards: ["Pawn", "Shanty Town", "Conspirator", "Mill", "Secret Passage", "Cargo Ship", "Priest", "Old Witch", "Scepter", "Sculptor"],
        landscapes: ["Citadel", "Piazza"],
        expansions: ["intrigue", "renaissance"]
    },
    {
        name: "Step Up",
        cards: ["Courtyard", "Masquerade", "Ironworks", "Replace", "Harem", "Ducat", "Experiment", "Flag Bearer", "Mountain Village", "Swashbuckler"],
        extras: ["Flag", "Treasure Chest"],
        landscapes: ["Pageant", "Road Network"],
        expansions: ["intrigue", "renaissance"]
    },
    {
        name: "Encore",
        cards: ["Lurker", "Wishing Well", "Bridge", "Duke", "Patrol", "Border Guard", "Acting Troupe", "Scepter", "Treasurer", "Villain"],
        extras: ["Horn", "Lantern", "Key"],
        landscapes: ["Crop Rotation", "Fleet"],
        expansions: ["intrigue", "renaissance"]
    },
    {
        name: "Recruitment Fair",
        cards: ["Shanty Town", "Swindler", "Courtier", "Upgrade", "Nobles", "Lackeys", "Flag Bearer", "Inventor", "Recruiter", "Scholar"],
        extras: ["Flag"],
        landscapes: ["Fair", "Star Chart"],
        expansions: ["intrigue", "renaissance"]
    },
    {
        name: "The Resistance",
        cards: ["Conspirator", "Ironworks", "Mining Village", "Courtier", "Torturer", "Improve", "Hideout", "Research", "Silk Merchant", "Spices"],
        landscapes: ["City Gate", "Sinister Plot"],
        expansions: ["intrigue", "renaissance"]
    },
    {
        name: "Golden Age",
        cards: ["Lurker", "Pawn", "Baron", "Diplomat", "Minion", "Patron", "Scholar", "Sculptor", "Seer", "Spices"],
        landscapes: ["Cathedral", "Innovation"],
        expansions: ["intrigue", "renaissance"]
    },
    {
        name: "Modern Art",
        cards: ["Swindler", "Baron", "Mill", "Duke", "Trading Post", "Border Guard", "Cargo Ship", "Experiment", "Scepter", "Swashbuckler"],
        extras: ["Horn", "Lantern", "Treasure Chest"],
        landscapes: ["Barracks", "Silos"],
        expansions: ["intrigue", "renaissance"]
    },
    {
        name: "Coldplay",
        cards: ["Pawn", "Steward", "Courtier", "Minion", "Harem", "Ducat", "Cargo Ship", "Improve", "Patron", "Priest"],
        landscapes: ["Canal", "Capitalism"],
        expansions: ["intrigue", "renaissance"]
    },
    {
        name: "Backstabbers",
        cards: ["Steward", "Bridge", "Conspirator", "Secret Passage", "Nobles", "Experiment", "Hideout", "Old Witch", "Seer", "Villain"],
        landscapes: ["Exploration", "Sewers"],
        expansions: ["intrigue", "renaissance"]
    },
    {
        name: "Token Representation",
        cards: ["Wishing Well", "Diplomat", "Replace", "Torturer", "Trading Post", "Border Guard", "Ducat", "Research", "Sculptor", "Treasurer"],
        extras: ["Horn", "Lantern", "Key"],
        landscapes: ["Academy", "Guildhall"],
        expansions: ["intrigue", "renaissance"]
    },
    {
        name: "Navigating by the Stars",
        cards: ["Haven", "Astrolabe", "Warehouse", "Tide Pools", "Bazaar", "Lackeys", "Experiment", "Improve", "Inventor", "Swashbuckler"],
        extras: ["Treasure Chest"],
        landscapes: ["Crop Rotation", "Star Chart"],
        expansions: ["seaside", "renaissance"]
    },
    {
        name: "Preparations",
        cards: ["Lighthouse", "Blockade", "Salvager", "Treasure Map", "Sea Witch", "Border Guard", "Flag Bearer", "Hideout", "Mountain Village", "Scepter"],
        extras: ["Horn", "Lantern", "Flag"],
        landscapes: ["Fleet", "Sinister Plot"],
        expansions: ["seaside", "renaissance"]
    },
    {
        name: "Sea-ing Double",
        cards: ["Caravan", "Island", "Corsair", "Outpost", "Treasury", "Ducat", "Experiment", "Research", "Seer", "Treasurer"],
        extras: ["Key"],
        landscapes: ["Barracks", "Citadel"],
        expansions: ["seaside", "renaissance"]
    },
    {
        name: "Impressment",
        cards: ["Fishing Village", "Cutpurse", "Sailor", "Pirate", "Tactician", "Lackeys", "Cargo Ship", "Inventor", "Recruiter", "Villain"],
        landscapes: ["Fair", "Guildhall"],
        expansions: ["seaside", "renaissance"]
    },
    {
        name: "Hiding in the Reefs",
        cards: ["Haven", "Native Village", "Monkey", "Smugglers", "Merchant Ship", "Acting Troupe", "Silk Merchant", "Old Witch", "Sculptor", "Spices"],
        landscapes: ["Cathedral", "City Gate"],
        expansions: ["seaside", "renaissance"]
    },
    {
        name: "Sea for Yourself",
        cards: ["Astrolabe", "Lookout", "Sea Chart", "Pirate", "Sea Witch", "Patron", "Silk Merchant", "Scepter", "Sculptor", "Villain"],
        landscapes: ["Innovation", "Sewers"],
        expansions: ["seaside", "renaissance"]
    },
    {
        name: "Performance Art",
        cards: ["Fishing Village", "Monkey", "Blockade", "Treasury", "Wharf", "Acting Troupe", "Cargo Ship", "Flag Bearer", "Priest", "Treasurer"],
        extras: ["Flag", "Key"],
        landscapes: ["Canal", "Silos"],
        expansions: ["seaside", "renaissance"]
    },
    {
        name: "Learning to Swim",
        cards: ["Lighthouse", "Smugglers", "Warehouse", "Salvager", "Tactician", "Lackeys", "Improve", "Patron", "Old Witch", "Scholar"],
        landscapes: ["Academy", "Pageant"],
        expansions: ["seaside", "renaissance"]
    },
    {
        name: "Merchant Port",
        cards: ["Sea Chart", "Cutpurse", "Island", "Salvager", "Merchant Ship", "Ducat", "Experiment", "Research", "Seer", "Swashbuckler"],
        extras: ["Treasure Chest"],
        landscapes: ["Capitalism", "Piazza"],
        expansions: ["seaside", "renaissance"]
    },
    {
        name: "Ebb and Flow",
        cards: ["Caravan", "Tide Pools", "Treasure Map", "Corsair", "Outpost", "Border Guard", "Mountain Village", "Recruiter", "Scholar", "Sculptor"],
        extras: ["Horn", "Lantern"],
        landscapes: ["Exploration", "Road Network"],
        expansions: ["seaside", "renaissance"]
    },
    {
        name: "Bits and Bobs",
        cards: ["Monument", "Worker's Village", "Charlatan", "Vault", "Hoard", "Lackeys", "Patron", "Scepter", "Scholar", "Treasurer"],
        colony: true,
        extras: ["Key"],
        landscapes: ["Road Network", "Silos"],
        expansions: ["prosperity", "renaissance"]
    },
    {
        name: "The Prophet of Profit",
        cards: ["Anvil", "Watchtower", "Crystal Ball", "War Chest", "Grand Market", "Flag Bearer", "Mountain Village", "Priest", "Silk Merchant", "Seer"],
        colony: true,
        extras: ["Flag"],
        landscapes: ["Piazza", "Star Chart"],
        expansions: ["prosperity", "renaissance"]
    },
    {
        name: "Growth",
        cards: ["Investment", "Monument", "City", "Rabble", "Expand", "Cargo Ship", "Experiment", "Recruiter", "Sculptor", "Villain"],
        colony: true,
        landscapes: ["Canal", "Pageant"],
        expansions: ["prosperity", "renaissance"]
    },
    {
        name: "Move Fast and Break Things",
        cards: ["Bishop", "Tiara", "Mint", "King's Court", "Peddler", "Ducat", "Acting Troupe", "Research", "Mountain Village", "Old Witch"],
        colony: true,
        landscapes: ["Guildhall", "Innovation"],
        expansions: ["prosperity", "renaissance"]
    },
    {
        name: "These Go To Eleven",
        cards: ["Clerk", "Quarry", "Collection", "Vault", "Forge", "Border Guard", "Experiment", "Improve", "Seer", "Swashbuckler"],
        colony: true,
        extras: ["Horn", "Lantern", "Treasure Chest"],
        landscapes: ["Barracks", "Sinister Plot"],
        expansions: ["prosperity", "renaissance"]
    },
    {
        name: "How Do They Work?",
        cards: ["Bishop", "Magnate", "War Chest", "Bank", "Peddler", "Acting Troupe", "Cargo Ship", "Hideout", "Scepter", "Spices"],
        colony: true,
        landscapes: ["Citadel", "Crop Rotation"],
        expansions: ["prosperity", "renaissance"]
    },
    {
        name: "10 PRINT Money; 20 GOTO 10;",
        cards: ["Monument", "Tiara", "Crystal Ball", "Mint", "Grand Market", "Lackeys", "Old Witch", "Recruiter", "Scholar", "Spices"],
        colony: true,
        landscapes: ["Capitalism", "City Gate"],
        expansions: ["prosperity", "renaissance"]
    },
    {
        name: "Beanie Babies",
        cards: ["Anvil", "Watchtower", "Investment", "Quarry", "Collection", "Ducat", "Lackeys", "Flag Bearer", "Hideout", "Treasurer"],
        colony: true,
        extras: ["Flag", "Key"],
        landscapes: ["Fair", "Fleet"],
        expansions: ["prosperity", "renaissance"]
    },
    {
        name: "One Man's Trash is Another's Treasure",
        cards: ["Bishop", "Worker's Village", "Charlatan", "Hoard", "Expand", "Cargo Ship", "Inventor", "Research", "Swashbuckler", "Villain"],
        colony: true,
        extras: ["Treasure Chest"],
        landscapes: ["Exploration", "Sewers"],
        expansions: ["prosperity", "renaissance"]
    },
    {
        name: "Three-Card Monte",
        cards: ["Clerk", "City", "Rabble", "Bank", "King's Court", "Border Guard", "Improve", "Flag Bearer", "Patron", "Silk Merchant"],
        colony: true,
        extras: ["Horn", "Lantern", "Flag"],
        landscapes: ["Academy", "Cathedral"],
        expansions: ["prosperity", "renaissance"]
    },
    {
        name: "Neighbour Trader",
        cards: ["Crossroads", "Trader", "Weaver", "Cauldron", "Stables", "Border Guard", "Lackeys", "Mountain Village", "Scholar", "Villain"],
        extras: ["Horn", "Lantern"],
        landscapes: ["Canal", "Pageant"],
        expansions: ["hinterlands", "renaissance"]
    },
    {
        name: "Barking Mad",
        cards: ["Guard Dog", "Nomads", "Berserker", "Haggler", "Farmland", "Hideout", "Patron", "Research", "Scepter", "Spices"],
        landscapes: ["Barracks", "Star Chart"],
        expansions: ["hinterlands", "renaissance"]
    },
    {
        name: "A Fleeting Moment",
        cards: ["Fool's Gold", "Scheme", "Spice Merchant", "Margrave", "Wheelwright", "Ducat", "Silk Merchant", "Old Witch", "Recruiter", "Seer"],
        landscapes: ["Fair", "Fleet"],
        expansions: ["hinterlands", "renaissance"]
    },
    {
        name: "New Ideas",
        cards: ["Develop", "Oasis", "Jack of all Trades", "Souk", "Border Village", "Acting Troupe", "Experiment", "Flag Bearer", "Sculptor", "Swashbuckler"],
        extras: ["Flag", "Treasure Chest"],
        landscapes: ["Innovation", "Silos"],
        expansions: ["hinterlands", "renaissance"]
    },
    {
        name: "Cheap and Nasty",
        cards: ["Weaver", "Cartographer", "Cauldron", "Highway", "Inn", "Cargo Ship", "Improve", "Inventor", "Treasurer", "Villain"],
        extras: ["Key"],
        landscapes: ["Sewers", "Sinister Plot"],
        expansions: ["hinterlands", "renaissance"]
    },
    {
        name: "Pilgrimage",
        cards: ["Scheme", "Nomads", "Spice Merchant", "Trail", "Witch's Hut", "Lackeys", "Experiment", "Mountain Village", "Priest", "Scholar"],
        landscapes: ["Capitalism", "Citadel"],
        expansions: ["hinterlands", "renaissance"]
    },
    {
        name: "All That Glitters",
        cards: ["Guard Dog", "Tunnel", "Stables", "Wheelwright", "Farmland", "Ducat", "Cargo Ship", "Flag Bearer", "Hideout", "Patron"],
        extras: ["Flag"],
        landscapes: ["Crop Rotation", "Guildhall"],
        expansions: ["hinterlands", "renaissance"]
    },
    {
        name: "In the Valleys",
        cards: ["Develop", "Jack of all Trades", "Berserker", "Cartographer", "Souk", "Acting Troupe", "Silk Merchant", "Recruiter", "Scepter", "Swashbuckler"],
        extras: ["Treasure Chest"],
        landscapes: ["Cathedral", "Road Network"],
        expansions: ["hinterlands", "renaissance"]
    },
    {
        name: "University",
        cards: ["Fool's Gold", "Oasis", "Scheme", "Nomads", "Trail", "Research", "Old Witch", "Sculptor", "Seer", "Treasurer"],
        extras: ["Key"],
        landscapes: ["Academy", "City Gate"],
        expansions: ["hinterlands", "renaissance"]
    },
    {
        name: "Between Two Borders",
        cards: ["Crossroads", "Tunnel", "Haggler", "Margrave", "Border Village", "Border Guard", "Improve", "Inventor", "Priest", "Spices"],
        extras: ["Horn", "Lantern"],
        landscapes: ["Exploration", "Piazza"],
        expansions: ["hinterlands", "renaissance"]
    },
    {
        name: "Golden Age",
        cards: ["Encampment / Plunder", "Patrician / Emporium", "Archive", "Groundskeeper", "Legionary", "Ducat", "Lackeys", "Inventor", "Scepter", "Treasurer"],
        extras: ["Key"],
        landscapes: ["Basilica", "Crop Rotation"],
        expansions: ["empires", "renaissance"]
    },
    {
        name: "Lockdown",
        cards: ["Engineer", "Enchantress", "Gladiator / Fortune", "Sacrifice", "Crown", "Hideout", "Patron", "Old Witch", "Spices", "Villain"],
        landscapes: ["Exploration", "Tax"],
        expansions: ["empires", "renaissance"]
    },
    {
        name: "Recycling Centre",
        cards: ["Settlers / Bustling Village", "Castles", "Charm", "Forum", "Wild Hunt", "Border Guard", "Cargo Ship", "Mountain Village", "Silk Merchant", "Sculptor"],
        extras: ["Horn", "Lantern"],
        landscapes: ["Fountain", "Silos"],
        expansions: ["empires", "renaissance"]
    },
    {
        name: "Silver Linings",
        cards: ["Royal Blacksmith", "Settlers / Bustling Village", "Catapult / Rocks", "Villa", "Capital", "Lackeys", "Experiment", "Improve", "Flag Bearer", "Research"],
        extras: ["Flag"],
        landscapes: ["Conquest", "Guildhall"],
        expansions: ["empires", "renaissance"]
    },
    {
        name: "Town Square",
        cards: ["Overlord", "Chariot Race", "Farmers' Market", "Legionary", "Wild Hunt", "Priest", "Silk Merchant", "Recruiter", "Seer", "Swashbuckler"],
        extras: ["Treasure Chest"],
        landscapes: ["Citadel", "Mountain Pass"],
        expansions: ["empires", "renaissance"]
    },
    {
        name: "Fast Learners",
        cards: ["Engineer", "Farmers' Market", "Temple", "Villa", "Crown", "Border Guard", "Acting Troupe", "Flag Bearer", "Scholar", "Spices"],
        extras: ["Flag", "Horn", "Lantern"],
        landscapes: ["Canal", "Orchard"],
        expansions: ["empires", "renaissance"]
    },
    {
        name: "Big Buildings",
        cards: ["City Quarter", "Castles", "Enchantress", "Charm", "Groundskeeper", "Cargo Ship", "Improve", "Hideout", "Treasurer", "Villain"],
        extras: ["Key"],
        landscapes: ["City Gate", "Windfall"],
        expansions: ["empires", "renaissance"]
    },
    {
        name: "Murder Plot",
        cards: ["Patrician / Emporium", "Catapult / Rocks", "Gladiator / Fortune", "Sacrifice", "Forum", "Ducat", "Mountain Village", "Research", "Scepter", "Sculptor"],
        landscapes: ["Sinister Plot", "Tomb"],
        expansions: ["empires", "renaissance"]
    },
    {
        name: "In Every Direction",
        cards: ["Royal Blacksmith", "Encampment / Plunder", "Temple", "Villa", "Archive", "Border Guard", "Patron", "Priest", "Silk Merchant", "Villain"],
        extras: ["Horn", "Lantern"],
        landscapes: ["Dominate", "Star Chart"],
        expansions: ["empires", "renaissance"]
    },
    {
        name: "Economies of Scale",
        cards: ["Engineer", "City Quarter", "Overlord", "Farmers' Market", "Crown", "Experiment", "Hideout", "Priest", "Old Witch", "Swashbuckler"],
        extras: ["Treasure Chest"],
        landscapes: ["Fair", "Triumphal Arch"],
        expansions: ["empires", "renaissance"]
    },
    {
        name: "Horse Race",
        cards: ["Merchant", "Remodel", "Smithy", "Market", "Mine", "Sleigh", "Hostelry", "Kiln", "Livery", "Animal Fair"],
        extras: ["Horse"],
        landscapes: ["Ride", "Way of the Camel"],
        expansions: ["base", "menagerie"]
    },
    {
        name: "Bespoke Engine",
        cards: ["Village", "Moneylender", "Poacher", "Witch", "Artisan", "Black Cat", "Camel Train", "Cardinal", "Village Green", "Destrier"],
        landscapes: ["Transport", "Way of the Goat"],
        expansions: ["base", "menagerie"]
    },
    {
        name: "Get the Oil",
        cards: ["Vassal", "Workshop", "Throne Room", "Council Room", "Sentry", "Supplies", "Displace", "Gatekeeper", "Fisherman", "Wayfarer"],
        extras: ["Horse"],
        landscapes: ["Desperation", "Way of the Mouse"],
        mouse: "Harbinger",
        expansions: ["base", "menagerie"]
    },
    {
        name: "Master Exploder",
        cards: ["Chapel", "Moat", "Bureaucrat", "Festival", "Library", "Scrap", "Stockpile", "Coven", "Mastermind", "Paddock"],
        extras: ["Horse"],
        landscapes: ["Populate", "Way of the Mule"],
        expansions: ["base", "menagerie"]
    },
    {
        name: "The Great Outdoors",
        cards: ["Cellar", "Gardens", "Militia", "Festival", "Laboratory", "Goatherd", "Sheepdog", "Bounty Hunter", "Barge", "Hunting Lodge"],
        landscapes: ["Invest", "Way of the Sheep"],
        expansions: ["base", "menagerie"]
    },
    {
        name: "Dizzy",
        cards: ["Poacher", "Throne Room", "Bandit", "Library", "Artisan", "Sleigh", "Cavalry", "Kiln", "Sanctuary", "Animal Fair"],
        extras: ["Horse"],
        landscapes: ["Gamble", "Way of the Butterfly"],
        expansions: ["base", "menagerie"]
    },
    {
        name: "Hot Pursuit",
        cards: ["Cellar", "Merchant", "Moneylender", "Smithy", "Market", "Sheepdog", "Village Green", "Coven", "Displace", "Falconer"],
        landscapes: ["Pursue", "Way of the Turtle"],
        expansions: ["base", "menagerie"]
    },
    {
        name: "Hidden Horses",
        cards: ["Vassal", "Poacher", "Council Room", "Festival", "Laboratory", "Scrap", "Cardinal", "Groom", "Gatekeeper", "Paddock"],
        extras: ["Horse"],
        landscapes: ["Reap", "Way of the Mole"],
        expansions: ["base", "menagerie"]
    },
    {
        name: "Villainy",
        cards: ["Chapel", "Workshop", "Gardens", "Militia", "Bandit", "Black Cat", "Snowy Village", "Stockpile", "Livery", "Mastermind"],
        extras: ["Horse"],
        landscapes: ["Enclave", "Way of the Otter"],
        expansions: ["base", "menagerie"]
    },
    {
        name: "Going Large",
        cards: ["Moat", "Village", "Bureaucrat", "Remodel", "Witch", "Camel Train", "Goatherd", "Barge", "Hunting Lodge", "Fisherman"],
        extras: ["Horse"],
        landscapes: ["Demand", "Way of the Squirrel"],
        expansions: ["base", "menagerie"]
    },
    {
        name: "Charge of the Flight Brigade",
        cards: ["Secret Passage", "Courtier", "Patrol", "Trading Post", "Harem", "Sheepdog", "Cavalry", "Hostelry", "Coven", "Livery"],
        extras: ["Horse"],
        landscapes: ["Stampede", "Way of the Butterfly"],
        expansions: ["intrigue", "menagerie"]
    },
    {
        name: "Hunting Party",
        cards: ["Pawn", "Masquerade", "Mill", "Duke", "Minion", "Black Cat", "Supplies", "Bounty Hunter", "Falconer", "Hunting Lodge"],
        extras: ["Horse"],
        landscapes: ["Enclave", "Way of the Rat"],
        expansions: ["intrigue", "menagerie"]
    },
    {
        name: "Friendly Negotiations",
        cards: ["Steward", "Bridge", "Conspirator", "Torturer", "Nobles", "Sleigh", "Camel Train", "Snowy Village", "Village Green", "Kiln"],
        extras: ["Horse"],
        landscapes: ["Desperation", "Way of the Frog"],
        expansions: ["intrigue", "menagerie"]
    },
    {
        name: "Hickory Dickory",
        cards: ["Shanty Town", "Baron", "Diplomat", "Replace", "Upgrade", "Bounty Hunter", "Cardinal", "Gatekeeper", "Fisherman", "Animal Fair"],
        landscapes: ["Alliance", "Way of the Mouse"],
        mouse: "Lurker",
        expansions: ["intrigue", "menagerie"]
    },
    {
        name: "Higgledy-Piggledy",
        cards: ["Courtyard", "Swindler", "Ironworks", "Mining Village", "Courtier", "Goatherd", "Barge", "Displace", "Mastermind", "Destrier"],
        landscapes: ["Invest", "Way of the Pig"],
        expansions: ["intrigue", "menagerie"]
    },
    {
        name: "Ambling",
        cards: ["Wishing Well", "Baron", "Duke", "Minion", "Harem", "Sleigh", "Stockpile", "Cavalry", "Gatekeeper", "Destrier"],
        extras: ["Horse"],
        landscapes: ["Delay", "Way of the Camel"],
        expansions: ["intrigue", "menagerie"]
    },
    {
        name: "Gallop",
        cards: ["Pawn", "Mill", "Secret Passage", "Patrol", "Trading Post", "Scrap", "Village Green", "Falconer", "Livery", "Wayfarer"],
        extras: ["Horse"],
        landscapes: ["Commerce", "Way of the Seal"],
        expansions: ["intrigue", "menagerie"]
    },
    {
        name: "Gamble Scramble",
        cards: ["Courtyard", "Steward", "Baron", "Minion", "Replace", "Barge", "Coven", "Kiln", "Mastermind", "Animal Fair"],
        landscapes: ["Gamble", "Way of the Squirrel"],
        expansions: ["intrigue", "menagerie"]
    },
    {
        name: "Procrastination",
        cards: ["Bridge", "Conspirator", "Ironworks", "Minion", "Torturer", "Supplies", "Scrap", "Snowy Village", "Sanctuary", "Fisherman"],
        extras: ["Horse"],
        landscapes: ["Toil", "Way of the Turtle"],
        expansions: ["intrigue", "menagerie"]
    },
    {
        name: "Play Pen",
        cards: ["Lurker", "Diplomat", "Secret Passage", "Upgrade", "Nobles", "Black Cat", "Sheepdog", "Bounty Hunter", "Cavalry", "Groom"],
        extras: ["Horse"],
        landscapes: ["March", "Way of the Sheep"],
        expansions: ["intrigue", "menagerie"]
    },
    {
        name: "Seahorses",
        cards: ["Astrolabe", "Lookout", "Treasure Map", "Corsair", "Treasury", "Sleigh", "Scrap", "Sheepdog", "Cavalry", "Groom"],
        extras: ["Horse"],
        landscapes: ["Delay", "Way of the Mole"],
        expansions: ["seaside", "menagerie"]
    },
    {
        name: "Desert Markets",
        cards: ["Lighthouse", "Native Village", "Smugglers", "Caravan", "Tactician", "Camel Train", "Village Green", "Coven", "Kiln", "Animal Fair"],
        landscapes: ["Banish", "Way of the Seal"],
        expansions: ["seaside", "menagerie"]
    },
    {
        name: "Avoiding Scurvy",
        cards: ["Fishing Village", "Monkey", "Sailor", "Merchant Ship", "Outpost", "Sheepdog", "Stockpile", "Cardinal", "Falconer", "Mastermind"],
        extras: ["Horse"],
        landscapes: ["Bargain", "Way of the Rat"],
        expansions: ["seaside", "menagerie"]
    },
    {
        name: "Cloud Storage",
        cards: ["Haven", "Warehouse", "Blockade", "Cutpurse", "Island", "Hostelry", "Barge", "Fisherman", "Hunting Lodge", "Livery"],
        extras: ["Horse"],
        landscapes: ["Alliance", "Way of the Squirrel"],
        expansions: ["seaside", "menagerie"]
    },
    {
        name: "Hiding in the Depths",
        cards: ["Sea Chart", "Caravan", "Cutpurse", "Tide Pools", "Bazaar", "Black Cat", "Snowy Village", "Groom", "Displace", "Paddock"],
        extras: ["Horse"],
        landscapes: ["Commerce", "Way of the Worm"],
        expansions: ["seaside", "menagerie"]
    },
    {
        name: "Swift Manoeuvre",
        cards: ["Native Village", "Smugglers", "Cutpurse", "Merchant Ship", "Wharf", "Scrap", "Cardinal", "Livery", "Fisherman", "Destrier"],
        extras: ["Horse"],
        landscapes: ["Toil", "Way of the Butterfly"],
        expansions: ["seaside", "menagerie"]
    },
    {
        name: "Beacon of Hope",
        cards: ["Lighthouse", "Salvager", "Tide Pools", "Pirate", "Sea Witch", "Stockpile", "Village Green", "Falconer", "Sanctuary", "Wayfarer"],
        landscapes: ["Pursue", "Way of the Mule"],
        expansions: ["seaside", "menagerie"]
    },
    {
        name: "Bacon of Cope",
        cards: ["Monkey", "Blockade", "Treasure Map", "Corsair", "Outpost", "Sleigh", "Supplies", "Goatherd", "Mastermind", "Animal Fair"],
        extras: ["Horse"],
        landscapes: ["Demand", "Way of the Pig"],
        expansions: ["seaside", "menagerie"]
    },
    {
        name: "Riding the Waves",
        cards: ["Sea Chart", "Warehouse", "Bazaar", "Pirate", "Wharf", "Snowy Village", "Cavalry", "Gatekeeper", "Hunting Lodge", "Kiln"],
        extras: ["Horse"],
        landscapes: ["Reap", "Way of the Horse"],
        expansions: ["seaside", "menagerie"]
    },
    {
        name: "Paddling Pool",
        cards: ["Haven", "Astrolabe", "Fishing Village", "Merchant Ship", "Treasury", "Supplies", "Camel Train", "Bounty Hunter", "Displace", "Falconer"],
        extras: ["Horse"],
        landscapes: ["Seize the Day", "Way of the Chameleon"],
        expansions: ["seaside", "menagerie"]
    },
    {
        name: "Stable Economy",
        cards: ["Anvil", "Monument", "Tiara", "Magnate", "Bank", "Scrap", "Snowy Village", "Hostelry", "Barge", "Destrier"],
        colony: true,
        extras: ["Horse"],
        landscapes: ["March", "Way of the Turtle"],
        expansions: ["prosperity", "menagerie"]
    },
    {
        name: "Triple Triad",
        cards: ["Bishop", "Worker's Village", "Charlatan", "War Chest", "King's Court", "Sheepdog", "Cardinal", "Falconer", "Paddock", "Sanctuary"],
        colony: true,
        extras: ["Horse"],
        landscapes: ["Toil", "Way of the Mouse"],
        mouse: "Camel Train",
        expansions: ["prosperity", "menagerie"]
    },
    {
        name: "Regulated",
        cards: ["Clerk", "City", "Mint", "Grand Market", "Forge", "Sleigh", "Village Green", "Coven", "Displace", "Fisherman"],
        colony: true,
        extras: ["Horse"],
        landscapes: ["Bargain", "Way of the Owl"],
        expansions: ["prosperity", "menagerie"]
    },
    {
        name: "Pet Insurance",
        cards: ["Watchtower", "Investment", "Hoard", "Expand", "Peddler", "Black Cat", "Hunting Lodge", "Kiln", "Wayfarer", "Animal Fair"],
        colony: true,
        landscapes: ["Seize the Day", "Way of the Chameleon"],
        expansions: ["prosperity", "menagerie"]
    },
    {
        name: "Goof Troop",
        cards: ["Collection", "Crystal Ball", "Magnate", "Vault", "War Chest", "Stockpile", "Cardinal", "Cavalry", "Gatekeeper", "Livery"],
        colony: true,
        extras: ["Horse"],
        landscapes: ["Pursue", "Way of the Ox"],
        expansions: ["prosperity", "menagerie"]
    },
    {
        name: "Hoards and Hordes and Horses",
        cards: ["Quarry", "Mint", "Rabble", "Vault", "Hoard", "Supplies", "Goatherd", "Snowy Village", "Village Green", "Gatekeeper"],
        colony: true,
        extras: ["Horse"],
        landscapes: ["Enhance", "Way of the Seal"],
        expansions: ["prosperity", "menagerie"]
    },
    {
        name: "Lucky 7s",
        cards: ["Monument", "Magnate", "Bank", "Expand", "King's Court", "Camel Train", "Sheepdog", "Hunting Lodge", "Destrier", "Animal Fair"],
        colony: true,
        extras: ["Horse"],
        landscapes: ["Stampede", "Way of the Mule"],
        expansions: ["prosperity", "menagerie"]
    },
    {
        name: "Akhal-Teke",
        cards: ["Bishop", "Quarry", "City", "Hoard", "Forge", "Supplies", "Hostelry", "Gatekeeper", "Livery", "Fisherman"],
        colony: true,
        extras: ["Horse"],
        landscapes: ["Enclave", "Way of the Camel"],
        expansions: ["prosperity", "menagerie"]
    },
    {
        name: "Profit Warning",
        cards: ["Anvil", "Clerk", "Charlatan", "Rabble", "Peddler", "Goatherd", "Scrap", "Village Green", "Displace", "Wayfarer"],
        colony: true,
        extras: ["Horse"],
        landscapes: ["Commerce", "Way of the Frog"],
        expansions: ["prosperity", "menagerie"]
    },
    {
        name: "Puts and Calls",
        cards: ["Watchtower", "Worker's Village", "Mint", "Vault", "Grand Market", "Cardinal", "Groom", "Kiln", "Mastermind", "Sanctuary"],
        colony: true,
        extras: ["Horse"],
        landscapes: ["Invest", "Way of the Mole"],
        expansions: ["prosperity", "menagerie"]
    }
];
