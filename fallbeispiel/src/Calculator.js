var Calculator = function(
    firstOperantSource,
    secondOperantSource,
    operation,
    resultTarget
) {
    this.firstOperantSource = firstOperantSource;
    this.secondOperantSource = secondOperantSource;
    this.operation = operation;
    this.resultTarget = resultTarget;
}

Calculator.prototype.calculate = function() {
    this.resultTarget.set(
        this.operation.execute(
            this.firstOperantSource.get(),
            this.secondOperantSource.get()
        )
    );
}