import {expect,test,Locator} from "@playwright/test"

test("static web tables", async ({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //capture the entire table element

    const tableLocator : Locator = page.locator("[name='BookTable']>tbody");

    await expect(tableLocator).toBeVisible();


    //count no of rows in a table

    //const rowsLocator : Locator = page.locator("[name='BookTable']>tbody>tr");

    const rowsLocator : Locator = tableLocator.locator(">tr");          //Locator chaining


    const rowscount:number = await rowsLocator.count();

    console.log("no of rows are : ", rowscount);

    expect(rowscount).toBe(7);

    await expect(rowsLocator).toHaveCount(7);


    //count no of headers / columns in a table

    const columnsLocator : Locator = rowsLocator.locator("th");


    const columnscount:number = await columnsLocator.count();

    console.log("no of columns are : ", columnscount);

    expect(columnscount).toBe(4);

    await expect(columnsLocator).toHaveCount(4);

    //print elements/cells of a particular row

    const secondrowcells:Locator = rowsLocator.nth(2).locator("td");    // all cells of 2nd row


    const secondrowElemets:string[] = await secondrowcells.allInnerTexts();

    console.log("2nd row elements are :", secondrowElemets);

    await expect(secondrowcells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ])

    for(const data of secondrowElemets) {
        console.log("second row elements are : ",data);
    }



    //Extract all data elements from table except headers

    const allCells:Locator = rowsLocator.locator("td");

    const alldata : string[] = await allCells.allInnerTexts();

    console.log("all rows data",alldata);


    //we can do the same using all() method also 

    const tablecells:Locator[] = await rowsLocator.all();       //all() returns array of locators

    for (let row of tablecells) {

        const tabledata: string[] = await row.locator("td").allInnerTexts();

        console.log("tabledata", tabledata);

        //console.log("tabledata with tab space : ", tabledata.join('\t'));

    }


    //print  booknames where Author is Mukesh

    console.log("Books written by Mahesh are : ");

    const mukeshbooks:string[] = [];

    for (let row of tablecells) {

        const cells = await row.locator("td").allInnerTexts();

        const author = cells[1];
        const book = cells[0];

        if(author ==='Mukesh') {

            console.log(`${author} \t ${book}`);

            mukeshbooks.push(book);
        }

    }

    expect(mukeshbooks).toHaveLength(2);


    //calculator total proce of all the books

    let totalPrice:number =0;

    for (let row of tablecells.slice(1)) {          //slice(1) skips the 1st (header) row

        const cells = await row.locator("td").allInnerTexts();

        const price = cells[3];

        totalPrice=totalPrice+parseInt(price);

    }

    console.log("sum of prices is : " , totalPrice);

})