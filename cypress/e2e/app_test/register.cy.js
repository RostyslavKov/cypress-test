import { DATA, REGISTER, URL  } from "../../support/constants";
import { LOCATORS} from "../../support/locators";



context('Register page', () => {

    beforeEach(() => {
        cy.visit(URL.Register);
    })

    describe('Positive cases', () => {
        
        it('Registration', () => {
            cy.get(LOCATORS.Register.FormDOM)
                .within(($form) => {
                    cy.get(LOCATORS.Register.txtFullName).type(DATA.FullName)
                        .invoke('attr', 'ng-reflect-model')
                        .should('eq', DATA.FullName);
                    cy.get(LOCATORS.Register.txtEmail).type(DATA.Email)
                        .invoke('attr', 'ng-reflect-model').should('eq', DATA.Email);
                    cy.get(LOCATORS.Register.txtPassword).type(DATA.Password)
                        .invoke('attr', 'ng-reflect-model').should('eq', DATA.Password);
                    cy.get(LOCATORS.Register.txtRepeatPassword).type(DATA.Password)
                        .invoke('attr', 'ng-reflect-model').should('eq', DATA.Password);
                    cy.get(LOCATORS.Register.chAgree).click( {force: true});
                    cy.get(LOCATORS.Register.chAgree).should('be.checked');
                    cy.get(LOCATORS.Register.btnRegister).click();
                    cy.location('pathname').should('eq', URL.Pages);
                }
            );
            
    
        });

        it('Headers', () => {
            cy.get(LOCATORS.Register.lblRegisterTitle)
                .should('contain.text', REGISTER.Register);
            cy.get(LOCATORS.Register.lblFullName)
                .should('contain.text', REGISTER.FullName);
            cy.get(LOCATORS.Register.lblEmail)
                .should('contain.text', REGISTER.EmailAddress);
            cy.get(LOCATORS.Register.lblPassword)
                .should('contain.text', REGISTER.Password);
            cy.get(LOCATORS.Register.lblRepeatPassword)
                .should('contain.text', REGISTER.RepeatPassword);
            cy.get(LOCATORS.Register.Socials);
            
        });

    });

    describe('Negative cases', () => {
        
        it('Validation errors', () => {
            cy.get(LOCATORS.Register.txtRepeatPassword).click()
            cy.get(LOCATORS.Register.txtPassword).click()
            cy.get(LOCATORS.Register.txtEmail).type(DATA.Password);
            cy.get(LOCATORS.Register.txtFullName).type(DATA.InvalidName);
            cy.get(LOCATORS.Register.lblRegisterTitle).click()
            cy.get(LOCATORS.Register.txtRepeatPassword)
                .next().should('have.text', REGISTER.ValidationRepeatPassword);
            cy.get(LOCATORS.Register.txtPassword)
                .next().should('have.text', REGISTER.ValidationPassword);
            cy.get(LOCATORS.Register.txtEmail)
                .next().should('have.text', REGISTER.ValidationEmail);
            cy.get(LOCATORS.Register.txtFullName)
                .next().should('have.text', REGISTER.ValidationName);
        });

    });

})