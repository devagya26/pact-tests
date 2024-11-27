const { test , chromium} = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT13: Verify Pact Details Data and Read, PT-5", async ({}) => {
    test.setTimeout(50000)
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.locator(selector.pg4).click();
    const pagePromise = context.waitForEvent('page');
    await iframe.locator(selector.pt5).click();
    const newPage = await pagePromise;

    await newPage.getByTestId(selector.apps).click();
    await newPage.getByRole(selector.menu, { name: selector.pact }).click();
    await newPage.waitForTimeout(7000);

    const iframeNew = newPage.frame({
        url: selector.newSrc
    }); 
    await iframeNew.getByRole(selector.button, { name: selector.expand54 }).click();

    await page.waitForTimeout(2000);
    console.log('Here, You can see the dropdowns for PT-54');
    await page.pause();
})
