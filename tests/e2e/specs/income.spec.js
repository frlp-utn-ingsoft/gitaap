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

    it('Carga de monto con decimales', () => {
        cy.visit('/income');
        cy.get('input[name="description"]').type('Test Deberia cargar monto con decimales');
        cy.get('input[name=date]').type('2021-07-05');
        cy.get('input[name=category]').type('Test');
        cy.get('input[name=amount]').type("1234.56");
        cy.contains('Guardar').click();
        cy.reload();

        cy.get(':nth-child(5) > [data-testid=movement] > .level-right > :nth-child(1) > .has-text-success').should('include.text', '1.234,56')
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
	
    
    it('Deberia rechazar el ingreso de montos negativos', (done) => {

        cy.visit('/income');
        cy.get('input[name=date]').type('2021-02-10');
        cy.get('input[name=category]').type('Regalo');
        cy.get('input[name=amount]').type('-500');
        cy.contains('Guardar').click();

        cy.on('window:alert', (str) => {
        expect(str).to.equal('Debe ingresar un monto mayor a 0');

    done();
        });

});
it('Verifica que el ingreso tenga el signo +', () => {
    cy.visit('/income');
    //se crea un movimiento que se aplica a la clase
    cy.get('input[name=description]').type('Produccion Multimedial');
    cy.get('input[name=date]').type('2021-02-12');
    cy.get('input[name=category]').type('Pago');
    cy.get('input[name=amount]').type('15000');
    cy.contains('Guardar').click();

    cy.get('p[id=valor]')
        .contains('10.000')
        .should('have.class', 'ingreso')
});
});
