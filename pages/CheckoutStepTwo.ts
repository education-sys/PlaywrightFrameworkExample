import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutStepTwo extends BasePage {

  readonly finishButton: Locator;

  constructor(page: Page) {
    super(page);
    this.finishButton = page.locator("#finish");
  }

    async clickOnFinishButton() {
      await this.finishButton.click();
    }

}