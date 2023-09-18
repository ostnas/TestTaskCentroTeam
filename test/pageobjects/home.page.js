import Page from "./page.js";
import { $, $$ } from '@wdio/globals'

class HomePage extends Page {
    get topClipsList() {return $$('//*[@id="topClipsSection"]/div[2]/div/div');}
    get topClipsSeeMoreButton(){ return $("#topClipsSection [data-testid='exploreYourFetish-seeMoreButton']");}


    openPage() {
        return super.openPage();
    }
    certifyEnter () {
        return super.certifyEnter()
    }

    /**
     * Methods for getting information about the top clip with the specified sequence number N.
     */
    // Get element with the preview of clip N
    getNTopClipPreview(n) {
        return $$(`//*[@id="topClipsSection"]/div[2]/div/div[${n}]/div[1]/div[2]/a[1]`)[0];
    }
    // Get the title of the clip N
    getNTopClipTitle(n) {
        return $$(`//*[@id="topClipsSection"]/div[2]/div/div[${n}]/div[2]/div[2]/div[1]/a`)[0];
    }
    // Get the index of a clip N displayed on the page as his ordinal number
    getNTopClipIndex(n) {
        return $$(`//*[@id="topClipsSection"]/div[2]/div/div[${n}]/div[2]/div[1]`)[0];
    }


    async getNTopClipTitleText(n) {
        return await this.getNTopClipTitle(n).getText();
    }
    async getNTopClipIndexNumber(n) {
        return Number(await this.getNTopClipIndex(n).getText());
    }
    async getNTopClipIdText(n) {
        return await this.getNTopClipPreview(n).getAttribute('data-clipid');
    }
    async clickGetNTopClipPreview(n) {
        await this.getNTopClipPreview(n).click();
    }
    async clickGetNTopClipTitle(n) {
        await this.getNTopClipTitle(n).click();
    }
    async clickTopClipsSeeMoreButton () {
        await this.topClipsSeeMoreButton.click();
    }
}

export default new HomePage();
