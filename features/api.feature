@api
Feature: Login API Functionality

  Scenario: Validating successful login response
    Given I send a POST request to login API with valid credentials
    Then I should receive a status code of 200
    And I should receive a token in the response body
