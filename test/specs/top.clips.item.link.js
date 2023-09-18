import HomePage from '../pageobjects/home.page.js'
import ClipPage from '../pageobjects/clip.page.js'
import {expect, browser} from "@wdio/globals";

// A clip can be opened by clicking on both the preview and the title. Both cases are checked below.
describe("Top clips list: open clip", () => {
    beforeEach(async () => {
        await HomePage.openPage();
        await HomePage.certifyEnter();
    });

    it("should be opened via preview link", async () => {
        const clipTitleFromHomePage = await HomePage.getNTopClipTitleText(1);

        await HomePage.clickGetNTopClipPreview(1);
        await expect(browser).toHaveUrlContaining('https://www.clips4sale.com/studio/');
        const clipTitleFromClipPage = await ClipPage.clipTitleText;

        await expect(clipTitleFromHomePage === clipTitleFromClipPage);
    });

    it("should be opened via title link", async () => {
        const clipTitleFromHomePage = await HomePage.getNTopClipTitleText(1);

        await HomePage.clickGetNTopClipTitle(1);
        await expect(browser).toHaveUrlContaining('https://www.clips4sale.com/studio/');
        const clipTitleFromClipPage = await ClipPage.clipTitleText;

        await expect(clipTitleFromHomePage === clipTitleFromClipPage);
    });

})