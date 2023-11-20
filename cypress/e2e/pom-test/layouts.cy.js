import { checkRememberMeCheckbox, clickOnSignInBtn, fillEmailField, fillPasswordField, verifyThatLblHorizontalFormIsPresent } from "../../modules/layouts";
import { navigateTo, verifyThatUserHasBeenNavigatedTo } from "../../modules/navigation";
import { URL } from "../../support/constants";

describe ('Layouts page', () => {

    beforeEach('Open Layouts page', () => {
        navigateTo(URL.Layouts);
    })

    it ('First test',()=> {
        verifyThatLblHorizontalFormIsPresent();
        fillEmailField();
        fillPasswordField();
        checkRememberMeCheckbox();
        clickOnSignInBtn();
        verifyThatUserHasBeenNavigatedTo(URL.Layouts);
    })
});