const idade = 16;
const pais = "BR";

let resultado;

/*
if(idade >= 18){
    resultado = "Aprovado"
}else if(idade >= 16 && pais == "EAU"){
    resultado = "Aprovado"
}else{
    resultado = "Reprovado"
}
*/

// Forma mais simplificada de fazer
if (idade >= 18 || idade >= 16 && pais === "EUA"){
    resultado = "Aprovado";
}else{
    resultado = "Reprovado";
}

console.log(resultado)
