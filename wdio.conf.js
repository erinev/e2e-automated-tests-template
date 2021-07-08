const chai = require('chai');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');

const LoginPageClass = require('./test/page-objects/login-page');
const NodeCommandUtil = require('./test/utils/node-command-util');

const LoginPage = new LoginPageClass();

exports.config = {
  runner: 'local',
  sync: true,

  protocol: 'http',
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',

  baseUrl: 'http://localhost',
  failedTestsScreenshotDirectoryName: './failed-tests-screenshots',

  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
    },
  ],

  logLevel: 'error',
  deprecationWarnings: true,
  bail: 1,

  waitforTimeout: 10 * 1000,
  waitforInterval: 500,
  connectionRetryTimeout: 90 * 1000,
  connectionRetryCount: 3,

  specs: [
    './test/specs/**/*.spec.js',
  ],
  exclude: [],

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 10 * 1000,
    bail: 1,
  },

  reporters: ['spec'],
  services: ['devtools'],

  serviceLevelObjective: {
    maximumAveragePageDrawingSpeedIndex: 0.5 * 1000,
    maximumTimeUntilPageIsFullyLoaded: 4 * 1000,
    maximumPageRequestsCount: 30,
  },

  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare(config) {
    // Prepare failed tests screenshots folder
    rimraf.sync(config.failedTestsScreenshotDirectoryName);
    mkdirp.sync(config.failedTestsScreenshotDirectoryName);

    NodeCommandUtil.updateWebdriverManagerBinaries();
    NodeCommandUtil.startWebdriverManager();
  },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  before() {
    // Chai assertion lib initialization
    global.expect = chai.expect;
    chai.Should();

    LoginPage.login(browser.config.login, browser.config.password);
  },
  /**
   * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  afterTest(test) {
    // Take a screenshot of page after failed test
    if (!test.passed) {
      const { browserName } = browser.capabilities;

      const browserSpecificFailedTestsScreenshotDir = `${this.failedTestsScreenshotDirectoryName}/${browserName}`;

      mkdirp.sync(browserSpecificFailedTestsScreenshotDir);

      browser.saveScreenshot(`${browserSpecificFailedTestsScreenshotDir}/${test.fullTitle}.png`);
    }
  },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  afterSession() {
    NodeCommandUtil.shutdownWebdriverManager();
  },
};
