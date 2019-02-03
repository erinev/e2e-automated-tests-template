const BasePageClass = require('./base-page');
const PageUtilClass = require('../utils/page-util');

const PageUtil = new PageUtilClass();

module.exports = class SearchPage extends BasePageClass {
  get searchInput() { return $('input[name="q"]'); }

  get searchButton() { return $('#search_form > .js-search-suggester-field'); }

  get foundRepositoriesList() { return $('ul.repo-list'); }

  get foundRepositoriesListItems() { return $('li > a'); }

  open() {
    super.open(`${browser.config.baseUrl}/search`);

    PageUtil.waitUntilElementIsDisplayed(this.searchInput);

    this.searchInput.clearValue();
  }

  search(searchText, useEnter = true) {
    this.searchInput.setValue(searchText);

    if (useEnter) {
      const enterKey = '\uE007';
      browser.keys(enterKey);
    } else {
      this.searchButton.click();
    }

    PageUtil.waitUntilElementIsDisplayed(this.foundRepositoriesList);
  }
};
