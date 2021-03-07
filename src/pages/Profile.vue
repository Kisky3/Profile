<template>
  <div class="profile_container">
    <loading />
  </div>
</template>

<script>
import Loading from "@/components/Loading"
export default {
  name: "Profile",
  components: {
    Loading
  },
  data() {
    return {}
  },
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
