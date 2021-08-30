/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */




// 1.Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".


// 2 .Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".


// 3 .Se o usuário responder cancel, imprime uma mensagem no console "O jogo acabou".

// 4 .Se o usuário responder Ok, o programa deve iniciar uma nova rodada.



console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   usuario = comprarCarta()
   computador = comprarCarta()

} else {

console.log("O jogo acabou")

}


const carta = comprarCarta(usuario)


const mensagem = `"Usuário - cartas: Q♣️ 10♣️  - pontuação 20"`
const mensagem1 = `"Computador - cartas: Q♣️ 10♣️  - pontuação 20"`
const mensagem2 = `"Empate!"`
const mensagem3 = `"O usuário ganhou!"`
const mensagem4 = `"O computador ganhou!"`



console.log(`Usuario - carta: ${carta.texto} ${carta.texto} - ${carta.valor}`)
console.log(`Computador - carta: ${carta.texto} ${carta.texto} - ${carta.valor}`)





