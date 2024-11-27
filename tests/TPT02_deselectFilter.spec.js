const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT02: Deselect Filter Dropdown", async ({page}) => {
    test.setTimeout(50000)
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByRole(selector.button, { name: selector.filter }).click();
    await iframe.getByText(selector.selDev).click();
    await iframe.getByText(selector.done).click();
    await page.waitForTimeout(2000);

    await iframe.getByText(selector.selDev).click();
    await iframe.locator(selector.label).filter({ hasText: 'Done' }).locator('span').nth(1).click();
    await iframe.getByRole(selector.button, { name: selector.closeFilter }).click();
    await page.waitForTimeout(2000);

    console.log("Filter shows : 5 Pages of Content");
    await page.pause();
})
