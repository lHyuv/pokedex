const getList = async () => {
    try{
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=111');
    const data = await resp.json();
    //name
    let newArray = [];
    data.results.forEach((pokemon) => { 
        newArray.push(pokemon.name)
    });
    //pokemon list output
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
  
    //get moves
    let moves = [];
    data.moves.forEach((moveSet => {
        moves.push(moveSet.move.name);
    }));
    //get types
    let types = [];
    data.types.forEach((type) => {
        types.push(type.type.name);
    });
    //get stats
    let stats = [];
    data.stats.forEach((stat) => {
        stats.push(stat.base_stat);
    });

    let classType = ' ';
    let color = ' ';
    //output
    document.querySelector("#infoContainer").innerHTML =
    `<br>
    
    <p>
    <h5>Type</h5>
    <ul>
    ${types.map((type) => { //colors and icons
        switch(type){
            case 'fire':
            classType = "fa fa-fire";
            color = 'red';
            break;
            case 'water':
            classType = "fa fa-tint";
            color = 'blue';
            break;
            case 'ice':
            classType ="fa fa-snowflake-o";
            color = 'skyblue';
            break;
            case 'flying':
            classType = "fa fa-ravelry";
            color = 'gray';
            break;
            case 'ground':
            classType = "fa fa-square";
            color = 'lightbrown';
            break;
            case 'fighting':
            classType = "fa fa-hand-rock-o";
            color = 'white';
            break;
            case 'light':
            classType = "fa fa-star";
            color = 'lightyellow';
            break;
            case 'dark':
            classType = "a fa-circle";
            color = 'magenta';
            break;
            case 'normal':
            classType = "fas fa-stop";
            color = 'gray';
            break;
            case 'grass':
            classType = "fa fa-leaf";
            color = 'green';
            break;
            case 'electric':
            classType = "fa fa-bolt";
            color = 'yellow';
            break;
            case 'bug':
            classType = "fa fa-bug";
            color = 'lightred';
            break;
            case 'poison':
            classType = "fa fa-times";
            color = 'violet';
            break;
            case 'ghost':
            classType = "fa fa-snapchat-ghost";
            color = 'darkblue';
            break;
            case 'fairy':
            classType = "fa fa-magic";
            color = 'pink';
            break;
            case 'psychic':
            classType = "fa fa-spoon";
            color = 'silver';
            break;
            case 'steel':
            classType = "fa fa-cube";
            color = 'steel';
            break;
            case 'rock':
            classType = "fa fa-codepen";
            color = 'brown';
            break;
            default:
            classType = "";
            color = 'black';
  
        }
     
        return `<li style = 'color:${color}'  class = "${classType}">
        ${type}
        </li><br>`
    }).join("")}
    </ul>
    </p>
    <p><h5> Base Stats </h5>
    <ul>
    <li class = 'fa fa-compass'> HP: ${stats[0]} </li><br>
    <li class = 'fa fa-compass'> Atk: ${stats[1]} </li><br>
    <li class = 'fa fa-compass'> Def: ${stats[2]} </li><br>
    <li class = 'fa fa-compass'> Special Atk: ${stats[3]} </li><br>
    <li class = 'fa fa-compass'> Special Def: ${stats[4]} </li><br>
    <li class = 'fa fa-compass'> Speed:  ${stats[5]} </li><br>
    </ul>
    </p>
    <p><h5>Base Experience </h5>
    <ul><li class = 'fa fa-compass'> ${data.base_experience}</li></ul> </p> 
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
    document.querySelector('#infoName').innerHTML = 
    `<h3>${name[0].charAt(0).toUpperCase() + name[0].slice(1)} </h3>`;
    document.querySelector('#infoPic').innerHTML =
    `
    <img src = '${data.sprites.front_default}'>
    `
    }catch(e){
        document.querySelector('#notice').innerHTML =
        '<h4>There was a problem fetching the data</h4>';
        console.log(e);
    }
  
}