<template>
  <div class="hello">
    <vue-ellipse-progress
      :data="circles"
      :progress="100"
      :angle="-90"
      color="black"
      :color-fill="colorFillGradient"
      empty-color="#eeeeee"
      :empty-color-fill="emptyColorFillGradient"
      :size="300"
      :thickness="1"
      empty-thickness="1%"
      line-mode="normal"
      :legend="true"
      :legend-value="100"
      font-family="arial black"
      :legend-formatter="
        ({ currentValue }) =>
          new Intl.NumberFormat('de-DE').format(currentValue)
      "
      legend-class="legend-custom-style"
      animation="reverse 700 400"
      :no-data="false"
      :loading="false"
      font-color="black"
      :half="false"
      :gap="10"
      dot="8 black"
      reverse
      font-size="3rem"
    >
      <span slot="legend-value" style="font-size: 15px">%</span>
    </vue-ellipse-progress>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      progress: 34
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
