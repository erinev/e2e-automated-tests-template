const BasePageClass = require('./base-page');
const PageUtilClass = require('../utils/page-util');

const PageUtil = new PageUtilClass();

module.exports = class LoginPage extends BasePageClass {
  get loginInput() { return $('input#login_field'); }

  get passwordInput() { return $('input#password'); }

  get loginButton() { return $('input[type="submit"]'); }

  open() {
    super.open(`${browser.config.baseUrl}/login`);

    PageUtil.waitUntilElementIsDisplayed(this.loginButton);
  }

  login(login, password) {
    this.open();

    this.loginInput.setValue(login);
    this.passwordInput.setValue(password);

    this.loginButton.click();

    PageUtil.waitUntilElementIsNoLongerDisplayed(this.loginButton);
  }
};
