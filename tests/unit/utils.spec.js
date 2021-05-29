const { formatDate } = require('../../client/js/utils.js');


describe('Método formatDate', () =>{

    const fecha = new Date('August 20, 2020 23:15:33');
    const fechaEsperada = '20/8/2020';
    it('Dada una fecha, debería devolverla en el formato correcto', () => {
        expect(formatDate(fecha)).toBe(fechaEsperada);
    });


});
