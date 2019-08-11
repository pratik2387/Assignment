package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Fieldvalidation {
	
	public static WebDriver driver;
	
	@Given("^user invokes chrome browser$")
	public void user_invokes_chrome_browser() throws Throwable {
	    System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\Drivers\\chromedrivermain\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@When("^user navigates to website from chrome browser$")
	public void user_navigates_to_website_from_chrome_browser() throws Throwable {
	    driver.get("https://openweathermap.org/");
	
	}

	@Then("^user is able to see home page having OpenWeather logo\\.$")
	public void user_is_able_to_see_home_page_having_OpenWeather_logo() throws Throwable {
	   System.out.println(driver.getTitle()); 
	    
	}

	@Given("^User is on home landing page$")
	public void user_is_on_home_landing_page() throws Throwable {
	    System.out.println("Enter the city");
	   
	}
	@When("^user enters valid  City  and click on search$")
	public void user_enters_valid_City_and_click_on_search() throws Throwable {
	  Thread.sleep(5000);
        driver.findElement(By.cssSelector("input#q")).sendKeys("London");
        driver.findElement(By.xpath("//*[@id=\'searchform\']/button")).click();
    }

	@Then("^Weather is displayed$")
	public void weather_is_displayed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
        System.out.println(driver.getTitle());
	}


	
}
