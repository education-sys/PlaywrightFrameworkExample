import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  //readonly da ne bi kasnije u izvršavanju koda dolazilo do promena vrednosti lokatora
  //Moramo navesti kog tipa su lokatori jer koristimo TypeScript a po njemu je tip Locator
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly productsTitle: Locator;
  readonly errorMsg : Locator;
  

// Svaki test ima poseban "živi" page koji Playwright automatski kreira.
// Kreiranjem lokatora unutar konstruktora obezbeđuje se da objekti pages klasa
// budu povezani sa upravo tim page-om specifičnim za dati test.
// Svaki test ima svoje odvojene page objekte u kojima se nalazi page jedinstven za taj test.

  constructor(page: Page) {
    super(page);
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
    this.productsTitle = page.locator('span.title:has-text("Products")');
    this.errorMsg = page.getByText("Epic sadface: Username and password do not match any user in this service");
  }

  //TypeScript je tipiziran tako da moramo navesti kog tipa su user i pass
  //Za async funkcije nema void ako ne vraća nijedan tip podatka
  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }

  async assertLoggedIn() {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.productsTitle).toBeVisible();
  }

  async errorMsgDisplayed() {
    await expect(this.errorMsg).toBeVisible();
  }
}
