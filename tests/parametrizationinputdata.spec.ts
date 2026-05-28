import {expect,test} from "@playwright/test";



const logintestData : string[][] = [
    ["laura.taylor1234@gmail.com", "test123", "valid"],
    ["invaliduser@gmail.com", "test321", "invalid"],
    ["validuser@gmail.com", "test222", "invalid"],
    ["", "", "invalid"],
];

test.describe(`test Login with different data`, async() => {


for(const [email,password,validity] of logintestData) {

    test(`parametrized test ${email}`, async({page}) => {

    await page.goto("https://demowebshop.tricentis.com/");

    await page.getByRole("link", {name : 'Log in'}).click();

    await page.locator('#Email').fill(email);

    await page.locator('#Password').fill(password);

    await page.locator('.login-button').click();

    if(validity.toLowerCase() === 'valid') {

        //Assert logout link is visibile

        await expect(page.locator('a[href="/logout"]')).toBeVisible({timeout : 5000});
    }
    else {
        //Assert error message
        await expect(page.locator('.validation-summary-errors')).toBeVisible({timeout : 5000});


        //Assert user is still in login page
        await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");

    }
});

}
});
