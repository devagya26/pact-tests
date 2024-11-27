const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT10: Verify Issue Id Data, PT-127", async ({page}) => {
    test.setTimeout(60000)
    await utils.login(page);
    const iframe = page.frame({
        url: selector.src
    }); 
    await iframe.getByText(selector.training).click();
    await page.waitForTimeout(2000);

    console.log('Here, you can see Training Services Contract');
    await page.pause();
})

