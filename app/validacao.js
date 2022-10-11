function validadorDeValor(chute){
    const numero = +chute;

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido</div>`;
        return
    };

    if(validacaoDoNumero(numero)){
        elementoChute.innerHTML +=`<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        return
    };

    if(numero===numeroSecreto){
        document.body.innerHTML = `
            <h2> Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button class="jogar-novamente" onclick="atualizaPage()"> Jogar novamente </button>
        `;
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div> O número secreto é menor <i class="fa-solid fa-down-long"></i> </div>
        `;
    }else {
        elementoChute.innerHTML += `
        <div> O número secreto é maior <i class="fa-solid fa-up-long"></i> </div>
        `;
    }
};

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
};

function validacaoDoNumero(numero){
    return numero > maiorValor || numero < menorValor;
};

function atualizaPage(){
    location.reload();
}