import { test, expect } from './BaseTest';
//Uvozimo proširenu test funkciju iz BaseTest

// test.describe('Swag Labs - Login', () => {
//test.describe() definiše suite (skup) testova — sličan konceptu “Test Suite” u TestNG-u

  test('valid user can log in', async ({ loginPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.assertLoggedIn();
  });

  test('shows error on invalid creds', async ({ loginPage }) => {
    await loginPage.login('bad_user', 'bad_pass');
    await loginPage.errorMsgDisplayed();
  });
  
// });


