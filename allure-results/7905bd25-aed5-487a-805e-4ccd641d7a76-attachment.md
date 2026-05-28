# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\mock_api_response.spec.ts >> Mock API Response
- Location: tests\api\mock_api_response.spec.ts:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Playwright')
Expected: visible
Error: strict mode violation: getByText('Playwright') resolved to 2 elements:
    1) <a href="https://playwright.dev/docs/mock" class="text-purple-300 hover:text-purple-300 hover:underline">Learn more on API mocking in Playwright</a> aka getByRole('link', { name: 'Learn more on API mocking in' })
    2) <li>Playwright</li> aka getByText('Playwright', { exact: true })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Playwright')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Render a List of Fruits" [level=1] [ref=e3]
  - paragraph [ref=e4]: This demo app renders a list of fruits. The tests for this app mock the api call to return only mocked data, intercept the request and add a new fruit to the response and use HAR files to mock the API
  - paragraph [ref=e5]:
    - link "Check out the tests for this repo" [ref=e6] [cursor=pointer]:
      - /url: https://github.com/microsoft/playwright-examples/blob/main/tests/api-mocking/api-mocking.spec.ts
  - paragraph [ref=e7]:
    - link "Learn more on API mocking in Playwright" [ref=e8] [cursor=pointer]:
      - /url: https://playwright.dev/docs/mock
  - list [ref=e12]:
    - listitem [ref=e13]: Strawberry
    - listitem [ref=e14]: Banana
    - listitem [ref=e15]: Tomato
    - listitem [ref=e16]: Pear
    - listitem [ref=e17]: Blackberry
    - listitem [ref=e18]: Kiwi
    - listitem [ref=e19]: Pineapple
    - listitem [ref=e20]: Passionfruit
    - listitem [ref=e21]: Orange
    - listitem [ref=e22]: Raspberry
    - listitem [ref=e23]: Watermelon
    - listitem [ref=e24]: Lemon
    - listitem [ref=e25]: Mango
    - listitem [ref=e26]: Blueberry
    - listitem [ref=e27]: Apple
    - listitem [ref=e28]: Melon
    - listitem [ref=e29]: Lime
    - listitem [ref=e30]: Typescript
    - listitem [ref=e31]: Playwright
    - listitem [ref=e32]: Mocking
```

# Test source

```ts
  1  | import {test, expect, Locator} from "@playwright/test";
  2  | 
  3  | 
  4  | test("Mock API Response", async({page})=> {
  5  |     
  6  | 
  7  |     await page.route('*/**/api/v1/fruits', async route => {
  8  | 
  9  |         const response = await route.fetch();
  10 | 
  11 |         const json = await response.json();
  12 | 
  13 |         json.push({name : 'Typescript', id : 9});
  14 |         json.push({name : 'Playwright', id : 8});
  15 |         json.push({name : 'Mocking', id : 7});
  16 | 
  17 | 
  18 |         await route.fulfill({response, json});
  19 | 
  20 |     })
  21 | 
  22 |     await page.goto("https://demo.playwright.dev/api-mocking/");
  23 | 
  24 |     //validate text
  25 | 
  26 |     await expect(page.getByText('Typescript')).toBeVisible();
  27 |     
> 28 |     await expect(page.getByText('Playwright')).toBeVisible();
     |                                                ^ Error: expect(locator).toBeVisible() failed
  29 | 
  30 |     await expect(page.getByText('Mocking')).toBeVisible();
  31 | 
  32 | 
  33 | });
```