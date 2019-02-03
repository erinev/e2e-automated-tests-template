const { config } = require('../../wdio.run.conf');
const ProfilePageClass = require('../page-objects/profile-page');
const ApiUtil = require('../utils/api-util');
const PageSloUtil = require('../utils/page-slo-util');

const ProfilePage = new ProfilePageClass();

describe('Profile page -', () => {
  let loggedInUserInfo;

  before(() => {
    loggedInUserInfo = ApiUtil.getLoggedInUserInfo(config.login, config.password);

    ProfilePage.open(loggedInUserInfo.login);
  });

  it('should comply with SLO', () => {
    const currentUrl = ProfilePage.getCurrentUrl();

    PageSloUtil.validatePageAgainstSlo(currentUrl);
  });

  it('should show correct nickname', () => {
    const shownNickname = ProfilePage.nicknameSpan.getText();

    shownNickname.should.be.equal(loggedInUserInfo.login);
  });
});
