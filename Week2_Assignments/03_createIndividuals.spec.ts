/* Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name */

import { test, chromium } from "@playwright/test";
test("Create Salesforce Individuals",async () => {
    
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
    
    await page.click("//p[text()='Individuals']");
    await page.click("//div[text()='New']");
    await page.getByPlaceholder("Last Name").fill("Zincorp");
    await page.click("//button[@title='Save']//span[text()='Save']");
    console.log(await page.getByText(`//a[@title='Zincorp']/span[text()='Zincorp']`).isVisible());


})
