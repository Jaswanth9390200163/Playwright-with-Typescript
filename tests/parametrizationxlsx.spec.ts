import {expect,test} from "@playwright/test";

//prerequisite : npm install xlsx --> dependency lugin to be installed

//read the data from xlsx  
import fs from 'fs';
import * as XLSX from 'xlsx';

const xlsxpath = "test-data/data.xlsx";
const workbook = XLSX.readFile(xlsxpath);
const sheetNames = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetNames];


//convert sheet into json

const logintestdata:any = XLSX.utils.sheet_to_json(worksheet);


test.describe(`test Login with different data `, async() => {

    for(const {email,password,validity} of logintestdata) {

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
