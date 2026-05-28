import {expect, test,Locator } from "@playwright/test";


//this is similar to testNG Annotations concept..... playwright Annotations concept is different
test.beforeEach("before each test ", async({page}) => {

    console.log("This executes once before each test")

})


test.afterEach("after each test", async({page})=> {

    console.log("This executes once after  each test")

})

test.beforeAll("before all", async({})=> {

    console.log("This executes once before all tests");
})

test.afterAll("After all", async({})=> {

    console.log("This executes once after all tests");
})


test("test 1" , async({page}) => {

    console.log("This is test1");
})


test("test2", async({page}) => {
    
    console.log("This is test2");
})


test("test3", async({page}) => {

    console.log("This is test 3");
})

test("test4", async({page}) => {

    console.log("This is test4");
})


//if  fullyparallel attribute is true in playwrightconfig.ts then it will start 4 workers and it will run before all and after all 4 times (1 for each worker)

//also if multiple groups are defined in test then hooks should not be part of group they should be outside of groups