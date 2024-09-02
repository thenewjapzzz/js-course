let nome = "Guilherme Yokota Sato";
const quantidadeDeLetras = nome.replace(" ", "").length; //Substitui os caracteres, porém apenas o primeiro encontrado
console.log(`Meu nome é ${nome} e ele contém ${quantidadeDeLetras} letras`)

console.log(nome.replaceAll("a", "e")) //Substitui todos os caracteres

nome = "GUILHERME YOKOTA SATO";
console.log(nome.toLowerCase()); //tudo para minúsculo
nome = "guilherme yokota sato"; 
console.log(nome.toUpperCase()) // tudo para maiúsculo
