<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <vue-ellipse-progress
      :data="circles"
      :progress="progress"
      :angle="-90"
      color="blue"
      :colorFill="colorFillGradient"
      emptyColor="#8ec5fc"
      :emptyColorFill="emptyColorFillGradient"
      :size="300"
      :thickness="10"
      emptyThickness="10%"
      lineMode="in 10"
      :legend="true"
      :legendValue="180"
      legendClass="legend-custom-style"
      dash="60 0.9"
      animation="reverse 700 400"
      :noData="false"
      :loading="false"
      fontColor="white"
      :half="false"
      :gap="10"
      dot="10 blue"
      fontSize="5rem"
    >
      <span slot="legend-value">/200</span>
      <p slot="legend-caption">GOOD JOB</p>
    </vue-ellipse-progress>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">
          Twitter
        </a>
      </li>
      <br />
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
