describe("HtmlDivResultTarget", function() {
    it("sets a result to a HTML div", function() {
        var htmlDiv = {};
        var resultTarget = new HtmlDivResultTarget(htmlDiv);
        resultTarget.set(1);
        expect(htmlDiv.innerText).toBe(1);
        resultTarget.set(2);
        expect(htmlDiv.innerText).toBe(2);
    });
});