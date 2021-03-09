function setMapMarker(markerId, top, left) {
    var marker = document.getElementById(markerId);
    marker.style.top = top;
    marker.style.left = left;
    marker.style.display = 'inline';

    // element.scrollIntoView(options)
    // The options object has the following properties:

    // behavior property defines the transition animation. 
    // The behavior property accepts two values: auto or smooth. It defaults to auto.
    // block property defines the vertical alignment. 
    // It accepts one of four values: start, center, endor nearest. By default, it is start.
    // inline property defines horizontal alignment. 
    // It also accepts one of four values: start, center, endor nearest. It defaults to nearest.

    marker.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });
}

// Dropdown button functions

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownClick(ddId) {
    document.getElementById(ddId).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}