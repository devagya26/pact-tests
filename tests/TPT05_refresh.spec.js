const { test, chromium } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT05: Refresh", async ({}) => {
    test.setTimeout(60000)
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.locator(selector.pg5).click();
    const pagePromise = context.waitForEvent('page');
    await iframe.locator(selector.pt1).click();
    const newPage = await pagePromise;

    await newPage.locator(selector.status).click();
    await newPage.getByTestId(selector.menuItem).getByText(selector.inProgress).click();

    await iframe.locator(selector.refresh).click();
    await page.pause();
})
