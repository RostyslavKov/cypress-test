import { clickOnBtnEnterName, verifyThatBtnCancelIsVisible, verifyThatBtnSubmitlIsVisible, verifyThatLblEnterYourNameIsPresent, verifyThatTxtNameIsVisible } from "../../modules/dialog";
import { navigateTo } from "../../modules/navigation";
import { URL } from "../../support/constants";

describe ('Dialog page', () => {

    beforeEach('Open Dialog page', () => {
        navigateTo(URL.Dialog);
    })

    it ('First test',()=> {
        clickOnBtnEnterName();
        verifyThatLblEnterYourNameIsPresent();
        verifyThatTxtNameIsVisible();
        verifyThatBtnCancelIsVisible();
        verifyThatBtnSubmitlIsVisible();
    })
});