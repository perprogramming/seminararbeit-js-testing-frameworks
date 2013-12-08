module.exports = function(karma) {
	karma.set({
		basePath: './',
		autoWatch: true,
		frameworks: ['jasmine'],
		files: [
			'vendor/*.js',
			'src/*.js',
			'tests/*.js',
			{'web/*.html', included: false}
		},
		customLaunchers: {
			'Remote-Firefox': {
				base: 'WebDriver',
				config: {
					hostname: 'some.other-server.com',
					port: 4444
				},
				browserName: 'Firefox',
				platform: 'Windows XP',
				version: '21'
			}
		},
		browsers: ['IE', 'Remote-Firefox']
	});
};