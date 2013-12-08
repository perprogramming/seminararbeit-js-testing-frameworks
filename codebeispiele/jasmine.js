describe("A Simple Test-Case", function() {
	var counter;
	beforeEach(function() {
		counter = 1;
	});
	afterEach(function() {
		counter = null;
	});
	it("should be 2 if we add 1 to 1", function() {
		expect(counter + 1).toBe(2);
	});
});