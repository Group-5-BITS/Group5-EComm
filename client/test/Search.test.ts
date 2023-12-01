import {NightwatchAPI, NightwatchTests} from 'nightwatch';
import { find } from 'rxjs';

const home: NightwatchTests = {

  'Setup': () => {
    browser.url('https://localhost:5173').assert.titleEquals('ACME');
    browser.waitForElementVisible('#app', 500);

    // Click on SignIn Button
    browser.click('button[id=signin]')
    .waitForElementVisible('#username')
    .setValue('input[name=username]', 'test@example.com')
    .setValue('input[name=password]', 'Test1234')
    .element.find('body > div > main > section > div > div.c5129532b > div > form > div.c63db4457 > button')
    .click();
    browser.assert.titleEquals('ACME')
  },

  'Search': function () {

    // Wait for the Vue app to load
    browser.waitForElementVisible('input[type="search"]', 50000);

    // Simulate searching by product name
    browser.element.find('input[type="search"]')
    .sendKeys(['Wheat'])
    browser.waitForElementVisible('#search-submit').element.find('#search-submit').click()

    // Assert that the correct page is open
    browser.waitForElementVisible('p[id=product-name]', 10000)
    .assert.urlContains('product');

    // Click on a product
    browser.waitForElementVisible('p[id=product-name]', 10000)
    .element.find('p[id=product-name]').getText()
    .assert
    .contains('Wheat');
  },

  'Select Product': async () => {
    // Select a Product
    let productName = await browser.waitForElementVisible('p[id=product-name]', 5000)
    .element.find('p[id=product-name]').getText().value;

    browser.element
    .find('p[id=product-name]')
    .click();

    // Assert product page opened
    browser.assert
    .urlContains('item')
    
    // Assert right product opened
    browser.element
    .find('#product-name')
    .getText()
    .assert
    .equals(productName)

    // Increase item count
    browser.element
    .find('#add-item-count')
    .doubleClick();

    browser.element
    .find('#item-count')
    .getText()
    .assert.equals('2');
    
    // Add Item to Cart
    browser.element
    .find('#add-to-cart')
    .click();
  },

  'Checkout': async () => {
    let providerName = await browser
    .element.find('#provider-name').getText().value;

    let productName = await browser
    .element.find('#product-name').getText().value;

    let itemCount = await browser.element
    .find('#item-count')
    .getText().value

    // Go to Cart Page
    browser.click('#cart')

    //Assert tab for provider is present
    let providerTab = browser
    .element.find('#provider-tab-name');
    providerTab.click();

    console.log("productName: ", productName)
    console.log("product-name: ", await browser.element.find('#product-name').getText().value)

    // Assert right product is in the cart
    browser.element.find('#product-name').getText().assert.equals(productName);
    browser.element.find('#item-count').getValue().assert.equals(itemCount);

    // Go to Summary Page
    browser.click('#checkout');
    
  },

  "Close Browser": () => {
    browser.end();
  }
  
};

export default home;
