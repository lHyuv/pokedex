
<script>
import Search from './Search.vue';
export default{
    name: 'Dex',
    components: {
        Search
    }
}

</script>
<template>
 
    <div id = "notice"></div><br>
    <div id ="container" >
    <div  class = "d-flex justify-content-center">
        <Search></Search>
    </div>
    <div class ='row'>
    <div class = 'col-sm-12  d-flex justify-content-center'>
        <div id = 'infoName'></div>
    </div>
    </div>
    <div class ='row'>
    <div class = 'col-sm-12  d-flex justify-content-center'>
        <div id = 'infoPic'></div>  
    </div>
    </div>
    <div class ='row'>
        <div class = 'col-sm-6 d-flex justify-content-center'>
        <div id = 'infoContainer'></div> 
        </div>
        <div class = 'col-sm-6 d-flex justify-content-center'>
            <br>
        <div id = 'infoSkill'></div>
        </div>
    </div>

    </div>
</template>
