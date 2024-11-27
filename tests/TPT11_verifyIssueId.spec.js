const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT11: Verify Issue Id Data, PT-5", async ({page}) => {
    test.setTimeout(50000)
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.locator(selector.pg4).click();
    await iframe.getByText(selector.license).click();

    await page.waitForTimeout(2000);
    console.log('Here, you can see Licensing Agreement');
    await page.pause();
})
