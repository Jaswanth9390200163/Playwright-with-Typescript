import {expect, test, Locator} from "@playwright/test";

import postAPIRequest from "../../test-data/api_requests/POST_API_Request.json";

import process from "node:process";
import { ok } from "node:assert";
import { kStringMaxLength } from "node:buffer";


test.use ({
    baseURL : process.env.BASE_API_URL,
})

test("post request static", async({request})=> {

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


})