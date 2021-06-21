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


    it('Deberia mostrar una alerta de movimiento creado', (done) => {
        cy.visit('/income');
        cy.get('input[name=date]').type('2021-05-06');
        cy.get('input[name=amount]').type('2500');
        cy.get('input[name=category]').type('Compras');


        cy.contains('Guardar').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Movimiento creado correctamente');
            done();
          })     
    });
    it('Los movimientos deben tener la clase que asigna el signo +', () => {
        cy.visit('/income');
        //Se crea un movimiento para verificar el funcionamiento
        cy.get('input[name=description]').type('Suscripcion Mensual');
        cy.get('input[name=date]').type('2021-05-14');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('11000');
        cy.contains('Guardar').click();

        cy.get('p[id=valor]')
            .contains('10.000')
            .should('have.class', 'ingreso')
    });

});
