import { DialogPage } from "../pages/dialogPage";
import { HEADERS } from "../support/constants";

const dialogPage = new DialogPage();

export function clickOnBtnEnterName() {
    dialogPage.btnEnterName().click();
}

export function verifyThatLblEnterYourNameIsPresent() {
    dialogPage.lblEnterYourName().should('contain.text', HEADERS.EnterYourName);
}

export function verifyThatTxtNameIsVisible() {
    dialogPage.txtName().should("be.visible");
}

export function verifyThatBtnCancelIsVisible() {
    dialogPage.btnCancel().should("be.visible");
}

export function verifyThatBtnSubmitlIsVisible() {
    dialogPage.btnSubmit().should("be.visible");
}