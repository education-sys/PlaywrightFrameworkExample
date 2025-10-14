import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ExampleFile extends BasePage {

  //readonly da ne bi kasnije u izvršavanju koda dolazilo do promena vrednosti lokatora
  //Moramo navesti kog tipa su lokatori jer koristimo TypeScript a po njemu je tip Locator
  readonly exampleOne: Locator;
  readonly clickButton : Locator;

  

// Svaki test ima poseban "živi" page koji Playwright automatski kreira.
// Kreiranjem lokatora unutar konstruktora obezbeđuje se da objekti pages klasa
// budu povezani sa upravo tim page-om specifičnim za dati test.
// Svaki test ima svoje odvojene page objekte u kojima se nalazi page jedinstven za taj test.

  constructor(page: Page) {
    super(page);
    this.exampleOne = page.locator('#user-name');
    this.clickButton = page.locator("#example")
  }

  //TypeScript je tipiziran tako da moramo navesti kog tipa su user i pass
  //Za async funkcije nema void ako ne vraća nijedan tip podatka
  async fillExample() {
    await this.exampleOne.fill("hsafjkh");
    await this.clickButton.click();
  }
}