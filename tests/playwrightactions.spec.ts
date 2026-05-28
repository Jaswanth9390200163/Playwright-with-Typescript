import {expect,test,Locator} from "@playwright/test"

test("Playwright Actions", async({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //input box actions

    const nameinputBox :Locator = page.locator("#name");

    await expect(nameinputBox).toBeVisible();

    await expect(nameinputBox).toBeEnabled();

    const maxLength:any = await nameinputBox.getAttribute("maxLength");             //returns maxLength attribute value for the respective element

    expect(maxLength).toBe('15');

    await nameinputBox.fill("Jaswanth");

    await page.waitForTimeout(5000);

    const inputValue:String = await nameinputBox.inputValue();     //returns the value which is filled in the input box

    expect(inputValue).toBe('Jaswanth');


    //radio button actions

    const radioButton:Locator = page.locator("#male");

    await expect(radioButton).toBeVisible();

    await expect(radioButton).toBeEnabled();

    expect(await radioButton.isChecked()).toBe(false);

    await radioButton.click();

    expect(await radioButton.isChecked()).toBe(true);

    await expect(radioButton).toBeChecked();


    //checkbox actions

    // const checkbox:Locator = page.getByLabel('Sunday');

    // await checkbox.check();

    // await page.waitForTimeout(5000);

    // await expect(checkbox).toBeChecked();

    //select all other checkboxes and assert each is checked 

    const days: string[] = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const checkboxes:Locator[] = days.map(index => page.getByLabel(index));

    expect(checkboxes).toHaveLength(7);

    expect(checkboxes.length).toBe(7);

    await page.waitForTimeout(2000);

    for(const checkbox of checkboxes) {
        await checkbox.check();

        await expect(checkbox).toBeChecked();
    }


    //uncheck last 3 and assert the same

      for(const checkbox of checkboxes.slice(-3)) {
        await checkbox.uncheck();

        await page.waitForTimeout(2000);
        
        await expect(checkbox).not.toBeChecked();
    }


    //Toggle checkboxes and assert the same

    for(const checkbox of checkboxes) {
        
        if(await checkbox.isChecked()) {
            checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }
        else {
            checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }

    //Randomly select checkboxes (based on index like 1,3,6) and assert
    
    const indexes:number[] =[1,3,6];

    for (const i of indexes) {
        await checkboxes[i].check();
        await page.waitForTimeout(2000);
        await expect(checkboxes[i]).toBeChecked();
    }


    //select checkbox based on label as input

    const weekday:String = 'Sunday';

    for(const day of days) {
        if(day==weekday) {

            const label:Locator =  page.getByLabel(day);

            await label.check();

            await page.waitForTimeout(2000);
            
            await expect(label).toBeChecked();
        }
    }


})