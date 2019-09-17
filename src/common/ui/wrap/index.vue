<template>
  <div :class="'wrap ' + page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: "detail"
    }
  }
};
</script>

<style lang="less">
.wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 0.6rem;
  &.home {
    background: url("../../../assets/images/bg-bird.jpg") no-repeat;
    background-size: 100%;
  }
  &.detail {
    background: url("../../../assets/images/mountain.jpg") no-repeat;
    background-size: 100%;
    background-position: 0 -3rem;
  }
}
</style>