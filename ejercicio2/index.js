const showPokemon = async ()=>{
    try {
        const randomNum = Math.floor(Math.random() * 200) + 1;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
        const data = await res.json();
        console.log(data);
        const randomImage = document.querySelector(".random-image");
        if (data.id <= 150) {
            randomImage.innerHTML = `
                <h1>${data.name}</h1>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h2>ID: ${data.id}</h2>
            `;
        } else {
            randomImage.innerHTML = `<p>Pokémon número ${randomNum} no encontrado...</p>`;
        }
        
    } catch (error) {
        console.log("No se encuentra el personaje solicitado");
    }

}
showPokemon();