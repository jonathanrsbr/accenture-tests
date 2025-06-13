Feature: Practice Form

  @practiceform
  Scenario: Fill and submit the practice form with file upload
    Given I open the demoqa home page
    And I go to the Practice Form page through Forms menu
    When I fill the practice form with fixture values and upload a txt file
    And I submit the practice form
    Then a popup should be displayed and I close it
