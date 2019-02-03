module.exports = class BasePage {
  open(url) {
    browser.url(url);
  }

  getTitle() {
    return browser.getTitle();
  }

  getCurrentUrl() {
    return browser.getUrl();
  }
};
