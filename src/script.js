const getList = async () => {
    try{
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=111');
    const data = await resp.json();

    let newArray = [];
    data.results.forEach((pokemon) => { 
        newArray.push(pokemon.name)
    });
    document.querySelector('#pokemonList').innerHTML =
    `
    <select id = 'pklist' onchange = "showContent()">
    <option>-Type your pokemon-</option>
    ${
       newArray.map((pokemon) => {
           return `<option>${pokemon}</option>`
       })
    }
    </select>
    `;
    }catch(e){
        document.querySelector('#notice').innerHTML =
        '<h4>There was a problem fetching the data</h4>';
        console.log(e);
    }
    //jQuery is needed for select2
    $('#pklist').select2({width: '100%'});
}
getList();
const showContent = async () => {
    try{
    let selected = await document.querySelector('#pklist').value;
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${selected}`);
    const data = await resp.json();
    
    //get name
    let name = [];
    data.forms.forEach((pokemon) => {
        name.push(pokemon.name);
    });
  
    
    let moves = [];
    data.moves.forEach((moveSet => {
        moves.push(moveSet.move.name);
    }));
    let types = [];
    data.types.forEach((type) => {
        types.push(type.type.name);
    });
    
    let stats = [];
    data.stats.forEach((stat) => {
        stats.push(stat.base_stat);
    });
    //output
    document.querySelector("#infoContainer").innerHTML =
    `
    <h3>Name: ${name[0].charAt(0).toUpperCase() + name[0].slice(1)} </h3>
    <p>
    Type: 
    ${types.map((type) => {
        return `<li>${type}</li>`
    }).join("")}
    </p>
    <p> Base Stats:
    <li> HP: ${stats[0]} </li>
    <li> Atk: ${stats[1]} </li>
    <li> Def: ${stats[2]} </li>
    <li> Special Atk: ${stats[3]} </li>
    <li> Special Def: ${stats[4]} </li>
    <li> Speed:  ${stats[5]} </li>
    </p>
    <p>Base Experience: ${data.base_experience} </p> 
    <table  class="table table-hover">
    <thead>
    <tr><th>Moves</th></tr>
    </thead>
    <tbody>
    
    ${moves.map((moveName) => {
       
        return `<tr><td>
        ${moveName.charAt(0).toUpperCase() + moveName.slice(1)}
        </td></tr>`
        
    }).join("")}
    </tbody>
    </table>
    `;
    }catch(e){
        document.querySelector('#notice').innerHTML =
        '<h4>There was a problem fetching the data</h4>';
        console.log(e);
    }
  
}