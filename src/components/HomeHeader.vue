<template>
  <div>
    <section class="home-header section-container">
      <h1 class="home-header-title">
        Profile
      </h1>
    </section>
    <div class="home-header__content">
      <div>
        <a
          class="home-header__email lines-shift-container"
          href="kisky3@126.com">kisky3@126.com</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
    }
  }
}
</script>
<style>
.home-header {
  padding-top: 140px;
}
.section-container {
  padding-left: 60px;
  padding-right: 60px;
}
.home-header-title {
  line-height: 250px;
  color: #111;
  font-size: 130px;
  margin-bottom: 20px;
  font-family: system-ui;
  font-weight: 850;
  letter-spacing: -1px;
  text-align: left;
}
.home-header__content {
  display: flex;
  justify-content: space-between;
}
.home-header__email {
    color: inherit;
    margin-bottom: 20px;
    display: inline-block;
}
</style>
