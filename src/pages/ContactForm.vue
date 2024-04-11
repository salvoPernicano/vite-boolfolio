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
                success : false
            };

            this.errors = {};

            axios.post(`${this.store.apiBaseUrl}/api/contacts`, data).then( res => {
                this.success = res.data.errors
                if (!this.success){
                    this.errors = res.data.success;
                } else {
                    this.name = ''
                    this.email = ''
                    this.message = ''
                }
            })
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