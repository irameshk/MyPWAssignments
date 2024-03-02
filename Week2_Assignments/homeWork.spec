 /* Create a new browser instance
  Create a new browser context
  Create a new page
  Load the url 
  https://login.salesforce.com/
  Print the url
  Enter the username vidyar@testleaf.com
  Enter the password Testleaf@1234
  Click Login button
  Verify the title of the page (using page.title() method) */

import { test, chromium } from "@playwright/test";
test("Launching the browser",async () => {
    
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
})
