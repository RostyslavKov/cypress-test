import { LayoutsPage } from "../pages/layoutsPage";
import { DATA, HEADERS } from "../support/constants";

const layoutsPage = new LayoutsPage();

export function verifyThatLblHorizontalFormIsPresent() {
    layoutsPage.lblHorizontalForm().should('contain.text', HEADERS.HorizontalForm);
}

export function fillEmailField() {
    layoutsPage.txtEmail().clear().type(DATA.Email);
}

export function fillPasswordField() {
    layoutsPage.txtPassword().clear().type(DATA.Password);
}

export function checkRememberMeCheckbox() {
    layoutsPage.chRememberMe().click();
}

export function clickOnSignInBtn() {
    layoutsPage.btnSignIn().click();
} 
