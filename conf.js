'Use Strict'
let HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'test-report.html'
});

exports.config = {
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },
  onPrepare: function(){
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailuredSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));
    jasmine.getEnv().addReporter(reporter);
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec2.js'],
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
};
