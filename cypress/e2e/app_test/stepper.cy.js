import { HEADERS, URL  } from "../../support/constants";
import { LOCATORS} from "../../support/locators";

describe ('Stepper page', () => {

    it ('First test',()=> {
        cy.visit(URL.Stepper);
        cy.get(LOCATORS.Stepper.StepContent)
            .should('contain.text', HEADERS.StepContent1);
        cy.get(LOCATORS.Stepper.btnNextTopBlock).click();
        cy.get(LOCATORS.Stepper.StepContent)
        .should('contain.text', HEADERS.StepContent2);
            cy.get(LOCATORS.Stepper.btnNextTopBlock).click();
        cy.get(LOCATORS.Stepper.StepContent)
            .should('contain.text', HEADERS.StepContent3);
        cy.get(LOCATORS.Stepper.btnNextTopBlock).click();
        cy.get(LOCATORS.Stepper.StepContent)
            .should('contain.text', HEADERS.StepContent4);
        cy.get(LOCATORS.Stepper.btnNextTopBlock).click();  

    })

});