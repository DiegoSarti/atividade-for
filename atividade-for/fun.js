// metodo lenght length conta caracter

const fullname = 'Diego Sarti Araujo Viana'

console.log(fullname.length, 'conta caracteres')

const fruits = ['maça','pessego','uva','pera']
console.log(fruits.length, 'array')
console.table(fruits)//faz uma tabela visivel
console.log(fruits[fruits.length -1])

const cortaNome = fullname.slice(1,5)//slice determina que vai do primeiro numro que voce decicir até o segundo
console.log(cortaNome)

const transformToArray = fullname.split(' ')
console.log(transformToArray)
console.log(transformToArray[transformToArray.length -1]) 
console.table(transformToArray)

const lastName = transformToArray[transformToArray.length -1]
console.log(lastName)




console.log('Olá',transformToArray [0])

