//Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:


const pokemon= {
	nome:"Bulbasaur",
	tipo: "Grama",
	nivel: 5 ,
}


//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

const novoPokemon={...pokemon,
	nome:"Squirtle",
	tipo:" Água"

}



//b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`


//nome: Investida;
//dano: 40;
//tipo: Normal;
//precisao: 100;

pokemon.pokemonAtaques=[]
pokemon.pokemonAtaques.push([{nome:"Investida", dano:40.00,tipo:"normal", precisao: 100}])

//console.log(pokemon.pokemonAtaques)

//c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;

novoPokemon.pokemonAtaques=[{...pokemon.pokemonAtaques}]

//d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;

pokemon.pokemonAtaques.push([{
nome: "folha navalha",
dano: 45,
precisao: 100,
tipo:"grama"
}])

console.log(pokemon)
//e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;
novoPokemon.pokemonAtaques.push({
nome:"jato de agua",
dano:40,
precisao:100,
tipo:"agua"
})


//f) Imprima os dois objetos no console.
console.log(novoPokemon)
console.log(pokemon)