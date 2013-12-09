describe("Calculator", function() {
    it("calculates", function() {
        var operation = jasmine.createSpyObj("operation", ['execute']);
        var firstOperantInput = jasmine.createSpyObj("firstOperantInput", ['get']);
        var secondOperantInput = jasmine.createSpyObj("secondOperantInput", ['get']);
        var resultTarget = jasmine.createSpyObj("resultTarget", 'set');
        var calculator = new Calculator(firstOperantInput, secondOperantInput, operation, resultTarget);
        calculator.calculate();
    });
});