const BasePageClass = require('./base-page');
const PageUtilClass = require('../utils/page-util');

const PageUtil = new PageUtilClass();


module.exports = class ProfilePage extends BasePageClass {
  get userStatusContainerDiv() { return $('h1.vcard-names'); }

  get nicknameSpan() { return $('span.p-nickname'); }

  open(profileName) {
    super.open(`${browser.config.baseUrl}/${profileName}`);

    PageUtil.waitUntilElementIsDisplayed(this.userStatusContainerDiv);
  }
};
