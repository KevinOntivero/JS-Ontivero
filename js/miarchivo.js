let valorTotal = 15000;
let cuotaPagar = prompt("Escriba las cuotas a pagar (6, 12, 18, 24)");

while(cuotaPagar != 6 && cuotaPagar != 12 && cuotaPagar != 18 && cuotaPagar != 24){
    cuotaPagar = prompt ("Ingrese un nro de cuotas valido (6, 12, 18, 24)");
}

let valorFinal = valorTotal / cuotaPagar;
alert ("Tus cuotas son " + cuotaPagar + "cuotas, y el valor de cada cuota sera de:" + valorFinal)






















/* let hola = prompt("Bienvenido! Ingresa 'hola' para comenzar");
while(hola != "hola" ){
    alert("Has ingresado " + hola);
    hola = prompt("Para comenzar ingresa 'hola'");
}

let ver = prompt("Un gusto, quisieras ver todo el contenido? responde con un 'si' si asi lo quisieras")
while(ver != "si"){
    alert("Ingresaste " + ver)
    ver = prompt("Por favor indica con 'si' para seguir")
}

let prueba = prompt("Perfecto! para seguir solo necesito dos pasos mas, ingresa un 'no soy' si no eres un robot")
while (prueba != "no soy"){
    alert("Ingresaste " + prueba)
    prueba = prompt ("Por favor, indicar 'no soy' si no eres un robot")
}

let finish = prompt("Un ultimo paso, ingrese 'seguir' para poder continuar viendo nuestra pagina")
while (finish != "seguir"){
    alert("Ingresaste " + finish)
    finish = prompt("Por favor, para continuar a nuestra pagina ingresar 'seguir'")
} */









