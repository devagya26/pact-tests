const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT04: Select Filter & Sorting", async ({page}) => {
    test.setTimeout(50000)
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByRole(selector.button, { name: selector.filter }).click();
    await iframe.getByText(selector.inProgress).first().click();
    await iframe.getByText(selector.done).click();
    await page.waitForTimeout(2000);
    await iframe.getByRole(selector.button, { name: selector.closeFilter }).click();

    await iframe.locator(selector.sorting).click();
    await page.waitForTimeout(2000);
    console.log("Filter shows : 2 Pages of Content");
    await page.pause();
})
