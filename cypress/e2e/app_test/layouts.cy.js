import { DATA, HEADERS, URL  } from "../../support/constants";
import { LOCATORS} from "../../support/locators";

describe ('Layouts page', () => {

    it ('First test',()=> {
        cy.visit(URL.Layouts);
        cy.get(LOCATORS.Layouts.lblHorizontalForm)
            .should('contain.text', HEADERS.HorizontalForm);
        cy.get(LOCATORS.Layouts.txtEmail).clear()
            .type(DATA.Email);
        cy.get(LOCATORS.Layouts.txtPassword).clear()
            .type(DATA.Password);   
        cy.get(LOCATORS.Layouts.chRememberMe).click();
        cy.get(LOCATORS.Layouts.btnSignIn).click();
    })

});