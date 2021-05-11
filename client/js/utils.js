export function monefy(num) {
    if (!num) return '';

  //const numStr = String(num);
    let numEntero = Math.trunc(num);     //guardo en numEntero la parte entera del n°
    let numEnteroS = String(numEntero);  //transformo la parte entera del numero a String
    let numString = String(num);
    let parteDecimal;
    if (numString.split(".").length > 1) {
         parteDecimal = numString.split(".").slice(-1).pop()
    }else{
         parteDecimal = "00"
    }                                           //guardo en parteDecimal la parte decimal del n°
    let parteDecimalS = String(parteDecimal);   //transformo la parte decimal del numero a String
    const points = numEnteroS.length / 3;
    const result = [];

    for (let i = 0; i < points; i++) {
        const s = -3 * (i + 1);
        const e = -3 * i || undefined;
      //const chunk = numStr.slice (s, e);  
        const chunk = numEnteroS.slice(s, e);    

        result.push(chunk);
    }

    let resultado = result.reverse().join('.');
    return resultado + ',' + parteDecimal;
    //la linea de arriba devuelve la parte entera con la separacion de "." 
    //me falta concatenarlo con la parte decimal que obtuve en la variable parteDecimal
}

export function getRandomColor() {
    return `hsl(${360 * Math.random()}, ${25 + 70 * Math.random()}%, ${
        65 + 10 * Math.random()
    }%)`;
}

export function getMonth(dateString) {
    const monthNames = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ];

    const date = new Date(dateString);

    return monthNames[date.getMonth()];
}

export function formatDate(date) {
    return date.split('T')[0];
}
