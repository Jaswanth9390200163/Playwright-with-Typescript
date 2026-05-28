import { expect, test, Locator, Page } from "@playwright/test";


export class ProfilePage {

    readonly page : Page;
    readonly profileName : Locator;


    constructor(page : Page) {

        this.page = page;
        this.profileName = page.locator('//a["https://www.linkedin.com/"]//h2');
    }


    async validateProfileName(name : string) {

        await expect(this.profileName).toBeVisible();

        let profilename = this.profileName.first().innerText();

        await expect(profilename).toEqual('Jaswanth Alapati');
        
    }

}