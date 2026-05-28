import { expect, test, Locator } from "@playwright/test";
import { Buffer } from "node:buffer";
import path from "node:path";


test("file upload", async({page})=> {


    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");

    //single file upload

    await page.locator('[type="file"]').setInputFiles("C:/Users/jalapati/Desktop/firefox.lnk");

    await page.locator('[type="submit"]').click();


    await page.waitForTimeout(3000);


    //multiple file uploads
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    await page.locator('#filesToUpload').setInputFiles([
        path.join("C:/Users/jalapati/Desktop/firefox.lnk"),
        path.join("C:/Users/jalapati/Desktop/Brave.lnk")
    ]
    );

    await page.waitForTimeout(3000);

    //deselect  all the selected files
    await page.locator('#filesToUpload').setInputFiles([

    ]);     //same works for single select


    //buffer text file at runtime   
    await page.locator('#filesToUpload').setInputFiles({
        
        name : "jaswanth.txt",
        mimeType : "text/plain",
        buffer : Buffer.from("this is jaswanth resume")

    });

    await page.waitForTimeout(3000);
})