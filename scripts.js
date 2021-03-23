sbMapsVars = {};
sbMapsVars.zoomFactor = 1;
sbMapsVars.prevZoomFactor = 1;
sbMapsVars.campusMapWidth = 2048;
sbMapsVars.campusMapHeight = 1325;
sbMapsVars.startTop = 685;
sbMapsVars.startLeft = 865;
sbMapsVars.mapViewCenterT = 692;
sbMapsVars.mapViewCenterL = 944;



//  =============================
//  Initialization functions
//  =============================

window.addEventListener('load', function() {
    // window.alert(window.innerWidth)

    var x = document.getElementById("mapdiv");
    if (window.innerWidth < 550) {
        sbMapsVars.zoomFactor = .5;
        sbMapsVars.startTop = Math.floor(sbMapsVars.startTop * .5);
        sbMapsVars.startLeft = Math.floor(sbMapsVars.startLeft * .5);
        sbMapsVars.mapViewCenterT = Math.floor(sbMapsVars.mapViewCenterT * .5);
        sbMapsVars.mapViewCenterL = Math.floor(sbMapsVars.mapViewCenterL * .5);
    } else {
        sbMapsVars.zoomFactor = 1;
    }
    scaleMap();
    //Center on the Inn
    setMapMarker("center-marker", sbMapsVars.startTop, sbMapsVars.startLeft, true);

    //Check if marker tool should be rendered
    var url = new URL(window.location.href);
    var toolparm = url.searchParams.get("tool");
    if (toolparm === "1") {
        //window.alert("Marker Tool is availible");
    } else {
        var x = document.getElementById("tools");
        x.style.display = "none";
    }
})



//  =============================
//  Zoom functions
//  =============================



//When the user clicks the zoom put button, double the image size
function zoomOutClick() {
    getMapViewCenter();
    sbMapsVars.prevZoomFactor = sbMapsVars.zoomFactor;
    sbMapsVars.zoomFactor = sbMapsVars.zoomFactor * 1.3;
    scaleMap();
    resetMarkers();
}

//When the user clicks the zoom put button, double the image size
function zoomInClick() {
    if (sbMapsVars.zoomFactor <= .25) {
        return;
    }
    getMapViewCenter();
    sbMapsVars.prevZoomFactor = sbMapsVars.zoomFactor;
    sbMapsVars.zoomFactor = sbMapsVars.zoomFactor / 1.3;
    if (sbMapsVars.zoomFactor < .25) {
        sbMapsVars.zoomFactor = .25;
    }
    scaleMap();
    resetMarkers();
}

function getMapViewCenter() {
    var scrollT = document.documentElement.scrollTop;
    var scrollL = document.documentElement.scrollLeft;
    var scrollW = document.getElementById('mapimg').scrollWidth;
    var scrollH = document.getElementById('mapimg').scrollHeight;
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    //Check if the image already fits into the window
    if (winH > scrollH) {
        //No vert scroll bar, image fits in window.  Use the image height
        winH = scrollH;
    }
    if (winW > scrollW) {
        //No horz scroll bar, image fits in window.  Use the image width
        winW = scrollW;
    }

    sbMapsVars.mapViewCenterL = Math.floor((scrollL + (winW / 2)) / sbMapsVars.zoomFactor);
    sbMapsVars.mapViewCenterT = Math.floor((scrollT + (winH / 2)) / sbMapsVars.zoomFactor);
    // window.alert("scrollT=" + scrollT + ";  scrollL=" + scrollL +
    //     "scrollW=" + scrollW + ";  scrollH=" + scrollH +
    //     "windowW=" + winW + ";  windowH=" + winH +
    //     "centerT=" + sbMapsVars.mapViewCenterT + ";  centerL=" + sbMapsVars.mapViewCenterL);
}

function scaleMap() {
    var x = document.getElementById("mapdiv");
    var w = Math.floor(sbMapsVars.campusMapWidth * sbMapsVars.zoomFactor);
    var h = Math.floor(sbMapsVars.campusMapHeight * sbMapsVars.zoomFactor);
    x.style.width = w + "px";
    x.style.height = h + "px";
}



//  =============================
//  Map Marker functions
//  =============================

function placeMarker(locName) {
    var top = -1;
    var left = -1;
    for (i = 0; i < campusPlaces.length; i++) {
        if (campusPlaces[i][0] === locName) {
            top = campusPlaces[i][1];
            left = campusPlaces[i][2];
            break;
        }
    }
    if (top != -1) {
        setMapMarker("place-marker", top, left, true)
    }
}

