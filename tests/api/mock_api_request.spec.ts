import {test, expect, Locator} from "@playwright/test";


test("Mock API Request", async({page})=> {
    

    await page.route('*/**/api/v1/fruits', async route => {

        const json = [

            {name : 'Playwright API Mocking 1', id : 9},
            {name : 'Playwright API Mocking 2', id : 8},
            {name : 'Playwright API Mocking 3', id : 7},


        ];

        await route.fulfill({json});

    })

    await page.goto("https://demo.playwright.dev/api-mocking/");

    //validate text

    await expect(page.getByText('Playwright API Mocking 1')).toBeVisible();
    
    await expect(page.getByText('Playwright API Mocking 2')).toBeVisible();

    await expect(page.getByText('Playwright API Mocking 3')).toBeVisible();


});