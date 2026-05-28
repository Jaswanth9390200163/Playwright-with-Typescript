import {expect, test} from "@playwright/test";


import {formatAPIRequest} from "../../src/utils/API_Helper.ts";

import process from "node:process";

import path from "path";

import fs from 'fs';


test.use ({
    baseURL : process.env.BASE_API_URL,
})

test("post request static", async({request})=> {

    const filepath = path.join(__dirname , '../../test-data/api_requests/dynamic_post_api_request.json');

    const jsonTemplate = fs.readFileSync(filepath, 'utf-8');

    const values = ['Dynamic', 'Jaswanth', 999];

    const dynamic_post_api_request = await formatAPIRequest(jsonTemplate, values);

    const postAPIResponse = await request.post(`/booking`, {data : dynamic_post_api_request});

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

    expect(jsonPostAPIResponse.booking.firstname).toBe('Dynamic');

    expect(jsonPostAPIResponse.booking.lastname).toBe('Jaswanth');


    //validate data  for nested json fields

    expect(jsonPostAPIResponse.booking.bookingdates.checkin).toBe('2026-05-26');

    expect(jsonPostAPIResponse.booking.bookingdates.checkout).toBe('2026-05-27');


})



//npm install faker-js/faker  --> faker library installation

// const firstname = faker.person.firstname();
// const lastname = faker.person.lastname();
// const totalprice = faker.number.int({min : 100 , max : 1000});

//const values = [firstname, lastname, totalprice];
