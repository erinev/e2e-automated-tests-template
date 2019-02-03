const args = require('yargs').argv;
const { config } = require('./wdio.conf.js');

if (args.login) {
  config.login = args.login;
} else {
  throw new Error('Required argument \'-- login some_login\' value was not provided!');
}

if (args.password) {
  config.password = args.password;
} else {
  throw new Error('Required argument \'-- password some_password\' value was not provided!');
}

// If you have more than 1 environment (dev, staging, production) add base url accordingly
const environments = {
  prod: {
    baseUrl: 'https://github.com',
    baseApiUrl: 'https://api.github.com',
  },
};

config.environment = args.environment || 'prod';

const environment = environments[config.environment] || {};
if (environment === {}) {
  throw new Error(`
    Not supported argument '-- environment' value was provided!
    Supported values: ${Object.keys(environments)}
    `);
}

Object.assign(config, environment);

exports.config = config;
