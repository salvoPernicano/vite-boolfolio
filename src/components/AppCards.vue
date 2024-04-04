<script>
export default {
    name :'AppCards',
    props: [
    'propsObject'
    ],
    data () {
        return {}
    }
}
</script>

<template>
    <div class="card">
        <h1>Nome progetto: {{ propsObject.nome_progetto }}</h1>
        <p>Descrizione: {{ propsObject.descrizione_progetto }}</p>
        <span>Linguaggi usati {{ propsObject.linguaggi }}</span>
    </div>
</template>


<style>
.card{
    background-color: lightgray;
    margin-block: 2em;
    color: black;
}
</style>