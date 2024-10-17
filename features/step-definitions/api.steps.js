const { Given, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let response;

Given('I send a POST request to login API with valid credentials', async () => {
    response = await browser.call(async () => {
        return await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            })
        });
    });
});

Then('I should receive a status code of 200', async () => {
    const statusCode = await response.status;
    assert.strictEqual(statusCode, 200, `Expected status code to be 200, but got ${statusCode}`);
});

Then('I should receive a token in the response body', async () => {
    const responseBody = await response.json();
    assert.ok(responseBody.token, 'Token not found in the response');
});
