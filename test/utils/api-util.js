const request = require('superagent');
const { config } = require('../../wdio.run.conf');

module.exports = class ApiUtil {
  static getLoggedInUserInfo() {
    return browser.call(() => request
      .get(`${config.baseApiUrl}/user`)
      .auth(config.login, config.password)
      .then(
        response => response.body,
        handleApiRequestError,
      ));
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
