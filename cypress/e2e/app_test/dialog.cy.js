import { HEADERS, URL  } from "../../support/constants";
import { LOCATORS} from "../../support/locators";

describe ('Dialog page', () => {

    it ('First test',()=> {
        cy.visit(URL.Dialog);
        cy.get(LOCATORS.Dialog.btnEnterName).click();
        cy.get(LOCATORS.Dialog.lblEnterYourName)
            .should('contain.text', HEADERS.EnterYourName);
        cy.get(LOCATORS.Dialog.txtName);
        cy.get(LOCATORS.Dialog.btnCancel);
        cy.get(LOCATORS.Dialog.btnSubmit);
        
    })

});