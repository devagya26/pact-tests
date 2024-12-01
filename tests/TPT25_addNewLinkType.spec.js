const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT25: Add New Link Type (SAN)", async ({page}) => {
    test.setTimeout(60000);
    await utils.loginSAN(page);
    const iframe2 = page.frame({
        url: selector.sanSrc
    })
    await iframe2.getByText(selector.linkType).first().click();
    await iframe2.getByRole(selector.textbox, { name: selector.nameLT }).fill('Supports');
    await iframe2.getByRole(selector.textbox, { name: selector.inward }).fill('Duplicate');
    await iframe2.getByRole(selector.textbox, { name: selector.outward }).fill('Relates to');
    await iframe2.getByRole(selector.button, { name: selector.create }).click();

    await page.pause();
});