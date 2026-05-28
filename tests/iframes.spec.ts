import {expect, test, Locator} from "@playwright/test"



test("iframes handling", async({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    await page.waitForTimeout(3000);

    //total number of frames present in the page

    const frames = page.frames();

    console.log("number of frames: ", frames.length);

    //interact with the elements present inside frame

    // 1. using page.frame()

    const frame = page.frame({url : "https://ui.vision/demo/webtest/frames/frame_1.html"});     //it also accepts name 

    if(frame) {

        //await frame.locator('[name="mytext1"]').fill("Jaswanth");

        await frame.fill('[name="mytext1"]', "Jaswanth");
    }
    else {
        console.log("frame is not available");
    }

    //2.using page.frameLocator()

    const inputbox = page.frameLocator('[src="frame_1.html]').locator('[name="mytext1"]');
    await inputbox.fill('Jaswanth');

    page.waitForTimeout(3000);

    //get the child frames
    const childframes : any = frame?.childFrames();
    console.log('no of child frames are:', childframes?.length);

    const radio = childframes[0].getByLabel('I am Human');
    await radio.check();
    expect(radio).toBeChecked();

    })