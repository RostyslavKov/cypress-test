export class RegisterPage {

    lblRegisterTitle() {
        return cy.get('[id="title"]')
    }

    lblFullName() {
        return cy.get('[for="input-name"]');
    }

    txtFullName() {
        return cy.get('[id="input-name"]');
    }
   
    lblEmail() {
        return cy.get('[for="input-email"]');
    }

    txtEmail() {
        return cy.get('[id="input-email"]');
    }

    lblPassword() {
        return cy.get('[for="input-password"]');
    }

    txtPassword() {
        return cy.get('[id="input-password"]');
    }

    lblRepeatPassword() {
        return cy.get('[for="input-re-password"]');
    }

    txtRepeatPassword() {
        return cy.get('[id="input-re-password"]');
    }
   
    chAgree() {
        return cy.get('[class="native-input visually-hidden"]');
    }

    btnRegister() {
        return cy.get('button:contains(" Register ")');
    }

    Socials() {
        return cy.get('.socials');
    }

    FormDOM() {
        return cy.get('.nb-register');
    }
}