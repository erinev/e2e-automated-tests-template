module.exports = class PageUtil {
  get defaultTimeout() {
    return browser.config.waitforTimeout;
  }

  waitUntilElementIsDisplayed(el) {
    const elementIsNotDisplayedErrorMessage = `$(${el.selector}) is still not displayed!`;

    el.waitForDisplayed(this.defaultTimeout, false, elementIsNotDisplayedErrorMessage);
  }

  waitUntilElementIsNoLongerDisplayed(el) {
    const elementIsDisplayedErrorMessage = `$(${el.selector}) is still displayed!`;
    const reverseCondition = true;

    el.waitForDisplayed(this.defaultTimeout, reverseCondition, elementIsDisplayedErrorMessage);
  }
};
