import {expect, test, Locator} from "@playwright/test";

import { LoginPage } from "../src/pages/LoginPage";

import process from "node:process";
import { PatchesPage } from "../src/pages/PatchesPage";


test("Page object model test ", async({page})=> {

    test.setTimeout(60000)

    //create an object of LoginPage
    const loginPage = new LoginPage(page);

    //call methds from loginpage to login
    await loginPage.gotoURL(`${process.env.CORE_ENDPOINT_URL}`);
    await loginPage.login(`${process.env.CORE_ENDPOINT_USERNAME}`, `${process.env.CORE_ENDPOINT_PASSWORD}`);


    //create an object of patchesPage
    const patchespage = new PatchesPage(page);

    // call methods from patches page
    await patchespage.navigateToPatchesTab();

    await page.waitForTimeout(3000);

    //change pagination

    await patchespage.changepagination("500");
    await patchespage.changepagination("100");

})