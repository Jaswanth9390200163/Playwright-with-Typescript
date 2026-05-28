import {expect,test,Locator} from "@playwright/test"

test("playwright dropdowns select class", async ({page})=> {


    await page.goto("https://testautomationpractice.blogspot.com/");


    //select class

    //select option from dropdown using visible text

    await page.locator("#country").selectOption('India');

    await page.waitForTimeout(2000);

    //select option from dropdown using value battribute 

    await page.locator("#country").selectOption({value:'uk'});

    await page.waitForTimeout(2000);


    //select option from dropdown using label

    await page.locator("#country").selectOption({label:'Canada'});

    await page.waitForTimeout(2000);


    //select option from dropdown using index
    await page.locator("#country").selectOption({index:3});

    await page.waitForTimeout(3000);


    //check total number of options in dropdown (count)

    const totalOptions:number = await page.locator("#country > option").count();

    console.log("totaloptions", totalOptions);

    expect(totalOptions).toBe(10);

    //or we can do below way as well

    const dropdownOptions:Locator =  page.locator("#country > option");

    await expect(dropdownOptions).toHaveCount(10);


    //check whether option is present in dropdown
    

    const optionsList:String[] = (await dropdownOptions.allTextContents()).map(text => text.trim());  //trim is required here because we are getting untrimmed text in array on debugging with print

    console.log("optionsList",optionsList);

    for(const option of optionsList) {
        console.log(option);
    }

    expect(optionsList).toContain('India');

    expect(optionsList).not.toContain('Mumbai');


    //Multi select dropdown

    //select option from dropdown using visible text

    await page.locator("#colors").selectOption(['Red','Blue']);

    await page.waitForTimeout(2000);

    //select option from dropdown using value attribute

    await page.locator("#colors").selectOption([{value:'white'}, {value: 'red'}]);

    await page.waitForTimeout(2000);


    //select option from dropdown using label

    await page.locator("#colors").selectOption([{label:'Green'}, {label: 'Yellow'}]);

    await page.waitForTimeout(2000);


    //select option from dropdown using index
    await page.locator("#colors").selectOption([{index:4}, {index:6}]);

    await page.waitForTimeout(3000);


    //check total number of options in dropdown (count)

    const totalOptionsmultidropdown:number = await page.locator("#colors > option").count();

    console.log("totalOptionsmultidropdown", totalOptionsmultidropdown);

    expect(totalOptionsmultidropdown).toBe(7);

    //or we can do below way as well

    const dropdownOptionsmulti:Locator =  page.locator("#colors > option");

    await expect(dropdownOptionsmulti).toHaveCount(7);


    //check whether option is present in dropdown
    

    const optionsListmultidropdown:String[] = (await dropdownOptionsmulti.allTextContents()).map(text => text.trim());  //trim is required here because we are getting untrimmed text in array on debugging with print

    console.log("optionsListmultidropdown",optionsListmultidropdown);

    for(const option of optionsListmultidropdown) {
        console.log(option);
    }

    expect(optionsListmultidropdown).toContain('Red');

    expect(optionsListmultidropdown).not.toContain('hhh');


    //verify dropdown options are sorted or not

    //animals locator elements are not in sorted order by default so test will fail

    const dropdownanimals:string[] = (await page.locator("#animals > option").allTextContents()).map(text => text.trim());

    //colors locator elements are not in sorted order by default so test will fail

    //const dropdownanimals:string[] = (await page.locator("#colors > option").allTextContents()).map(text => text.trim());


    for (const animal of dropdownanimals) {
        console.log("animal",animal)
    }

    //const sorteddropdownanimals: string[] = [dropdownanimals].sort();

    //if we use above way to sort the list , it will modify original list also (so test will always pass) as in typescript it is mutable

    //to avoid this we have spread operator in typescript which will avoid modifying the existing list [...listname]

    //In TypeScript, the spread operator (...) is used to expand elements of an iterable (like an array or string) or properties of an object into a new context. 
    // It is primarily used for copying, merging, and updating data structures in an immutable way.

    const sorteddropdownanimals: string[] = [...dropdownanimals].sort();

    console.log("originaldropwdownanimals",[...dropdownanimals]);


    console.log("sorteddropwdownanimals",sorteddropdownanimals);

    expect(dropdownanimals).toEqual(sorteddropdownanimals);


    //verify dropdown contains duplicats

    //colors dropdown contains duplicate elements
    const dropdownelements:string[] = (await page.locator("#colors > option").allTextContents()).map(text => text.trim());

    //animals  dropdown does not contains duplicate elements
    //const dropdownelements:string[] = (await page.locator("#animals > option").allTextContents()).map(text => text.trim());


    const myset = new Set<string>();
    const duplicates:string[] = [];


    for(const element of dropdownelements) {

        if(myset.has(element)) {
            duplicates.push(element);
        }
        else{
            myset.add(element);
        }
    }

    console.log("duplicate elements in dropdown are : ",duplicates);

    if(duplicates.length > 0) {
        console.log("dropdown contains duplicate elements");
    }
    else {
        console.log("no duplicate elements in dropdown elements");
    }





})