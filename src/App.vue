<script>
import MainApp from './components/MainApp.vue'
import AppHeader from './components/AppHeader.vue'
export default{
  components : {
    MainApp,
    AppHeader
  }, 
  data(){
    return{
      
    }
  }
}
</script>

<template>
  <AppHeader/>
<router-view></router-view>

 <!-- <MainApp /> -->
</template>

<style scoped>

</style>
