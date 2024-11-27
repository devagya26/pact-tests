const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT01: Filter Dropdown", async ({page}) => {
    test.setTimeout(50000)
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByRole(selector.button, { name: selector.filter }).click();
    await iframe.getByText(selector.selDev).click();
    await iframe.getByText(selector.done).click();
    await iframe.getByRole(selector.button, { name: selector.closeFilter }).click();
    await page.waitForTimeout(2000);
    console.log("Filter shows : TP-112, TP-35, TP-30, TP-28, TP-26, TP-12, TP-8, TP-7");
    await page.pause();
})
