const lista1 = [
    100,
    200,
    500,
    400000000
];

const mitadLista1 = parseInt(lista1.length / 2);

function numeroPar (numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    };
};

let mediana;

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

if (numeroPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const promedio = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);
    mediana = promedio;
} else {
    mediana = lista1[mitadLista1];
};