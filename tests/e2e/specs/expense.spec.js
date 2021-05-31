describe('Egresos Test', () => {
    // Limpio la db antes de cada test
    beforeEach(() => {
        cy.task('seed');
    });

    it('Deberia cargar el formulario al editar un egreso', () => {
        cy.visit('/expense');

        cy.get('[data-testid=movement]')
            .find('button')
            .contains('editar')
            .click();

        cy.get('input[name=id]').should('have.value', '1');
        cy.get('input[name=category]').should('have.value', 'Supermercado');
        cy.get('input[name=amount]').should('have.value', '1000');
    });

    it('Deberia poder crear un nuevo egreso', () => {
        cy.visit('/expense');

        cy.get('input[name=description]').type('Description');
        cy.get('input[name=date]').type('2021-04-26');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('100000');
        cy.contains('Guardar').click();
        cy.reload();

        cy.get('[data-testid=movement]').should('have.length', 5);
    });

    it('Deberia aparecer la alerta de movimiento creado con éxito', () => {
        cy.visit('/expense');
        cy.get('input[name=description]').type('Description');
        cy.get('input[name=date]').type('2021-04-26');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('100000');
        cy.contains('Guardar').click();

        const stub = cy.stub();
        cy.on('window:alert', stub);
        cy.contains('Guardar')
            .click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith(
                    'Ingreso creado con éxito'
                );
            });
    });
});
