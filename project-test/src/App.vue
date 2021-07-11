<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link v-bind:to="{name:'user',params:{userID,userName}}" tag="button" replace>路由测试</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userID:10,
      userName:'thr'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 
</style>
