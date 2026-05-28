# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: readenv.spec.ts >> read env
- Location: tests\readenv.spec.ts:5:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "undefined", waiting until "load"

```

# Test source

```ts
  1  | import { expect, test, Locator } from "@playwright/test";
  2  | import process from "node:process";
  3  | 
  4  | 
  5  | test("read env", async({page}) => {
  6  | 
  7  | 
> 8  |     await page.goto(`${process.env.GOOGLE_URL}`);
     |                ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  9  | 
  10 |     const googleLogo : Locator = page.locator('[aria-label = "Google"]');
  11 | 
  12 |     await expect(googleLogo).toBeVisible();
  13 | 
  14 |     await page.waitForTimeout(3000);
  15 | })
```