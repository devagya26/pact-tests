const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT27: Add New Link Type for Negotiation Link (SAN)", async ({page}) => {
    test.setTimeout(60000);
    await utils.loginSAN(page);
    const iframe2 = page.frame({
        url: selector.sanSrc
    })
    await iframe2.getByText(selector.linkType).nth(1).click();
    await iframe2.getByRole(selector.textbox, { name: selector.nameLT }).fill('Custom 4');
    await iframe2.getByRole(selector.textbox, { name: selector.inward }).fill('Duplicate By');
    await iframe2.getByRole(selector.textbox, { name: selector.outward }).fill('Relates');
    await iframe2.getByRole(selector.button, { name: selector.create }).click();

    await page.pause();
});