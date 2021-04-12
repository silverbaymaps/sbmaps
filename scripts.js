sbMapsVars = {};
sbMapsVars.zoomFactor = 1;
sbMapsVars.prevZoomFactor = 1;
sbMapsVars.campusMapWidth = 2048;
sbMapsVars.campusMapHeight = 1325;
sbMapsVars.startTop = 685;
sbMapsVars.startLeft = 865;
sbMapsVars.mapViewCenterT = 692;
sbMapsVars.mapViewCenterL = 944;
sbMapsVars.locMarkerId = "loc-img"; //If changing this, change boolean below  -  loc_marker or loc-img
sbMapsVars.islocImage = true;
sbMapsVars.campusTopMargin = 60;


//  =============================
//  Initialization functions
//  =============================

window.addEventListener('load', function() {
    // window.alert(window.innerWidth)

    if (window.innerWidth < 550) {
        sbMapsVars.zoomFactor = .65;
        sbMapsVars.startTop = Math.floor(sbMapsVars.startTop * .65);
        sbMapsVars.startLeft = Math.floor(sbMapsVars.startLeft * .65);
        sbMapsVars.mapViewCenterT = Math.floor(sbMapsVars.mapViewCenterT * .65);
        sbMapsVars.mapViewCenterL = Math.floor(sbMapsVars.mapViewCenterL * .65);

        //Move the Zoom buttons a bit
        var div = document.getElementById("zoom-div");
        div.style.right = "25px";
        div.style.bottom = "40px";
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

    //Adjust the campus points for the top margin
    for (i = 0; i < quadrantArray.length; i++) {
        var quadrant = quadrantArray[i];
        for (j = 0; j < quadrant.points.length; j++) {
            var point = quadrant.points[j];
            point.top += sbMapsVars.campusTopMargin;
        }
    }

    // var canvas = document.getElementById("loc-canvas");
    // var ctx = canvas.getContext("2d");

    // draw rectangle
    // context.beginPath();
    // context.rect(5, 10, 20, 50);
    // context.fillStyle = "blue";
    // context.fill();
    // ctx.lineWidth = "4";
    // ctx.strokeStyle = "green";
    // ctx.rect(20, 20, 50, 50);
    // ctx.stroke();
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
        //window.alert(locName + "  " + campusPlaces[i][0]);
        if (campusPlaces[i][0] === locName) {
            top = campusPlaces[i][1];
            left = campusPlaces[i][2];
            break;
        }
    }
    if (top != -1) {
        top = adjustMarkerTop("place-marker", top);
        left = adjustMarkerLeft("place-marker", left);
        top *= sbMapsVars.zoomFactor;
        left *= sbMapsVars.zoomFactor;
        setMapMarker("place-marker", top, left, true)
    }
}

function adjustMarkerTop(markerId, top) {
    var marker = document.getElementById(markerId);
    //window.alert("11top1=" + top);
    top += sbMapsVars.campusTopMargin;
    //window.alert("11top2=" + top);
    //window.alert("offsetHeight=" + marker.offsetHeight);
    //var offset = parseInt(marker.offsetHeight);
    top -= parseInt(marker.offsetHeight);
    //window.alert("11top4=" + top);
    return top;
}

function adjustMarkerLeft(markerId, left) {
    var marker = document.getElementById(markerId);
    //window.alert("11top1=" + top);
    //window.alert("offsetHeight=" + marker.offsetHeight);
    //var offset = parseInt(marker.offsetHeight);
    left -= Math.floor(parseInt(marker.offsetWidth) / 2);
    //window.alert("11top4=" + top);
    return left;
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
    resetMarker("place-marker", false);
    resetMarker("loc-marker2", false);
    resetMarker(sbMapsVars.locMarkerId, false);
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
    var z = document.getElementById("LocTL");
    x.value = Math.floor(event.offsetX);
    y.value = Math.floor(event.offsetY);
    z.value = "top: " + Math.floor(event.offsetY) + ", left: " + Math.floor(event.offsetX);
}


function placeMarkerClick() {
    var x = document.getElementById("locX");
    var y = document.getElementById("locY");
    setMapMarker("center-marker", y.value, x.value, false);
    var top = parseInt(y.value);
    top = adjustMarkerTop("place-marker", top);
    var left = parseInt(x.value);
    left = adjustMarkerLeft("place-marker", left);
    setMapMarker("place-marker", top, left, false);
}

function placeMarkerAdjust() {
    var x = document.getElementById("locX");
    var y = document.getElementById("locY");
    var z = document.getElementById("LocTL");
    x.value = Math.floor(x.value) - 17;
    y.value = Math.floor(y.value) + 13;
}

function showEnteredLocation() {
    var str = document.getElementById("LocTL").value;
    var idx = str.indexOf(",");
    var lat = str.substring(0, idx);
    var idx = str.indexOf("-");
    var lon = str.substring(idx);
    showLocation(lat, lon);
    //window.alert("Latitude: '" + lat + "'  -  " + "Longitude: '" + lon + "'");
}

function showLocation(lat, lon) {
    //Find the quadrant for this location
    var quadrant = null;
    for (i = 0; i < quadrantArray.length; i++) {
        var q = quadrantArray[i];
        if (lat <= q.nBorder && lat >= q.sBorder &&
            lon >= q.wBorder && lon <= q.eBorder) {
            quadrant = q;
            break;
        }
    }
    if (quadrant === null) {
        window.alert("Your location is not on this map.");
    }
    //window.alert("Quadrant = " + quadrant.id);

    //Find the closest point in the quadrant
    var dist = 99999;
    var closestPoint;
    for (i = 0; i < quadrant.points.length; i++) {
        var point = quadrant.points[i];
        var pointDist = computeDistanceBetweenPts(quadrant, lat, lon, point.lat, point.lon);
        if (dist > pointDist) {
            dist = pointDist;
            closestPoint = point;
        }
        //window.alert("Point = " + point.id + ", dist = " + pointDist);
    }
    //window.alert("Closest Point = " + closestPoint.id);
    setMapMarker("center-marker", closestPoint.top, closestPoint.left, true);

    var locTop = closestPoint.top + computeTopDiffFromPoint(quadrant, closestPoint.lon, lon);
    var locLeft = closestPoint.left + computeLeftDiffFromPoint(quadrant, closestPoint.lat, lat);
    setMapMarker("loc-marker2", locTop, locLeft, false);
    locTop = adjustLocTop(sbMapsVars.locMarkerId, locTop);
    locLeft = adjustLocLeft(sbMapsVars.locMarkerId, locLeft);
    locTop *= sbMapsVars.zoomFactor;
    locLeft *= sbMapsVars.zoomFactor;
    //window.alert("aaa");  
    //window.alert("bbb");
    setMapMarker(sbMapsVars.locMarkerId, locTop, locLeft, false);
    //window.alert("ccc");
}

function computeDistanceBetweenPts(quadrant, lat1, lon1, lat2, lon2) {
    var latPx = Math.abs(lat1 - lat2) * quadrant.pxPerLat;
    var lonPx = Math.abs(lon1 - lon2) * quadrant.pxPerLon;
    var pxDist = Math.sqrt((latPx * latPx) + (lonPx * lonPx));
    return pxDist;
}

function computeTopDiffFromPoint(quadrant, ptLon, locLon) {
    return (ptLon - locLon) * quadrant.pxPerLon;
}

function computeLeftDiffFromPoint(quadrant, ptLat, locLat) {
    return (ptLat - locLat) * quadrant.pxPerLat;
}

function adjustLocTop(markerId, top) {
    var marker = document.getElementById(markerId);
    //window.alert("11top1=" + top);
    //top += sbMapsVars.campusTopMargin;
    //window.alert("11top2=" + top);
    //window.alert("offsetHeight=" + marker.offsetHeight);
    //var offset = parseInt(marker.offsetHeight);
    if (sbMapsVars.islocImage) {
        //Using an image, center it
        top -= Math.floor(parseInt(marker.offsetHeight) / 2);
    } else {
        //Using a marker icon, point should be the bottom
        top -= parseInt(marker.offsetHeight);
    }
    //window.alert("11top4=" + top);
    return top;
}

function adjustLocLeft(markerId, left) {
    var marker = document.getElementById(markerId);
    //window.alert("11top1=" + top);
    //window.alert("offsetHeight=" + marker.offsetHeight);
    //var offset = parseInt(marker.offsetHeight);
    left -= Math.floor(parseInt(marker.offsetWidth) / 2);
    //window.alert("11top4=" + top);
    return left;
}
//At Silver Bay road in front of Morse: 43.697288770406516, -73.50558769802814
//At latitude 43.697 (Silver Bay)
//     Length Of A Degree Of Latitude In Feet  equals 364521.24 feet
//     Length Of A Degree Of Longitude In Feet equals 264478.52 feet
//