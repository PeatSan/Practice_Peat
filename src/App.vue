<template>
  <div id="app">
    <router-link to="/HelloWorld"> Home </router-link> |
    <router-link to="/vmodel"> V-Model </router-link> |
    <router-link to="/von"> V-On </router-link> |
    <router-link to="/vbind"> V-Bind </router-link>|
    <router-link to="/prop"> prop </router-link> |
    <router-link to="/axios"> axios </router-link>
    <br />
    <br />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-exact-active {
  color: red;
}
</style>