import {expect,test,Locator} from "@playwright/test"

test("paginated web tables", async ({page}) => {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    const table:Locator = page.locator('.demo-html table>tbody');

    await expect(table).toBeVisible();

    //const rows:Locator[] = await table.locator("tr").all();

    // for(let row of rows) {

    //     console.log("row text ",await row.innerText());
    // }

    let hasmorePages=true;

    while(hasmorePages) {
        const rows:Locator[] = await table.locator("tr").all();

        for(let row of rows) {

            console.log("row text ",await row.innerText());
        }

    const nextButton : Locator = page.locator(".dt-paging-button[data-dt-idx='next']");

    const isNextDisabled : string | null = await nextButton.getAttribute('class');

    if(isNextDisabled?.includes('disabled')) {
        hasmorePages = false;
    }
    else {
        await nextButton.click();
    }

    }
    await page.waitForTimeout(3000);


    //navigate to 1st page again
    await page.locator("[data-dt-idx='first']").click();

    //configure no of entries to 25 per page and assert the same

    const dropdown:Locator = page.locator("#dt-length-0");

    await dropdown.selectOption({label:'25'});          //select by Label


    //assert row count = 25

    const rowcount:Locator[] = await table.locator("tr").all();

    console.log("row count is",rowcount.length);

    expect(rowcount.length).toBe(25);

    expect(rowcount).toHaveLength(25);

    //search for specific data in a table

    const searchBox : Locator = page.locator("#dt-search-0");

    await expect(searchBox).toBeVisible();

    //await searchBox.fill("Yuri Berry");

    await searchBox.fill("London");

    const searchedrows:Locator[] = await table.locator("tr").all();

    if(searchedrows.length > 0) {

        //atlease one result is matching for the search

        for(const row of searchedrows) {
            const searchedResult : string = await row.innerText();

            //expect(searchedResult).toContain("Yuri Berry");

            expect(searchedResult).toContain("London");
            break;
        }

    }
    else {
        console.log("no result for searched element");
    }


})