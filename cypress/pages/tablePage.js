export class TablePage {

    btnPluss() {
        return cy.get('[class="ng2-smart-action ng2-smart-action-add-add ng-star-inserted"]');
    }

    btnAddRow() {
        return cy.get('[class="ng2-smart-action ng2-smart-action-add-create"]');
    }

    btnEdit() {
        return '[class="ng2-smart-action ng2-smart-action-edit-edit ng-star-inserted"]';
    }


    btnSave() {
        return '[class="ng2-smart-action ng2-smart-action-edit-save"]';
    }

    txtID() {
        return '[class="form-control ng-untouched ng-pristine ng-valid"]';
    }

    tableInPartRowNumberColumnNumber(part, rowNumber, columnNumber) {
        return cy.get(`t${part} tr:eq(${rowNumber}) td:eq(${columnNumber})`);
    }

    tableBodyRow0() {
        return cy.get('tbody tr:eq(0) td');
    }

    findColumn() {
        return '[ng-reflect-ng-switch]';
    }

}