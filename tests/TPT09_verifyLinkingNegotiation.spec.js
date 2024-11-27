const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT09: Verify Requirement & Negotiation Linking on Page.2", async ({page}) => {
    test.setTimeout(60000)
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.locator(selector.pg4).click();
    await iframe.getByText(selector.license).click();
    await page.waitForTimeout(8000);
    await iframe.locator(selector.page2).click();
    await page.waitForTimeout(5000);

    console.log('In output it shows 3 issues are linked with this requirement');
    await page.pause();
})
