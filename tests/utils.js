import { selector } from "./variables";
require('dotenv').config();

export const utils = {
    async login(page) {
        await page.goto(process.env.LOGIN_URL || "");
        await page.getByPlaceholder(selector.usernameInput).fill(process.env.JIRA_USERNAME || "");
        await page.getByPlaceholder(selector.usernameInput).press("Enter");
        await page.locator(selector.passwordInput).fill(process.env.JIRA_PASSWORD || "");
        await page.locator(selector.passwordInput).press("Enter");
        await page.waitForTimeout(20000);
    },

    async loginSAN(page) {
        await page.goto(process.env.LOGIN_URL_SAN || "");
        await page.getByPlaceholder(selector.usernameInput).fill(process.env.JIRA_USERNAME || "");
        await page.getByPlaceholder(selector.usernameInput).press("Enter");
        await page.locator(selector.passwordInput).fill(process.env.JIRA_PASSWORD || "");
        await page.locator(selector.passwordInput).press("Enter");
        await page.waitForTimeout(20000);
        const iframe = page.frame({
            url: selector.configSrc
        }); 
        await page.waitForTimeout(6000);
        await iframe.getByRole(selector.button, { name: selector.configuration }).click();
        await page.waitForTimeout(6000);
    }
};