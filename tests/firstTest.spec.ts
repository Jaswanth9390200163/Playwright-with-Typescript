import {test,expect} from "@playwright/test";

//page is a default fixture provided by playwright, all actions , validations etc .. will be done with this


test("firstTest", async ({page})=> {

    //launch url using page fixture
    await page.goto("https://www.google.com");

    //print title of page 
    let title:string = await page.title();

    console.log("Title",title);

    //assertion for the title of page
    await expect(page).toHaveTitle("Google");

})
