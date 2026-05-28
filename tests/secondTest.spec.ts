import {test,expect,Locator} from "@playwright/test";


test("playwright Locators", async ({page})=> {


    await page.goto("https://demowebshop.tricentis.com/");

    //getByAltText() --> to local an element usually images which are provided with altText attribute in DOM

    const logo : Locator = page.getByAltText("Tricentis Demo Web Shop");

    await logo.click();


    expect(logo).toBeVisible();


    //getByText() --> to locate element by it'svisible text content, we can match by exact string or substring it contains as well
    //use this for non interactive elements .......for interactive elements like div,span, a etc... use role locators

    /*
    const text: Locator = page.getByText("Welcome to our store");
    await expect(text).toBeVisible;
    */

    //expect(page.getByText("Welcome")).toBeVisible();   //full string match

    expect(page.getByText("Register")).toBeVisible();             //substring match



    //getByRole() ==> locate by role (role is not an attribute)

    //used for buttons , checkboxes, links, lists, tables, headings etc...


    //const roleLocator : Locator = await page.getByRole("link",{name : 'Sign in'}).click();

    await page.getByRole("link", {name:'Register'}).click();


    //const heading:Locator = page.getByRole('heading', {name: 'Register'});

    await expect(page.getByRole("heading",{name: 'Register'})).toBeVisible();



    //getByLabel() ==> to locate a form control by associated label's text
    //ideal for form fields with visible labels

    await page.getByLabel('First name:').fill("Jaswanth");

    await page.getByLabel('Last name:').fill("Alapati");

    await page.getByLabel('Email:').fill("abc@gmail.com");

    await page.locator("//input[@id='Password']").fill("Jaswanth@9999");

    await page.locator("//input[@id='ConfirmPassword']").fill("Jaswanth@9999");

    await page.locator("//input[@name='register-button']").click();


    //getByPlaceholder() ==> to locate element by it's placeholder text

    //best for input fields without label but with some placeholder


    await page.goto("https://demowebshop.tricentis.com/contactus");


    await page.getByPlaceholder("Enter your name").fill("Jaswanth");


})

