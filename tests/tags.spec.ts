import {expect, test, Locator } from "@playwright/test";

//test1 --> sanity
//test2 --> sanity,regression
//test3 --> regression

test("@sanity tagging concept1", async({page})=> {

    await page.goto("http://www.google.com");

    await expect(page).toHaveTitle('Google');
})

test("tagging concept2", {tag: ['@sanity', '@regression']},async({page})=> {

    await page.goto("http://www.google.com");

    await expect(page).toHaveTitle('Google');

    await page.locator('//a[text()="Store"]').click();

    await expect(page).toHaveTitle('Google Store for Google Made Devices & Accessories');
})

test('tagging concept3',{tag: '@regression'},  async({page})=> {

    await page.goto("http://www.google.com");

    await page.locator('//a[text()="Store"]').click();

    await expect(page.locator('[title="Search the Google store"]')).toBeVisible();

})

/**
to run sanity tagged tests run below command
npx playwright test tags.spec.ts --project chromium --headed --grep "@sanity"

to run regression tagged tests run below command
npx playwright test tags.spec.ts --project chromium --headed --grep "@regression"


to run both sanity and regression tagged tests run below command
npx playwright test tags.spec.ts --project chromium --headed --grep "(?=.*@regression)(?=.*@sanity)"


to run tests with  either sanity or regression tagged tests run below command
npx playwright test tags.spec.ts --project chromium --headed --grep "@sanity|@regression"

run only sanity tagged tests
npx playwright test tags.spec.ts --project chromium --headed --grep "@sanity" --grep-invert "@regression"


we can also add in playwrightconfig.ts  in  "export default defineconfig"  json in below way

grep:/@sanity/,
grepInvert:/@regression/,


grepInvert works like negate

*/
