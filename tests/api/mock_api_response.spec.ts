import {test, expect, Locator} from "@playwright/test";


test("Mock API Response", async({page})=> {
    

    await page.route('*/**/api/v1/fruits', async route => {

        const response = await route.fetch();

        const json = await response.json();

        json.push({name : 'Typescript', id : 9});
        json.push({name : 'Playwright', id : 8});
        json.push({name : 'Mocking', id : 7});


        await route.fulfill({response, json});

    })

    await page.goto("https://demo.playwright.dev/api-mocking/");

    //validate text

    await expect(page.getByText('Typescript')).toBeVisible();
    
    await expect(page.getByText('Playwright', {exact : true})).toBeVisible();

    await expect(page.getByText('Mocking', {exact : true})).toBeVisible();


});