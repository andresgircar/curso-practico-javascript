// Código del cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log ("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

// Código del triángulo
console.group("triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triángulo miden: " 
+ ladoTriangulo1 
+ "cm, " 
+ ladoTriangulo2 
+ "cm, " 
+ baseTriangulo 
+ "cm"
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo);

const alturaTriangulo = 5.5;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log ("El área del triángulo es: " + areaTriangulo + "cm2");
console.groupEnd();

//Código del círculo
console.group("Círculo");
const radioCirculo = 8;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

console.log("El radio del círculo es: " + radioCirculo + "cm");
console.log("El diámetro del círculo es: " + diametroCirculo + "cm");
console.log("Solo para recordar, PI es: " + PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del círculo es: " + perimetroCirculo + "cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo + "cm2")
console.groupEnd();