$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("fieldvalidation.feature");
formatter.feature({
  "line": 1,
  "name": "Field validation",
  "description": "",
  "id": "field-validation",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user invokes chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user navigates to website from chrome browser",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is able to see home page having OpenWeather logo.",
  "keyword": "Then "
});
formatter.match({
  "location": "Fieldvalidation.user_invokes_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Fieldvalidation.user_navigates_to_website_from_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Fieldvalidation.user_is_able_to_see_home_page_having_OpenWeather_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "Registration page",
  "description": "",
  "id": "field-validation;registration-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User is on home landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user is navigated to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "Fieldvalidation.user_is_on_home_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Fieldvalidation.user_clicks_on_Sign_up_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Fieldvalidation.user_is_navigated_to_registration_page()"
});
formatter.result({
  "status": "skipped"
});
});