const request = require('superagent');
const { config } = require('../../wdio.run.conf');

module.exports = class ApiUtil {
  static getLoggedInUserInfo() {
    return browser.call(async () => {
      try {
        const response = await request
          .get(`${config.baseApiUrl}/user`)
          .auth(config.login, config.password);

        return response.body;
      } catch (error) {
        return handleApiRequestError(error);
      }
    });
  }
};

function handleApiRequestError(error) {
  if (error.response && error.response.request) {
    const performedRequest = error.response.request;

    // eslint-disable-next-line no-param-reassign
    error.message = `${error.message}\n ${request.method} ${performedRequest.url}\n ${error.response.text}`;
  }
  return Promise.reject(error);
}
