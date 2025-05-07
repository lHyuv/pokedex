
<script>
import "jquery/dist/jquery.min.js";
import "datatables.net-dt";
import $ from 'jquery';
import Selectr from 'mobius1-selectr';
import request_url from "../assets/env.js";

export default{
  name: 'Search',


  async created(){
  

    try{

    const resp = await fetch(request_url);
    const data = await resp.json();
    console.log(data)
    //name
    let newArray = [];
    data.results.forEach((pokemon) => { 
        newArray.push(`<option>${pokemon.name}</option>`)
    });
    //pokemon list output

  
    $('#pokemonList').append(
        newArray
    );
    
    //
    $('.paginate_button').css('display','none');
    $('.ellipsis').css('display','none');
    $('.dataTables_length').css('display','none');
    $('.dataTables_filter').css('display','none');
    //

    }catch(e){
 
        document.querySelector('#notice').innerHTML =
        '<h4>There was a problem fetching the data. Please try again later.</h4>';
        //console.log(e);
        document.getElementById("infoSkill").style.display = "none";
        document.getElementById("pokemonList").style.display = "none";
        document.getElementsByClassName("selectr-container")[0].style.display = "none";
    }



new Selectr(document.getElementById('pokemonList'));


  },
  methods: {
    async showContent(){
          try{
    let selected = await document.querySelector('#pokemonList').value;
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
    `
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
     
        return `<li style = 'color:${color}'  class = "${classType}" >
       <b style = 'padding: 10px'> ${type.charAt(0).toUpperCase() + type.slice(1)}</b>
        </li><br>`
    }).join("")}
    </ul>
    </p>
    <p><h5> Base Stats </h5>
    <ul>
    <li class = 'fa fa-compass' style = 'padding: 10px'> <b>HP:</b> ${stats[0]} </li><br>
    <li class = 'fa fa-compass' style = 'padding: 10px'> <b>Atk:</b> ${stats[1]} </li><br>
    <li class = 'fa fa-compass' style = 'padding: 10px'> <b>Def:</b> ${stats[2]} </li><br>
    <li class = 'fa fa-compass' style = 'padding: 10px'> <b>Special Atk:</b> ${stats[3]} </li><br>
    <li class = 'fa fa-compass' style = 'padding: 10px'> <b>Special Def:</b> ${stats[4]} </li><br>
    <li class = 'fa fa-compass' style = 'padding: 10px'> <b>Speed:</b>  ${stats[5]} </li><br>
    </ul>
    </p>
    <p><h5>Base Experience </h5>
    <ul><li class = 'fa fa-compass' style = 'padding: 10px'> ${data.base_experience}</li></ul> </p> 
    
    `;
    document.querySelector('#infoSkill').innerHTML =
    `
    <table  id = "infoSkill" class="table table-hover">
    <thead class = "thead-light">
    <tr><th>Moves</th></tr>
    </thead>
    <tbody>
    
    ${moves.map((moveName) => {
       
        return `<tr><td><i class = 'fa fa-cog'></i>&nbsp
        ${moveName.charAt(0).toUpperCase() + moveName.slice(1)}
        </td></tr>`
        
    }).join("")}
    </tbody>
    </table>
    `;
    $(document).ready(()=>{
    $('#infoSkill').dataTable({
            "responsive" : true,
            "autoWidth" : true,
            "pageLength" : 5,
            "bDestroy" : true,
            "destroy" : true,
            "serverSide" : false,
            "bInfo" : false,
            "info" : false,
            "bPaginate" : true,
            "bFilter" : true,
            "lengthChange":false,
            "pagingType":"full_numbers",
            "drawCallback": ()=>{
                //iterate page numbers and add padding
                let page_numbers = document.getElementsByClassName("paginate_button");
                for(let i = 0; i < page_numbers.length; i++){
                    page_numbers[i].style.padding = "10px";
                }
               
            }

         
    });
                
    });
    document.querySelector('#infoName').innerHTML = 
    `<h3>${name[0].charAt(0).toUpperCase() + name[0].slice(1)} </h3>`;
    document.querySelector('#infoPic').innerHTML =
    `
    <img src = '${data.sprites.front_default}' style = ' height: 120%; width: 120%; '>
    `
    }catch(e){
       //console.log(e);
       
    }
  
    }
  }
}

</script>
<template>
 <link href="https://unpkg.com/mobius1-selectr@latest/dist/selectr.min.css" rel="stylesheet" type="text/css">

    
    <select id = 'pokemonList' @change.prevent = "showContent()">
    <option disabled selected value = "">-Enter a Pokemon name-</option>
    </select>
  
</template>
