/// <reference types="cypress" />

describe('TheInternet tests', () => {
    beforeEach(() => {
        cy.visit('/horizontal_slider') 
     })
    it('Slider test', ()=> {
        cy.get('input')
        .invoke('val', 1.5)
        .trigger('change')
        cy.get('#range')
        .should('contain', '1.5')
        cy.get('input')
        .invoke('val', 2.5)
        .trigger('change')
        cy.get('#range')
        .should('contain', '2.5')
        cy.get('input')
        .invoke('val', 5.0)
        .trigger('change')
        cy.get('#range')
        .should('contain', '5')
        cy.get('input')
        .invoke('val', 0.0)
        .trigger('change')
        cy.get('#range')
        .should('contain', '0')
        
    })

})