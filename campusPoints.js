//Constants for the Campus Map
sbMapConst = {};
sbMapConst.mapWidth = 2048;
sbMapConst.mapHeight = 1325;
sbMapConst.startTop = 685;
sbMapConst.startLeft = 865;
sbMapConst.mapViewCenterT = 692;
sbMapConst.mapViewCenterL = 944;
sbMapConst.topMargin = 60;



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
        { id: "BoydSW", lat: 43.695712151920006, lon: -73.50619387673234, top: 795, left: 866 },
        { id: "Parlin", lat: 43.696846624462985, lon: -73.50686442897963, top: 900, left: 632 },
        { id: "Hillcrest", lat: 43.6963385385604, lon: -73.5071460609338, top: 950, left: 741 },
        { id: "Elm", lat: 43.695960380224456, lon: -73.50728821801485, top: 968, left: 824 },
        { id: "Admin", lat: 43.69572184835643, lon: -73.50663912343141, top: 858, left: 870 }
    ]
};


var quadrant4  = {
    id: "quadrant4",
    nBorder: 43.6956093695677,
    sBorder: 43.693990485955375,
    eBorder: -73.50115668856414,
    wBorder: -73.50513708631262,
    pxPerLat: 212514,
    pxPerLon: 152016,
    points: [
        { id: "Erc", lat: 43.695250508352764, lon: -73.50301905227533, top: 324, left: 963 },
        { id: "Collins", lat: 43.694785975619304, lon: -73.50477117081992, top: 573, left: 1068 },
        { id: "EastDock", lat: 43.69502799024445, lon: -73.50368761115456, top: 420, left: 1018 },
        { id: "walkN", lat: 43.695263024569236, lon: -73.50526648398909, top: 651, left: 963 },
        { id: "walkJ", lat: 43.695022615572455, lon: -73.5045190462283, top: 525, left: 1020 },
        { id: "BoatHouseE", lat: 43.694864561597875, lon: -73.5045109995932, top: 525, left: 1065 },
        { id: "SilverSpray", lat: 43.69439621518591, lon: -73.50425618975748, top: 501, left: 1148 },
        { id: "TennisE", lat: 43.69428858225673, lon: -73.50503939478266, top: 612, left: 1168 }
    ]
};

var quadrant5  = {
    id: "quadrant5",
    nBorder: 43.6956093695677,
    sBorder: 43.693990485955375,
    eBorder: -73.50513708631262,
    wBorder: -73.50961101065408,
    pxPerLat: 212514,
    pxPerLon: 152016,
    points: [
        { id: "InnNE", lat: 43.69555991762921, lon: -73.50564938831984, top: 708, left: 901 },
        { id: "InnSE", lat: 43.69511000006835, lon: -73.50569766807818, top: 711, left: 1003 },
        { id: "AudSE", lat: 43.69444675336285, lon: -73.50614291477305, top: 781, left: 1142 },
        { id: "AudNW", lat: 43.69481134602297, lon: -73.50642722890554, top: 827, left: 1054 },
        { id: "Munn", lat: 43.694301303544805, lon: -73.50662839456533, top: 855, left: 1162 },
        { id: "Hepbron", lat: 43.69406664375081, lon: -73.50714874310854, top: 935, left: 1218 },
        { id: "Hemlock", lat: 43.695218601167355, lon: -73.50726944250438, top: 960, left: 973 },
        { id: "Overlook", lat: 43.69449717588098, lon: -73.50752425238622, top: 1001, left: 1102 },
        { id: "BoydSW", lat: 43.695712151920006, lon: -73.50619387673234, top: 795, left: 866 },
        { id: "Admin", lat: 43.69572184835643, lon: -73.50663912343141, top: 858, left: 870 }
    ]
};

