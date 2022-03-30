<template>
  <header class = "navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">

 
  <h1>P<span class="iconify" data-icon="mdi-pokeball" data-inline="false"></span>kedex</h1>
  <ul class = "nav navbar-nav flex-row float-right">
  <li class = "nav-item">
  <router-link class = "nav-link pr-3" to = "/"> Search</router-link>
  </li>
    <li class = "nav-item">
  <router-link class = "nav-link" to = "/table"> Table</router-link> 
  </li>
  </ul>
 </header>
</template>
<script>
export default{
    name: 'PageHeader'
}
</script>