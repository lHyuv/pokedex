<template>
  <div id = "notice_2"></div><br>
     <table class = 'table table-dark' id = "list_table">
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
import request_url from "../assets/env.js";

export default{

  async created(){
      try{
        const resp = await fetch(request_url);
        const data = await resp.json();
        //name
        let newArray = [];
        data.results.forEach((pokemon,i) => { 
            let name = pokemon.name;
            name = name[0].toUpperCase() + name.substring(1)
            newArray.push(`<tr><td>${i+1}</td><td>${name}</td></tr>`)
        });
        //pokemon list output

        $('table').DataTable().destroy();
        $('table tbody').empty();
        
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
            "bInfo" : true,
            "info" : true,
            "bPaginate" : true,
            "bFilter" : true,
            "lengthChange":true,
            "drawCallback": ()=>{
                  $('.paginate_button').css('margin','10px');
            }
        });
          $('.paginate_button').css('margin','10px');
        }catch(e){
           document.querySelector('#notice_2').innerHTML =
            '<h4>There was a problem fetching the data. Please try again later.</h4>';
          //  console.log(e);
            document.getElementById("list_table").style.display = "none";
        }
    }

}
</script>