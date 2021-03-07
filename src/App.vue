<template>
  <div id="app">
    <loading v-if="showLoading" />
    <router-view />
  </div>
</template>

<script>
import Loading from "@/components/Loading"
export default {
  name: "App",
  components: {
    Loading,
  },
  data() {
    return {
      showLoading: true
    }
  },
}
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
</style>
