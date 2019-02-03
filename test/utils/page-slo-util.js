const { config } = require('../../wdio.run.conf');

module.exports = class PageSloUtil {
  static validatePageAgainstSlo(url) {
    const { maximumAveragePageDrawingSpeedIndex } = config.serviceLevelObjective;
    const { maximumTimeUntilPageIsFullyLoaded } = config.serviceLevelObjective;
    const { maximumPageRequestsCount } = config.serviceLevelObjective;

    browser.startTracing();
    browser.url(url);
    browser.endTracing();

    const drawingSpeedIndex = browser.getSpeedIndex();
    const performanceMetrics = browser.getPerformanceMetrics();
    const pageWeight = browser.getPageWeight();

    drawingSpeedIndex.speedIndex.should.be.below(maximumAveragePageDrawingSpeedIndex);
    performanceMetrics.load.should.be.below(maximumTimeUntilPageIsFullyLoaded);
    pageWeight.requestCount.should.be.below(maximumPageRequestsCount);
  }
};
