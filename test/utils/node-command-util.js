const { exec } = require('child_process');

module.exports = class NodeCommandUtil {
  static updateWebdriverManagerBinaries() {
    exec('webdriver-manager update', (err, stdout, stderr) => {
      if (err) {
        throw new Error(`failed to update webdriver-manager binaries: '${stderr}'`);
      }
    });
  }

  static startWebdriverManager() {
    exec('webdriver-manager start --detach', (err, stdout, stderr) => {
      if (err) {
        throw new Error(`failed to start webdriver-manager: '${stderr}'`);
      }
    });
  }

  static shutdownWebdriverManager() {
    exec('webdriver-manager shutdown', (err, stdout, stderr) => {
      if (err) {
        throw new Error(`failed to shutdown webdriver-manager: '${stderr}'`);
      }
    });
  }
};
