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
    //Change to try to get location.  If not availible, go to center
    setMapMarker("location-marker", sbMapsVars.mapViewCenterT, sbMapsVars.mapViewCenterL, false);
})


//  =============================
//  Dropdown functions
//  =============================

function hamburgerClick() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

window.onclick = function(event) {
    if (document.getElementsByClassName('hamburger-icon')[0].contains(event.target)) {
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