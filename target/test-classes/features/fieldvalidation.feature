Feature: Field validation

Background: 

Given  user invokes chrome browser
When user navigates to website from chrome browser
Then  user is able to see home page having OpenWeather logo.



Scenario: Valid City

Given User is on home landing page
When user enters valid  City  and click on search
Then Weather is displayed



