import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import ProgressBarPage from '../page_objects/ProgressBarPage'

Given('I go to the Progress Bar page through Widgets menu', () => {
  ProgressBarPage.goToProgressBar()
})

When('I start the progress bar', () => {
  ProgressBarPage.clickStart()
})

When('I stop the progress bar before it reaches 25%', () => {
  ProgressBarPage.stopBefore25Percent()
})

Then('the progress bar value should be less than or equal to 25%', () => {
  ProgressBarPage.assertProgressBelow25()
})

When('I start the progress bar again and let it complete', () => {
  ProgressBarPage.clickStart()
})

Then('the progress bar should reach 100% and then reset', () => {
  ProgressBarPage.waitForCompleteAndReset()
})
