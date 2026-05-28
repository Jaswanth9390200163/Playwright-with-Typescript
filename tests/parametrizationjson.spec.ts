import {expect,test} from "@playwright/test";

//read the data from json
import fs from 'fs';

const jsonpath = "test-data/data.json";

const logintestData : any = JSON.parse(fs.readFileSync(jsonpath, 'utf-8'));


test.describe(`test Login with different data `, async() => {

    for(const {email,password,validity} of logintestData) {

    test(`parametrized test ${email}`, async({page}) => {

    await page.goto("https://demowebshop.tricentis.com/");

    await page.getByRole("link", {name : 'Log in'}).click();

    await page.locator('#Email').fill(email);

    await page.locator('#Password').fill(password);

    await page.locator('.login-button').click();

    if(validity.toLowerCase() === 'valid') {

        //Assert logout link is visibile

        await expect(page.locator('a[href="/logout"]')).toBeVisible({timeout : 5000});
    }
    else {
        //Assert error message
        await expect(page.locator('.validation-summary-errors')).toBeVisible({timeout : 5000});


        //Assert user is still in login page
        await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");

    }

    });

    }

});
