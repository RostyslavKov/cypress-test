import { StepperPage } from "../pages/stepperPage";
import { HEADERS } from "../support/constants";

const stepperPage = new StepperPage();

export function cheakHeaderAndClickNextButton() {
    for (const key in HEADERS) {
        if (HEADERS.hasOwnProperty(key)&& key !=='HorizontalForm' && key !=='EnterYourName') {
            stepperPage.StepContent().should('contain.text',  HEADERS[key]);
            key !== 'StepContent4'?stepperPage.btnNextTopBlock().click():"Finish"
        }
    }
}
