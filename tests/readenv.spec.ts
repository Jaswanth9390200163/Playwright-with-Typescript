import { expect, test, Locator } from "@playwright/test";
import process from "node:process";


/**
npm install dotenv --save  -- dependency plugin to beinstalled to read from env file and  add below changes in config.ts

import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });
 */


test("read env", async({page}) => {


    await page.goto(`${process.env.GOOGLE_URL}`);

    const googleLogo : Locator = page.locator('[aria-label = "Google"]');

    await expect(googleLogo).toBeVisible();

    await page.waitForTimeout(3000);
})