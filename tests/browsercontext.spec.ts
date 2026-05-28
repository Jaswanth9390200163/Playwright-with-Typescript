import {expect, test, Page, Locator, chromium } from "@playwright/test";


test("browser contexts and pages", async({browser}) => {

    //const browser = await chromium.launch();     
    // simce we are passing browser in async function this browser launch can be commented out , if not passed we can use this to launch broswer

    const context = await browser.newContext();

    const page = await context.newPage();

    const anotherpage = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");

    console.log("title of page is", await page.title());

    await expect(page).toHaveTitle('Automation Testing Practice');

    await anotherpage.goto("https://www.google.com/");

    console.log("title of another page  is",await anotherpage.title());

    await expect(anotherpage).toHaveTitle('Google');

    //so we can create multiple pages for same context and work on them parallely based on requirement


    console.log("no of pages for the given context is : ",context.pages().length);
})


//browser context opens browser in incognito  mode so that both are having own sessions , own cache ,own cookies , own storage etc..they will not interact or impact or share session with each other