# Description

Boostrap project for starting to write UI automated tests.  
Using:

* [node.js](https://nodejs.org)
* [webdriver.io](https://webdriver.io/) (selenium tests framework)
* [mocha](https://mochajs.org/#getting-started) (tests running framework)
* [chai](https://www.chaijs.com/api/) (test assertions lib)
* [webdriver-manager](https://www.npmjs.com/package/webdriver-manager) (managing selenium standalone server)
* [superagent](https://visionmedia.github.io/superagent/) (http requests lib)

## Prerequisites

*Without these steps you won't be able to run tests.
1) Chrome internet browser ([Official chrome website](https://www.google.com/chrome/))
2) Node.js installed ([Official Node.js website](https://nodejs.org))
3) Newest versions of Python 3 & 2 installed and both versions added to system PATH ([Official Python website](https://www.python.org/downloads/))  
*(it's needed in order to use webdriver-io cli (@wdio/cli) package)*
4) Selenium webdriver manager npm package installed globally: *`npm i -g webdriver-manager`*  
*(this lib is used to start selenium standalone driver. By default it installs only chrome browser driver)*

## How to run tests

*All commands below should be run in the root directory (except webdriver-manager because it must be installed globally. Check prerequisites above)
1) Fork this repository
2) To restore npm packages use command: *`npm i`*
3) To run the tests use command: *`npm test -- --login 'your_github_login_name' --password 'your_github_password'`*

## Notes

* @wdio/sync package makes all WebdriverIO commands run synchronously so you don't need to handle promises for them (i.e.: *`browser.getTitle();`*) ([docs](https://www.npmjs.com/package/wdio-sync))
* But non WebdriverIO commands (i.e.: http request using superagent: *`request.get(url)`*) you needs to be wrapped in *`browser.call(callback)`* function ([docs](https://webdriver.io/docs/api/browser/call.html))
