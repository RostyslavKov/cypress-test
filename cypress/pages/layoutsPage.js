export class LayoutsPage {

    lblHorizontalForm() {
        return cy.get('nb-card-header:contains("Horizontal form")');
    }

    txtEmail() {
        return cy.get('#inputEmail3');
    }

    txtPassword() {
        return cy.get('#inputPassword3');
    }

    chRememberMe() {
        return cy.get('.checkbox > nb-checkbox > .label > .custom-checkbox');
    }
    
    btnSignIn() {
        return cy.get('.status-warning.shape-rectangle.transitions');
    }
}