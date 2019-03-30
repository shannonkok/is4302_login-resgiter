<template>
  <div id="app">
    <div id="nav">
      <!--<router-link to="/">Home</router-link>-->
      <br>
      <img width="15%" src="./assets/charity.png" alt="logo of our project" height="200px">
      <router-view/>
    </div>
  </div>
</template>

<script>
//import Login from "./components/Login";

export default {
  name: "App",
  components: {}
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>