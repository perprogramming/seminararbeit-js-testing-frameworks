describe("HtmlInputOperantSource", function() {
    it("loads a value from a HTML input", function() {
        var htmlInput = {value: 1};
        var operantSource = new HtmlInputOperantSource(htmlInput);
        expect(operantSource.get()).toBe(1);
    });
    it("can only read valid integers", function() {
        var htmlInput = {value: 'foobar'};
        var operantSource = new HtmlInputOperantSource(htmlInput);
        expect(operantSource.get()).toBeNaN();
    });
    it("will make floats to next lower integer", function() {
        var htmlInput = {value: 2.7};
        var operantSource = new HtmlInputOperantSource(htmlInput);
        expect(operantSource.get()).toBe(2);
        htmlInput.value = 2.1;
        expect(operantSource.get()).toBe(2);
    });
});