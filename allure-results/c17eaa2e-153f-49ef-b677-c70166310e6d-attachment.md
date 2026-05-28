# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pageObjectModel.spec.ts >> Page Object Model Implementation
- Location: tests\pageObjectModel.spec.ts:10:5

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//a["https://www.linkedin.com/"]//h2')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//a["https://www.linkedin.com/"]//h2')

```

# Test source

```ts
  1  | import { expect, test, Locator, Page } from "@playwright/test";
  2  | 
  3  | 
  4  | export class ProfilePage {
  5  | 
  6  |     readonly page : Page;
  7  |     readonly profileName : Locator;
  8  | 
  9  | 
  10 |     constructor(page : Page) {
  11 | 
  12 |         this.page = page;
  13 |         this.profileName = page.locator('//a["https://www.linkedin.com/"]//h2');
  14 |     }
  15 | 
  16 | 
  17 |     async validateProfileName(name : string) {
  18 | 
> 19 |         await expect(this.profileName).toBeVisible();
     |                                        ^ Error: expect(locator).toBeVisible() failed
  20 | 
  21 |         let profilename = this.profileName.first().innerText();
  22 | 
  23 |         await expect(profilename).toEqual('Jaswanth Alapati');
  24 |         
  25 |     }
  26 | 
  27 | }
```