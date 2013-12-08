var simpleTestCase = new Y.Test.Case({
	name: "Simple test",
	setUp: function() {
		this.counter = 1;
	},
	tearDown: function() {
		delete this.counter;
	},
	"1 + 1 is 2": {
		Y.Assert.areEqual(2, this.counter + 1, "1 + 1 should be 2");
	}
});

var simpleTestSuite = new Y.Test.Suite("Simple Test Suite");
simpleTestSuite.add(simpleTestCase);
Y.Test.Runner.add(simpleTestSuite);
Y.Test.Runner.run();

var xml = Y.Test.Runner.getResults(Y.Test.Format.XML);