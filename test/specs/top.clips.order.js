import HomePage from '../pageobjects/home.page.js'
import {expect} from "@wdio/globals";

describe("Top clips list: items set check", () => {
    beforeEach(async () => {
        await HomePage.openPage();
        await HomePage.certifyEnter();

        // Open list of 50 clips.
        for (let n = 20; n <= 50; n += 10) {
            await HomePage.topClipsSeeMoreButton.isClickable();
            await HomePage.clickTopClipsSeeMoreButton();
            await expect(HomePage.topClipsList).toBeElementsArrayOfSize(n);
        }
    });

    // The order is checked by clip index displayed on the page.
    it("should be sorted in ascending order", async () => {
        let previousIndex = await HomePage.getNTopClipIndexNumber(1);

        for (let n = 2; n <= 50; n++) {
            let currentIndex = await HomePage.getNTopClipIndexNumber(n);
            await expect(currentIndex).toBeGreaterThan(previousIndex);  //also checks that indexes are not equal
            previousIndex = currentIndex;
        }
    });

    // The absence of duplicates is checked by clip id from the 'data-clipid' attribute.
    // Tne uniqueness of indexes on the page is already checked as part of the previous test.
    it("should not have duplicates", async () => {
        const uniqueTopClipsArray = []

        for (let n = 1; n <= 50; n++) {
            let topClipId = await HomePage.getNTopClipIdText(n);
            if (!uniqueTopClipsArray.includes(topClipId)) {
                uniqueTopClipsArray.push(topClipId);
            }
        }
        await expect(uniqueTopClipsArray.length===50).toBeTruthy();
    });
})