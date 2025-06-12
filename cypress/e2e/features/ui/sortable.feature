Feature: Sortable List

  @sortable
  Scenario: Reorder items in the sortable list
    Given I open the demoqa home page
    And I go to the Sortable page through Interactions menu
    When I rearrange the list items in ascending order
    Then the list should reflect the new order
