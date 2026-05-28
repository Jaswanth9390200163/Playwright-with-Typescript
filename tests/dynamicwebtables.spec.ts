import {expect,test,Locator} from "@playwright/test"

test("dynamic web tables", async ({page}) => {

    await page.goto("https://practice.expandtesting.com/dynamic-table");

    const tableLocator : Locator = page.locator("table.table>tbody");

    await tableLocator.isVisible();


    //count no of rows 

    const rows:Locator[] =await tableLocator.locator('tr').all();

    console.log("rows count is : ", rows.length)

    expect(rows).toHaveLength(4);

    //get value of CPU load for chrome process

    //read each row to check chrome presence

    let cpuload = '';

    for(const row of rows) {

        const processname:string = await row.locator('td').nth(0).innerText();

        console.log("processname",processname);

        if(processname === 'Chrome') {

            //cpuload = await row.locator('td:has-text("%")').innerText();        //css locator syntax

            cpuload = await row.locator('td', {hasText: "%"}).innerText();    //playwright locator syntax

            console.log("cpuload", cpuload);
            break;
        }
    }

    const expectedValue:string = await page.locator("#chrome-cpu").innerText();

    console.log("expectedValue", expectedValue);

    // if(expectedValue.includes(cpuload)) {
    //     console.log("expected and actual are matching");
    // }
    // else {
    //     console.log("expected and actual are not matching");
    // }

    expect(expectedValue).toContain(cpuload);


})



test.only("dynamic webtable practice", async ({page})=> {           //test.only make sures only this test gets executed when we execute this entire file

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table:Locator = page.locator("#taskTable>tbody");

    await expect(table).toBeVisible();


    //fetch no of rows
    const rows:Locator[] = await table.locator('tr').all();

    console.log("no of rows are:", rows.length);

    expect(rows).toHaveLength(4);


    //fetch values from table and assert

    let cpuloadChrome = '';
    let networkspeedChrome = '';
    let memorysizefirefox='';
    let diskspacefirefox='';

    for(const row of rows) {

        const cpuprocess:string = await row.locator('td').nth(0).innerText();

        if(cpuprocess === 'Chrome') {

            cpuloadChrome = await row.locator('td', {hasText:"%"}).innerText();
            console.log("cpuloadChrome",cpuloadChrome);

            networkspeedChrome = await row.locator('td', {hasText:"Mbps"}).innerText();
            console.log("networkspeedChrome",networkspeedChrome);
        }
        else if(cpuprocess === 'Firefox') {

            //memorysizefirefox = await row.locator('td', {hasText: "MB", hasNotText: "MB/s",}).innerText();

            memorysizefirefox = await row.locator('td', {hasText: /MB$/}).innerText();

            console.log("memorysizefirefox",memorysizefirefox);
            
            diskspacefirefox = await row.locator('td', {hasText: "MB/s"}).innerText();
            console.log("diskspacefirefox",diskspacefirefox);

        }


    }

    //now make assertions

    const expectedcpuloadChrome : string = await page.locator('strong.chrome-cpu').innerText();

    expect(expectedcpuloadChrome).toContain(cpuloadChrome);

    const expectednetworkspeedChrome : string = await page.locator('strong.chrome-network').innerText();
    expect(expectednetworkspeedChrome).toContain(networkspeedChrome);


    const expectedmemorysizefirefox : string = await page.locator('strong.firefox-memory').innerText();
    expect(expectedmemorysizefirefox).toContain(memorysizefirefox);


    const expecteddiskspacefirefox : string = await page.locator('strong.firefox-disk').innerText();
    expect(expecteddiskspacefirefox).toContain(diskspacefirefox);

})