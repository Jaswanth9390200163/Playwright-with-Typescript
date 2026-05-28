import {expect,test,Locator,Page} from "@playwright/test"


// async function selectdate(checkindateyear:string) {

// }


test("bootstrap datepicker", async({page})=> {

    let checkinMonth : string = "March";
    let checkinYear : string = "2027";
    let checkinDate : string = "9";

    let checkoutMonth : string = "June";
    let checkoutYear : string = "2027";
    let checkoutDate : string = "9";


    await page.goto("https://www.booking.com/");

    const dismisspopup:Locator = page.locator('[aria-label="Dismiss sign-in info."]');

    await expect(dismisspopup).toBeVisible();

    await dismisspopup.click();

    //const datepucker : Locator = await page.getByTestId("searchbox-dates-container");
    
    const datepicker:Locator = page.locator('[data-testid="searchbox-dates-container"]');

    await expect(datepicker).toBeVisible();

    await datepicker.click();

    //select checkindate 

    //get curr month and year

    while (true) {
        let currdate:string = await page.locator('[class="e7addce19e af236b7586"]').nth(0).innerText();

        console.log("currdate", currdate);

        let currMonth:string = currdate.split(" ")[0];
        console.log("currMonth", currMonth);

        let currYear:string = currdate.split(" ")[1];
        console.log("currYear", currYear);


        if (currMonth == checkinMonth && currYear == checkinYear) {
            console.log("select the date");
            break;
        }

        else {
            console.log("click next button"); 

            const nextButton:Locator = page.locator('[aria-label="Next month"]');

            await nextButton.click();
        }
    }

    //select the checkin date

    let checkindates:Locator[] = await page.locator('.b8fcb0c66a tbody').nth(0).locator('td>span>span').all();

    let checkindateselected:boolean = false;

    for(let checkindate of checkindates) {

        const dateText = await checkindate.innerText();

        console.log(dateText);

        if(dateText == checkinDate) {
            await checkindate.click();
            checkindateselected = true;
            break;
        }
    }

    expect(checkindateselected).toBeTruthy();

    await page.waitForTimeout(3000);



    //select the checkout date
    while (true) {
        let currdate:string = await page.locator('[class="e7addce19e af236b7586"]').nth(1).innerText();

        console.log("currdate", currdate);

        let currMonth:string = currdate.split(" ")[0];
        console.log("currMonth", currMonth);

        let currYear:string = currdate.split(" ")[1];
        console.log("currYear", currYear);


        if (currMonth == checkoutMonth && currYear == checkoutYear) {
            console.log("select the checkout date");
            break;
        }

        else {
            console.log("click next button"); 

            const nextButton:Locator = page.locator('[aria-label="Next month"]');

            await nextButton.click();
        }
    }

    //select the checkout date

    let checkoutdates:Locator[] = await page.locator('.b8fcb0c66a tbody').nth(1).locator('td>span>span').all();

    let checkoutdateselected:boolean = false;

    for(let checkoutdate of checkoutdates) {

        const dateText = await checkoutdate.innerText();

        console.log("dateText is : ",dateText);

        if(dateText == checkoutDate) {
            await checkoutdate.click();
            checkoutdateselected = true;
            break;
        }
    }

    expect(checkoutdateselected).toBeTruthy();


    await page.waitForTimeout(3000);
})