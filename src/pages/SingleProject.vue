<script>
import axios from 'axios'
import { store } from '../store.js'

export default {
    name: 'SingleProject',
    components: {

    },
    data() {
        return {
            project: [],
            store
        }
    },
    methods: {
        getSingleProject() {

            axios.get(`${store.apiBaseUrl}/api/test/${this.$route.params.slug}`)
                .then(res => {
                    console.log(res)
                    this.project = res.data.project
                })
        }
    },
    mounted() {
        this.getSingleProject()
    }
}

</script>

<template>
    <div class="card">
        <h1>{{ project?.nome_progetto }}</h1>
        <div>
            <h4>{{ project?.linguaggi }}</h4>
            <p>
                {{ project?.descrizione_progetto }}
            </p>
        </div>
    </div>
</template>

<style></style>