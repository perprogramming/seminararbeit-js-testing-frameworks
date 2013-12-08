module.exports = function(karma) {
	karma.set({
		...
		sauceLabs: {
			username: 'perprogramming',
			accessKey: '1234567890'
		},
		customLaunchers: {
			'SauceLabs-IE-11': {
				base: 'SauceLabs',
				browserName: 'internet explorer',
				plattform: 'Windows 8.1',
				version: '11'
			}
		},
		browsers: ['SauceLabs-IE-11'] 
	});
};