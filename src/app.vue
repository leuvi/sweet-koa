<template>
  <router-view></router-view>
</template>

<script>
export default {
  mounted() {
    this.$utils.remLayout()
  }
}
</script>