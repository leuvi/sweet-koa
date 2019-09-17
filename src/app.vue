<template>
  <transition :enter-active-class="enter" :leave-active-class="leave">
    <router-view class="animated"></router-view>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      enter: "",
      leave: ""
    };
  },
  mounted() {
    this.$utils.remLayout();
  },
  watch: {
    $route(to, from) {
      if (to.fullPath.length == from.fullPath.length) {
        (this.enter = ""), (this.leave = "");
      } else if (to.fullPath.length > from.fullPath.length) {
        (this.enter = "slideInRight"), (this.leave = "slideOutLeft");
      } else {
        (this.enter = "slideInLeft"), (this.leave = "slideOutRight");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.animated {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
}
</style>