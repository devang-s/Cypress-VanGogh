/// <reference types="Cypress" />


describe('Test the Van Gogh museum website', () => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
    })
    it('Test Case 1: Verify the collections page', () => {
        cy.visit('https://www.vangoghmuseum.nl')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > .main-navigation-desktop-item > span').click()
        cy.get(':nth-child(2) > .main-navigation-desktop-screen-item > span').click()
        cy.get('.heading-1').should('have.class', 'heading-1 page-header-heading')
        cy.get('.heading-1').should('have.text', 'Collectie')
        cy.get('.results').should('have.class', 'results')
        cy.get('.results').invoke('text').then(parseFloat).should('be.gt', 4600)
        
    })
    it('Test Case 2: Verify for Het Gele Huis', () => {
        cy.visit('https://www.vangoghmuseum.nl/nl/collectie')
        cy.get('.btn').click()
        cy.get('.list-filters-form-left > .search-field > .search-field-input-wrapper > .search-field-input')
                .type('Het Gele Huis')
        cy.get('.search-field-search-button').click()
        cy.get('.results').should('have.class', 'results')
        cy.get('.results').invoke('text').then(parseFloat).should('be.gt', 700)
    })
    it('Test Case 3: Verify details for Het Gele Huis', () => {
        cy.visit('https://www.vangoghmuseum.nl/nl/collectie')
        cy.get('.btn').click()
        cy.get('.list-filters-form-left > .search-field > .search-field-input-wrapper > .search-field-input')
                .type('Het Gele Huis')
        cy.wait(5)
        cy.get('.search-field-search-button').click()
        cy.get('[aria-posinset="1"] > .collection-art-object-wrapper > .collection-art-object-item-wrapper > .collection-art-object-item > .collection-art-object-item-image-wrapper > picture > .lazy-image')
        .click()
        cy.get(':nth-child(1) > .accordion-item-button > button').click()
        cy.get(':nth-child(1) > .definition-list-item-label').should('have.text', 'F-nummer')
        cy.get(':nth-child(1) > .definition-list-item-value').should('have.text','F0464')
        cy.get(':nth-child(2) > .definition-list-item-label').should('have.text', 'JH-nummer')
        cy.get(':nth-child(2) > .definition-list-item-value').should('have.text','JH1589')
        cy.get(':nth-child(3) > .definition-list-item-label').should('have.text', 'Inventarisnummer')
        cy.get(':nth-child(3) > .definition-list-item-value').should('have.text','s0032V1962')
    })
})
