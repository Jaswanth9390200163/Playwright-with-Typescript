import { expect, test, Locator } from "@playwright/test";


test.describe('Group1', async() => {

    test("test 1" , async({page}) => {

    console.log("This is test1");
})


test("test2", async({page}) => {

    console.log("This is test2");
})

})


test.describe('Group2', async() =>{

test("test3", async({page}) => {

    console.log("This is test 3");
})

test("test4", async({page}) => {

    console.log("This is test4");
})

})

/*
in playwright by default tests will be executed in parallel 
because in playwrightconfig.ts it is defined as fullyParallel:true, we can make it false to execute in sequential manner
*/


//npx playwright test grouping.spec.ts --project chromium --headed --grep Group1