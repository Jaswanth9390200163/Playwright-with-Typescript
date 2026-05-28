import {expect, test, Locator } from "@playwright/test";


//only , skip , fail , fixme, slow ==> these are the annotations in playwright

test("Playwright Annotations", async({page})=> {

    console.log("Playwright annotations");
})


//only

test.only("only annotation", async({page})=> {

    console.log("Only this particular test will run when we run with this test file name (annotations.spec.ts)");
})


//skip

test.skip("skip annotations", async({page})=> {

    console.log("this test will not be run , it will be skipped");
})


//skip the test based on condition
test("skip annotation with condition based", async({page, browserName})=> {

    test.skip(browserName === 'chromium', 'condition is not matching');

    console.log("this test will not be run , it will be skipped");
})


//fail the test  with fail annotation
test.fail("fail annotation", async({page})=> {

    console.log(" this particular test will fail");
})


//fixme annotation
test.fixme("fixme annotation", async({page})=> {

    console.log(" this particular test will also be skipped as it has  fixme annotation");
})


//slow annotation
test("slow annotation", async({page})=> {

    test.slow();

    console.log(" this particular test will be slow  (it triples the default timeout of 30 seconds and wait for 90 seconds instead of 30 ) as it has  slow annotation");
})