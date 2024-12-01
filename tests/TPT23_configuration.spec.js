const { test } = require("@playwright/test");
import { utils } from "./utils"; 
import { selector } from "./variables";

test("TPT23: Configuration Setting in Sandbox (SAN)", async ({page}) => {
    test.setTimeout(60000);
    await utils.loginSAN(page);
    const iframe2 = page.frame({
        url: selector.sanSrc
    })
    await iframe2.locator(selector.CIT).first().click();
    await iframe2.getByRole(selector.op, { name: selector.task, exact: true }).click();

    await iframe2.locator(selector.CLR).click();
    await iframe2.getByRole(selector.op, { name: selector.blocks }).click();

    await iframe2.locator(selector.CLR2).click();
    await iframe2.getByRole(selector.op, { name: selector.relates }).click();

    await iframe2.locator(selector.RIT).click();
    await iframe2.getByRole(selector.op, { name: selector.task, exact: true }).click();

    await iframe2.locator(selector.RIT2).click();
    await iframe2.getByRole(selector.op, { name: selector.subtask }).click();

    await iframe2.locator(selector.RIT3).click();
    await iframe2.getByRole(selector.op, { name: selector.story }).click();

    await iframe2.locator(selector.NL).click();
    await iframe2.getByRole(selector.op, { name: selector.cloners }).click();

    await iframe2.locator(selector.NL2).click();
    await iframe2.getByRole(selector.op, { name: selector.cil }).click();

    await iframe2.locator(selector.EC).click();
    await iframe2.getByRole(selector.op, { name: selector.forms }).click();

    await iframe2.getByRole(selector.button, { name: selector.submit }).click();
    await page.pause();
})
