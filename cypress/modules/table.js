import { TablePage } from "../pages/tablePage";
import { TABLE } from "../support/constants";

const tablePage = new TablePage();


export function clickOnPlussBtn() {
    tablePage.btnPluss().click();
}

export function fillId(part, rowNumber, columnNumber) {
    tablePage.tableInPartRowNumberColumnNumber(part, rowNumber, columnNumber).find(tablePage.txtID()).clear().type(TABLE.ID);
}

export function fillFirstName(part, rowNumber, columnNumber) {
    tablePage.tableInPartRowNumberColumnNumber(part, rowNumber, columnNumber).clear().type(TABLE.FirstName);
}

export function fillLastName(part, rowNumber, columnNumber) {
    tablePage.tableInPartRowNumberColumnNumber(part, rowNumber, columnNumber).clear().type(TABLE.LastName);
}

export function fillUsername(part, rowNumber, columnNumber) {
    tablePage.tableInPartRowNumberColumnNumber(part, rowNumber, columnNumber).clear().type(TABLE.Username);
}

export function fillEmail(part, rowNumber, columnNumber) {
    tablePage.tableInPartRowNumberColumnNumber(part, rowNumber, columnNumber).clear().type(TABLE.Email);
}

export function fillAge(part, rowNumber, columnNumber) {
    tablePage.tableInPartRowNumberColumnNumber(part, rowNumber, columnNumber).clear().type(TABLE.Age);
}

export function clickOnAddRowBtn() {
    tablePage.btnAddRow().click();
}

export function verifyThatEnteredValuesAreSameThatShowedInTable() {
    const elems = [];
    const valuesToVerify = Object.values(TABLE).map(String);
    tablePage.tableBodyRow0().find(tablePage.findColumn())
        .each(($el) => {
            let elem = $el.text();
            elems.push(elem);
        }).then(() => {
            const elemsAsString = elems.map(String);
            expect(elemsAsString).to.include.members(valuesToVerify);
        }
    );
}

export function clickOnEditBtn() {
    tablePage.tableBodyRow0().find(tablePage.btnEdit()).click();
}

export function clickOnSaveBtn() {
    tablePage.tableBodyRow0().find(tablePage.btnSave()).click();
}