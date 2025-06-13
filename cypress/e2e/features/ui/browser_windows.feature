Feature: Browser Windows

  @browserwindows
  Scenario: Open a new window and validate the message
    Given I open the demoqa home page
    And I go to the Browser Windows page through Alerts, Frame & Windows menu
    When I click the New Window button and visit the sample page
    Then I should see the sample page message