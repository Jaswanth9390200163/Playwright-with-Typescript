import {expect,test,Locator,Page} from "@playwright/test"


async function selctdate(targetyear:string, targetmonth:string, targetdate:string, page:Page) {

    while(true) {

        const curryear : string = await page.locator(".ui-datepicker-year option[selected='selected']").innerText();

        const currmonth : string = await page.locator(".ui-datepicker-month option[selected='selected']").innerText();

        console.log("curryear is", curryear);
        console.log("currmonth is", currmonth);

        if(currmonth == targetmonth && curryear == targetyear) {
            console.log("target and expected became equal");
            break;
        }

        else {
            //selct required month and year from dropdown 

            const dropdownMonth : Locator  =  page.locator(".ui-datepicker-month");

            await dropdownMonth.selectOption(targetmonth);

            await page.waitForTimeout(2000);

            const dropdownYear : Locator  =  page.locator(".ui-datepicker-year");

            await dropdownYear.selectOption(targetyear);

            await page.waitForTimeout(2000);

        }
    }

    const alldates:Locator[] = await page.locator('.ui-datepicker-calendar>tbody td a').all();

    for(let dates of alldates) {
        const datetext : string = await dates.innerText();

        if(datetext == targetdate) {
            await dates.click();
            break;
        }
    }

}


test("JQuery dropdown date picker", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const datePickerInput:Locator = page.locator("input#txtDate");

    await expect(datePickerInput).toBeVisible();

    //using fill method

    //await datePickerInput.fill("03/09/2002");


    //using datepicker approach

    await datePickerInput.click();


    //past target date
    const year = '2023';
    const month = 'Mar';
    const date = '9';

    await selctdate(year,month,date,page);

    const expecteddate = '09/03/2023';

    await expect(datePickerInput).toHaveValue(expecteddate);


    //Future target date
    // const year = '2027';
    // const month = 'October';
    // const date = '4';

    // await selctdate(year,month,date,page);

    // const expecteddate = '10/04/2027';

    // await expect(datePickerInput).toHaveValue(expecteddate);

    
    await page.waitForTimeout(3000);


})