const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT22: Expand Button", async ({page}) => {
    test.setTimeout(40000)
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.locator(selector.toggle).click();
    await page.waitForTimeout(2000);
    await iframe.locator(selector.toggle).click();
    await page.pause();
})
