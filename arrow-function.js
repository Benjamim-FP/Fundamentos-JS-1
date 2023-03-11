function apresentar(nome) {
    return `Meu nome é ${nome}.`;
}

//Arrow function

const apresentarArrow = nome => `Meu nome é ${nome}.`;
const soma = (numero1, numero2) =>  numero1 + numero2;

//Arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números entre 1 e 9.";
    } else {
        return num1 + num2;
    }
}

// Hoisting: Arrow function se comporta como expressão

//Operador de maior igual que
// >=