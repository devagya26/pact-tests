const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT21: Collapse Button", async ({page}) => {
    test.setTimeout(40000)
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.locator(selector.toggle).click();
    await page.pause();
})
