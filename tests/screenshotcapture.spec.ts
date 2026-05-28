import { expect, test , Locator } from "@playwright/test"; 

test("screenshot capture", async({page}) => {

    await page.goto("https://demowebshop.tricentis.com/");

    const timestamp = Date.now();

    
    //to capture visible page screenshot
    await page.screenshot({path : 'screenshots/' + 'homepage' + timestamp + '.png'});

    //to capture full page screenshot
    await page.screenshot({path : 'screenshots/' + 'homepagefull' + timestamp + '.png', fullPage:true});

    //to capture screenshot of particular element

    const logo : Locator =  page.getByAltText("Tricentis Demo Web Shop");
    await logo.screenshot({path : 'screenshots/' + 'logo' + timestamp + '.png'});


    //capture specific section of a page using locator
    const featuredProducts : Locator =  page.locator('.home-page-product-grid')

    await featuredProducts.screenshot({path : 'screenshots/' + 'featuredproducts' + timestamp + '.png'});

    
/**
    we can also capture screenshot using global settings where we can change settings in playwrightconfig.ts 
    we can have field called screenshot : 'only-on-failre' inside use json object of playwright config.ts 
    and the screenshots captured over global level will be stored under test-results folder
 */

})