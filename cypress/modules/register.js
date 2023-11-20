import { RegisterPage } from "../pages/registerPage";
import { DATA, REGISTER } from "../support/constants";

const registerPage = new RegisterPage();


export function fillFullName() {
    registerPage.txtFullName().type(DATA.FullName)
        .invoke('attr', 'ng-reflect-model')
        .should('eq', DATA.FullName);
}

export function fillEmail() {
    registerPage.txtEmail().type(DATA.Email)
        .invoke('attr', 'ng-reflect-model')
        .should('eq', DATA.Email);
}

export function fillPassword() {
    registerPage.txtPassword().type(DATA.Password)
        .invoke('attr', 'ng-reflect-model')
        .should('eq', DATA.Password);
}

export function fillRepeatPassword() {
    registerPage.txtRepeatPassword().type(DATA.Password)
    .invoke('attr', 'ng-reflect-model')
    .should('eq', DATA.Password);
}

export function cheackAgreement() {
    registerPage.chAgree().click( {force: true});
}

export function cheackAgreementIsCheaked() {
    registerPage.chAgree().should('be.checked');
}

export function clickOnRegisterBtn() {
    registerPage.btnRegister().click();
}

export function verifyThatLblRegisterTitleIsPresent() {
    registerPage.lblRegisterTitle()
        .should('contain.text', REGISTER.Register);
}

export function verifyThatLblFullNameIsPresent() {
    registerPage.lblFullName()
        .should('contain.text', REGISTER.FullName);
}

export function verifyThatLblEmailIsPresent() {
    registerPage.lblEmail()
        .should('contain.text', REGISTER.EmailAddress);
}

export function verifyThatLblPasswordIsPresent() {
    registerPage.lblPassword()
        .should('contain.text', REGISTER.Password);
}

export function verifyThatLblRepeatPasswordIsPresent() {
    registerPage.lblRepeatPassword()
        .should('contain.text', REGISTER.RepeatPassword);
}

export function verifyThatSocialsIsPresent() {
    registerPage.Socials();
}

export function clickOnRepeatPasswordField() {
    registerPage.txtRepeatPassword().click();
}

export function clickOnPasswordField() {
    registerPage.txtPassword().click();
}

export function fillIncorectEmail() {
    registerPage.txtEmail().type(DATA.Password);
}

export function fillIncorectFullName() {
    registerPage.txtFullName().type(DATA.InvalidName);
}

export function clickOnRegisterTitle() {
    registerPage.lblRegisterTitle().click();
}

export function verifyThatRepeatPasswordErrorMessageIsVisible() {
    registerPage.txtRepeatPassword().next()
        .should('have.text', REGISTER.ValidationRepeatPassword);
}

export function verifyThatPasswordErrorMessageIsVisible() {
    registerPage.txtPassword().next()
        .should('have.text', REGISTER.ValidationPassword);
}

export function verifyThatEmailErrorMessageIsVisible() {
    registerPage.txtEmail().next()
        .should('have.text', REGISTER.ValidationEmail);
}

export function verifyThatFullNameErrorMessageIsVisible() {
    registerPage.txtFullName().next()
        .should('have.text', REGISTER.ValidationName);
}

