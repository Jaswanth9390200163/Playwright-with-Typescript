import { expect, test, Locator } from "@playwright/test";


//test.describe.configure({mode : 'serial'})   //to run tests in serial mode 

test.describe.configure({mode: 'parallel'})    //to run tests in parallel mode

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


/*
to run tests in sequential we should only use 1 worker ==> npx playwright test parallelism.spec.ts --project chromium --headed --workers=1

if fully parallel is true in config.ts and worker is 1 then it works like sequential only

when running rests in serial mode irrespective of no of workers defined in config.ts / --worker = n ... it will execute using 1 worker only

if fullyparallel is true in config.ts and mode is not defined in test then workers count will be equal to no of tests in test file

if fully parallel is true in config.ts and in test file mode is defined as serial in test then serial takes prefernece as it is configured in test file

if no of workers defines in config.ts is greater han no of tests in test file , it will not allocate extra workers (those will be idle)

if we want to execute tests in parallel in only chromium browser then we can configure it in config.ts file under projects {} chromium json with fullyparallel : true}

if fully parallel is true and workers : 1  it will execute in serial mode as worker is only 1
 */