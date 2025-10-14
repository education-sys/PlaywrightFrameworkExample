import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutComplete extends BasePage {

  readonly thanksForOrderHeadline: Locator;

  constructor(page: Page) {
    super(page);
    this.thanksForOrderHeadline = page.getByText("Thank you for your order!");
  }

    async orderConfirmationHeadlinePresent() {
      await expect(this.thanksForOrderHeadline).toBeVisible();
    }

}