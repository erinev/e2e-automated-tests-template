const PageSloUtil = require('../utils/page-slo-util');
const SearchPageClass = require('../page-objects/search-page');

const SearchPage = new SearchPageClass();

describe('Menu header component -', () => {
  before(() => {
    SearchPage.open();
  });

  it('should comply with SLO', () => {
    const currentUrl = SearchPage.getCurrentUrl();

    PageSloUtil.validatePageAgainstSlo(currentUrl);
  });

  it('should find e2e tests template repository', () => {
    const repositoryName = 'erinev/e2e-automated-tests-template';
    SearchPage.search(repositoryName);

    const { foundRepositoriesListItems } = SearchPage;

    console.log(foundRepositoriesListItems);
    // foundRepositoriesListItems.count.should.be.equal(1);
    // foundRepositoriesListItems.first.getText().should.be.equal(repositoryName);
  });
});
