//const precioInicial = 100;
//const descuento = 15;


function calcularPrecioConDescuento (precio, descuento) {
    const porcentajeDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDescuento)/100;
    return precioConDescuento;
}

//console.log({
    //precioInicial,
    //descuento,
    //porcentajeDescuento,
    //precioConDescuento
//});