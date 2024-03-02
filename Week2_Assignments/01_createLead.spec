/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created */

import { test, chromium } from "@playwright/test";
test("Create salesforce leads",async () => {
    
    const browserInstance = await chromium.launch({headless:false, channel:"chromium"}); 
    const browserContext = await browserInstance.newContext(); 
    const page = await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");
    console.log(page.url());

    await page.fill("input#username","rameshk@testleaf.com");
    await page.fill("input#password","test@123");
    await page.click("input#Login");
    await page.waitForTimeout(15000);
    console.log(await page.title());
    
    await page.click("div.slds-icon-waffle");
    await page.click("//button[text()='View All']");
    
    await page.click("//p[text()='Sales']");
    await page.click("//a[@title='Leads']/span[text()='Leads']");
    await page.click("//button[text()='New']");
    await page.click("//button[@name='salutation']");
    await page.getByTitle("Mr.").click();
    await page.getByPlaceholder("First Name").fill("Ramesh");
    await page.getByPlaceholder("Last Name").fill("KB");
    await page.fill("//input[@name='Company']","Testleaf");
    await page.click("//button[@name='SaveEdit']");
    await page.getByText(`//lightning-formatted-name[contains(text(),"TestLead")]`).isVisible();    
})
