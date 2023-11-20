export class DialogPage {

    btnEnterName() {
        return cy.get('button:contains("Enter Name")');
    }

    lblEnterYourName() {
        return cy.get('nb-card-header:contains("Enter your name")');
    }

    txtName() {
        return cy.get('[placeholder="Name"]');
    }

    btnCancel() {
        return cy.get('button:contains("Cancel")');
    }

    btnSubmit() {
        return cy.get('button:contains("Submit")');
    }  
}