const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am on the login page of Paper.id', async () => {
    await browser.url('https://www.paper.id/webappv1/#/login');
});

When('I enter a valid email and password', async () => {
    const emailField = await $('[data-cy="identifier"]'); 
    const nextButton = await $('[data-cy="submit"]');  
    await emailField.setValue('kandidat@paper.id');
    await nextButton.click();

    const passwordField = await $('[data-cy="password"]');  
    //const loginButton = await $('[data-cy="submit"]');
    await passwordField.setValue('paper.id');
    await browser.execute(() => {
        document.querySelector("#mat-mdc-dialog-0 > div > div > login-password-dialog > section > div.login-password-dialog__password > form > button").click();
    });
});

When('I enter an invalid email or password', async () => {
    const emailField = await $('[data-cy="identifier"]');  
    const nextButton = await $('[data-cy="submit"]'); 
    await emailField.setValue('invalid@paper.id');
    await nextButton.click();
});

Then('I should see the Paper.id dashboard', async () => {
    await browser.pause(10000);

    const currentUrl = await browser.getUrl();

    assert.strictEqual(currentUrl, 'https://www.paper.id/webappv1/#/invoicer/dashboardv2', 
        `Expected to be on the dashboard page, but was on ${currentUrl}`);
});

Then('I should see an error message', async () => {
    await browser.pause(3000);
    
    const errorMessage = await $('h3=Email tidak terdaftar. Silahkan registrasi terlebih dahulu.');
    
    assert(await errorMessage.isDisplayed(), 'Error message was not displayed for invalid login');
});

