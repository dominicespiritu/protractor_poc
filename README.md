
# Protractor POC


This project uses selenium web driver and protractor to automate usecase scenario on your web app

### Before you begin

**Node.js** - Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Dowenload [here](https://nodejs.org/en/download/) and install.
<br />
**AngularJS** - AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. More info [here](https://docs.angularjs.org/guide/introduction)
<br />
**Jasmine** - Jasmine is a behavior-driven development framework for testing JavaScript code. ... And it has a clean, obvious syntax so that you can easily write tests. More info [here](https://jasmine.github.io/)
<br />
**Protractor** - Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would. More info [here](https://www.protractortest.org/#/)


Check you nodejs installation in your terminal/command line.

```
$ node -v
$ npm -v
```

##### Install npm libraries required

On your commandline/terminal:
```
$ npm i or npm install
```

Install protractor

```
$ npm install -g protractor
```

Install web driver manager

```
$ webdriver-manager update
```

Start web driver manager

```
$ webdriver-manager start
```
## Run the test suite

Open a new terminal/command line and go inside "test folder" then execute the command :

```
$ protractor conf.js
```

