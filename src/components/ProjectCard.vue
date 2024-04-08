<script>
import {store} from '../store.js'
export default {
    name :'ProjectCard',
    props: 
        [
            'title',
            'slug',
            'descrizione',
            'linguaggi'
        ],
    
    data () {
        return {
            store
        }
    }
}
</script>

<template>
    <router-link :to="{name:'single-project', params:{slug:slug}}">
    <div class="card">
         <h1>{{ title }}</h1>
         <span>{{ linguaggi }}</span>
         <p>Descrizione: {{descrizione }}</p>
        </div>
    </router-link>
</template>


<style>
.card{
    width: 400px;
    margin: 0 auto;
    padding: 1em;
    border-radius: 5px;
    background-color: lightgray;
    margin-block: 2em;
    color: black;
}

h1,
span,
p{
    margin-block: 5px;
}
</style>