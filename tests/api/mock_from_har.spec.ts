import {test, expect, Locator} from "@playwright/test";
import { uptime } from "node:process";


test("Mock from HAR File", async({page})=> {
    
    //Record HAR file
    page.routeFromHAR('.har/fruits.har', {

        url : '*/**/api/v1/fruits',
        update : false          //for 1st time run update should be true such that it generates har and bin file in the path
    });


    await page.goto("https://demo.playwright.dev/api-mocking");

    await expect(page.getByText('Strawberry')).toBeVisible();
    // await expect(page.getByText('PlaywrightHAR')).toBeVisible();
    // await expect(page.getByText('JaswanthHAR')).toBeVisible();
    // await expect(page.getByText('HAR')).toBeVisible();


});