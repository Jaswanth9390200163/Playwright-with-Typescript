import {expect,test,Locator,Page} from "@playwright/test"


async function selctdate(targetyear:string, targetmonth:string, targetdate:string, page:Page, isFuture:boolean) {

    while(true) {
        const curryear : string = await page.locator(".ui-datepicker-year").innerText();

        const currmonth : string = await page.locator(".ui-datepicker-month").innerText();
        if(currmonth == targetmonth && curryear == targetyear) {
            break;
        }
        
        if(isFuture) {
            //navigate to Future
            await page.locator('[title="Next"]').click();
        }
        else {
            //navigate to Past
            await page.locator('[title="Prev"]').click();
        }

    }

    const alldates:Locator[] = await page.locator('.ui-datepicker-calendar>tbody td').all();

    for(let dates of alldates) {
        const datetext : string = await dates.innerText();

        if(datetext == targetdate) {
            await dates.click();
            break;
        }
    }

}


test("JQuery date picker", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const datePickerInput:Locator = page.locator("input#datepicker");

    await expect(datePickerInput).toBeVisible();

    //using fill method

    //await datePickerInput.fill("03/09/2002");


    //using datepicker approach

    await datePickerInput.click();


    //past target date
    const year = '2002';
    const month = 'March';
    const date = '9';

    await selctdate(year,month,date,page,false);

    const expecteddate = '03/09/2002';

    await expect(datePickerInput).toHaveValue(expecteddate);


    //Future target date
    // const year = '2027';
    // const month = 'October';
    // const date = '4';

    // await selctdate(year,month,date,page,true);

    // const expecteddate = '10/04/2027';

    // await expect(datePickerInput).toHaveValue(expecteddate);

    
    await page.waitForTimeout(3000);


})