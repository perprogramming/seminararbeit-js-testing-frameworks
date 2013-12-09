describe("Calculator", function() {
    it("calculates", function() {
        var operation = {
            execute: function(a, b) {
                return [a, b];
            }
        };
        var firstOperantInput = {
            get: function() {
                return 'first';
            }
        };
        var secondOperantInput = {
            get: function() {
                return 'second';
            }
        }
        var resultTarget = {
            result: null,
            set: function(result) {
                this.result = result;
            }
        }
        var calculator = new Calculator(
            firstOperantInput,
            secondOperantInput,
            operation,
            resultTarget
        );
        calculator.calculate();
        expect(resultTarget.result[0]).toBe('first');
        expect(resultTarget.result[1]).toBe('second');
    });
});