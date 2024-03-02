/*
Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/
import {test ,chromium, Locator, expect } from "@playwright/test";
test("Edit Leaftabs Lead",async()=>{
         const browser=   await chromium.launch({headless:false, channel:"chromium"});
         const browserContext=await browser.newContext();
         const page=await browserContext.newPage();
         await page.goto("http://leaftaps.com/opentaps/control/main");

         //await page.fill("#username","demoSalesManager");
        const credentials= page.locator("[class='inputLogin']");
        await credentials.nth(0).fill("demoSalesManager");
        await credentials.nth(1).fill("crmsfa");
        await page.click(".decorativeSubmit");
        await page.click("//a[contains(text(),'CRM/SFA')]");        
        console.log(await page.title()); 

        await page.click("//a[text()='Leads']");
        await page.click("//a[text()='Create Lead']");
        await page.fill("input#createLeadForm_companyName","TestLeafs");
        await page.fill("input#createLeadForm_firstName","Ramesh2");
        await page.fill("input#createLeadForm_lastName","Test");
        await page.click("//input[@name='submitButton']");

        await page.click("//a[text()='Edit']");
        await page.fill("input#updateLeadForm_companyName","RKForgoes");
        await page.click("//input[@value='Update']");
        console.log(await page.locator("//span[contains(text(),'Company Name')]//following::span[contains(text(),'RKForgo')]").isVisible());    
})
