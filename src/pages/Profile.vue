<template>
  <div class="warpper">
    <!-- <loading v-if="showLoading" /> -->
    <home-header />
  </div>
</template>

<script>
// import Loading from "@/components/Loading"
import HomeHeader from "@/components/HomeHeader"
export default {
  name: "Profile",
  components: {
    // Loading,
    HomeHeader
  },
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
</style>
