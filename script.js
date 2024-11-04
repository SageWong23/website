// Get the popup
var socialPopup = document.getElementById("socialPopup");
// Get the button that opens the socialPopup
var button = document.getElementById("socialButton");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("socialClose")[0];
// When the user clicks the button, open the socialPopup
button.onclick = function() {
    socialPopup.style.opacity = "1";
    socialPopup.style.zIndex = "1";
}
// When the user clicks on <span> (x), close the socialPopup
span.onclick = function() {
    socialPopup.style.opacity = "0";
    socialPopup.style.zIndex = "-1";
}
// When the user clicks anywhere outside of the socialPopup, close it
window.onclick = function(event) {
    if (event.target == socialPopup) {
        socialPopup.style.opacity = "0";
        socialPopup.style.zIndex = "-1";
    }
}