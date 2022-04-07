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

function calcularPrecioFinal() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue= inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue= inputDiscount.value;
    const precioFinal = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio que debes pagar después de aplicar el descuento es: $" + precioFinal;
}