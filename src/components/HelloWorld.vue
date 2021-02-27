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
      :legendFormatter="
        ({ currentValue }) =>
          new Intl.NumberFormat('de-DE').format(currentValue)
      "
      legendClass="legend-custom-style"
      dash="60 0.9"
      animation="reverse 700 400"
      :noData="false"
      :loading="false"
      fontColor="white"
      :half="false"
      :gap="10"
      dot="10 blue"
      reverse
      fontSize="5rem"
    >
      <span slot="legend-value">/200</span>
      <p slot="legend-caption">GOOD JOB</p>
    </vue-ellipse-progress>
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
