const notas = [8, 7, 2, 3, 9, 10];

let somaDasNotas = 0

for(let i=0; i<notas.length; i++){
    somaDasNotas = somaDasNotas + notas[i];
}

console.log(somaDasNotas);

const mediaNotas = somaDasNotas / notas.length;
console.log(mediaNotas);