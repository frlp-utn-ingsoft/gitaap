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

        cy.get('input[name=description]').type('Descripcion');
        cy.get('input[name=date]').type('2021-04-26');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('100000');
        cy.contains('Guardar').click();
        cy.reload();

        cy.get('[data-testid=movement]').should('have.length', 5);
    });

    it('Deberia Validarse todos los campos del form al crear movimiento', () => {
        cy.visit('/income');

        cy.get(':nth-child(2) > .control > .input').should(
            'have.attr',
            'required'
        );
        cy.get(':nth-child(3) > .control > .input').should(
            'have.attr',
            'required'
        );
        cy.get(':nth-child(4) > .control > .input').should(
            'have.attr',
            'required'
        );
        cy.get(':nth-child(5) > .control > .input').should(
            'have.attr',
            'required'
        );
    });
});
