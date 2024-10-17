const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am on the login page of Paper.id', async () => {
    await browser.url('https://www.paper.id/webappv1/#/login');
});

When('I enter a valid email and password', async () => {
    const emailField = await $('[data-cy="identifier"]');  // Updated selector
    const nextButton = await $('[data-cy="submit"]');  // Updated selector for "Selanjutnya"
    await emailField.setValue('kandidat@paper.id');
    await nextButton.click();

    const passwordField = await $('[data-cy="password"]');  // Updated selector for password field
    const loginButton = await $('[data-cy="submit"]');  // Updated selector for "Masuk"
    await passwordField.setValue('paper.id');
    await loginButton.click();
});

When('I enter an invalid email or password', async () => {
    const emailField = await $('[data-cy="identifier"]');  // Updated selector
    const nextButton = await $('[data-cy="submit"]');  // Updated selector for "Selanjutnya"
    await emailField.setValue('invalid@paper.id');
    await nextButton.click();

    const passwordField = await $('[data-cy="password"]');  // Updated selector for password field
    const loginButton = await $('[data-cy="submit"]');  // Updated selector for "Masuk"
    await passwordField.setValue('invalidPassword');
    await loginButton.click();
});

Then('I should see the Paper.id dashboard', async () => {
    await browser.pause(3000);
    const dashboardElement = await $('h1=Dashboard');  // Adjust the selector if needed
    assert(await dashboardElement.isDisplayed(), 'Dashboard was not displayed after login');
});

Then('I should see an error message', async () => {
    await browser.pause(3000);
    const errorMessage = await $('p=Email atau kata sandi Anda salah');  // Adjust based on the actual error message on the page
    assert(await errorMessage.isDisplayed(), 'Error message was not displayed for invalid login');
});
