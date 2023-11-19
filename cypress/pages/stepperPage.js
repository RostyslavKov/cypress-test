export class StepperPage {

    StepContent() {
        return cy.get('h3:eq(0)')
    }

    btnNextTopBlock() {
        return cy.get('button:contains("next"):eq(0)')
    }
}