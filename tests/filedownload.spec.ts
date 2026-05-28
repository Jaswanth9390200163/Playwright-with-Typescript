import { expect, test, Locator } from "@playwright/test";
import path from "node:path";


test("file download", async({page})=> {


    await page.goto("https://bakkappan.github.io/Testers-Talk-Practice-Site");

    await page.locator('#chatbotCloseBtn').click();

    await page.getByPlaceholder('Username').fill('TestersTalk');

    await page.getByPlaceholder('Password').fill('TestersTalk');

    await page.getByRole('button', {name : 'Login'}).click();

    await page.waitForTimeout(3000);


    const[download] = await Promise.all([

        page.waitForEvent('download'),
        page.getByRole('link', {name : 'Download Excel' }).click()

    ])

    page.waitForTimeout(3000);


    console.log("downloaded file name is ", +download.suggestedFilename());

    await expect(download.suggestedFilename()).toBe('TestersTalk.xlsx');

    await download.saveAs("./downloads/Jaswanth.xlsx");
    
    await page.waitForTimeout(3000);
})