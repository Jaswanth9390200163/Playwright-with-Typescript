import {expect,test,Locator} from "@playwright/test";


test("csslocators",async ({page})=> {

    await page.goto("https://demowebshop.tricentis.com/");

    //tag and id 
    const csslocator:Locator = page.locator("input#small-searchterms");   //input tag is optional

    await expect(csslocator).toBeVisible();

    await csslocator.fill("T-Shirts");

    //tag and class
    const csslocatorclass:Locator = page.locator("input.search-box-text");   //input tag is optional

    await expect(csslocatorclass).toBeVisible();

    await csslocatorclass.fill("T-Shirts");


    //tag with any other attribute other than id and class
    const csslocatorattribute:Locator = page.locator("input[value='Search store']");   //input tag is optional

    await expect(csslocatorattribute).toBeVisible();

    await csslocatorattribute.fill("T-Shirts");


    //tag with class and attribute other than id and class

    const csslocatorclassattribute:Locator = page.locator("input.search-box-text[name='q']");   //input tag is optional

    await expect(csslocatorclassattribute).toBeVisible();

    await csslocatorclassattribute.fill("T-Shirts");


    //wait
    await page.waitForTimeout(5000);
})