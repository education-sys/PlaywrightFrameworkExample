import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ConfirmationPage extends BasePage {

  readonly headlineConfirmation: Locator;

  constructor(page: Page) {
    super(page);
    this.headlineConfirmation = page.locator('#user-name');
  }

  async orderDone():Promise <void> {
        await expect(this.headlineConfirmation).toBeVisible();
    }

}
