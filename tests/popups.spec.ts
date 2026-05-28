import {expect, test , Locator, Page } from "@playwright/test";


test("popups handling", async({browser}) => {


    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");


    await Promise.all([page.waitForEvent('popup'), await page.locator('#PopUp').click()]);

    const allPopupWindows =  context.pages();

    console.log("no of pages are:", allPopupWindows.length);

    console.log("parent page  url:", allPopupWindows[0].url());     //returns url of main page

    console.log("child page 1 url :", allPopupWindows[1].url());


    for (const pw of allPopupWindows) {
        const title = await pw.title();

        if(title.includes('Selenium')) {

            expect(title).toStrictEqual('Selinium');

            expect.soft(title).toEqual('Selenium');
            console.log("clicking get  3 dots on right top of page");

            await pw.locator(".navbar-toggler").click();

            await pw.close();
        }
    }

    await page.waitForTimeout(5000);

    
})