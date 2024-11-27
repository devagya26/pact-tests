const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT20: Contact", async ({page}) => {
    test.setTimeout(50000)
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.locator(selector.help).click();
    await iframe.getByRole(selector.button, { name: selector.contact }).click();
    await page.pause();
})
