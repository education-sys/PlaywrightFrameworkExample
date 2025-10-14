import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CheckoutStepTwo } from '../pages/CheckoutStepTwo';
import { CheckoutStepOne } from '../pages/CheckoutStepOne';
import { CheckoutComplete } from '../pages/CheckoutComplete';
import { CartPage } from '../pages/CartPage';
import { ExampleFile } from '../pages/ExampleFile';
//.. jer je nivo iznad
//Uzimam test iz @playwright/test i proširujem ga i nazivam base. Pravi se proširena verzija test funkcije, koja dodaje sopstvene fixture-e ili logiku.


const BASE_URL = 'https://www.saucedemo.com/';

//Navodimo promenljive i kog su tipa, koristimo ih kasnije u ovom fajlu
type Fixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  checkoutStepTwo : CheckoutStepTwo;
  checkoutStepOne : CheckoutStepOne;
  checkoutComplete : CheckoutComplete;
  cartPage : CartPage;
  examplePage : ExampleFile
};

//Proširujemo test sa objektima pages klasa, koristimo Fixtures da se zna kog su tipa loginPage, homePage...
const test = base.extend<Fixtures>({
  loginPage: async function ({ page }, use) {
    await use(new LoginPage(page));
  },
  homePage: async function ({ page }, use) {
    await use(new HomePage(page));
  },
  checkoutStepTwo: async function ({ page }, use) {
    await use(new CheckoutStepTwo(page));
  },
  checkoutStepOne: async function ({ page }, use) {
    await use(new CheckoutStepOne(page));
  },
  checkoutComplete: async function ({ page }, use) {
    await use(new CheckoutComplete(page));
  },
  cartPage: async function ({ page }, use) {
    await use(new CartPage(page));
  },
  examplePage: async function ({ page }, use) {
    await use(new ExampleFile(page));
  },
});

test.beforeAll(async () => {
  //Nema potrebe da se kao u Seleniumu ovde pravi driver jer Browser, Browser Context, page... je sve već ubačeno u test funkciju živo iz Playwright biblioteke
});

test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('#login-button')).toBeVisible();
});

test.afterEach(async ({ page }) => {
  if (page.url().includes('/inventory.html')) {
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    await expect(page.locator('#login-button')).toBeVisible();
  }
});

test.afterAll(async () => {
  //Nema potrebe kao u Seleniumu da radimo driver.quit() jer Playwright sam sve gasi
});

export { test, expect };
//Radimo export da u drugim fajlovima/klasama možemo da koristimo proširenu test funkciju (base), expect samo da bi smo pisali jednu liniju koda za import


// Playwright test runner napravi novi živi page objekat za svaku test funkciju.
// BaseTest ga prosledi u konstruktor pages fajlova/klasa (new LoginPage(page) itd). tj. u kreirani objekat iz pages fajlova/klasa.
// Pages klase/fajlovi i BasePage (kao roditelj) primaju page.
// Sve funkcije unutar BasePage i pages klasa koriste taj page kao aktivnu vezu sa Web Browser-om.







