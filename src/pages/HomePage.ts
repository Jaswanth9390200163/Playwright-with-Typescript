import { expect, test, Locator, Page } from "@playwright/test";


export class  HomePage {

    readonly page : Page;

    readonly searchTextbox : Locator;

    constructor(page : Page) {

        this.page = page;

        //Elements
        this.searchTextbox = page.locator("textarea[name=q]");
    }

    //Methods

    async gotoURL() {
        await this.page.goto(`${process.env.GOOGLE_URL}`);
    }

    async searchWithKeywords(Keyword : string) {

        await this.searchTextbox.first().fill(Keyword);

        await this.page.keyboard.press('Enter');

    }
}