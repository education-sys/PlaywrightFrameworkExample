import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

  readonly mainLogo: Locator;

  constructor(page: Page) {
    super(page);
    this.mainLogo = page.locator('#user-name');
  }

  async homePageOpen():Promise <void> {
      await expect(this.mainLogo).toBeVisible();
    }

}
