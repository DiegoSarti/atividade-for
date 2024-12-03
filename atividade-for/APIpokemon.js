function getPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => res.json())
    .then(data => {
        const {name, sprites, weight } = data;
        // const nome =  `Nome: ${name}`;
        // const peso = `peso: ${weight}`;
        // const linkFoto = `link da foto: ${sprites.front_default}`;
        // console.log(name);
        // console.log(peso);
        // console.log(linkFoto)
        const div = document.getElementById('pokemon-info')

        div.innerHTML = `
        <h2>${name}</h2>
        <img src="${sprites.front_default}" alt="">
        <p>${weight}</p>
        `
    })
    .catch((error) => console.error("O error é:", error))

}
getPokemon('articuno')