# Description
Boostrap project for starting to write UI automated tests.  
Using:
* [node.js](https://nodejs.org)
* [webdriver.io](https://webdriver.io/) (selenium tests framework)
* [mocha](https://mochajs.org/#getting-started) (tests running framework)
* [chai](https://www.chaijs.com/api/) (test assertions lib)
* [webdriver-manager](https://www.npmjs.com/package/webdriver-manager) (managing selenium standalone server)
* [superagent](https://visionmedia.github.io/superagent/) (http requests lib)

# Prerequisites
1) Node.js installed (v7.6.0 and higher) ([Official Node.js website](https://nodejs.org)) - because we use async/await for handling custom promises
2) Newest versions of Python 3 & 2 installed and both versions added to system PATH ([Official Python website](https://www.python.org/downloads/)) - it's needed in order to use Webdriver.io cli (@wdio/cli) package
3) Selenium webdriver manager npm package installed globally: `npm i -g webdriver-manager`
4) Selenium webdriver manager binaries updated: `webdriver-manager update`

# How to 
All commands below should be run in the root directory (except webdriver-manager because it must be installed globally. Check prerequisites above)
1) Fork this repository
2) To restore npm packages use command: `npm i`
3) To run the tests use command: `npm test -- --login 'your_github_login_name' --password 'your_github_password'`
