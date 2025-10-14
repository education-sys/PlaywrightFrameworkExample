import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { faker } from '@faker-js/faker';

export class CheckoutStepOne extends BasePage {

  readonly inputFirstNameField: Locator;
  readonly inputLastNameField : Locator;
  readonly inputZipCodeField : Locator;
  readonly continueButton : Locator;


  constructor(page: Page) {
    super(page);
    this.inputFirstNameField = page.locator("#first-name");
    this.inputLastNameField = page.locator("#last-name");
    this.inputZipCodeField = page.locator("#postal-code");
    this.continueButton = page.locator("#continue");
  }

    async addToCartAction() {
      await this.inputFirstNameField.fill(faker.person.firstName());
      await this.inputLastNameField.fill(faker.person.lastName());
      await this.inputZipCodeField.fill("11080");
      await this.continueButton.click();
    }

}