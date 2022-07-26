/* array */
let pasajes_list = ["Belgica", "Canada", "Nevada", "Finlandia", "España", "Italia", "Roma", "Francia"];
pasajes_list.unshift("Mexico");
let pasajes = prompt("Ingrese destino: ('Belgica', 'Canada', 'Nevada', 'Finlandia', 'España', 'Italia', 'Roma', 'Francia' 'Mexico'")
while(pasajes != "Belgica" && pasajes != "Canada" && pasajes != "Nevada" && pasajes != "Finlandia" && pasajes != "España" && pasajes != "Italia" && pasajes != "Roma" && pasajes != "Francia" && pasajes != "Mexico" ){
    pasajes = prompt("Confirme su destinto")
}
alert("Elegiste: " + pasajes)


/* simulador de cuotas */

let valorTotal = 15000;
let cuotaPagar = prompt("Escriba las cuotas a pagar (6, 12, 18, 24)");

while(cuotaPagar != 6 && cuotaPagar != 12 && cuotaPagar != 18 && cuotaPagar != 24){
    cuotaPagar = prompt ("Ingrese un nro de cuotas valido (6, 12, 18, 24)");
}

let valorFinal = valorTotal / cuotaPagar;
alert ("Tus cuotas son: " + cuotaPagar + " cuotas, y el valor de cada cuota sera de: " + valorFinal)

