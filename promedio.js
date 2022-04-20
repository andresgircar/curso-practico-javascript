function calcularMediaAritmetica(lista) {
    //let sumaLista = 0;
    //for (let i = 0; i < lista1.length; i++) {
        //sumaLista1 = sumaLista + lista[i];
    //};
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}