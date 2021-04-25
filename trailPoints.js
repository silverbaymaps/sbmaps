//Constants for the Trails Map
sbMapConst = {};
sbMapConst.mapWidth = 980;
sbMapConst.mapHeight = 992;
sbMapConst.startTop = 700;
sbMapConst.startLeft = 800;
sbMapConst.mapViewCenterT = 500;
sbMapConst.mapViewCenterL = 500;
sbMapConst.topMargin = 60;
sbMapConst.destImgWidth = 325
sbMapConst.destImgPadding = 10;


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

var dest1  = {
    // <img id="dest-img-0" class="dest-img" src="InspirationPt.jpg" alt="Inspiration Pt">
    imgSrc: "InspirationPt.jpg",
    imgAlt: "Inspiration Pt",
    id1: "InspirationPt",
    name1: "Inspiration Point",
    data1: "Strenuous; Dist=1.4 miles",
    id2: "none"
};

var dest2  = {
    imgSrc: "JabezPond.JPG",
    imgAlt: "Jabez Pond",
    id1: "JabezPondViaAdams",
    name1: "Jabez Pond Via Adams Brook TH",
    data1: "Moderate; Dist=2 miles",
    id2: "JabezPondViaBrookside",
    name2: "Jabez Pond Via Brookside TH",
    data2: "Moderate; Dist=3 miles"
};
var dest3  = {
    imgSrc: "Sunrise.JPG",
    imgAlt: "Sunrise Mountain",
    id1: "Sunrise",
    name1: "Sunrise Mountain",
    data1: "Strenuous; Dist=1 mile",
    id2: "none"
};
var dest4  = {
    imgSrc: "UncasWaterfall.JPG",
    imgAlt: "Uncas Waterfall",
    id1: "UncasWaterfall",
    name1: "Uncas Waterfall",
    data1: "Moderate; Dist=2.4 miles",
    id2: "none"
};



var galleryDestArray = [
    dest1, dest2, dest3, dest4 
]






//Variables for the Trails Map
sbMapVars = {};
sbMapVars.isMapMode = false;


function toggleMapMode() {
    if (sbMapVars.isMapMode == true) {
        setupTrailsGallery();
    } else {
        setupTrailMap();
    }
}