var quadrant6  = {
    id: "quadrant6",
    nBorder: 43.693990485955375,
    sBorder: 43.692543272140895,
    eBorder: -73.50115668856414,
    wBorder: -73.50513708631262,
    pxPerLat: 212514,
    pxPerLon: 152016,
    points: [
        { id: "BayBeach", lat: 43.6933476288075, lon: -73.5044397120463, top: 530, left: 1357 },
        { id: "FirePit", lat: 43.69306545066319, lon: -73.50418892551016, top: 483, left: 1431 },
        { id: "BB-NE", lat: 43.693633684332696, lon: -73.50489300537224, top: 593, left: 1305 },
        { id: "BB-SE", lat: 43.69338641607963, lon: -73.50491848635703, top: 596, left: 1354 },
        { id: "Backboard", lat: 43.69306642035332, lon: -73.50533422874054, top: 643, left: 1422 },
        { id: "LizGray", lat: 43.69242157528539, lon: -73.50407224941253, top: 466, left: 1565 },
    ]
};


var quadrant7  = {
    id: "quadrant7",
    nBorder: 43.693990485955375,
    sBorder: 43.692543272140895,
    eBorder: -73.50513708631262,
    wBorder: -73.50961101065408,
    pxPerLat: 212514,
    pxPerLon: 152016,
    points: [
        { id: "Maple", lat: 43.69350618255944, lon: -73.50589781503426, top: 746, left: 1325 },
        { id: "Bayview", lat: 43.69288946322645, lon: -73.50583210091031, top: 737, left: 1460 },
        { id: "ChapelE", lat: 43.693741814218704, lon: -73.50628539422034, top: 802, left: 1282 },
        { id: "ChapleW", lat: 43.69379611603201, lon: -73.5065884838288, top: 861, left: 1267 },
        { id: "Butternut", lat: 43.69359927172531, lon: -73.50698545076732, top: 911, left: 1315 },
        { id: "See", lat: 43.69366811882245, lon: -73.50730195142037, top: 978, left: 1295 },
        { id: "Oak", lat: 43.69324533821552, lon: -73.5071463833043, top: 936, left: 1387 },
        { id: "Cedar", lat: 43.69279249420446, lon: -73.5071289489546, top: 937, left: 1488 },
        { id: "Hilltop", lat: 43.692714918871836, lon: -73.50627600648478, top: 848, left: 1503 },
        { id: "BB-NE", lat: 43.693633684332696, lon: -73.50489300537224, top: 593, left: 1305 },
        { id: "Backboard", lat: 43.69306642035332, lon: -73.50533422874054, top: 643, left: 1422 }
    ]
};

var quadrantArray = [
    quadrant1,
    quadrant2,
    quadrant3,
    quadrant4,
    quadrant5,
    quadrant6,
    quadrant7
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
    ["Craft", 900, 826],
    ["Collins", 577, 1066],
    ["Shuffleboard", 574, 1042],
    ["DiscGolf", 588, 1081],
    ["Boathouse", 531, 1076],
    ["Tennis", 627, 1200],
    ["Baseball", 581, 875],
    ["Inn", 695, 951],
    ["Auditorium", 755, 1102],
    ["Field", 872, 1028],
    ["Munn", 853, 1153],
    ["Hemlock", 945, 978],
    ["Overlook", 995, 1071],
    ["Hepbron", 926, 1172],
    ["Sycamore", 978, 924],
    ["Locust", 905, 1102],
    ["BayBeach", 533, 1358],
    ["FirePit", 515, 1433],
    ["Basketball", 594, 1328],
    ["Volleyball", 632, 1360],
    ["TennisBackboard", 616, 1412],
    ["Chapel", 792, 1280],
    ["Sproul", 735, 1403],
    ["See", 957, 1287],
    ["Bayview", 701, 1492],
    ["Maple", 744, 1350],
    ["Hilltop", 857, 1492],
    ["Butternut", 891, 1317],
    ["Birch", 881, 1374],
    ["Oak", 916, 1413],
    ["Summit", 936, 1466],
    ["Cedar", 912, 1500],
    // ["",  ],
    // ["",  ],
];