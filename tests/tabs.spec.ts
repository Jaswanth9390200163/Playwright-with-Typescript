import {expect, test,Locator, chromium } from "@playwright/test";


test("browser tabs", async({})=> {

    //const broswer = await chromium.launch({headless : false, channel : 'chrome'});    //to run test in chrome browser in headed mode


    //const broswer = await chromium.launchPersistentContext('', {headless : false, channel : 'chrome'});    //to open browser in normal mode (non-incognito)

    const broswer = await chromium.launch();

    const context =await  broswer.newContext();

    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");

    console.log("page title is:",await page.title());

    context.waitForEvent('page');   //pending, fullfilled , rejected 


    const [childpage] =await Promise.all([context.waitForEvent('page'), page.locator("button:has-text('New Tab')").click()]); //both of these will be executed paralelly

    //await page.locator("button:has-text('New Tab')").click();       //opens new tab

    const pages = context.pages();      //returns array of all pages

    console.log("no of pages are:", pages.length);

    console.log("child page title is: ",await childpage.title());

    console.log("another way of fetching page titles ");

    console.log("parent page title", await pages[0].title());

    console.log("child page title", await pages[1].title());


    await page.waitForTimeout(3000);

})