function buildTrailsGallery() {
    var tr = document.getElementById("gallery-image-row");
    // <td class="gallery-dest">
    //   <img id="dest-img-0" class="dest-img" src="InspirationPt.jpg" alt="Inspiration Pt"> </img> 
    // </td>
    for (i = 0; i < galleryDestArray.length; i++) {
        var dest = galleryDestArray[i];
        var td = document.createElement('td');
        td.classList.add("gallery-dest");

        var img = document.createElement('img');
        img.src = dest.imgSrc;
        img.alt = dest.imgAlt;
        img.classList.add("dest-img");

        td.appendChild(img);
        tr.appendChild(td);
    }

    //<td class="gallery-dest">
    //    <span class="dest-name">Inspiration Point</span>
    //    <button class="show-route-btn">Show Route</button>
    //</td> 
    tr = document.getElementById("gallery-name1-row");
    for (i = 0; i < galleryDestArray.length; i++) {
        var dest = galleryDestArray[i];
        var td = document.createElement('td');
        td.classList.add("gallery-dest");

        var span = document.createElement('span');
        span.innerHTML = dest.name1;
        span.classList.add("dest-name");
        td.appendChild(span);

        var button = document.createElement('button');
        button.id = "RT-" + dest.id1;
        button.innerHTML = "Show Route";
        button.onclick = function() {
            showRoute(this.id);
            return false;
        };
        button.classList.add("show-route-btn");
        td.appendChild(button);
        tr.appendChild(td);
    }

    //<td class="gallery-data">
    //    <span class="dest-data">Strenuous; Dist=1.4 miles</span>
    //    <button class="dest-desc-btn">Description</button>
    //</td>
    tr = document.getElementById("gallery-data1-row");
    for (i = 0; i < galleryDestArray.length; i++) {
        dest = galleryDestArray[i];
        td = document.createElement('td');
        td.classList.add("gallery-data");

        span = document.createElement('span');
        span.innerHTML = dest.data1;
        span.classList.add("dest-data");
        td.appendChild(span);

        var button = document.createElement('button');
        button.id = "DS-" + dest.id1;
        button.innerHTML = "Description";
        button.onclick = function() {
            showRouteDesc(this.id);
            return false;
        };
        button.classList.add("dest-desc-btn");
        td.appendChild(button);
        tr.appendChild(td);
    }

    //<td class="gallery-dest">
    //    <span class="dest-name">Inspiration Point</span>
    //    <button class="show-route-btn">Show Route</button>
    //</td> 
    tr = document.getElementById("gallery-name2-row");
    for (i = 0; i < galleryDestArray.length; i++) {
        dest = galleryDestArray[i];
        td = document.createElement('td');
        td.classList.add("gallery-dest");

        if (dest.id2 === "none") {
            span = document.createElement('span');
            span.innerHTML = "&nbsp;";
            span.classList.add("dest-name");
            td.appendChild(span);
        } else {
            span = document.createElement('span');
            span.innerHTML = dest.name2;
            span.classList.add("dest-name");
            td.appendChild(span);

            button = document.createElement('button');
            button.id = "RT-" + dest.id2;
            button.innerHTML = "Show Route";
            button.onclick = function() {
                showRoute(this.id);
                return false;
            };
            button.classList.add("show-route-btn");
            td.appendChild(button);
        }
        tr.appendChild(td);
    }

    //<td class="gallery-data">
    //    <span class="dest-data">Strenuous; Dist=1.4 miles</span>
    //    <button class="dest-desc-btn">Description</button>
    //</td>
    tr = document.getElementById("gallery-data2-row");
    for (i = 0; i < galleryDestArray.length; i++) {
        dest = galleryDestArray[i];
        td = document.createElement('td');
        td.classList.add("gallery-data");

        if (dest.id2 === "none") {
            span = document.createElement('span');
            span.innerHTML = "&nbsp;";
            span.classList.add("dest-data");
            td.appendChild(span);
        } else {
            span = document.createElement('span');
            span.innerHTML = dest.data2;
            span.classList.add("dest-data");
            td.appendChild(span);

            var button = document.createElement('button');
            button.id = "DS-" + dest.id2;
            button.innerHTML = "Description";
            button.onclick = function() {
                showRouteDesc(this.id);
                return false;
            };
            button.classList.add("dest-desc-btn");
            td.appendChild(button);
        }
        tr.appendChild(td);
    }

    //Set the destination images' width and padding
    var imgs = document.getElementsByClassName('dest-img');
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.width = sbMapConst.destImgWidth + "px";
        imgs[i].style.padding = sbMapConst.destImgPadding + "px";
    }

    //Compute the width of the destination gallery
    var gallery = document.getElementById("gallery");
    var galleryWidth = galleryDestArray.length * (sbMapConst.destImgWidth + (2 * sbMapConst.destImgPadding));
    gallery.style.width = galleryWidth + "px";

    setupTrailsGallery();
}

function showRoute(id) {
    alert("showRoute: " + id);
}

function showRouteDesc(id) {
    alert("showRouteDesc: " + id);
}

function setupTrailsGallery() {
    var x = document.getElementById("mapdiv");
    x.style.display = "none";
    var x = document.getElementById("zoom-loc-div");
    x.style.display = "none";
    var x = document.getElementById("gallery");
    x.style.display = "block";
    var x = document.getElementById("map-dest-toggle");
    x.innerHTML = "Map&nbsp;&nbsp;"

    // var imgs = document.getElementsByClassName('gallery-img');
    // for (i = 0; i < imgs.length; i++) {
    //     imgs[i].style.width = "325px";
    // }

    sbMapVars.isMapMode = false;
}

function setupTrailMap() {
    var x = document.getElementById("mapdiv");
    x.style.display = "block";
    var x = document.getElementById("zoom-loc-div");
    x.style.display = "block";
    var x = document.getElementById("gallery");
    x.style.display = "none";
    var x = document.getElementById("map-dest-toggle");
    x.innerHTML = "Destinations"
    sbMapVars.isMapMode = true;
}

function showInfo() {

}