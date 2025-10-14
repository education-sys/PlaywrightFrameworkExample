import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

  readonly checkoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.checkoutButton = page.locator("#checkout");
  }


    async clickOnCheckOutButton() {
      await this.checkoutButton.click();
    }

}