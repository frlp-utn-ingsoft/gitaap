export function monefy(num) {
    if (!num) return '';

    const NumS = String(num);

    const Total = NumS.split('.');


    const numStr = String(Total[0]);


    const points = numStr.length / 3;

    const result = [];

    for (let i = 0; i < points; i++) {
        const s = -3 * (i + 1);
        const e = -3 * i || undefined;
        const chunk = numStr.slice(s, e);


        result.push(chunk);
    }

    if (Total[1] == null){
        return result.reverse().join('.');
    } else{
        return result.reverse().join('.') + ',' + Total[1];
    }
    
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
