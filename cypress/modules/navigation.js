import { BasePage } from "../pages/basePage";

const basePage = new BasePage();

export function navigateToSectionFromMenu(pageName) {
    basePage.menuContainers().contains(pageName).click();
}

export function navigateTo(urlName) {
    cy.visit(`${urlName}`);
}

export function verifyThatUserHasBeenNavigatedTo(urlName) {
    cy.location('pathname').should("eq", urlName);
}