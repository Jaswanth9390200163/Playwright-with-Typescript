# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\post_request_static.spec.ts >> post request static
- Location: tests\api\post_request_static.spec.ts:13:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 200
```

# Test source

```ts
  1  | import {expect, test, Locator} from "@playwright/test";
  2  | 
  3  | import postAPIRequest from "../../test-data/api_requests/POST_API_Request.json";
  4  | 
  5  | import process from "node:process";
  6  | import { ok } from "node:assert";
  7  | 
  8  | 
  9  | test.use ({
  10 |     baseURL : process.env.BASE_API_URL,
  11 | })
  12 | 
  13 | test("post request static", async({request})=> {
  14 | 
  15 |     const postAPIResponse = await request.post(`/booking`, {data : postAPIRequest});
  16 | 
  17 |     const jsonPostAPIResponse = await postAPIResponse.json();
  18 | 
  19 |     console.log("POST API Response: ", JSON.stringify(jsonPostAPIResponse, null, 2));
  20 | 
> 21 |     expect(postAPIResponse.status()).toBe(201);
     |                                      ^ Error: expect(received).toBe(expected) // Object.is equality
  22 |     expect(postAPIResponse.statusText()).toBe('OK');
  23 |     expect(postAPIResponse.headers()['content-type']).toContain('application/json');
  24 | 
  25 | })
```