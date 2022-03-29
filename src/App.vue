<script>
import Dex from './components/Dex.vue';
//import 'jquery/dist/jquery.min.js';
//import $ from 'jquery';
export default{
  name: 'App',
  components: {
    Dex,
    
  },
  mounted(){
    //add external scripts
    let iconify = document.createElement("script");
    iconify.setAttribute("src","https://code.iconify.design/1/1.0.7/iconify.min.js");
    document.head.appendChild(iconify);

  }
}
</script>
<template>
    <!--bootstrap-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/slate/bootstrap.min.css" integrity="sha384-8iuq0iaMHpnH2vSyvZMSIqQuUnQA7QM+f6srIdlgBrTSEyd//AWNMyEaSF2yPzNQ" crossorigin="anonymous">
    <!--select2-->
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <!--font awesome-->
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href = "./assets/style.css">
  <header class = "d-flex justify-content-center">
  <h1>P<span class="iconify" data-icon="mdi-pokeball" data-inline="false"></span>kedex</h1>
  </header>
  <Dex></Dex>
</template>



