import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import BrowserWindowsPage from '../page_objects/BrowserWindowsPage'

Given('I go to the Browser Windows page through Alerts, Frame & Windows menu', () => {
  BrowserWindowsPage.goToBrowserWindows()
})

When('I click the New Window button and visit the sample page', () => {
  BrowserWindowsPage.clickNewWindowButtonAndVisitSample()
})

Then('I should see the sample page message', () => {
  BrowserWindowsPage.validateSamplePageMessage()
})
