<template>
  <div class="profile_container">
    <!-- <loading v-if="showLoading" /> -->
    <p>this is a profile and have alreay been loaded</p>
  </div>
</template>

<script>
// import Loading from "@/components/Loading"
export default {
  name: "Profile",
  // components: {
  //   Loading,
  // },
  data () {
    return {
      showLoading: true,
      timer: null,
    }
  },
  created () {
    const that = this
    that.timer = setInterval(function () {
      if (document.readyState === "complete") {
        that.showLoading = false
        window.clearInterval(that.timer)
      }
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile_container {
  width: 100%;
  height: 100%;
  background: red;
}
</style>
