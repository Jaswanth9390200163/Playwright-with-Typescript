import { expect, test, Locator, Page } from "@playwright/test";

import process from "node:process";

export class LoginPage {

    readonly page : Page;
    readonly username : Locator;
    readonly next : Locator;
    readonly password : Locator;
    readonly logIn : Locator;
    readonly header : Locator;


    constructor (page : Page) {
        this.page = page;
        this.username = page.locator('#otds_username');
        this.next = page.locator('#nextbutton');
        this.password = page.locator('#otds_password');
        this.logIn = page.locator('#loginbutton');
        this.header = page.getByText('Core Endpoint Management');

    }


    //methods
    async gotoURL(url : string) {
        await this.page.goto(url);
    }

    async login(username : string , password : string ){
        await this.username.click();
        
        await this.username.fill(username);
        
        await this.next.click();
        
        await this.password.fill(password);
        
        await this.logIn.click();
        
        await expect(this.header).toBeVisible({timeout : 20000});
    }


}