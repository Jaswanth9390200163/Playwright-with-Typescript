import { expect, test, Locator, Page, chromium } from "@playwright/test";

import { HomePage } from "../src/pages/Homepage";

import { ResultPage } from "../src/pages/Resultpage";

import { ProfilePage } from "../src/pages/ProfilePage";


test("Page Object Model Implementation", async({page})=> {


    //create an object for all pages
    const homepage = new HomePage(page)
    const resultpage = new ResultPage(page);
    const profilepage = new ProfilePage(page);

    //call respective methods from each  page
    await homepage.gotoURL();
    
    await page.waitForTimeout(3000);

   await homepage.searchWithKeywords('Jaswanth Alapati');

    await resultpage.clickElement();

    await page.waitForTimeout(3000);

    await profilepage.validateProfileName('Jaswanth Alapati');

    await page.waitForTimeout(3000);


})