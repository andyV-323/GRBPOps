export const PROVINCES = {
  Golem1: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/GolemIsland.png',
    biome: 'Volcanic Rain Forest',

    locations: [
      {
        name: 'Ancient Harbor',
        coordinates: [190, 360],
        description: 'Ancient harbor reporpused as a depot by the Wolves.',
      },
      {
        name: 'Golem Island Sattelite Dish',
        coordinates: [250, 460],
        description:
          'Skell Facility built to communicate and send data through the world.',
      },
      {
        name: 'Golem Island Heliport',
        coordinates: [320, 560],
        description:
          'Cold War Heliport, the only path from sector 1 to sector 2.',
      },
      {
        name: 'Chemical Pipeline',
        coordinates: [600, 550],
        description: 'Pipeline connecting the refinery to the Workshop.',
      },
      {
        name: 'Chemical Refinery',
        coordinates: [450, 450],
        description:
          'Facility producing chemical compounds needed for the Workshop.',
      },
    ],
  },
  Golem2: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/GolemIsland.png',
    biome: 'Volcanic Rain Forest',

    locations: [
      {
        name: 'Golem Island Testing Zone ',
        coordinates: [130, 560],
        description:
          'Skell facility built to test the Titan Drones capabilities.',
      },
      {
        name: 'Missile Site Ruins',
        coordinates: [110, 700],
        description: 'Cold War, Titan Missiles site covered by lava.',
      },
      {
        name: 'Camp Phoenix',
        coordinates: [280, 660],
        description:
          'Skell living quarters repurposed as the Main Wolf camp of the island.',
      },
      {
        name: 'Camp Salamander',
        coordinates: [330, 730],
        description: 'Wolf camp protecting the gate between sector 2 and 3.',
      },
      {
        name: 'Forgotten Sanctuary',
        coordinates: [220, 560],
        description: 'Ancient Santuary',
      },
    ],
  },
  Golem3: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/GolemIsland.png',
    biome: 'Volcanic Dessert',

    locations: [
      {
        name: 'Red Phoenix Outpost',
        coordinates: [325, 890],
        description: "Outpost protecting the access to No Man's Land.",
      },
      {
        name: 'Lava Shield',
        coordinates: [495, 850],
        description: 'Thermal shield protecting the Scandium mine from lava.',
      },
      {
        name: 'Lavaduct',
        coordinates: [540, 800],
        description: 'Skell structure to reroute Lava and power the Workshop.',
      },
      {
        name: 'Scandium Mine',
        coordinates: [440, 815],
        description: 'Rare mineral mine used to produce Titan and Node Alloy.',
      },
      {
        name: "No Man's Land",
        coordinates: [430, 995],
        description:
          'Cold War training camp obliberated by the 1968 Volcano eruption.',
      },
      {
        name: 'Prototype Workshop',
        coordinates: [650, 680],
        description: 'Skell facility producing Titan Drones.',
      },
    ],
  },
  CapeNorth: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/capenorthMap.png',
    biome: 'Rain Forest',

    locations: [
      {
        name: 'Skell Foundation Campus',
        coordinates: [330, 610],
        description: 'The brains of Skell Tech. A.I. reasearch.',
      },
      {
        name: 'Darkwood Island Port',
        coordinates: [250, 740],
        description: 'Was used by Skellers to join Auroan Islands.',
      },
      {
        name: 'Bat SAM Site',
        coordinates: [165, 690],
        description: 'A surface to air missiles site.',
      },
      {
        name: 'Construction Site',
        coordinates: [340, 480],
        description: 'A Skell Tech. construction site stopped by the PMC.',
      },
      {
        name: 'Campus Data Farm',
        coordinates: [410, 550],
        description: 'Campus backup servers of the Auroa Data Farm.',
      },
      {
        name: 'Underwater Cable Station',
        coordinates: [395, 265],
        description: "Links the campus to Aurora's network.",
      },
      {
        name: 'Campus Relay Station',
        coordinates: [430, 870],
        description: 'The Darkwood Island radio relay.',
      },
      {
        name: 'A.I Experimental Center',
        coordinates: [690, 790],
        description: 'Tests ne A.I. and updates befor implementation.',
      },
      {
        name: 'Sentinel Corp. Location',
        coordinates: [380, 745],
        description:
          'An intriguing location to explore links to the radio realy.',
      },
    ],
  },
  DriftwoodIslets: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/capenorthMap.png',
    biome: 'Rain Forest',

    locations: [
      {
        name: 'Driftwood Islets Testing Zone',
        coordinates: [530, 1150],
        description: 'City center simulation to test drone behavior.',
      },
      {
        name: 'Camp Kodiak',
        coordinates: [80, 1215],
        description:
          'Wolves base, possibly holding captured outcasts or ghosts.',
      },
      {
        name: 'Ancient Sanctuary',
        coordinates: [300, 1030],
        description: 'The ruiins of a lost civilization.',
      },
      {
        name: 'Ancient Cemetery',
        coordinates: [200, 1155],
        description: 'The ruind of a lost civilation',
      },
    ],
  },
  WildCoast: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/WildCoast.png',
    biome: 'High Cliffs',

    locations: [
      {
        name: 'Electric Engine Factory',
        coordinates: [125, 660],
        description: "Drone's electric engines are manufactured here.",
      },
      {
        name: 'Outpost Blue Tiger',
        coordinates: [250, 590],
        description: 'Wolves base possible holding outcats or ghost captive.',
      },
      {
        name: 'Toxic Storage Depot',
        coordinates: [170, 450],
        description: 'Waste storage facility for transit to Windy Islands.',
      },
      {
        name: 'Anchor Point Station',
        coordinates: [160, 250],
        description: 'Remnants of a 19th century whaler port.',
      },
      {
        name: 'Drone Station W031',
        coordinates: [265, 435],
        description: 'Skell Tech. drone control Network relay station.',
      },
      {
        name: 'Engine R&D Center',
        coordinates: [370, 460],
        description: "Drone's engines are designed here.",
      },
      {
        name: 'Shark Bank Station',
        coordinates: [680, 620],
        description: 'Remnants of a 19th century whaler port.',
      },
      {
        name: 'Control Station Tiger 01',
        coordinates: [550, 660],
        description:
          'Deployed since Operation Citadel to control lethal drones.',
      },
      {
        name: 'Youth Spring',
        coordinates: [605, 750],
        description:
          'A startup sponsored by Skell to upgrade cognitive abilities.',
      },
      {
        name: 'Wind Farm W03',
        coordinates: [655, 750],
        description: 'A renewable energy source built by Skell Tech.',
      },
      {
        name: 'Hybrid Engine Factory',
        coordinates: [430, 900],
        description: "Drone's hybrid engines are manufactured here.",
      },
      {
        name: 'Wild Coast Freight Yard',
        coordinates: [430, 730],
        description:
          'Built by Skell Tech. to reception materials and ship engines.',
      },
      {
        name: 'Storage Depot',
        coordinates: [310, 730],
        description: 'Materials from Whangara are stored here.',
      },
      {
        name: 'Checkpoint Tiger Foxtrot',
        coordinates: [335, 655],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Ancient Harbor',
        coordinates: [445, 550],
        description: 'The ruins of a lost civilization.',
      },
    ],
  },
  SmugglersCoves: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/SmugglersCove.png',
    biome: 'High Cliffs',

    locations: [
      {
        name: 'Ancient Harbor',
        coordinates: [415, 1300],
        description: 'The ruins of a lost civilization.',
      },
      {
        name: 'Maunga Nui Port',
        coordinates: [560, 770],
        description: 'Maunga Nui Island main industrial port.',
      },
      {
        name: 'Smuggler Coves Freight Yard',
        coordinates: [495, 680],
        description:
          'Built by Skell Tech. to reception ores and ship materials.',
      },
      {
        name: 'Spanish Fortress',
        coordinates: [580, 480],
        description: 'A XVII century Spanish fort razed by the Ancients.',
      },
      {
        name: 'Drone Station W011',
        coordinates: [400, 460],
        description: 'Skell Tech. drone Control Network relay station.',
      },
      {
        name: 'Wind Farm W01',
        coordinates: [345, 285],
        description: 'A renewable energy source built by Skell Tech.',
      },
      {
        name: 'Foxglove Station',
        coordinates: [305, 345],
        description:
          'A Skell Tech. construction site stopped by the PMC, must breach doors.',
      },
      {
        name: 'Auroa Materials Deposit',
        coordinates: [285, 645],
        description: 'Metal Storage Facility dedicated to drone production.',
      },
      {
        name: 'Oleander Station',
        coordinates: [200, 940],
        description:
          'A Skell Tech. construction site stopped by the PMC, must breach doors.',
      },
      {
        name: 'Polymorph Modeling',
        coordinates: [231, 1095],
        description: 'A startup sponsored by Skell to improve 3D printing.',
      },
      {
        name: 'Outpost Red Tiger',
        coordinates: [328, 940],
        description: 'Wolves base possibly holding oucast or ghost prisoners.',
      },
      {
        name: 'Checkpoint Tiger Bravo',
        coordinates: [477, 670],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Checkpoint Tiger Charlie',
        coordinates: [506, 1056],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Checkpoint Tiger Delta',
        coordinates: [389, 1058],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Composite Factory',
        coordinates: [458, 1101],
        description: 'Produces composite materials used by drone factories.',
      },
      {
        name: 'Emergency Center',
        coordinates: [17, 1132],
        description: 'Able to service all probable industrial accident sites.',
      },
    ],
  },
  SinkingCountry: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/SinkingCountry.png',
    biome: 'Salt Marsh',

    locations: [
      {
        name: 'Ancient Harbor',
        coordinates: [683, 671],
        description: 'The ruins of a lost civilization.',
      },
      {
        name: 'Howard Airfield',
        coordinates: [655, 783],
        description: 'Wolf base possibly holding outcast or ghost prisioners',
      },
      {
        name: 'Howard Port',
        coordinates: [460, 1024],
        description: 'Cold War port renovated by Sentinal Corp.',
      },
      {
        name: 'Radar Station North',
        coordinates: [577, 930],
        description: 'Cold War radar station refurnished by Sentinel Corp.',
      },
      {
        name: 'Anti-Aircraft Ruins',
        coordinates: [471, 490],
        description: 'Abandoned Cold War A.A. site.',
      },
      {
        name: 'Harrier SAM Site',
        coordinates: [580, 740],
        description: 'A surface to air missiles site.',
      },
      {
        name: 'Osprey SAM Site',
        coordinates: [555, 840],
        description: 'A surface to air missiles site.',
      },
      {
        name: 'Sparrowhawk SAM Site',
        coordinates: [327, 1131],
        description: 'A surface to air missiles site.',
      },
      {
        name: 'Sentinel Corp. Land Base',
        coordinates: [300, 610],
        description: 'The Sentinel Corp. land forces HQ on Auroa.',
      },
      {
        name: 'Equipment Depot',
        coordinates: [240, 790],
        description: 'Sentinel Corp. land forces main supply depot.',
      },
      {
        name: 'Ammunition Depot',
        coordinates: [455, 790],
        description:
          'Cold War vestige repurposed as a Sentinel Corp. ammo. depot.',
      },
      {
        name: 'Checkpoint Tiger Kilo',
        coordinates: [190, 820],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Checkpoint Tiger Golf',
        coordinates: [545, 727],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Checkpoint Tiger India',
        coordinates: [396, 724],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Checkpoint Tiger Juliet',
        coordinates: [274, 600],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Bunker Edgehod North',
        coordinates: [480, 1175],
        description: 'Cold War bunkers renovated by Sentinel Corp.',
      },
      {
        name: 'Bunker Edgehod South',
        coordinates: [80, 1012],
        description: 'Cold War bunkers renovated by Sentinel Corp.',
      },
      {
        name: 'Camp Tiger',
        coordinates: [250, 1155],
        description: 'Wolves base possibly holding outcast or Ghost captive',
      },
    ],
  },
  WhalersBay: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/WhalersBay.png',
    biome: 'High Cliffs',

    locations: [
      {
        name: 'Aconite Station',
        coordinates: [360, 645],
        description:
          'A Skell Tech. construction site stopped by the PMC, must breach doors.',
      },
      {
        name: 'Checkpoint Weasel Charlie',
        coordinates: [620, 906],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Checkpoint Weasel Delta',
        coordinates: [580, 870],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Storage Depot',
        coordinates: [550, 890],
        description: 'Materials from Whangara are stored here.',
      },
      {
        name: 'Mechanical R&D Center',
        coordinates: [710, 810],
        description: "Drone's chassis are designed here.",
      },
      {
        name: 'Fanny Bay Port',
        coordinates: [610, 720],
        description: 'Remnants of a 19th century whaler port.',
      },
      {
        name: 'Land Chassis Factory',
        coordinates: [490, 800],
        description: "Drone's land chassis are built here.",
      },
      {
        name: 'Whalers Bay Airfield',
        coordinates: [420, 630],
        description: 'Used to cross the central mountain range.',
      },
      {
        name: 'Wind Farm W02',
        coordinates: [490, 535],
        description: 'A renewable energy source built by Skell Tech.',
      },
      {
        name: 'Drone Station W061',
        coordinates: [370, 720],
        description: 'Skell Tech. drone Control Network relay station.',
      },
      {
        name: 'Blue Cove Station',
        coordinates: [300, 550],
        description: 'Remnants of a 19th century whaler port.',
      },
      {
        name: 'Ancient Harbor',
        coordinates: [200, 550],
        description: 'The ruins of a lost civilization.',
      },
      {
        name: 'Construction Site',
        coordinates: [135, 700],
        description: 'Skell Tech. construction site closed by Sentinel Corp.',
      },
      {
        name: 'Checkpoint Weasel Echo',
        coordinates: [115, 730],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Air Chassis Factory',
        coordinates: [260, 815],
        description: "Drone's air chassis are built here.",
      },
    ],
  },
  MountHodgson: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/MountHudgson.png',
    biome: 'High Thundra',

    locations: [
      {
        name: 'Bald Peak Mine',
        coordinates: [520, 1200],
        description: "Start of the drone's production process.",
      },
      {
        name: 'Chem-Extraction Complex',
        coordinates: [590, 900],
        description: 'Chemical processing area to extract ore from rocks.',
      },
      {
        name: 'Silent Valley Mine',
        coordinates: [335, 620],
        description: "Start of the drone's production process.",
      },
      {
        name: 'Drone Station W041',
        coordinates: [225, 690],
        description: 'Skell Tech. drone Control Network relay station.',
      },
      {
        name: 'Checkpoint Tiger Echo',
        coordinates: [120, 700],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Mining Control Center',
        coordinates: [660, 620],
        description: 'Oversees all mining activities in Auroa.',
      },
    ],
  },
  FenBog: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/Fenbog.png',
    biome: 'Salt Marsh',

    locations: [
      {
        name: 'BlueCorp Startup',
        coordinates: [655, 365],
        description: 'A startup sponsored by Skell to improve Aquaponics.',
      },
      {
        name: 'Andersons Farm',
        coordinates: [400, 620],
        description: 'An Aquaponics farm built by Skell Tech.',
      },
      {
        name: 'Longford Farm',
        coordinates: [475, 770],
        description: 'An Aquaponics farm built by Skell Tech.',
      },
      {
        name: 'Whitestone Farm',
        coordinates: [540, 650],
        description: 'An Aquaponics farm built by Skell Tech.',
      },
      {
        name: 'Airship Air Station',
        coordinates: [670, 500],
        description: 'A cold war experimental airship base.',
      },
      {
        name: 'Shipping Center',
        coordinates: [480, 510],
        description: 'Fish and Algae are shipped daily to New Argyll.',
      },
      {
        name: 'Fen Bog Port',
        coordinates: [160, 820],
        description: 'Aquaponics Supply shipping port.',
      },
      {
        name: 'Recycling Facility',
        coordinates: [90, 630],
        description: 'Biological compost from farms is recycled here.',
      },
      {
        name: 'Photovoltaic Park W01',
        coordinates: [130, 540],
        description: 'A renewable energy built by Skell Tech.',
      },
      {
        name: 'Fen Bog Testing Zone',
        coordinates: [105, 475],
        description: 'Drone swamp mobility testing area.',
      },
      {
        name: 'Control Station Tiger 03',
        coordinates: [340, 470],
        description:
          'Deployed since Operation Citadel to control lethal drones.',
      },
      {
        name: 'Checkpoint Tiger Bravo',
        coordinates: [350, 535],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Checkpoint Tiger Hotel',
        coordinates: [655, 363],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Drone Station W052',
        coordinates: [435, 860],
        description: 'Skell Tech. drone Control Network relay station.',
      },
      {
        name: 'Control Station Tiger 02',
        coordinates: [350, 950],
        description:
          'Deployed since Operation Citadel to control lethal drones.',
      },
      {
        name: 'Drone Station W051',
        coordinates: [280, 910],
        description: 'Skell Tech. drone Control Network relay station.',
      },
      {
        name: 'Hogweed Station',
        coordinates: [355, 733],
        description:
          'A Skell Tech. construction site stopped by the PMC, must breach doors.',
      },
      {
        name: 'Ancient Village',
        coordinates: [270, 810],
        description: 'The ruins of a lost civilization.',
      },
    ],
  },
  GoodHopeMountain: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/GoodHopeMt.png',
    biome: 'High Thundra',

    locations: [
      {
        name: 'Red Weasel Outpost',
        coordinates: [380, 900],
        description: 'Deployed by the Wolves since Operation Citadel.',
      },
      {
        name: 'Checkpoint Weasel India',
        coordinates: [345, 600],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Camp Weasel',
        coordinates: [385, 680],
        description: 'Wolves base ',
      },
      {
        name: 'Checkpoint Weasel Hotel',
        coordinates: [435, 660],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Bunker Edgehod South',
        coordinates: [480, 675],
        description: 'Abandoned Cold War bunkers',
      },
      {
        name: 'Natural Hazards Control',
        coordinates: [480, 500],
        description: 'The Auroa civilian security control center.',
      },
      {
        name: 'Auroa Survival Shelter',
        coordinates: [515, 370],
        description:
          'Built by Skell to shelter Ayroa population from a natural disaster.',
      },
      {
        name: 'Drone Station W111',
        coordinates: [190, 290],
        description: 'Skell Tech. drone Control Network relay station.',
      },
      {
        name: 'Auroa Weather Station',
        coordinates: [100, 935],
        description: 'Monitors the South Pacific weather.',
      },
      {
        name: 'Checkpoint Weasel Alpha',
        coordinates: [440, 1000],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Checkpoint Weasel Golf',
        coordinates: [700, 345],
        description: 'Deployed since Operation Citadel to control roads.',
      },
    ],
  },
  SilentMountain: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/SilentMt.png',
    biome: 'High Thundra',

    locations: [
      {
        name: 'Pumping Station',
        coordinates: [460, 777],
        description: 'Channels cold water from the glacier to the data farm.',
      },
      {
        name: 'Auroa Data Farm',
        coordinates: [275, 890],
        description: 'The main Skell Tech. farm of Auroa.',
      },
      {
        name: 'Battery Farm',
        coordinates: [340, 1030],
        description: 'Backup energy for the data farm.',
      },
      {
        name: 'Auroa Intranet Control',
        coordinates: [375, 530],
        description: 'Oversees all communication networks.',
      },
      {
        name: 'Submarine Cable Control',
        coordinates: [520, 400],
        description: 'Controls the submarine communications cable.',
      },
      {
        name: 'Hemlock Station',
        coordinates: [635, 445],
        description:
          'A Skell Tech. construction site stopped by the PMC, must breach doors.',
      },
      {
        name: "O'Connors Mine",
        coordinates: [235, 540],
        description: 'Remnants of a 20th century gold mine.',
      },
      {
        name: "Mathilda's Palace",
        coordinates: [145, 530],
        description: 'Remnants of a gold prospector camp.',
      },
      {
        name: 'Camp Black Widow',
        coordinates: [170, 750],
        description: 'Deployed by Sentinel Corp. since Operation Citadel.',
      },
      {
        name: 'Drone Station W071',
        coordinates: [285, 290],
        description: 'Skell Tech. drone Control NetWork relay station.',
      },
    ],
  },
  NewArgyll: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/NewArgyll.png',
    biome: 'Rain Shadows',

    locations: [
      {
        name: 'Control Station Tiger 04',
        coordinates: [640, 665],
        description:
          'Deployed since Operation Citadel to control lethal drones.',
      },
      {
        name: 'Meal Packaging Center',
        coordinates: [290, 650],
        description:
          'A food factory built by Skell Tech. to ensure Auroa autonomy.',
      },
      {
        name: 'Fish Processing Center',
        coordinates: [395, 625],
        description:
          'A food factory built by Skell Tech. to ensure Auroa autonomy.',
      },
      {
        name: 'Cold Storage Center',
        coordinates: [200, 590],
        description: 'The main Auroa cold food storage.',
      },
      {
        name: 'New Argyll Winery',
        coordinates: [90, 600],
        description: 'A winery built by Skell.',
      },
      {
        name: 'Juice Processing Center',
        coordinates: [75, 500],
        description:
          'A food factory built by Skell Tech. to ensure Auroa Autonomy.',
      },
      {
        name: 'Brewery',
        coordinates: [70, 355],
        description: 'A brewery built by Skell.',
      },
      {
        name: 'Long Valley Residences',
        coordinates: [45, 250],
        description: 'Eco-friendly area built for Auroa Skellers.',
      },
      {
        name: 'Skell Estate',
        coordinates: [10, 200],
        description: "Jace Skell's home in auroa.",
      },
      {
        name: 'Outpost Black Tiger',
        coordinates: [295, 325],
        description: 'Wolves Base possibly holding outcast or Ghost captive.',
      },
      {
        name: 'Ancient Fort',
        coordinates: [395, 410],
        description: 'The ruins of a lost civilization.',
      },
      {
        name: 'Ancient Sacred Site',
        coordinates: [690, 670],
        description: 'The ruins of a lost civilization.',
      },
    ],
  },
  Infinity: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/Infinity.png',
    biome: 'Meadow Lands',

    locations: [
      {
        name: 'Skell Foundation Head Office',
        coordinates: [700, 700],
        description:
          'The Subsidiary managing talent, recruitment, and communication.',
      },
      {
        name: 'Checkpoint Viper Golf',
        coordinates: [715, 600],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Control Station Viper 04',
        coordinates: [740, 560],
        description:
          'Deployed since Operation Citadel to control lethal drones.',
      },
      {
        name: 'Alpha Centauri Residences',
        coordinates: [655, 400],
        description: 'Eco-friendly area built for Aroa Skellers.',
      },
      {
        name: 'Skell Security',
        coordinates: [525, 435],
        description:
          'The subsidiary managing activity of non-lethal security drones.',
      },
      {
        name: 'Checkpoint Viper Delta',
        coordinates: [475, 260],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Skell Technology Head Office',
        coordinates: [460, 185],
        description:
          'Managed the Skell world corporation before Operation Citadel.',
      },
      {
        name: 'Polaris Residences',
        coordinates: [290, 110],
        description: 'Eco-friendly are built for Auroa Skellers.',
      },
      {
        name: 'Checkpoint Viper Charlie',
        coordinates: [155, 280],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Vega Residences',
        coordinates: [140, 345],
        description: 'Eco-friendly are built for Auroa Skellers.',
      },
      {
        name: 'Infinity Medical Center',
        coordinates: [135, 415],
        description: 'A hospital built by Skel Tech.',
      },
      {
        name: 'Checkpoint Viper Echo',
        coordinates: [75, 400],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Canopus District',
        coordinates: [120, 470],
        description: 'Entertainment area, now controlled by Sentinel Corp.',
      },
      {
        name: 'Jace Skell Conference Hall',
        coordinates: [85, 615],
        description: 'The Great Hall where Skell presented new products.',
      },
      {
        name: 'Rigel Residences',
        coordinates: [195, 595],
        description: 'Eco-friendly are built for Auroa Skellers.',
      },
      {
        name: 'Sirius Residences',
        coordinates: [270, 545],
        description: 'Eco-friendly are built for Auroa Skellers.',
      },
      {
        name: 'Outpost Green Viper',
        coordinates: [285, 390],
        description: 'Wolves Base possibly holding outcast or Ghost captive.',
      },
      {
        name: 'Auroa Eco-Museum',
        coordinates: [280, 315],
        description: 'A museum dedicated to Auroa history.',
      },
      {
        name: 'Antares District',
        coordinates: [365, 560],
        description: 'Entertainment area, now controlled by Sentinel Corp.',
      },
      {
        name: 'Infinity Transport Hub',
        coordinates: [465, 660],
        description: "Infinity business capital city's passanger hub.",
      },
      {
        name: 'Auroa Airport',
        coordinates: [540, 850],
        description:
          'The Auroa international airport, closed since Operation Citadel.',
      },
    ],
  },
  Channels: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/Channels.png',
    biome: 'Fjordlands',

    locations: [
      {
        name: 'Oceanic Power Plant',
        coordinates: [740, 580],
        description:
          'A secondary energy source, based on ocean thermal energy.',
      },
      {
        name: 'Ancient Village',
        coordinates: [670, 590],
        description: 'The ruins of a lost civilization.',
      },
      {
        name: 'Electric Grid Control',
        coordinates: [500, 715],
        description: 'Monitors electricty across the archipelago.',
      },
      {
        name: 'Channels R&D Center',
        coordinates: [460, 635],
        description: 'Drone Networking and Integration Facility.',
      },
      {
        name: 'Channels Port',
        coordinates: [360, 520],
        description: 'A secondary industrial port supplying the power plants.',
      },
      {
        name: 'Red Shark Outpost',
        coordinates: [315, 400],
        description: 'Wolves base possibly holding outcats or Ghost captive.',
      },
      {
        name: 'Navy Fuelling Station',
        coordinates: [285, 375],
        description: 'Abandoned Cold War naval station.',
      },
      {
        name: 'Cold War Ruins',
        coordinates: [265, 490],
        description: 'Abandoned Cold War fuel depot.',
      },
      {
        name: 'Main Pumping Station',
        coordinates: [200, 365],
        description: 'The pumping station feeding Auroa Power Plant.',
      },
      {
        name: 'Auroa Power Plant',
        coordinates: [160, 430],
        description:
          'The main Auroa energy source, based on ocean thermal energy.',
      },
      {
        name: 'Step Up Startup',
        coordinates: [170, 520],
        description: 'A startup sponsored by Skell to upgrade human abilities.',
      },
      {
        name: 'Vulture SAM Site',
        coordinates: [290, 675],
        description: 'A surface to air missiles site.',
      },
      {
        name: 'Checkpoint Shark Charlie',
        coordinates: [140, 545],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Eagle SAM Site',
        coordinates: [180, 520],
        description: 'A surface to air missiles site.',
      },
      {
        name: 'Sentinel Corp. Location',
        coordinates: [290, 465],
        description: 'An intriguing location to explore.',
      },
    ],
  },
  RestrictedArea01: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/RestrictedArea.png',
    biome: 'High Thundra and Rain Shadows',

    locations: [
      {
        name: 'Manchineel Station',
        coordinates: [650, 1090],
        description:
          'A Skell Tech. construction site stopped by the PMC, must breach doors.',
      },

      {
        name: 'Maintenance Area',
        coordinates: [610, 1065],
        description: 'Lethal drones are maintained here.',
      },
      {
        name: 'Checkpoint Fox Charlie',
        coordinates: [630, 1185],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Grandview Mansion',
        coordinates: [630, 750],
        description: 'An intriguing location to explore.',
      },
      {
        name: 'Construction Site',
        coordinates: [680, 690],
        description: 'Skell Tech. construction site closed by Sentinel Corp.',
      },
      {
        name: 'Checkpoint Fox Alpha',
        coordinates: [680, 690],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Control Station Viper 01',
        coordinates: [740, 700],
        description:
          'Deployed since Operation Citadel to control lethal drones.',
      },
      {
        name: 'Camp Ferret',
        coordinates: [615, 535],
        description: 'Former Cold War Auroa army forces HQ.',
      },
      {
        name: 'Outpost Red Ferret',
        coordinates: [600, 330],
        description: 'Deployed by the Wolves since OOperation Citadel.',
      },
      {
        name: 'Assembly Hall Omega 02',
        coordinates: [595, 200],
        description: 'Assembles air lethal drones',
      },
      {
        name: 'Checkpoint Weasel Bravo',
        coordinates: [680, 160],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Arrow Testing Zone',
        coordinates: [500, 70],
        description: 'Wolves base ',
      },
      {
        name: 'Checkpoint Ferret Bravo',
        coordinates: [450, 270],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Gold Trail Testing Zone',
        coordinates: [415, 255],
        description:
          "Tests the drone's capacity to navigate in mountainous area.",
      },
      {
        name: 'Gate 07',
        coordinates: [35, 435],
        description: 'A protected access to Restricted Area 01.',
      },
      {
        name: 'Gate 03',
        coordinates: [275, 1160],
        description: 'A protected access to Restricted Area 01.',
      },
      {
        name: 'Nugget Cliff',
        coordinates: [380, 370],
        description: 'Ruins of a 19th century gold mine.',
      },
      {
        name: 'Omega Operations',
        coordinates: [500, 580],
        description:
          'Manages Project Omega: production of revolutionary lethal drones.',
      },
      {
        name: 'Checkpoint Fox Echo',
        coordinates: [375, 660],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Training Center',
        coordinates: [350, 740],
        description: 'Deployed by the Wolves since Operation Citadel.',
      },
      {
        name: 'Gate 06',
        coordinates: [200, 650],
        description: 'A protected access to Restricted Area 01.',
      },
      {
        name: 'Gate 05',
        coordinates: [150, 660],
        description: 'A protected access to Restricted Area 01.',
      },
      {
        name: 'Stony Creek Village',
        coordinates: [120, 715],
        description: "Ruins of gold prospectors' settlement.",
      },
      {
        name: 'Gate 04',
        coordinates: [80, 845],
        description: 'A protected access to Restricted Area 01.',
      },
      {
        name: 'Checkpoint Fox Delta',
        coordinates: [125, 890],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Devil Forest Gold Mine',
        coordinates: [225, 825],
        description: 'Ruins of a 19th century gold mine.',
      },
      {
        name: 'Omega R&D Center',
        coordinates: [280, 865],
        description: 'Develops next generation of lethal drones.',
      },
      {
        name: 'Assembly Hall Omega 01',
        coordinates: [205, 1005],
        description: 'Assembles ground lethal drones.',
      },
      {
        name: 'Drone Station W161',
        coordinates: [160, 1040],
        description:
          'Deployed since Operation Citadel too control lethal drones.',
      },
      {
        name: 'Russell Gold Mine',
        coordinates: [350, 1000],
        description: 'Ruins of a 19th century gold mine.',
      },
      {
        name: 'Freeman Residences',
        coordinates: [385, 850],
        description: 'An eco-friendly area built for the Auroa Skellers.',
      },
      {
        name: 'Outpost Red Fox',
        coordinates: [415, 720],
        description:
          'Wolves base possibly holding outcast or ghost prisioners.',
      },
      {
        name: 'Control Station Fox 01',
        coordinates: [545, 800],
        description:
          'Deployed since Operation Citadel too control lethal drones.',
      },
      {
        name: 'Control Station Fox 02',
        coordinates: [465, 1030],
        description:
          'Deployed since Operation Citadel too control lethal drones.',
      },
      {
        name: 'Prototype Workshop',
        coordinates: [500, 985],
        description: 'Creates lethal drone prototypes.',
      },
      {
        name: 'Camp Fox',
        coordinates: [520, 890],
        description: 'Deployed since Operation Citadel to secure this region.',
      },
      {
        name: 'Gate 02',
        coordinates: [325, 1130],
        description: 'A protected access to Restricted Area 01.',
      },
      {
        name: 'Gate 01',
        coordinates: [450, 1135],
        description: 'A protected access to Restricted Area 01.',
      },
    ],
  },
  LakeCountry: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/LakeCountry.png',
    biome: 'Rain SHadows',

    locations: [
      {
        name: 'Skell Security Assembly Hall',
        coordinates: [420, 490],
        description:
          'Assembled non-lethal security drones before Operation Citadel.',
      },
      {
        name: 'Ancient Village',
        coordinates: [670, 745],
        description: 'The ruins of a lost civilization.',
      },
      {
        name: 'Red Viper Outpost',
        coordinates: [545, 795],
        description: 'Wolves Base possibly holding outcast or ghost captive.',
      },
      {
        name: 'Prototype Workshop',
        coordinates: [555, 725],
        description:
          'Created non-lethal security drone prototypes befor Operation Citadel.',
      },
      {
        name: 'Checkpoint Viper Alpha',
        coordinates: [580, 560],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Skell Security R&D Center',
        coordinates: [315, 670],
        description:
          'Developed new non-lethal security drones before Operation Citadel.',
      },
      {
        name: 'Two Lakes Residences',
        coordinates: [230, 470],
        description: 'Eco-friendly area built for Auroa Skellers.',
      },
      {
        name: 'Skell Security Operations',
        coordinates: [70, 450],
        description:
          'Managed the production of non-lethal securtiy drones before Operation Citadel.',
      },
      {
        name: 'Maintenance Area',
        coordinates: [140, 315],
        description: 'Non-lethal security drones are maintained here.',
      },
      {
        name: 'Ancient Fort',
        coordinates: [280, 230],
        description: 'The ruins of a lost civilization.',
      },
      {
        name: 'Camp Viper',
        coordinates: [390, 235],
        description: 'The main Sentinel Corp. camp in the region.',
      },
      {
        name: 'Drone Station W121',
        coordinates: [460, 360],
        description: 'Skell Tech. drone Control Network relay station.',
      },
    ],
  },
  NewStirling: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/NewStirling.png',
    biome: 'Mead Lands',

    locations: [
      {
        name: 'Dunback Farm',
        coordinates: [655, 625],
        description: 'An autonomous farm, stores cereal production.',
      },
      {
        name: 'Forsyth Farm',
        coordinates: [635, 710],
        description: 'An autonomous farm, specialized in market garden crops.',
      },
      {
        name: 'Ardmore Farm',
        coordinates: [560, 560],
        description: 'Ruins from an early 20th century farm.',
      },
      {
        name: 'World SeedVault',
        coordinates: [460, 535],
        description: 'Stores all world edible seeds in case of catastrophe. ',
      },
      {
        name: 'Control Station Viper 03',
        coordinates: [395, 530],
        description:
          'Deployed by the PMC since Operation Citadel to control lethal drones.',
      },
      {
        name: 'New Stirling Freight Yard',
        coordinates: [295, 590],
        description: 'Ships the agricultural production to New Argyll region.',
      },
      {
        name: 'Glenfield Farm',
        coordinates: [130, 535],
        description: 'Ruins from an early 20th century breeding settlement.',
      },
      {
        name: 'Drone Station W131',
        coordinates: [135, 620],
        description: 'Skell Tech. drone control network relay station.',
      },
      {
        name: 'Checkpoint Viper Hotel',
        coordinates: [80, 580],
        description:
          'Deployed by the PMC sice Operation Citadel to control roads.',
      },
      {
        name: 'Ettrick Residences',
        coordinates: [45, 610],
        description: 'Eco-friendly area built for Auroa Skellers.',
      },
      {
        name: 'Checkpoint Viper India',
        coordinates: [20, 590],
        description:
          'Deployed by the PMC since Operation Citadel to control roads.',
      },
      {
        name: 'Sutherland Vineyard',
        coordinates: [110, 710],
        description: 'An autonomous vineyard.',
      },
      {
        name: 'Glenorchy Orchard',
        coordinates: [180, 650],
        description: 'An autonomous orchard.',
      },
      {
        name: 'Agronomy Center',
        coordinates: [340, 720],
        description: 'Controls all agriculture activities in Auroa.',
      },
      {
        name: 'Kelso Farm',
        coordinates: [370, 670],
        description: 'An autonomous farm, specialized in cereal production.',
      },
      {
        name: 'Mossburn Hopfield',
        coordinates: [390, 760],
        description: 'An autonomous farm, specialized in cultivation of hops.',
      },
      {
        name: 'Drone Station W132',
        coordinates: [435, 700],
        description: 'Skell Tech. drone control network relay staion.',
      },
      {
        name: 'Kinloch Farm',
        coordinates: [475, 680],
        description: 'An autonomous farm, specialized in market garden crops.',
      },
      {
        name: 'Control Station Viper 02',
        coordinates: [540, 805],
        description:
          'Deployed by the PMC since Operation Citadel to control lethal drones.',
      },
      {
        name: 'Burnside Orchard',
        coordinates: [580, 760],
        description: 'An autonomous orchard.',
      },
      {
        name: 'Blue Viper Outpost',
        coordinates: [625, 800],
        description: 'Wolves base with possible POW',
      },
      {
        name: 'Checkpoint Viper Foxtrot',
        coordinates: [650, 855],
        description:
          'Deployed by the PMC sice Operation Citadel to control roads.',
      },
      {
        name: 'Checkpoint Viper Bravo',
        coordinates: [330, 600],
        description:
          'Deployed by the PMC sice Operation Citadel to control roads.',
      },
      {
        name: 'Ancient Village',
        coordinates: [260, 690],
        description: 'The ruins of a lost civilization ',
      },
    ],
  },
  SealIslands: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/SealIslands.png',
    biome: 'Fjordlands',

    locations: [
      {
        name: 'Fuel Storage',
        coordinates: [645, 475],
        description: 'Former US Navy fuel depot reclaimed by Sentinel Corp.',
      },
      {
        name: 'West Radar Station',
        coordinates: [625, 635],
        description: 'Cold war radar station refurnished by Sentinel Corp.',
      },
      {
        name: 'Buzzard SAM Site',
        coordinates: [535, 600],
        description: 'A surface to air missiles site.',
      },
      {
        name: 'Anti Aircraft Battery',
        coordinates: [450, 540],
        description: 'Cold War A.A site refurnished by Sentinel Corp.',
      },
      {
        name: 'Emelius Port',
        coordinates: [430, 730],
        description:
          'Deployed since Operation Citadel to control lethal drones.',
      },
      {
        name: 'Ammunition Storage',
        coordinates: [430, 830],
        description:
          'Cold Way vestige repurposed as Sentinel Corp. ammo. depot.',
      },
      {
        name: 'Owl SAM Site',
        coordinates: [320, 830],
        description: 'A surface to air missiles site',
      },
      {
        name: 'Checkpoint Shark Alpha',
        coordinates: [200, 880],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Control Station Shark 01',
        coordinates: [225, 860],
        description:
          'Diployed since Operation Citadel to control lethal drones.',
      },
      {
        name: 'Naval Base Auroa Airfield',
        coordinates: [100, 790],
        description: 'Cold War airfield renovated by Sentinel Corp.',
      },
      {
        name: 'Sentinel Corp. Naval Base',
        coordinates: [40, 900],
        description: 'Sentinel Corp. main Auroa Naval Base.',
      },
      {
        name: 'Falcon SAM Site',
        coordinates: [175, 550],
        description: 'A surface to air missiles site.',
      },
      {
        name: 'Shark Base',
        coordinates: [260, 600],
        description: 'Former Cold war US Navy underground base.',
      },
      {
        name: 'Camp Seal Cove',
        coordinates: [220, 335],
        description: 'Remnants of 19th century seal hunters basecamp.',
      },
      {
        name: 'Abandoned Barracks',
        coordinates: [415, 285],
        description: 'Sentinel Corp. operation Citadel rally point.',
      },
      {
        name: 'Checkpoint Shark Bravo',
        coordinates: [470, 615],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Condor SAM site',
        coordinates: [490, 765],
        description: 'A surface to air missiles site.',
      },
    ],
  },
  Liberty: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/Liberty.png',
    biome: 'Meadow Lands and Urban City',

    locations: [
      {
        name: 'Jace Skell Dam',
        coordinates: [715, 385],
        description: 'The second source of energy for the archipelago.',
      },
      {
        name: 'Auroa Solar Power Plant',
        coordinates: [515, 380],
        description: 'A renewable energy source built by Skell Tech.',
      },
      {
        name: 'Detention Center',
        coordinates: [415, 225],
        description: 'Built before Citadel to jail criminals and Outcasts.',
      },
      {
        name: 'Checkpoint Fox Foxtrot',
        coordinates: [340, 240],
        description: 'Deployed Since Operation Citadel to control roads.',
      },
      {
        name: 'John Dewey Residences',
        coordinates: [250, 340],
        description: 'Eco-friendly area built for Auroa Skellers.',
      },
      {
        name: 'Maunga Nui Eco Park',
        coordinates: [175, 395],
        description: "Nature park for Skellers' enjoyment..",
      },
      {
        name: 'Ayn Rand Residences',
        coordinates: [175, 395],
        description: 'Eco-friendly area built for Auroa Skellers.',
      },
      {
        name: 'Frederic Bastiat Residences',
        coordinates: [160, 445],
        description: 'Eco-friendly area built for visitors.',
      },
      {
        name: 'Liberty Airport',
        coordinates: [90, 440],
        description: 'Used in the past by Skellers to fly to Auroan Islands.',
      },
      {
        name: 'Autumn Lake District',
        coordinates: [205, 445],
        description: 'Entertainment area, now controlled by Sentinel Corp.',
      },
      {
        name: 'Liberty Port',
        coordinates: [230, 510],
        description: 'Was used by Skellers to jooin Auroan Islands.',
      },
      {
        name: 'Winter Park',
        coordinates: [270, 495],
        description:
          'Former shopping district, now controlled by Sentinel Corp.',
      },
      {
        name: 'Auroa Parliament',
        coordinates: [335, 430],
        description:
          'Created for Skellers Partucipatory Democracy. Closed by Sentinel Corp.',
      },
      {
        name: 'Parliament Shopping Street',
        coordinates: [320, 375],
        description:
          'Former shopping district, now controlled by Sentinel Corp.',
      },
      {
        name: 'Thomas Jefferson Residences',
        coordinates: [370, 380],
        description: 'Eco-friendly area built for Auroa Skellers.',
      },
      {
        name: 'Adam Smith District',
        coordinates: [385, 430],
        description: 'Entertainment area, now controlled by Sentinel Corp.',
      },
      {
        name: 'Construction Site (Liberty capital)',
        coordinates: [365, 510],
        description: 'Skell Tech. construction site closed by Sentinel Corp.',
      },
      {
        name: 'Construction Site (Liberty outskirts east)',
        coordinates: [365, 800],
        description: 'Skell Tech. construction site closed by Sentinel Corp.',
      },
      {
        name: 'Control Station Fox 01',
        coordinates: [425, 375],
        description:
          'Deployed since Operation Citadel to control lethal drones.',
      },
      {
        name: 'Drone Station W191',
        coordinates: [395, 330],
        description: 'Skell Tech. drone control network relay station.',
      },
      {
        name: 'East Park',
        coordinates: [310, 530],
        description: "Planted garden area for Skellers' enjoyment.",
      },
      {
        name: 'Island District',
        coordinates: [305, 575],
        description: 'Entertainment area, now controlled by Sentinel Corp.',
      },
      {
        name: 'Drone Station W192',
        coordinates: [335, 570],
        description: 'Skell Tech. drone control network relay station.',
      },
      {
        name: 'Benjamin Franklin Residences',
        coordinates: [260, 575],
        description: 'Eco-friendly area built for Auroa Skellers.',
      },
      {
        name: 'Liberty Transport Hub',
        coordinates: [215, 615],
        description: 'Passenger hub of Liberty capital city.',
      },
      {
        name: 'Richard Cobden Residences',
        coordinates: [230, 680],
        description: 'Eco-friendly area built for Auroa Skellers.',
      },
      {
        name: 'Jane Addams Residences',
        coordinates: [330, 715],
        description: 'Eco-friendly area built for Auroa Skellers.',
      },
      {
        name: 'Control Station Fox 02',
        coordinates: [305, 625],
        description:
          'Deployed since Operation Citadel to control lethal drones.',
      },
      {
        name: 'Ancient Fort',
        coordinates: [355, 915],
        description: 'The ruins of a lost civilization',
      },
      {
        name: 'Checkpoint Fox Bravo',
        coordinates: [435, 800],
        description: 'Deployed since Operation Citadel to control roads.',
      },
      {
        name: 'Auroa Hospital',
        coordinates: [450, 600],
        description: 'Auroa main hospital built by Skell Tech.',
      },
      {
        name: 'Cryogenization Center',
        coordinates: [490, 700],
        description: 'Deceased Skellers frozen using cryonic tech.',
      },
      {
        name: 'Cryohope',
        coordinates: [515, 760],
        description: 'A startup sponsored by Skell to improve Cryogenics.',
      },
      {
        name: 'Eternity',
        coordinates: [540, 645],
        description: 'Skellers frozen with cryonic tech are kept here.',
      },
    ],
  },
  WindyIslands: {
    coordinates: {
      center: [0, 0],
      bounds: [
        [0, 0],
        [768, 1366],
      ],
    },
    imgURL: '/img/maps/WindyIslands.png',
    biome: 'Meadow Lands',

    locations: [
      {
        name: 'Auroa Recycling Factory',
        coordinates: [415, 750],
        description: 'Recycles waste from Auroa.',
      },
      {
        name: 'Garbage Dump',
        coordinates: [445, 650],
        description: 'An open air dumo where drones sort waste.',
      },
      {
        name: 'Incineration Plant',
        coordinates: [350, 800],
        description: 'Burns unsuable waste',
      },
      {
        name: 'Drone Station S01',
        coordinates: [360, 765],
        description: 'Skell Tech. drone control Network relay station.',
      },
      {
        name: 'Windy Islands Port',
        coordinates: [325, 680],
        description: 'Recieves waste and ships out recycled material.',
      },
    ],
  },
};
