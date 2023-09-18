import Page from "./page.js";
import { $$ } from '@wdio/globals';

class ClipPage extends Page {
    get clipTitle () {return $$('//*[@id="content"]/div[2]/div[1]/figure/figcaption/div/p')[0]}
    get clipTitleText () {return this.clipTitle.getText()}

    certifyEnter () {
        return super.certifyEnter()
    }
}

export default new ClipPage();