const playwright = require('playwright');

(async () => {
    // Code to e executed
    const browser = await playwright["chromium"].launch({
        headless: false
    });

    //context
    const context = await browser.newContext();

    //page
    const page = await context.newPage();

    //navigate to page
    await page.goto("");
    await page.type('[placeholder=Username]', '');
    await page.type('[placeholder=Password]','"')
    await page.keyboard.press('Enter', {delay: 2000})

    await selectDropdown() 
        try {
        const select = await this.page.waitForSelector(':text("Select project...")');
        await select.click();
        const option = await this.page.waitForSelector(':text("7 Days"):below(:text("Select project..."))', {state: 'attached'});
        await option.scrollIntoViewIfNeeded();
        await option.click();
        } catch {
        throw new Error("Select project dropdown is not present or option did not exist");
        }


    await browser.close();

})();
