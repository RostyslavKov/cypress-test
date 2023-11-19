import { HEADERS, URL  } from "../../support/constants";
import { LOCATORS} from "../../support/locators";

describe ('Stepper page', () => {

  it ('First test',()=> {
    cy.visit(URL.Stepper);
    for (const key in HEADERS) {
      if (HEADERS.hasOwnProperty(key)&& key !=='HorizontalForm' && key !=='EnterYourName') {
        cy.get(LOCATORS.Stepper.StepContent).should('contain.text',  HEADERS[key]);
        key !== 'StepContent4'?cy.get(LOCATORS.Stepper.btnNextTopBlock).click():"Finish"
      }
    } 
  })
})