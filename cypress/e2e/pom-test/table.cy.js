import { navigateTo } from "../../modules/navigation";
import { clickOnAddRowBtn, clickOnEditBtn, clickOnPlussBtn, clickOnSaveBtn, fillAge, fillEmail, fillFirstName, fillId, fillLastName, fillUsername, verifyThatEnteredValuesAreSameThatShowedInTable } from "../../modules/table";
import { GENERAL, URL } from "../../support/constants";



context('Table page', () => {

    beforeEach(() => {
        navigateTo(URL.SmartTable);
    })

    describe('Table', () => {
        it('Add member to table', () => {
            clickOnPlussBtn();
            fillId(GENERAL.Head, GENERAL.SecondRow, GENERAL.Column1);
            fillFirstName(GENERAL.Head, GENERAL.SecondRow, GENERAL.Column2);
            fillLastName(GENERAL.Head, GENERAL.SecondRow, GENERAL.Column3);
            fillUsername(GENERAL.Head, GENERAL.SecondRow, GENERAL.Column4);
            fillEmail(GENERAL.Head, GENERAL.SecondRow, GENERAL.Column5);
            fillAge(GENERAL.Head, GENERAL.SecondRow, GENERAL.Column6);
            clickOnAddRowBtn();
            verifyThatEnteredValuesAreSameThatShowedInTable();
        });
        it('Edit member in a table', () => {
            clickOnEditBtn();
            fillId(GENERAL.Body, GENERAL.FirstRow, GENERAL.Column1);
            fillFirstName(GENERAL.Body, GENERAL.FirstRow, GENERAL.Column2);
            fillLastName(GENERAL.Body, GENERAL.FirstRow, GENERAL.Column3);
            fillUsername(GENERAL.Body, GENERAL.FirstRow, GENERAL.Column4);
            fillEmail(GENERAL.Body, GENERAL.FirstRow, GENERAL.Column5);
            fillAge(GENERAL.Body, GENERAL.FirstRow, GENERAL.Column6);
            clickOnSaveBtn();
            verifyThatEnteredValuesAreSameThatShowedInTable();
        });
    })
})