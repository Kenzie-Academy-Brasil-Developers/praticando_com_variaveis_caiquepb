    //Exercício 1

let valorDaCompraExercicio1 = prompt("Com quantos R$ você pretende abastecer ?");
let valorLitroExercicio1 = 6.80;

alert(`O cliente abasteceu ${(valorDaCompraExercicio1/valorLitroExercicio1).toFixed(2)}l`);

    //Exercício 2

let celciusExercicio2 = prompt("Insira aqui a temperatura em Celcius ?");
let fahrenheitExercicio2 = (9*celciusExercicio2+160)/5;

alert(`O valor ${celciusExercicio2} ºC em Fahrenheit é ${fahrenheitExercicio2.toFixed(2)} ºF`);

    //Exercício 3

let fahrenheitExercicio3 = prompt("Insira aqui a temperatura em Fahrenheit ?");
let celciusExercicio3 = ((fahrenheitExercicio3-32)*5)/9;

alert(`O valor ${fahrenheitExercicio3} ºF em Celcius é ${celciusExercicio3.toFixed(2)} ºC`);

    //Exercício 4

let comprimentoExercicio4 = prompt("Insira aqui a comprimento da caixa ?");
let larguraExercicio4 = prompt("Insira aqui a largura da caixa ?");
let alturaExercicio4 = prompt("Insira aqui a altura da caixa ?");

let volumeExercicio4 = comprimentoExercicio4*larguraExercicio4*alturaExercicio4

alert(`O volume da caixa é de: ${volumeExercicio4.toFixed(2)} m³`);

    //Exercício 5

let numeroExercicio5 = parseInt(prompt("Insira aqui o número desejado"));

let numeroAoQuadradoExercicio5 = numeroExercicio5*numeroExercicio5

alert(`O valor de ${numeroExercicio5} ao quadrado é ${numeroAoQuadradoExercicio5}`)

    //Exercício 6

let numero1Exercicio6 = parseFloat(prompt("Insira aqui um número"));
let numero2Exercicio6 = parseFloat(prompt("Insira aqui outro número"));
let numero3Exercicio6 = parseFloat(prompt("Insira aqui outro número"));
let numero4Exercicio6 = parseFloat(prompt("Insira aqui outro número"));
let numero5Exercicio6 = parseFloat(prompt("Insira aqui outro número"));

let somaDosValoresExercicio6 = numero1Exercicio6 + numero2Exercicio6 + numero3Exercicio6 + numero4Exercicio6 + numero5Exercicio6
let mediaDosValoresExercicio6 = somaDosValoresExercicio6 / 5

alert(`A soma dos valores informados é ${somaDosValoresExercicio6} e a média é ${mediaDosValoresExercicio6}`)

    //Exercício 7

let numero1Exercicio7 = parseInt(prompt("Insira aqui um número"));
let numero2Exercicio7 = parseInt(prompt("Insira aqui outro número"));

let restoNumeroExercicio7 = numero1Exercicio7%numero2Exercicio7

alert(`O resto da divisão de ${numero1Exercicio7} por ${numero2Exercicio7} é ${restoNumeroExercicio7}`)

    //Exercício 8

let palavraExercicio8 = prompt("Escreva sua frase aqui");

alert(`Este texto tem ${palavraExercicio8.length} caracteres`)

    //Exercício 9

let palavraExercicio9 = prompt("Escreva sua frase aqui");
let ultimaLetraExercicio9 = palavraExercicio9.length-1

alert(`A primeira letra deste texto é ${palavraExercicio9[0].toUpperCase()} e a última é ${palavraExercicio9[ultimaLetraExercicio9].toLowerCase()}`)

    //Exercício 10

let nomeExercicio10 = prompt("Escreva seu nome aqui");
let sobrenomeExercicio10 = prompt("Escreva seu sobrenome aqui");
let idadeExercicio10 = parseInt(prompt("Escreva sua idade aqui"));
let setorExercicio10 = prompt("Escreva seu setor aqui");

alert(`Nome: ${nomeExercicio10[0].toUpperCase()}${nomeExercicio10.substring(1)} ${sobrenomeExercicio10[0].toUpperCase()}${sobrenomeExercicio10.substring(1)} - idade: ${idadeExercicio10} - Setor: ${setorExercicio10[0].toUpperCase()}${setorExercicio10.substring(1)}`)