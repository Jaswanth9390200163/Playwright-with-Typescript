import { expect, test , Locator } from "@playwright/test"; 

test("screenshot capture", async({page, context}) => {

    await page.goto("https://demowebshop.tricentis.com/");

    //to capture trace programatically at test case level

    context.tracing.start({screenshots : true,snapshots : true});


    await page.getByRole('link', {name : 'Log in'}).click();

    await page.locator('#Email').fill("test@gmail.com");

    await page.locator('#Password').fill("test@123");

    await page.locator('.login-button').click();

    const msg: Locator = page.locator('//li[text()="The credentials provided are incorrect"]');

    await expect(msg).not.toBeVisible();

    context.tracing.stop({path : 'trace.zip'});     
    /**
    this trace generated at test level  will not be attched to report (limitation)
    so to view this we need to run npx playwright  show-trace "path to trace.zip" --> which will directly open trace
    */


    /**
    we can capture trace of the test by making changes in global playwrightconfig.ts file inside the use json object 

    trace.zip will be captured under test-results section .. to view this we need to open in trace viewer (inbuilt tool by playwright) --> to get this  run npx playwright show-report and click on the Traces section image

    to capture at test level instead of global level then npx playwright test trace.spec.ts --trace on  and this trace.zip will be stored in test-results and to view this we can use trace viewer 
    */

    /**
    to retry test in playwright config.ts we can define like retries : 3  under export default defineConfig json 
    at test level if we want to retry then npx playwright test trace.spec.ts --retries=3
    */

})