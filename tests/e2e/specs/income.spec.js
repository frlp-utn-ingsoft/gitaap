

describe('Ingresos Test', () => {
    // Limpio la db antes de cada test
    beforeEach(() => {
        cy.task('seed');
    });

    it('Deberia cargar el formulario al editar un ingreso', () => {
        cy.visit('/income');

        cy.get('[data-testid=movement]')
            .find('button')
            .contains('editar')
            .click();

        cy.get('input[name=id]').should('have.value', '3');
        cy.get('input[name=category]').should('have.value', 'Sueldo');
        cy.get('input[name=amount]').should('have.value', '50000');
    });

    it('Deberia poder crear un nuevo ingreso', () => {
        cy.visit('/income');

        cy.get('input[name=date]').type('2021-04-26');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('100000');
        cy.contains('Guardar').click();
        cy.reload();

        cy.get('[data-testid=movement]').should('have.length', 5);
    });

// Este test sirve para verificar si se tomo la fecha enviada en la creación de un movimiento.

    it('Deberia poder verificar la fecha al cargar un nuevo ingreso', () => {
        cy.visit('/income');

        cy.get('input[name=date]').type('2021-05-18');
        cy.get('input[name=category]').type('libreria');
        cy.get('input[name=amount]').type('600');
        cy.contains('Guardar').click();
        cy.reload();

        cy.get(':nth-child(5) > [data-testid=movement] > .level-left > :nth-child(2) > div > .has-text-weight-light').should('include.text', '2021-05-18') 
       
    });



});
