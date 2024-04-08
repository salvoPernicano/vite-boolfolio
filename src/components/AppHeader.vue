<script>
export default {
    name : 'AppHeader',
    data () {
        

        return {}
    }
}
</script>


<template>
<nav>
  <ul>
    <li>
      <router-link :to="{name: 'home'}">Home</router-link>
  </li>
    <li><router-link :to="{name : 'blog'}">Projects</router-link></li>

  </ul>
</nav>
</template>



<style>
nav{
  height: 100px;
  background-color: lightsteelblue
}
nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  height: 100px;
  gap: 10px;
  padding: 1em;
}
</style>