const getList = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=111');
    const data = await resp.json();
    let newArray = [];
    data.results.forEach((pokemon) => { 
        newArray.push(pokemon.name)
    });
    document.querySelector('#pokemonList').innerHTML =
    `
    <select id = 'pklist'>
    <option>-Type your pokemon-</option>
    ${
       newArray.map((pokemon) => {
           return `<option>${pokemon}</option>`
       })
    }
    </select>
    `;
    //jQuery is needed for select2
    $('#pklist').select2({width: '100%'});
}
getList();