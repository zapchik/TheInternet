/// <reference types="cypress" />

///const { triggerAsyncId } = require("async_hooks")

describe('if your app uses jQuery', function () {
    ['mouseover'].forEach((event) => {
      it(`triggers event: '${event}`, function () {
          cy.visit('/hovers')
        // if your app uses jQuery, then we can trigger a jQuery
        // event that causes the event callback to fire
        //.focus()
        //.invoke('trigger', event)
        //.invoke('show')
        //.should('have.text','name: user3')
        //.and('be.visible');
        //cy.get('div.figure:nth-child(5) > div:nth-child(2) > h5:nth-child(1)')
        //.invoke('show')
        //.should('have.text','name: user3')
        //.and('be.visible');
        //cy.get('#messages').should('contain', `the event ${event} was fired`)
      })
    })
  })