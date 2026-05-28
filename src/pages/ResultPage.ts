import { expect, test, Locator, Page } from "@playwright/test";


export class  ResultPage {

    readonly page : Page;

    readonly link : Locator;

    constructor(page : Page) {

        this.page = page;

        //Elements
        this.link = page.locator("//h3[text()='Jaswanth Alapati - Automation Engineer at OpenText EX ...']");
    }

    //Methods

    async clickElement() {

        await this.link.click();

    }
}