<template>

     <table class = 'table table-dark'>
     <thead class="thead-dark">
     <tr>
     <th>No</th>
     <th>Name</th>
     </tr>
     </thead>
     <tbody class="tbody-dark">
     </tbody>
     </table>
</template>
<script>
import "jquery/dist/jquery.min.js";
import "datatables.net-dt";
import $ from "jquery";

export default{

  async created(){
      try{
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=111');
        const data = await resp.json();
        //name
        let newArray = [];
        data.results.forEach((pokemon,i) => { 
            let name = pokemon.name;
            name = name[0].toUpperCase() + name.substring(1)
            newArray.push(`<tr><td>${i+1}</td><td>${name}</td></tr>`)
        });
        //pokemon list output

    
        $('table tbody').append(
            newArray
        );
     

        $('table').dataTable({
            "responsive" : true,
            "autoWidth" : false,
            "pageLength" : 10,
            "bDestroy" : true,
            "destroy" : true,
            "serverSide" : false,
            "bInfo" : false,
            "info" : false,
            "bPaginate" : true,
            "bFilter" : true,
            "lengthChange":true
        });
        $('.paginate_button').css('margin','2px')
       
        }catch(e){
            
            console.log(e);
        }
    }

}
</script>