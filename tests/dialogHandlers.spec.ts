import {expect, test, Locator} from "@playwright/test"


//in playwright , by default dialogs  are auto dismissed , we don't need to explicitly  handle them
//However you can register the dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss()

test("dialog Handlers - Simple dialog", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //page.on('dialog', (dialog) => dialog.accept());

    //Enable dialog/alert handling

    page.on('dialog', (dialog) =>  {

        console.log("dialog type is: ", dialog.type());             //returns type of dialog

        expect(dialog.type()).toContain('alert');

        console.log("text msg in dialogue is: ", dialog.message());  //returns message from dialog

        expect(dialog.message()).toContain('I am an alert box!');

        dialog.accept()
    });


    await page.locator("//button[text()='Simple Alert']").click();
})


test('confirmation dialog', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");


    //register a dialog handler
    page.on('dialog', (dialog) => {

        console.log("dialog type is :", dialog.type());

        expect(dialog.type()).toContain('confirm');

        console.log("message in dialog box is : ", dialog.message());

        expect(dialog.message()).toContain('Press a button!');

        dialog.accept();
        //dialog.dismiss();
    })
    

    await page.locator("//button[text()='Confirmation Alert']").click();

    const validatemsg:string | null = await page.locator('#demo').textContent();
    
    console.log(validatemsg);

    expect(validatemsg).toContain('You pressed OK!');

    //expect(validatemsg).toContain('You pressed Cancel!');

})


test.only('prompt alert', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', (dialog) => {

        console.log("dialog type is: ", dialog.type());

        expect(dialog.type()).toContain('prompt');

        console.log("dialog message", dialog.message());

        expect(dialog.message()).toContain('Please enter your name:');

        expect(dialog.defaultValue()).toContain('Harry Potter');

        dialog.accept('Jaswanth');

        //dialog.dismiss();

    })

    await page.locator("//button[text()='Prompt Alert']").click();


    const validatemsg:string | null = await page.locator('#demo').textContent();
    
    console.log("msg is: ",validatemsg);

    expect(validatemsg).toContain('Hello Jaswanth! How are you today?');

    //expect(validatemsg).toContain('User cancelled the prompt.');

})