<template>
  <div class="main">
    <div class="top"></div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less">
.main {
  .top {
    background: #fff;
    height: 40px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }
  .content {
    min-height: 300px;
    background: #fff;
  }
}
</style>