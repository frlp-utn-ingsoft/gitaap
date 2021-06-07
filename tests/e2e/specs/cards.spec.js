// var express = require('express')
// var app = express()

// var routes = app.Router()

describe('Cards Test', () => {
    // Limpio la db antes de cada test
    beforeEach(() => {
        cy.task('seed');
    });

    it('Card deberia tener card-header', () => {
        cy.visit('/');
        cy.get('.card')
            .each(($card) => {
                cy.wrap($card)
                    .children()
                    .should('have.class', 'card-header')
            })
        cy.visit('/income');
        cy.get('.card')
            .each(($card) => {
                cy.wrap($card)
                    .children()
                    .should('have.class', 'card-header')
            })
    });
});
