Feature: User API

  @api
  Scenario: Complete book rental flow
    Given I have a valid user payload
    When I send a POST request to create the user
    And I generate a token for the user
    And I authorize the user
    And I get the list of available books
    And I rent two books from the list
    Then I should see the rented books in the user details
