/**
 * estudo das funções
 */

//Funções simples (literal)
function hello() {
    console.log("Hello function")
}

console.log(typeof (hello))
hello()

//Funcão atribuida
const hello2 = function () {
    console.log("Hello function assigned")
}

console.log(typeof (hello2))
hello()

//Arrow fonction => (simplificação da função atribuida)
// function é igual a ( => )
const hello3 = () => {
    console.log
}

console.log(typeof (hello3))
hello3()

//Funções com passagem de paramêtro e retorno
//Função simples (literal)

function somarS(num1, num2) {
    return (console.log(num1 + num2))   

}

somarS(2, 3)
const somarA = function (num1, num2) {
    return (console.log(num1, num2))
}
somarA()

// Arrow function
const somaAF = (num1, num2) => {
    return (console.log(num1 + num2))
}