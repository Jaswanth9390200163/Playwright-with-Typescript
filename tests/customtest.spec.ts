import {expect, test, Locator } from "@playwright/test";


test("compute sum of all values", async({page}) => {

    await page.goto("https://www.youtube.com/playlist?list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr");

    const duration : string[]= await page.locator(".ytBadgeShapeText").allTextContents();

    let sum = 0;

    for (let d of duration) {
        console.log("d is :", d);

       let intd = parseInt(d);

       console.log("intd is:", intd);

       sum +=intd;
    }

    console.log("sum is :",sum);

})