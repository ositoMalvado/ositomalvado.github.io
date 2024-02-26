
index = 1
const url = `https://pokeapi.co/api/v2/pokemon/${index}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Pokemon:', data);
    audioUrl = data.cries.legacy;
		imagen = data.sprites.front_default;
		imagenShiny = data.sprites.front_shiny;
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });
