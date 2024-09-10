function calcularIdade(dataNascimento){
    const[dia, mes, ano] = dataNascimento.split('/').map(Number);

    if(isNaN(dia) || isNaN(mes) || isNaN(ano) || mes < 1 || mes > 12 || dia < 0 || dia > 31) {
        throw new Error("Fomarto de data de nascimento incorreto!")
    }

    const hoje = new Date();
    const dataNascimentoDt = new Date(ano, mes-1, dia);
    let idade = hoje.getFullYear() - dataNascimentoDt.getFullYear();
    const mesAtual = hoje.getMonth() + 1;
    const diaAtual = hoje.getDate();

    if (mesAtual < mes || (mesAtual === mes && diaAtual < dia)){
        idade--;
    }
    
    return idade;
}

function gerarMensagem(nome, dataNascimento){
    try{
        const idade = calcularIdade(dataNascimento);
        const precoNormal = 1800;
        const preco20Desconto = precoNormal * 0.8;
        const preco40Desconto = precoNormal * 0.6;

        const hoje = new Date();
        const [dia, mes, ano] = dataNascimento.split('/').map(Number);
        const dataNascimentoDt = new Date(ano, mes-1, dia);
        const data18Anos = new Date(ano+18, mes-1, dia);

        if (idade < 16){
            return `Olá, ${nome}! Você não pode fazer a matricula antecipada`;
        }else if(idade >= 16 && idade < 18){
            if (hoje >= data18Anos){
                return `Olá ${nome}! Você pode iniciar as aulas. O valor a pagar é R$ ${preco20Desconto.toFixed(2)}`;
            }else{
                const inicioAulas = data18Anos.toLocaleDateString('pr-BR');
                return `Olá ${nome}! Você pode fazer a matricula antecipada com 20% de desconto. O valor a pagar é R$ ${preco20Desconto.toFixed(2)}. Você poderar começas as aulas em ${inicioAulas}`;
            }
        }else if(idade >= 18 && idade <= 40){
            return `Olá ${nome}! Você pode iniciar as aulas imediatamente. O valor a pagar é R$ ${precoNormal.toFixed(2)}`; 
        }else if(idade > 40){
            return `Olá ${nome}! Você pode iniciar as aulas imediatamente. O valor a pagar é R$ ${preco40Desconto.toFixed(2)}`;
        }else{
            return "Erro desconhecido";
        }
    }catch(error){
        return error.message;
    }
}

const nome = "Guilherme Sato";
const dataNascimento = "15/05/1940";
const mesagem = gerarMensagem(nome, dataNascimento);
console.log(mesagem);

