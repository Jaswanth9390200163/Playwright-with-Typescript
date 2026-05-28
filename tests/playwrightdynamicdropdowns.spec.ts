import {expect,test,Locator} from "@playwright/test"

test("playwright dynamic dropdowns", async({page}) => {

    await page.goto("https://www.flipkart.com/");

    //close login popup
    const loginpopupclose:Locator = page.locator("[role='button']");

    loginpopupclose.click();

    await page.waitForTimeout(3000);


    const searchbar:Locator = page.locator("[name='q']:not([readonly])");

    await searchbar.click();

    await page.waitForTimeout(3000);

    await searchbar.fill("smart");

    await page.waitForTimeout(3000);


    //get all the suggested elements

    const suggestionelemnets:Locator = page.locator("ul>li");

    const count:number=await suggestionelemnets.count();
    console.log("count of suggestion elements in dropdown is : ",count);

    const suggestionarray : string[]= await suggestionelemnets.allTextContents();

    await page.waitForTimeout(3000);

   // console.log("printing all auto suggestions:");

    // for (const element of suggestionarray) {
    //     console.log(element);
    // }


    console.log("printing all auto suggestions:");

    for(let i=0; i<count; i++) {

        console.log(await suggestionelemnets.nth(i).innerText());       //extracts actual/visible text mainly used for input elements (like fetching text from input box)... it removes white spaces ,slashes etc..

        //console.log(await suggestionelemnets.nth(i).textContent());  //we will get whitespaces ,hidden elements,  slashes,line breaks etc using textcontent method if text has it
    }


    // click on smartphone suggestion

    for(let i=0; i<count; i++) {

        const text = await suggestionelemnets.nth(i).innerText();

        if(text === "smartphone") {
            await suggestionelemnets.nth(i).click();

            await page.waitForTimeout(3000);
            break;
        }

    }

})