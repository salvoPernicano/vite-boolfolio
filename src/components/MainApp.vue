<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue'
export default{
  components : {
    ProjectCard,
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
  <ProjectCard v-for="(element,index) in projectsArray" 
           :key="index"
           :propsObject="element"/>
  </div>

</template>

<style >

</style>
