//Constants for the Trails Map
sbMapConst = {};
sbMapConst.mapWidth = 980;
sbMapConst.mapHeight = 992;
sbMapConst.startTop = 700;
sbMapConst.startLeft = 800;
sbMapConst.mapViewCenterT = 500;
sbMapConst.mapViewCenterL = 500;
sbMapConst.topMargin = 60;


var quadrant1  = //Whole Map
    {
        id: "quadrant1",
        nBorder: 43.714788047696445,
        sBorder: 43.67816312890047,
        eBorder: -73.50122753410142,
        wBorder: -73.54637447595339,
        pxPerLat: 29046,
        pxPerLon: 21132,
        points: [
            { id: "JabesWShore", lat: 43.70381100079294, lon: -73.54409357650759, top: 334, left: 62 },
            { id: "TowerPoint", lat: 43.6987770787037, lon: -73.50112458872447, top: 467, left: 970 },
            { id: "SBRoadN", lat: 43.7044120957985, lon: -73.5053571140804, top: 303, left: 880 },
            { id: "SBRoadS", lat: 43.686475059197335, lon: -73.50708110392661, top: 824, left: 852 }
        ]
    };



var quadrantArray = [
    quadrant1
]


//This array has places on campus and their Top and Left map image coordinates
var trailPlaces = [
    ["Boyd", 698, 850],
    ["SpiritualLife", 394, 624]
];