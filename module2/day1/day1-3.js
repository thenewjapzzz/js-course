// 10 primeiros números múltiplos de 234
// o primeiro algarismo 1
// o segundoa algarismo 2

let numero = 234,cont = 0, stringNumero, primeiroAlgarismo, segundoAlgarismo;

while(cont < 10){
    stringNumero = numero.toString();
    primeiroAlgarismo = stringNumero[0];
    segundoAlgarismo = stringNumero[1];
    if(primeiroAlgarismo === "1" && segundoAlgarismo === "2"){
        cont++;
        console.log(numero);
    }
    numero += 234;
}