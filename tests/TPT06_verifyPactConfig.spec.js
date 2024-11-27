const { test } = require("@playwright/test");
import { utils } from "./utils"; 

test("TPT06: Verify Pact Configuration Message", async ({page}) => {
    test.setTimeout(30000)
    await utils.login(page);
    console.log("Filter shows : There are no requirements (Task, Story) which are linked (relates to, Outward) to this contract (Epic).");
    await page.pause();
})
