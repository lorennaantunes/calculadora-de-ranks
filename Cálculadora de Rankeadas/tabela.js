const nome = prompt ("Qual o seu nome Herói? ");
let v = prompt ("Qual seu número de vítorias: ");
let d = prompt ("Agora a quantidade de derrotas: ");

let saldo = v - d;

if (saldo <= 10){
    nivel = "Ferro";
}
else if (saldo >= 11 && saldo <= 20){
    nivel = "Bronze"
}
else if (saldo >= 21 && saldo <= 50){
    nivel = "Prata"
}
else if (saldo >= 51 && saldo <= 80){
    nivel = "Ouro"
}
else if (saldo >= 81 && saldo <= 90){
    nivel = "Diamante"
}
else if (saldo >= 91 && saldo <= 100){
    nivel = "Lendário"
}
else if (saldo >= 101){
    nivel = "Mestre"
}

console.log ("O Heróid tem: ", saldo , "vitórias e está no nível de: ", nivel);