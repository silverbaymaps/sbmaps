var quadrant1  = //North Quadrant
    {
        id: "quadrant1",
        nBorder: 43.69984463152053,
        sBorder: 43.69785114803508,
        eBorder: -73.50115668856414,
        wBorder: -73.50961101065408,
        pxPerLat: 212514,
        pxPerLon: 152016,
        points: [
            { id: "TowerPt", lat: 43.6986578575444, lon: -73.50126397670951, top: 45, left: 252 },
            { id: "CampDavid", lat: 43.69795974420769, lon: -73.50278210669534, top: 271, left: 406 },
            { id: "ArcheryShackAtRd", lat: 43.69832043710247, lon: -73.50357067615224, top: 391, left: 326 },
            { id: "CharterOakN", lat: 43.69859192494691, lon: -73.50469183952971, top: 559, left: 272 },
            { id: "HartfordN", lat: 43.69896037076961, lon: -73.50550723107699, top: 682, left: 194 },
            { id: "BoltzN", lat: 43.69946455612607, lon: -73.50613486798721, top: 774, left: 89 },
            { id: "TowerPtRdAtPathSteps", lat: 43.69790544616953, lon: -73.50507271320855, top: 618, left: 416 },
            { id: "TowerPtRdAtTop", lat: 43.69798689321798, lon: -73.50579154522082, top: 720, left: 398 },
            { id: "SBRdAtWoodruff", lat: 43.69944710364375, lon: -73.50707632334057, top: 923, left: 91 }
        ]
    };

var quadrant2  = {
    id: "quadrant2",
    nBorder: 43.69785114803508,
    sBorder: 43.6956093695677,
    eBorder: -73.50115668856414,
    wBorder: -73.50513708631262,
    pxPerLat: 212514,
    pxPerLon: 152016,
    points: [
        { id: "PaineHall", lat: 43.69754087228434, lon: -73.50460064448959, top: 541, left: 491 },
        { id: "NatureCenter", lat: 43.696925164077264, lon: -73.50386303707042, top: 478, left: 615 },
        { id: "GuestHouse", lat: 43.69767177007712, lon: -73.50337755729453, top: 364, left: 462 },
        { id: "ChildrensPav", lat: 43.69667887903117, lon: -73.50464624210076, top: 561, left: 673 },
        { id: "Watson", lat: 43.69634920454223, lon: -73.50472134394708, top: 570, left: 738 },
        { id: "PumpHouse", lat: 43.69609128146213, lon: -73.50366455363957, top: 426, left: 793 }
    ]
};

var quadrant3  = {
    id: "quadrant3",
    nBorder: 43.69785114803508,
    sBorder: 43.6956093695677,
    eBorder: -73.50513708631262,
    wBorder: -73.50961101065408,
    pxPerLat: 212514,
    pxPerLon: 152016,
    points: [
        { id: "Morse", lat: 43.696493679748656, lon: -73.50559574412851, top: 695, left: 711 },
        { id: "Trinity", lat: 43.69732755677991, lon: -73.50604367302887, top: 772, left: 537 },
        { id: "Brookside", lat: 43.696926133710505, lon: -73.50643527553721, top: 830, left: 616 },
        { id: "Store", lat: 43.69623575730455, lon: -73.50572717236851, top: 723, left: 765 },
        { id: "BoydNW", lat: 43.69611940094004, lon: -73.5062582497474, top: 807, left: 776 },
        { id: "BoydSE", lat: 43.695712151920006, lon: -73.50579959201501, top: 733, left: 870 },
        { id: "BoydSW", lat: 43.695712151920006, lon: -73.50619387673234, top: 733, left: 870 },
        { id: "Parlin", lat: 43.696846624462985, lon: -73.50686442897963, top: 900, left: 632 },
        { id: "Hillcrest", lat: 43.6963385385604, lon: -73.5071460609338, top: 950, left: 741 },
        { id: "Elm", lat: 43.695960380224456, lon: -73.50728821801485, top: 968, left: 824 },
        { id: "Admin", lat: 43.69572184835643, lon: -73.50663912343141, top: 858, left: 870 }
    ]
};

var quadrantArray = [
    quadrant1,
    quadrant2,
    quadrant3
]


//This array has places on campus and their Top and Left map image coordinates
var campusPlaces = [
    ["Boyd", 698, 850],
    ["SpiritualLife", 394, 624],
    ["Archery", 391, 320],
    ["CharterOak", 534, 294],
    ["Willow", 603, 265],
    ["Hartford", 656, 208],
    ["Nassau", 707, 161],
    ["Boltz", 745, 110],
    ["NatureCenter", 475, 604],
    ["ChildrensPav", 554, 646],
    ["Watson", 596, 764],
    ["Morse", 669, 708],
    ["TrinityCenter", 773, 530],
    ["TrinityHouse", 814, 550],
    ["Brookside", 830, 595],
    ["Store", 721, 752],
    ["Admin", 857, 870],
    ["Elm", 970, 840],
    ["Juniper", 993, 890],
    ["Hillcrest", 947, 747],
    ["Craft", 900, 826]
    // ["", , ],
    // ["", , ],
];