Feature: Progress Bar interaction

  @progressbar
  Scenario: Control the progress bar behavior and validate values
    Given I open the demoqa home page
    And I go to the Progress Bar page through the Widgets menu
    When I click on the Start button
    And I stop the progress bar before it reaches 25%
    Then the progress bar value should be less than or equal to 25%
    When I click on the Start button again
    And I wait for the progress bar to reach 100%
    Then I reset the progress bar
