describe("Addition", function() {
    it("is 3 if you add 1 to 2", function() {
        var operation = new Addition();
        expect(operation.execute(1, 2)).toBe(3);
    });
});