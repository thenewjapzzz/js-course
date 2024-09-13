const frutas = ["Banana", "Morango", "Uva", "Abacaxi"];
console.log(frutas);
frutas.push("Melão");
console.log(frutas)
frutas.shift() // Remove o primeiro elemento do array
console.log(frutas);
frutas.unshift("Banana") // Retorna o elemento no primeiro índice
console.log(frutas);
frutas.pop();
console.log(frutas) // Remove o último elemento do array


// Exemplo:

const lista1 = ['morango', 'uva', 'maçã'];
const lista2 = ['amora', 'pêra', 'laranja'];

const frutasss = lista1.concat(lista2);
console.log(frutasss);

frutasss.splice(1,3);
console.log(frutasss) // morango, pêra e laranja

frutasss.splice(2, 0, 'melancia', 'acerola');
console.log(frutasss); // morango, pêra, melancia. acerola. laranja

const novasFrutas = frutasss.slice(2)

console.log(novasFrutas);
