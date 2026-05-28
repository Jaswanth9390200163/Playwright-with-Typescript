import { expect , test , Locator } from "@playwright/test";


test("Keyboard Actions", async({page}) => {

    await page.goto("https://www.google.com/");

    await page.locator("[name='q']").fill("Jaswanth Alapati");

    //we can hover over press method to see all possible / supported actions that can be done from automation
    await page.keyboard.press('Enter');

    await page.waitForTimeout(3000);


    //other sample usages
    await page.keyboard.press('Delete');

    await page.keyboard.press('Tab');

    await page.keyboard.press('Control+A');

})