import { expect, Page, locator , test } from "@playwright/test";


test("authentication popup handling", async({page})=> {

    //await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");    
    //one way id to directly pass username and password directly in url as above
    //limitation of above way is if password contains @ it will fail

    const username = 'admin';
    const password = 'admin';

    const authheader = 'Basic ' + btoa(username+':'+password);

    page.setExtraHTTPHeaders({Authorization : authheader});

    await page.goto("https://the-internet.herokuapp.com/basic_auth");
})