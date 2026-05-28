import { expect, test, Locator } from "@playwright/test";

test("Mouse Hover", async({page})=> {


    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    //double click
    await page.getByText('Double-Click Me To See Alert').dblclick();

    await page.waitForTimeout(3000);


    //right click  or context click
    page.getByText('right click me').click({button : 'right'});

    await page.waitForTimeout(3000);


    //shift click
    await page.goto("https://the-internet.herokuapp.com/shifting_content");
    page.getByText('Example 1: Menu Element').click({modifiers : ['Shift']});

    await page.waitForTimeout(3000);


    await page.goto("https://www.spicejet.com/");

    page.getByText('Add-ons').first().hover();      //hover over the first DOM element found with text Add-ons

    await page.getByText('SpiceMax').first().click();

    await page.waitForTimeout(3000);

    //Drag and drop 

    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");

    //single line
    await page.locator("#draggable").dragTo(page.locator("#droppable"));

    await page.waitForTimeout(3000);

    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");

    //multiple command
    await page.locator("#draggable").hover();

    await page.mouse.down();

    await page.locator('#droppable').hover();

    await page.mouse.up();

})