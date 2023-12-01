const home = {
  'Title test': () => {
    browser.url('https://localhost:5173').assert.titleEquals('ACME');
  },

  'Sign in': () => {
    browser.waitForElementVisible('#app', 500);

    // Click on SignIn Button
    browser.click('button[id=signin]')
    .waitForElementVisible('#username')
    .setValue('input[name=username]', 'test@example.com')
    .setValue('input[name=password]', 'Test1234')
    .element.find('body > div > main > section > div > div.c5129532b > div > form > div.c63db4457 > button')
    .click();
    browser.assert.elementPresent('button[id=logout]')
  },
  'Sign Out': () => {
    browser.waitForElementVisible('button[id=logout]', 500);

    // Click on SignIn Button
    browser.click('button[id=logout]')
    .assert.elementPresent('button[id=signin]')
  },
};

export default home;
