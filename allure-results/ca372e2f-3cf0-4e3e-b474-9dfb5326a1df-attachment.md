# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\put_api_request.spec.ts >> PUT api request
- Location: tests\api\put_api_request.spec.ts:16:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 403
```

# Test source

```ts
  1   | import {expect, test, Locator} from "@playwright/test";
  2   | 
  3   | import postAPIRequest from "../../test-data/api_requests/POST_API_Request.json";
  4   | 
  5   | import tokenAPIRequest from "../../test-data/api_requests/TOKEN_API_REQUEST.json";
  6   | 
  7   | import putAPIRequest from "../../test-data/api_requests/PUT_API_REQUEST.json";
  8   | 
  9   | import process from "node:process";
  10  | 
  11  | 
  12  | test.use ({
  13  |     baseURL : process.env.BASE_API_URL,
  14  | })
  15  | 
  16  | test("PUT api request", async({request})=> {
  17  | 
  18  |     const postAPIResponse = await request.post(`/booking`, {data : postAPIRequest});
  19  | 
  20  |     const jsonPostAPIResponse = await postAPIResponse.json();
  21  | 
  22  |     console.log("POST API Response: ", JSON.stringify(jsonPostAPIResponse, null, 2));
  23  | 
  24  |     expect(postAPIResponse.status()).toBe(200);
  25  |     expect(postAPIResponse.statusText()).toBe('OK');
  26  |     expect(postAPIResponse.headers()['content-type']).toContain('application/json');
  27  | 
  28  | 
  29  |     //validate property/key names
  30  |     expect(jsonPostAPIResponse.booking).toHaveProperty('firstname');        
  31  | 
  32  |     expect(jsonPostAPIResponse.booking).toHaveProperty('lastname');
  33  | 
  34  |     expect(jsonPostAPIResponse.booking.bookingdates).toHaveProperty('checkin');
  35  | 
  36  |     expect(jsonPostAPIResponse.booking.bookingdates).toHaveProperty('checkout');
  37  | 
  38  | 
  39  |     //validate response data
  40  |     expect(jsonPostAPIResponse.bookingid).toBeGreaterThan(0);
  41  | 
  42  |     expect(jsonPostAPIResponse.booking.firstname).toBe('Jaswanth');
  43  | 
  44  |     expect(jsonPostAPIResponse.booking.lastname).toBe('Alapati');
  45  | 
  46  | 
  47  |     //validate data  for nested json fields
  48  | 
  49  |     expect(jsonPostAPIResponse.booking.bookingdates.checkin).toBe('2026-05-26');
  50  | 
  51  |     expect(jsonPostAPIResponse.booking.bookingdates.checkout).toBe('2026-05-27');
  52  | 
  53  | 
  54  |     //GET API Request -- using query parameters
  55  |     const bookingid = jsonPostAPIResponse.bookingid;
  56  |     console.log("Booking Id is :", bookingid);
  57  | 
  58  | 
  59  |     const getAPIResponse = await request.get(`/booking/${bookingid}`);
  60  | 
  61  |     expect(getAPIResponse.status()).toBe(200);
  62  | 
  63  |     expect(getAPIResponse.statusText()).toBe('OK');
  64  | 
  65  |     const getAPIResponseJson = await getAPIResponse.json();
  66  | 
  67  |     console.log('Get api response : ', JSON.stringify(getAPIResponseJson, null, 2));
  68  | 
  69  |     //Generate Token
  70  |     const tokenAPIResponse = await request.post(`/auth`, {data : tokenAPIRequest});
  71  | 
  72  |     expect(tokenAPIResponse.status()).toBe(200);
  73  | 
  74  |     expect(tokenAPIResponse.statusText()).toBe('OK');
  75  | 
  76  |     const tokenAPIResponseJSON = await tokenAPIResponse.json();
  77  | 
  78  |     console.log("token api response in json is : ",JSON.stringify(tokenAPIResponseJSON, null, 2));
  79  | 
  80  |     const token = tokenAPIResponseJSON.token;
  81  |     console.log("token is:", token)
  82  | 
  83  | 
  84  |     //put api request which requires this token
  85  | 
  86  |     const putAPIResponse = await request.put(`/booking/${bookingid}`, {
  87  |         headers : {
  88  |             "Content-Type": "application/json",
  89  |             "Cookie": `token=${token}1`
  90  | 
  91  |         },
  92  | 
  93  |         data : putAPIRequest,
  94  |     });
  95  | 
  96  | 
> 97  |     await expect(putAPIResponse.status()).toBe(200);
      |                                           ^ Error: expect(received).toBe(expected) // Object.is equality
  98  | 
  99  |     await expect(putAPIResponse.statusText()).toBe('OK');
  100 | 
  101 |     const putAPIResponseJSON = await putAPIResponse.json();
  102 | 
  103 |     console.log("put api response is :", JSON.stringify(putAPIResponseJSON, null, 2));
  104 | 
  105 | 
  106 | })
```