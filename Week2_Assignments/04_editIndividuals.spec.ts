/*Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name 
*/

import {chromium, test} from '@playwright/test'
test("Edit Salesforce Individuals", async () => {
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    //Login to https://login.salesforce.com
    await page.goto("https://login.salesforce.com");
    await page.locator("#username").fill("rameshk@testleaf.com");
    await page.locator("#password").fill("test@123");
    await page.locator("#Login").click();
  
    let firstName = "Zin";
    let lastName = "Corp";
    await page.waitForTimeout(5000);
    //Click on toggle menu button from the left corner
  
    await page.getByRole("button", { name: "App Launcher" }).click();
  
    //Click View All and click Individuals from App Launcher
    await page.getByRole("button", { name: "View All Applications" }).click();
  
    await page.waitForTimeout(3000);
    //Click View All and click Individuals from App Launcher
    await page.getByRole("link", { name: "Individuals", exact: true }).click();
  
    //Search the Individuals last name
    await page.getByPlaceholder("Search this list...").fill(lastName);
    await page.keyboard.press("Enter");
    //Click on the Dropdown icon
    await page.click(
      "(//span[@class='slds-icon_container slds-icon-utility-down'])[1]"
    );
    // Select the edit button
    await page.click("//a[@title='Edit']");
    //Select Salutation as 'Mr'
    await page.click("(//a[@class='select'])[1]");
    await page.click("//a[@title='Mr.']");
    //Enter the First Name
    await page.getByPlaceholder("First Name").fill(firstName);
    //Click on Save and Verify the first name
    await page.getByRole("button", { name: "Save", exact: true }).click();
    const expectFirstName = await page
      .locator("(//span[@class='uiOutputText'])[1]")
      .textContent();
    console.log(expectFirstName);
    if (expectFirstName?.includes(firstName)) {
      console.log("Individual updated successfully");
    }
  });