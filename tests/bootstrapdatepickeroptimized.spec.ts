import { expect, test, Locator, Page } from "@playwright/test";


// reusable function

async function selectDate(
    page: Page,
    month: string,
    year: string,
    date: string,
    calendarIndex: number
) {

    // navigate to required month/year

    while (true) {

        let currdate: string = await page.locator('[class="e7addce19e af236b7586"]').nth(calendarIndex).innerText();

        console.log("currdate", currdate);

        let currMonth: string = currdate.split(" ")[0];

        let currYear: string = currdate.split(" ")[1];

        console.log("currMonth", currMonth);

        console.log("currYear", currYear);

        if (currMonth == month && currYear == year) {

            console.log("select the date");

            break;
        }

        else {

            console.log("click next button");

            const nextButton: Locator = page.locator('[aria-label="Next month"]');

            await nextButton.click();
        }
    }


    // select date

    let dates: Locator[] = await page.locator('.b8fcb0c66a tbody').nth(calendarIndex).locator('td>span>span').all();

    let dateselected: boolean = false;

    for (let currentdate of dates) {

        const dateText = await currentdate.innerText();

        console.log("dateText is :", dateText);

        if (dateText == date) {

            await currentdate.click();

            dateselected = true;

            break;
        }
    }

    expect(dateselected).toBeTruthy();
}



test("bootstrap datepicker optimized", async ({ page }) => {

    let checkinMonth: string = "March";
    let checkinYear: string = "2027";
    let checkinDate: string = "9";

    let checkoutMonth: string = "June";
    let checkoutYear: string = "2027";
    let checkoutDate: string = "9";


    await page.goto("https://www.booking.com/");

    const dismisspopup: Locator = page.locator('[aria-label="Dismiss sign-in info."]');

    await expect(dismisspopup).toBeVisible();

    await dismisspopup.click();

    const datepicker: Locator = page.locator('[data-testid="searchbox-dates-container"]');

    await expect(datepicker).toBeVisible();

    await datepicker.click();


    // select checkin date

    await selectDate(
        page,
        checkinMonth,
        checkinYear,
        checkinDate,
        0
    );


    await page.waitForTimeout(3000);


    // select checkout date

    await selectDate(
        page,
        checkoutMonth,
        checkoutYear,
        checkoutDate,
        1
    );


    await page.waitForTimeout(3000);

});