// fetch('https://viacep.com.br/ws/05763450/json/')//end point
// .then(response => {
//     return response.json()//pegar os dados da transação 
// })
// .then(data => {
//     console.log(data)//vai retornar os dados da API
// })
// .catch(error => console.error('Error:',error));//mostra se deu erro 

// function getpokemon(getpokemon) {
//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     . then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error))
// }

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')//end point
     .then(response => {
         return response.json()//pegar os dados da transação 
     })
     .then(data => {
         console.log(data)//vai retornar os dados da API
     })
     .catch(error => console.error('Error:',error));//mostra se deu er  