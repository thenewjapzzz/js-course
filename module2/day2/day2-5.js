const animais = ["cachorro", "gato", "panda", "coala", "sapo"];

animais.splice(1, 3, "tubarão", "girafa"); // Remover itens do array, primeiro coloque onde quer que comece, depois a quantidade
                                           // O outro parâmetro é para adicionar no lugar 
console.log(animais);