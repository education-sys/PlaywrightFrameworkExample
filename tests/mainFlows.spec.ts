import { test, expect } from './BaseTest';

test('main buyflow', async ({ loginPage, homePage, checkoutStepTwo, checkoutStepOne, checkoutComplete, cartPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.assertLoggedIn();
    await homePage.addToCartAction();
    await cartPage.clickOnCheckOutButton();
    await checkoutStepOne.addToCartAction();
    await checkoutStepTwo.clickOnFinishButton();
    await checkoutComplete.orderConfirmationHeadlinePresent();
  });