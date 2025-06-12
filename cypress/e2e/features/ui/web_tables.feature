Feature: Manage records in Web Tables

  @webtables @crud
  Scenario: Successfully create, edit, and delete a single record in Web Tables
    Given I open the demoqa home page
    And I hide the ad if it exists
    And I go to the Web Tables page through Elements menu

    When I click the "Add" button to create a new record  
    And I fill in the registration form with:
      | firstName | lastName | email           | age | salary | department |
      | John      | Doe      | teste@gmail.com | 33  | 7850   | Office     |
    And I submit the form  

    Then I should see "teste@gmail.com" in the table  

    When I click the edit icon for "teste@gmail.com"  
    And I update the first name to "John_edited"  
    And I submit the form  

    Then I should see "John_edited" in the table  

    When I click the delete icon for "teste@gmail.com"  
    Then I should not see "teste@gmail.com" in the table  

  @webtables @mass
  Scenario: Dynamically create and delete multiple records in Web Tables
    Given I open the demoqa home page
    And I hide the ad if it exists
    And I go to the Web Tables page through Elements menu

    When I create 12 new random records  
    Then I should see 12 new records in the table  

    When I delete all records containing "@test.com"  
    Then I should not see any "@test.com" entries in the table
