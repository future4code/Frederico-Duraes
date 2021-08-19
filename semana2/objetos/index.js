/*fime.lenco[0].nome = "xuxa";

console.log("titulo", filme.titulo);
console.log("direcao", filme.direçao);
console.log("ano de lacamento", filme.ano);
const elemcoFilme = filme["elemco"];
console.log("elenco", elencofilme)
console.log("esse filme foi assitido",)


const frase = `o nemo do filme e ${filme.titulo}. seus personagens sao
${fime,elenco[0].personagem}. e ${fime.elemco[1]personagem}`;





exercio 2

const pessoa = {
    nome: "fred",
    idade: 41,
    generoMusical: "rock"
}


const frase = ` o nome da pesso e ${pesso.nome},
ela tem ${pesso.idade} 
anos e gosta muito de ${pesso.generoMusical}.`;


//funcio no console.log tambem 

console.log{` o nome da pesso e ${pesso.nome},
ela tem ${pesso.idade} 
anos e gosta muito de ${pesso.generoMusical}.`);



conts paiDePet = {
    nome: "caio",
    pet: {
        nome: "lupin",
        raca: "salsicha",
        idade: 1
    }
}

const pet = paiDePet.pet;
const nomedoPet = pet.nome;

const 


exercio 3

const curso = {
    nome: "Integral",
    linguagens: ["js", "html", "css", "sql"]
}

const linguagensconts = cuso.linguagens

const instrutoras = [
    {nome: "lais", modulo: 1},
    {nome: "amanda", modulo: 2},
    {nome: "chijo", modulo: 3}
];

console.log(instrutoras);





exercio 4


const pesso = {
    nome: "fred",
    idade: 41,
    generoMusical: "rock",
   
}

const frase =  `o nome da pessoa e ${pessoa.nome},
ela tem ${pessoa.idade} anos e gosta muito de 
${pessoa.generoMusical}.`;

console.log(frase);

const pessoaAdicoes = {
    ...pessoa,
    comidasPreferidas: ["pf", "queijo", "cha",],
    melhorAmigo: {
        nome: "fred",
        idade: 41
    }
}*/












//1.  Leia o código abaixo

/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])


 a) O que vai ser impresso no console? */
//R - Matheus Nachtergaele , Virginia Cavendish  , Globo 14 hr 



// 2 . Leia o código abaixo


/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga) */

//a) O que vai ser impresso no console? - R - R - juca , 3 , srd
//b) O que faz a sintaxe dos três pontos antes do nome de um objeto? R - vao altera 



// 1 .Resolva os passos a seguir:



 /* a) Crie um objeto. Ele deve conter duas propriedades: 
nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
Depois, escreva uma função que recebe como entrada um objeto
 e imprime uma mensagem no modelo abaixo*/


 /*Exemplo de entrada
const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 
 // Exemplo de saída
 "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

const propriedades = ` nome da pessoa ${pessoa.nome}, 
o apelido ${pessoa.apelido}.`;

console.log(propriedades);*/


 /*b) Agora, usando o operador spread,
  crie um novo objeto mantendo o valor da propriedade 
  nome, mas com uma nova lista de três apelidos. Depois,
   chame a função feita no item anterior passando como
    argumento o novo objet*/


    /*const outrosApelidos = {
        ...apelidos,
        meuApelidoPreferidos: ["Amandinha", "Amancoka", "Dinha"],
        nome: "Amanda" 

    }

    const apelidosPreferidos = ` goto mais desse apelidos ${outrosApelidos.nome} podem me chamr assim
    ${outrosApelidos.meuApelidoPreferidos.nome},`;

    console.log(outrosApelidos) */





/*2 . Resolva os passos a seguir:

a) Crie dois objetos diferentes com as 
 seguintes propriedades: nome, idade e profissão. 

b) Escreva uma função que receba esses objetos e 
retorne um array com as seguintes informações:


1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão` */



/* const pessoa = {
    nome: "Fred",
    idade: 41,
    profissão: "Estudante",

}

const minhaProfissão = `Sou estando da Labenu ${pessoa.nome}, 
Tenho tantos anos ${pessoa.idade} Quero ser um dev formado pela Labenu ${pessoa.profissão},`;

console.log(minhaProfissão) */




/* a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter
 as seguintes propriedades: nome (`string`)
 e disponibilidade (`boolean` - devem começar como `true`)

 c) Crie uma função que **receba** um objeto fruta por **parâmetro** e
  coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 


  d) Imprima a variável carrinho e garanta que ela agora seja um array
   preenchido com três objetos. */



   const carrinho = [] {
        nome: "frutas", 
        sacolao: ["Banana", "Uva", "Pera"],

   }

   const carrinhoDefrutas = `Fui no mercado ${carrinho.sacolao} Compra um ${carrinho.nome},`;
   
   console.log(carrinhoDefrutas)