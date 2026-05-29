import {test, expect , Locator} from "@playwright/test";


test("Monitor API Health", async({request})=> {

    test.setTimeout(0);     //no timeout
    while(true) {
    const start = Date.now();

    const response = await request.get('https://restful-booker.herokuapp.com/ping');

    const end = Date.now();

    const duration = end-start;

    if(duration> 2000){

        throw new Error(`Duration is greater than 2 seconds ${duration}`)

        
    }

    else {

        console.log(`Total duration of response is : ${duration}`);
    }

    const status =  response.status();
    expect(status).toBe(201);
}
})