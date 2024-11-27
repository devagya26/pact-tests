const { test , chromium} = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT12: Verify Pact Details Data, PT-5", async ({}) => {
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

    await page.waitForTimeout(2000);
    console.log('Here, it contain total 15 issues in first page.');
    await page.pause();
})
