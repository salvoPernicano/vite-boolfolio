<script>
import axios from 'axios';
import AppCards from './AppCards.vue'
export default{
  components : {
    AppCards,
  },
  name: 'MainApp',
  data(){
    return{
      projectsArray : [],
    }
  },
  methods: {
    getData(){

      axios.get('http://127.0.0.1:8000/api/test')
      .then(response => {
        console.log(response.data.projects)
        this.projectsArray = (response.data.projects)
      })
    }
  },
  mounted() {
    this.getData()
  }
}

</script>

<template>
 <h1>Lista progetti</h1>

<div class="container">
  <AppCards v-for="(element,index) in projectsArray" 
           :key="index"
           :propsObject="element"/>
  </div>

</template>

<style >

</style>
