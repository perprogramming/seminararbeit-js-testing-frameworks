var HtmlDivResultTarget = function(domElement) {
    this.domElement = domElement;
}

HtmlDivResultTarget.prototype.set = function(result) {
    this.domElement.innerText = result;
}