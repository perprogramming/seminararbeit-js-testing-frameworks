
var HtmlInputOperantSource = function(domElement) {
    this.domElement = domElement;
}

HtmlInputOperantSource.prototype.get = function() {
    return parseInt(this.domElement.value);
}
