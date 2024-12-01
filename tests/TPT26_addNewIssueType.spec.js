const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT26: Add New Issue Type for Requirement Issue Type (SAN)", async ({page}) => {
    test.setTimeout(60000);
    await utils.loginSAN(page);
    const iframe2 = page.frame({
        url: selector.sanSrc
    })
    await iframe2.getByText(selector.issueType).nth(1).click();
    await iframe2.getByRole(selector.textbox, { name: selector.nameIT }).fill('Custom 5');
    await iframe2.getByRole(selector.button, { name: selector.create }).click();

    await page.pause();
});