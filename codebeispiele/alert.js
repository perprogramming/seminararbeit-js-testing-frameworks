
// Dieser Aufruf würde innerhalb eines
// Browsers ein Hinweisfenster öffnen
window.alert("Hello world");

var alertedText = null;
window.alert = function(text) {
    alertedText = text;
}

// Dieser Aufruf würde nun lediglich
// die Variable alertedText belegen.
window.alert("Hello world");