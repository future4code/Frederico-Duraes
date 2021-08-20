//1.Leia o código abaixo


/*const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" } 
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
}) */


// a) Leia o código abaixo - R -  0 nome: "Amanda Rangel", apelido: "Mandi" - 
    //1 //nome: "Laís Petra", apelido: "Laura"  - 
     // 2 //nome: "Letícia Chijo", apelido: "Chijo" - 








//2.Leia o código abaixo



/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
      
    const novoArrayB = usuarios.map((item, index, array) => {
        return item.nome
    })
      
    console.log(novoArrayB) */




// a) O que vai ser impresso no console? R -'Amanda Rangel', 'Laís Petra', 'Letícia Chijo'









//3. Leia o código abaixo



/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)*/


// a) O que vai ser impresso no console? R -"Amanda Rangel", apelido: "Mandi" "Laís Petra", apelido: "Laura"







/* 1 . Dado o seguinte array de cachorrinhos que são clientes 
de um pet shop, realize as operações pedidas nos itens abaixo 
utilizando as funções de array map e filter: */



//a) Crie um novo array que contenha apenas o nome dos doguinhos
//b) Crie um novo array apenas com os cachorros salsicha
//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
//A mensagem deve ser: 
//"Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]


 // a) Crie um novo array que contenha apenas o nome dos doguinhos

const petsNome = pets.filter((nome) => {
    return pets.petsnome
})



//b)Crie um novo array apenas com os cachorros salsicha

const petsSalsicha = pets.filter((raca) => {
    return pets.petsSalsicha
})


//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
//"Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"


const petsPoodle = pets.filter((nome) => {
    return pets.petsPoodle
})

console.log(pets)



// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo 
//utilizando as funções de array map e filter:



//a) Crie um novo array que contenha apenas o nome de cada item

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% 
//de desconto em todos eles

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"



const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]




 //a) Crie um novo array que contenha apenas o nome de cada item

 const produtosNome = produtos.map((nome) => {
     return nome.produtos

 })



 



 //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% 
//de desconto em todos eles


const produtosPreco = preco.filter((preco) => {
    return preco.produtosPreco
})  





//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas


const produtosBebidas = categoria.filter((categoria) => {
    return produtos.produtosBebidas
})





//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"


const produtosLimpeza = nome.filter((nome) => {
    return produtos.Ype
})

