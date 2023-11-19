import { DATA, TABLE, URL  } from "../../support/constants";
import { LOCATORS} from "../../support/locators";

context('Smart table page', () => {

    beforeEach(() => {
        cy.visit(URL.SmartTable);
    })

    describe('Table', () => {
        
        it('Add member to table', () => {

            const elems = [];
            const valuesToVerify = Object.values(TABLE).map(String);

            cy.get(LOCATORS.SmartTable.btnPluss).click();
            cy.get('thead tr:eq(2) td:eq(1)').type(TABLE.ID);
            cy.get('thead tr:eq(2) td:eq(2)').type(TABLE.FirstName);
            cy.get('thead tr:eq(2) td:eq(3)').type(TABLE.LastName);
            cy.get('thead tr:eq(2) td:eq(4)').type(TABLE.Username);
            cy.get('thead tr:eq(2) td:eq(5)').type(TABLE.Email);
            cy.get('thead tr:eq(2) td:eq(6)').type(TABLE.Age);
            cy.get(LOCATORS.SmartTable.btnAddRow).click();

            cy.get('tbody tr:eq(0) td').find('[ng-reflect-ng-switch]')
                .each(($el) => {
                let elem = $el.text();
                elems.push(elem);
            }).then(() => {
                const elemsAsString = elems.map(String);
                expect(elemsAsString).to.include.members(valuesToVerify);
            });

        });

        it('Edit member in a table', () => {

            const elems = [];
            const valuesToVerify = Object.values(TABLE).map(String);
            cy.get('tbody tr:eq(0) td').find(LOCATORS.SmartTable.btnEdit).click();
            cy.get('tbody tr:eq(0) td:eq(1)').find(LOCATORS.SmartTable.txtID)
                .clear().type(TABLE.ID);
            cy.get('tbody tr:eq(0) td:eq(2)').clear().type(TABLE.FirstName);
            cy.get('tbody tr:eq(0) td:eq(3)').clear().type(TABLE.LastName);
            cy.get('tbody tr:eq(0) td:eq(4)').clear().type(TABLE.Username);
            cy.get('tbody tr:eq(0) td:eq(5)').clear().type(TABLE.Email);
            cy.get('tbody tr:eq(0) td:eq(6)').clear().type(TABLE.Age);
            cy.get(LOCATORS.SmartTable.btnSave).click();

            cy.get('tbody tr:eq(0) td').find('[ng-reflect-ng-switch]')
                .each(($el) => {
                let elem = $el.text();
                elems.push(elem);
            }).then(() => {
                const elemsAsString = elems.map(String);
                expect(elemsAsString).to.include.members(valuesToVerify);
            });

        });

    });

    

})