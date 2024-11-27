const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT07: Verify Requirement Linking", async ({page}) => {
    test.setTimeout(50000)
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.locator(selector.pg4).click();
    await iframe.getByText(selector.license).click();

    await page.waitForTimeout(2000);
    console.log('PT-60, whose value is for estimated cost "=5678.546", original cost "547200" and status should be "In Progress"');
    await page.pause();
})
