import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

  readonly productsLogo: Locator;
  readonly addToCartProductButton : Locator;
  readonly addToCartButton : Locator;

  constructor(page: Page) {
    super(page);
    this.productsLogo = page.getByText("Products");
    this.addToCartProductButton = page.locator("#add-to-cart-sauce-labs-backpack");
    this.addToCartButton = page.locator(".shopping_cart_link");
  }

  async homePageOpen() {
      await expect(this.productsLogo).toBeVisible();
    }

    async addToCartAction() {
      await this.addToCartProductButton.click();
      await this.addToCartButton.click();
    }

}
