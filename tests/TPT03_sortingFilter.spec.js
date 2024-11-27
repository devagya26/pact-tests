const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT03: Sorting Filter", async ({page}) => {
    test.setTimeout(50000)
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.locator(selector.sorting).click();
    await page.waitForTimeout(2000);
    console.log("You will now be able to see Issues in Ascending Order.");
    await page.pause();
})
