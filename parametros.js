//parâmetros de função

function soma(numero1, numero2){
    return numero1 + numero2;
}

// console.log(soma(89, 654));

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}.`
}

// console.log(nomeIdade(18, 'Benjamim'))

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));