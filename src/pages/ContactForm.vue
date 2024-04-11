<script>
import axios from 'axios'
import { store } from '../store';
export default {
    name : 'ContactForm',
    data () {
        return {
            store,
            name : '',
            email : '',
            message : '',
            errors : {}
        }
    },
    methods: {
        sendForm(){

            const data = {
                name : this.name,
                email : this.email,
                message : this.message,
            };

            this.errors = {};

            axios.post(`${this.store.apiBaseUrl}/api/contacts`, data)
        }
    }
}
</script>

<template>
    <div>

    </div>
</template>



<style>

</style>