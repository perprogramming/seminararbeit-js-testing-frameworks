var page = require('webpage').create();
page.open('http://localhost/testWebsite/', function() {
	var title = page.evaluate(function() {
		return document.title;
	});
	console.log(title);
	phantom.exit();
});