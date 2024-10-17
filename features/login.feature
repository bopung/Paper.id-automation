@login
Feature: Paper.id Login

  Scenario: Failed login due to unregistered credentials
    Given I am on the login page of Paper.id
    When I enter an invalid email or password
    Then I should see an error message

  Scenario: Successful login to Paper.id
    Given I am on the login page of Paper.id
    When I enter a valid email and password
    Then I should see the Paper.id dashboard
