import { navigateTo, verifyThatUserHasBeenNavigatedTo } from "../../modules/navigation";
import { cheackAgreement, cheackAgreementIsCheaked, clickOnPasswordField, clickOnRegisterBtn, clickOnRegisterTitle, clickOnRepeatPasswordField, fillEmail, fillFullName, fillIncorectEmail, fillIncorectFullName, fillPassword, fillRepeatPassword, verifyThatEmailErrorMessageIsVisible, verifyThatFullNameErrorMessageIsVisible, verifyThatLblEmailIsPresent, verifyThatLblFullNameIsPresent, verifyThatLblPasswordIsPresent, verifyThatLblRegisterTitleIsPresent, verifyThatLblRepeatPasswordIsPresent, verifyThatPasswordErrorMessageIsVisible, verifyThatRepeatPasswordErrorMessageIsVisible, verifyThatSocialsIsPresent } from "../../modules/register";
import { URL } from "../../support/constants";

context('Register page', () => {

    beforeEach(() => {
        navigateTo(URL.Register);
    })

    describe('Positive cases', () => {
        it('Registration', () => {
            fillFullName();
            fillEmail();
            fillPassword();
            fillRepeatPassword();
            cheackAgreement();
            cheackAgreementIsCheaked();
            clickOnRegisterBtn();
            verifyThatUserHasBeenNavigatedTo(URL.Pages)
        });
        it('Headers', () => {
            verifyThatLblRegisterTitleIsPresent();
            verifyThatLblFullNameIsPresent();
            verifyThatLblEmailIsPresent();
            verifyThatLblPasswordIsPresent();
            verifyThatLblRepeatPasswordIsPresent();
            verifyThatSocialsIsPresent();
        });
    });

    describe('Negative cases', () => {
        it('Validation errors', () => {
            clickOnRepeatPasswordField();
            clickOnPasswordField();
            fillIncorectEmail();
            fillIncorectFullName();
            clickOnRegisterTitle();
            verifyThatRepeatPasswordErrorMessageIsVisible();
            verifyThatPasswordErrorMessageIsVisible();
            verifyThatEmailErrorMessageIsVisible();
            verifyThatFullNameErrorMessageIsVisible();
        });
    });
})