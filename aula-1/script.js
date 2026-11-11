

console.log("é oq temos no momento");
let nomeDaVaraivel = "valor da variavel";
let outraVaraivel = "valor de outra variavel";
let variavelNumero = "1980";
let variavelCheironaSala = "false";
console.log("nomeDaVaraivel");
console.log("outraVaraivel");
console.log("variavelNumero");
console.log("variavelCheironaSala");


// dia 07-10
const texto = "A rafaella nao pode falar nada que o maçaneta incomoda";
const num = 42;
const ativo = true;

console.log(typeof texto);
console.log(typeof num);
console.log(typeof ativo);

const aluno = "rafaella";
const conceito1T = "8.0";
const conceito2T = "2.0";
const conceito3T = "5.0";

const media = (conceito1T + conceito2T + conceito3T) / 3;
const resultado = media >= 7 ? "Aprovado" : "Reprovado";

console.log(`O aluno ${aluno} obteve média ${media.toFixed(2)} e foi ${resultado}.`);

document.getElementById("saida").textContent = `O aluno ${aluno} obteve média ${media.toFixed(2)} e foi ${resultado}.`;