import { expect, test, Locator } from "@playwright/test";


//testdata
const searchterms = ['laptop', 'Gift card', 'smartphone', 'Monitor'];

//using for of loop

for(let item of searchterms) {

test(`searching ${item}`, async({page}) => {


    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('#small-searchterms').fill(item);

    await page.locator('.search-box-button').click();

    await expect(page.locator('h2 a').nth(0)).toContainText(item, {ignoreCase:true});
    
});
}


//using for each function
searchterms.forEach((item) => {
    console.log(item);
    test(`for each searching ${item}`, async({page}) => {


    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('#small-searchterms').fill(item);

    await page.locator('.search-box-button').click();

    await expect(page.locator('h2 a').nth(0)).toContainText(item, {ignoreCase:true});
    
});
})

