import { selector } from "./variables";
const fs = require("fs").promises;
require('dotenv').config();

export const utils = {
    async login(page) {
        await page.goto(process.env.LOGIN_URL || "");
        await page.getByPlaceholder(selector.usernameInput).fill(process.env.JIRA_USERNAME || "");
        await page.getByPlaceholder(selector.usernameInput).press("Enter");
        await page.locator(selector.passwordInput).fill(process.env.JIRA_PASSWORD || "");
        await page.locator(selector.passwordInput).press("Enter");
        await page.waitForTimeout(20000);
    }
};