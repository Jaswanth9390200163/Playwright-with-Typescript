import {expect, test, Locator} from "@playwright/test";

import postAPIRequest from "../../test-data/api_requests/POST_API_Request.json";

import tokenAPIRequest from "../../test-data/api_requests/TOKEN_API_REQUEST.json";

import putAPIRequest from "../../test-data/api_requests/PUT_API_REQUEST.json";

import process from "node:process";


test.use ({
    baseURL : process.env.BASE_API_URL,
})

test("PUT api request", async({request})=> {

    const postAPIResponse = await request.post(`/booking`, {data : postAPIRequest});

    const jsonPostAPIResponse = await postAPIResponse.json();

    console.log("POST API Response: ", JSON.stringify(jsonPostAPIResponse, null, 2));

    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe('OK');
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');


    //validate property/key names
    expect(jsonPostAPIResponse.booking).toHaveProperty('firstname');        

    expect(jsonPostAPIResponse.booking).toHaveProperty('lastname');

    expect(jsonPostAPIResponse.booking.bookingdates).toHaveProperty('checkin');

    expect(jsonPostAPIResponse.booking.bookingdates).toHaveProperty('checkout');


    //validate response data
    expect(jsonPostAPIResponse.bookingid).toBeGreaterThan(0);

    expect(jsonPostAPIResponse.booking.firstname).toBe('Jaswanth');

    expect(jsonPostAPIResponse.booking.lastname).toBe('Alapati');


    //validate data  for nested json fields

    expect(jsonPostAPIResponse.booking.bookingdates.checkin).toBe('2026-05-26');

    expect(jsonPostAPIResponse.booking.bookingdates.checkout).toBe('2026-05-27');


    //GET API Request -- using query parameters
    const bookingid = jsonPostAPIResponse.bookingid;
    console.log("Booking Id is :", bookingid);


    const getAPIResponse = await request.get(`/booking/${bookingid}`);

    expect(getAPIResponse.status()).toBe(200);

    expect(getAPIResponse.statusText()).toBe('OK');

    const getAPIResponseJson = await getAPIResponse.json();

    console.log('Get api response : ', JSON.stringify(getAPIResponseJson, null, 2));

    //Generate Token
    const tokenAPIResponse = await request.post(`/auth`, {data : tokenAPIRequest});

    expect(tokenAPIResponse.status()).toBe(200);

    expect(tokenAPIResponse.statusText()).toBe('OK');

    const tokenAPIResponseJSON = await tokenAPIResponse.json();

    console.log("token api response in json is : ",JSON.stringify(tokenAPIResponseJSON, null, 2));

    const token = tokenAPIResponseJSON.token;
    console.log("token is:", token)


    //put api request which requires this token

    const putAPIResponse = await request.put(`/booking/${bookingid}`, {
        headers : {
            "Content-Type": "application/json",
            "Cookie": `token=${token}`

        },

        data : putAPIRequest,
    });


    await expect(putAPIResponse.status()).toBe(200);

    await expect(putAPIResponse.statusText()).toBe('OK');

    const putAPIResponseJSON = await putAPIResponse.json();

    console.log("put api response is :", JSON.stringify(putAPIResponseJSON, null, 2));


})