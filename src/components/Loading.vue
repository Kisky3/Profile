<template>
  <div class="loading">
    <vue-ellipse-progress
      :progress="100"
      :angle="-90"
      color="black"
      empty-color="#eeeeee"
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
      font-size="3rem">
      <span
        slot="legend-value"
        style="font-size: 19px">%</span>
    </vue-ellipse-progress>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      progress: 34
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
}
</style>
