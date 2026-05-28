import {expect,test} from "@playwright/test";

//prerequisite : npm install csv-parse -->  dependency plugin to be installed 

//read the data from csv 
import fs from 'fs';
import {parse} from 'csv-parse/sync';

const csvpath = "test-data/data.csv";

const filecontent = fs.readFileSync(csvpath, 'utf-8');

const records = parse(filecontent, {columns : true, skip_empty_lines : true}) 

test.describe(`test Login with different data `, async() => {

    for(const data of records) {

    test(`parametrized test ${data.email}`, async({page}) => {

    await page.goto("https://demowebshop.tricentis.com/");

    await page.getByRole("link", {name : 'Log in'}).click();

    await page.locator('#Email').fill(data.email);

    await page.locator('#Password').fill(data.password);

    await page.locator('.login-button').click();

    if(data.validity.toLowerCase() === 'valid') {

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
