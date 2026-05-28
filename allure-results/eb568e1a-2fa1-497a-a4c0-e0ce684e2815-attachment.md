# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: filedownload.spec.ts >> file upload
- Location: tests\filedownload.spec.ts:5:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Download Excel' })

```

# Test source

```ts
  1  | import { expect, test, Locator } from "@playwright/test";
  2  | import path from "node:path";
  3  | 
  4  | 
  5  | test("file upload", async({page})=> {
  6  | 
  7  | 
  8  |     await page.goto("https://bakkappan.github.io/Testers-Talk-Practice-Site/");
  9  | 
  10 |     //single file download
  11 | 
  12 |     const[download] = await Promise.all([
  13 | 
  14 |         await page.waitForEvent('download'),
> 15 |         page.getByRole('link', {name : 'Download Excel'}).click()
     |                                                           ^ Error: locator.click: Target page, context or browser has been closed
  16 | 
  17 |     ])
  18 | 
  19 |     console.log("downloadedf file name is ", +download.suggestedFilename());
  20 | 
  21 |     await download.saveAs("./downloads/Jaswanth.xlsx");
  22 |     
  23 |     await page.waitForTimeout(3000);
  24 | })
```