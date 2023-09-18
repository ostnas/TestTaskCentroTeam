import { browser, $ } from '@wdio/globals'

export default class Page {
    get iCertifyCheckbox() {return $("label.checkbox > div")}
    get enterButton() {return $("#enter-agree");}

    async openPage() {
        await browser.maximizeWindow();
        await browser.url("https://www.clips4sale.com");
    }

    // Certify agreements if the warning appeared.
    async certifyEnter() {
        if (await this.iCertifyCheckbox.isExisting()) {
            await this.iCertifyCheckbox.click();
            await this.enterButton.click();
        }
    }
}