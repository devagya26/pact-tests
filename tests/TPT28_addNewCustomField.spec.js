const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT28: Add New Custom Field (SAN)", async ({page}) => {
    test.setTimeout(60000);
    await utils.loginSAN(page);
    const iframe2 = page.frame({
        url: selector.sanSrc
    })
    await iframe2.getByText(selector.customField).first().click();
    await iframe2.getByRole(selector.textbox, { name: selector.fieldName }).fill('Dependency');
    await iframe2.getByRole(selector.button, { name: selector.create }).click();

    await page.pause();
});