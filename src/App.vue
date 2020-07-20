<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
export default {
  name: "App",
  created() {},
  mounted() {}
};
</script>

<style>
@import url("./assets/css/reset.css");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background-color: #eee;
}
</style>
