const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT08: Verify Requirement & Negotiation Linking", async ({page}) => {
    test.setTimeout(60000)
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.locator(selector.pg4).click();
    await iframe.getByText(selector.license).click();
    await page.waitForTimeout(8000);
    await iframe.getByRole(selector.button, { name: 'Expand row PT-58' }).click();

    // console.log('PT-60, whose value is for estimated cost is 5678.546, original cost "547200" and status should be "In Progress"');
    await page.pause();
})
