import HomePage from '../pageobjects/home.page.js'
import { expect } from "@wdio/globals";

describe("Top clips list: 'See More' button", () => {
    beforeEach(async () => {
        await HomePage.openPage();
        await HomePage.certifyEnter();
    });

    it("should extend list by 10 items to reach 50", async () => {
        let topClipsListLength = await HomePage.topClipsList.length;

        while (await HomePage.topClipsSeeMoreButton.isClickable()) {
            await HomePage.clickTopClipsSeeMoreButton();
            await expect(HomePage.topClipsList).toBeElementsArrayOfSize(topClipsListLength + 10)
            topClipsListLength = await HomePage.topClipsList.length;
        }

        await expect(HomePage.topClipsList).toBeElementsArrayOfSize(50);
    });
});

