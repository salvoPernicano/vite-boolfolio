<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue'
import { store } from '../store.js'
export default{
  components : {
    ProjectCard,
  },
  name: 'ProjectList',
  data(){
    return{
        store,
      projectsArray : [],
    }
  },
  methods: {
    getData(projectApiPage){

      axios.get(`${store.apiBaseUrl}/api/test`,
    {
        params: {
            page: projectApiPage
        }
    }
    )
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
           :key="element.id"
           :title="element.nome_progetto"
           :slug="element.slug"
           :descrizione="element.descrizione_progetto"
           :linguaggi="element.linguaggi">
           

</ProjectCard>
  </div>

</template>

<style >

</style>
