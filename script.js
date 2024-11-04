// Get the popup
var socialPopup = document.getElementById("socialPopup");
// Get the button that opens the socialPopup
var socialPopupButton = document.getElementById("socialButton");
// Get the <span> element that closes the modal
var divSocialClose = document.getElementsByClassName("socialClose")[0];

// When the user clicks the button, open the socialPopup
socialPopupButton.onclick = function() {
    socialPopup.style.opacity = "1";
    socialPopup.style.zIndex = "1";
}
// When the user clicks on <div> (x), close the socialPopup
divSocialClose.onclick = function() {
    socialPopup.style.opacity = "0";
    socialPopup.style.zIndex = "-2";
}
// When the user clicks anywhere outside of the socialPopup, close it
window.addEventListener("click", function(event) {
    if (event.target == socialPopup) {
        socialPopup.style.opacity = "0";
        socialPopup.style.zIndex = "-2";
    }
})

var aboutPopup = document.getElementById("aboutPopup");
var aboutPopupButton = document.getElementById("aboutButton");
var divAboutClose = document.getElementsByClassName("aboutClose")[0];

aboutPopupButton.onclick = function() {
    aboutPopup.style.opacity = "1";
    aboutPopup.style.zIndex = "1";
}
divAboutClose.onclick = function() {
    aboutPopup.style.opacity = "0";
    aboutPopup.style.zIndex = "-1";
}
window.addEventListener("click", function(event) {
    if (event.target == aboutPopup) {
        aboutPopup.style.opacity = "0";
        aboutPopup.style.zIndex = "-2";
    }
})

var contactPopup = document.getElementById("contactPopup");
var contactPopupButton = document.getElementById("contactButton");
var divContactClose = document.getElementsByClassName("contactClose")[0];

contactPopupButton.onclick = function() {
    contactPopup.style.opacity = "1";
    contactPopup.style.zIndex = "1";
}
divContactClose.onclick = function() {
    contactPopup.style.opacity = "0";
    contactPopup.style.zIndex = "-1";
}
window.addEventListener("click", function(event) {
    if (event.target == contactPopup) {
        contactPopup.style.opacity = "0";
        contactPopup.style.zIndex = "-2";
    }
})
