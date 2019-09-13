<template>
  <header :style="{height: page == 'home' ? '15rem' : '6rem'}">
    <div class="home-header" v-if="page == 'home'">
      <div class="avatar">
        <img :src="require('@images/avatar.jpg')" alt />
      </div>
      <div class="name">苹果熊</div>
      <div class="location">
        <i class="el-icon-location"></i>
        <span>Chengdu, China</span>
      </div>
    </div>
    <div class="detail-header" v-else>
      <div class="back">
        <i @click="back" class="el-icon-back"></i>
      </div>
      <div class="title">
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: "detail"
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less">
.home-header {
  height: 100%;
  .vertical-center;
  .avatar {
    width: 5rem;
    height: 5rem;
    border: 3px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .name {
    margin-top: 0.7rem;
    font-size: 1.4rem;
  }
  .location {
    margin-top: 0.2rem;
    i {
      font-size: 0.6rem;
    }
  }
}
.detail-header {
  padding: 1rem;
  .back {
    color: #fff;
    i {
      font-size: 1.2rem;
    }
  }
  .title {
    color: #fff;
    margin-top: 1.5rem;
    font-size: 1.2rem;
    em {
      font-size: .6rem;
      margin-left: 5px;
    }
  }
}
</style>