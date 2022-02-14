/// <reference types="cypress" />

describe('TheInternet tests', () => {
    beforeEach(() => {
        cy.visit('/dropdown') 
     })
    it('Dropdown test', ()=> {
        cy.get('#dropdown')
        .should('contain', 'Please select an option');
        cy.get('#dropdown')
        .select('1')
        .should('contain', 'Option 1');
        cy.get('#dropdown')
        .select('2')
        .should('contain', 'Option 2');
    })

})