function setMapMarker(markerId, top, left, isCenter) {
    var marker = document.getElementById(markerId);
    marker.style.top = top + "px";
    marker.style.left = left + "px";
    marker.style.display = 'inline';

    // element.scrollIntoView(options)
    // The options object has the following properties:

    // behavior property defines the transition animation. 
    // The behavior property accepts two values: auto or smooth. It defaults to auto.
    // block property defines the vertical alignment. 
    // It accepts one of four values: start, center, endor nearest. By default, it is start.
    // inline property defines horizontal alignment. 
    // It also accepts one of four values: start, center, endor nearest. It defaults to nearest.
    if (isCenter) {
        marker.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
    }

}

function resetMarkers() {
    //Position so old view center is the new center
    setMapMarker("center-marker", Math.floor(sbMapsVars.mapViewCenterT * sbMapsVars.zoomFactor),
        Math.floor(sbMapsVars.mapViewCenterL * sbMapsVars.zoomFactor), true);
    resetMarker("location-marker", false);
}

function resetMarker(markerId, isCenter) {
    var marker = document.getElementById(markerId);
    var top = stripPx(marker.style.top);
    var left = stripPx(marker.style.left);
    top = Math.floor((top / sbMapsVars.prevZoomFactor) * sbMapsVars.zoomFactor);
    left = Math.floor((left / sbMapsVars.prevZoomFactor) * sbMapsVars.zoomFactor);
    setMapMarker(markerId, top, left, isCenter);
}

function stripPx(pxStr) {
    var idx = pxStr.indexOf("px");
    var num = pxStr.substring(0, idx);
    return num;
}

//  =============================
//  Location functions
//  =============================


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        window.alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    window.alert("Latitude: " + position.coords.latitude + "  -  " +
        "Longitude: " + position.coords.longitude);
}


//  =============================
//  Menu functions
//  =============================

function hamburgerClick() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        //close all the submenus
        var submenus = document.getElementsByClassName('submenu');
        for (i = 0; i < submenus.length; i++) {
            submenus[i].style.display = "none";
        }
        //Put '+' in front of each menu toggle button
        var toggles = document.getElementsByClassName('submenu-toggle');
        for (i = 0; i < toggles.length; i++) {
            toggles[i].innerHTML = "+" + toggles[i].innerHTML.substring(1);
        }
    }
}


function toggleSubmenu(toggleId, submenuId) {
    var toggleBtn = document.getElementById(toggleId);
    var submenu = document.getElementById(submenuId);
    var toggleStr = toggleBtn.innerHTML;
    var char1 = toggleStr.substring(0, 1);
    if (char1 === "+") {
        //Expand the submenu
        char1 = "-";
        submenu.style.display = "block";
    } else {
        //Contract the submenu
        char1 = "+";
        submenu.style.display = "none";
    }
    toggleBtn.innerHTML = char1 + toggleStr.substring(1);
}


window.onclick = function(event) {
    var inSubmenuToggle = false;
    var submenuToggles = document.getElementsByClassName('submenu-toggle');
    for (i = 0; i < submenuToggles.length; i++) {
        if (submenuToggles[i].contains(event.target)) {
            inSubmenuToggle = true;
        }
    }
    if (inSubmenuToggle || document.getElementsByClassName('hamburger-icon')[0].contains(event.target)) {
        // inside  alert('inside');
    } else {
        // outside  alert('outside');
        var x = document.getElementById("menu");
        if (x.style.display === "block") {
            x.style.display = "none";
        }
    }
}


//  =============================
//  Development Tools
//  =============================


function doubleClickMapImage(event) {
    var xCoordinate = event.offsetX;
    var yCoordinate = event.offsetY;
    //window.alert("x,y" + xCoordinate + ',' + yCoordinate);
    var x = document.getElementById("locX");
    var y = document.getElementById("locY");
    x.value = event.offsetX;
    y.value = event.offsetY;
}


function placeMarkerClick() {
    var x = document.getElementById("locX");
    var y = document.getElementById("locY");
    setMapMarker("location-marker", y.value, x.value, false);
}

function placeMarkerAdjust() {
    var x = document.getElementById("locX");
    var y = document.getElementById("locY");
    x.value = Math.floor(x.value) - 17;
    y.value = Math.floor(y.value) + 13;
}

//At Silver Bay road in front of Morse: 43.697288770406516, -73.50558769802814
//At latitude 43.697 (Silver Bay)
//     Length Of A Degree Of Latitude In Feet  equals 364521.24 feet
//     Length Of A Degree Of Longitude In Feet equals 264478.52 feet
//