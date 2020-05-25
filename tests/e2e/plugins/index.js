/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

// /* eslint-disable import/no-extraneous-dependencies, global-require */
const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  on(
    'file:preprocessor',
    webpack({
      webpackOptions: require('@vue/cli-service/webpack.config'),
      watchOptions: {},
    })
  );

  // customizing chrome on boot by passing arguments.
  // @see https://docs.cypress.io/api/plugins/browser-launch-api.html#Syntax
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chrome' && browser.name === 'chrome') {
      launchOptions.push('--auto-open-devtools-for-tabs');
      launchOptions.push('--disable-web-security');

      // set cancelation of apllying 'SameSite' cookie behavior.
      // @see https://stackoverflow.com/a/59711223
      launchOptions.push('--flag-switches-begin');
      launchOptions.push(
        '--disable-features=CookiesWithoutSameSiteMustBeSecure,SameSiteByDefaultCookies'
      );
      launchOptions.push('--flag-switches-end');

      // console.log(launchOptions); // print all current args
      return launchOptions;
    }
  });

  return Object.assign({}, config, {
    fixturesFolder: 'tests/e2e/fixtures',
    integrationFolder: 'tests/e2e/specs',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    supportFile: 'tests/e2e/support/index.js',
    testFiles: '**/*.js',
    experimentalGetCookiesSameSite: true,
  });
};
