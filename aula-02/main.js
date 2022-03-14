import { jogoBot } from "./jogoBot.js";

jogoBot();

let choiceUser = parseInt(prompt('1- Papel, 2- Tesoura, 3- Pedra'))
let choiceBot = parseInt( Math.random()*3+1 )
const resultado = [["Empate", "Bot", "Jogador"], ["Jog", ], []]


function quemGanhou(choiceUser, chooseBot){
if(choiceUser === 1) {
    if(choiceBot === 1) {
        alert('empatou')
    }
    if(choiceBot === 2) {
        alert('o bot ganhou')
    }
    if(choiceBot === 3) {
        alert('o usuário ganhou')
    }
}
if(choiceUser === 2) {
    if(choiceBot === 1) {
        alert('o usuário ganhou')
    }
    if(choiceBot === 2) {
        alert('empatou')
    }
    if(choiceBot === 3) {
        alert('o bot ganhou')
    }
}
if(choiceUser === 3) {
    if(choiceBot === 1) {
        alert('o bot ganhou')
    }
    if(choiceBot === 2) {
        alert('o usuário ganhou')
    }
    if(choiceBot === 3) {
        alert('o usuário ganhou')
    }
    return 3
}
}

console.log('Usuário escolheu '+choiceUser)
console.log('Robô escolheu '+choiceBot)
