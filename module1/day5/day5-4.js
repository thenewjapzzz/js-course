function gerarSenhar(){
    const senha = Math.round(Math.random() + (999999 - 100000) + 100000); // round: arredondamento / random: aleatórios
    return senha; // Encerra a execução da função
}
const senha = gerarSenhar();
console.log(senha);