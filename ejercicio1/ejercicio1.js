const showCharacter = async () =>{
    try {
        const res = await fetch("https://thronesapi.com/api/v2/Characters");
        const data = await res.json();
        
        const select = document.querySelector("#character-list");
        data.map(character =>{
        const addCharacter = document.createElement("option");
        addCharacter.value = character.fullName;
        addCharacter.textContent = character.fullName;
        select.appendChild(addCharacter)
        return addCharacter;
    
        });
        const defaultCharacter = data[0];
        printCharacterImage(defaultCharacter);
        
        select.addEventListener('change', (event) => {
            const selectedCharacterName = event.target.value;
            const selectedCharacter = data.find(character => character.fullName === selectedCharacterName);
            if (selectedCharacter) {
                printCharacterImage(selectedCharacter);
            }
        });

    } catch (error) {
        console.log("No se encuentra el personaje solicitado");
        
    }
};

const printCharacterImage = (character) => {
    const characterImage = document.querySelector(".character-image");
    characterImage.innerHTML = `
        <h2>${character.fullName}</h2>
        <img src="${character.imageUrl}" alt="${character.fullName}">
        <h3>Familia: ${character.family}</h3>
    `;
};

showCharacter();