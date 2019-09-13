<template>
  <footer>
    <div class="wavelogo">
      <div class="inner"></div>
    </div>
    <p>© {{new Date().getFullYear()}} 苹果熊版权所有</p>
  </footer>
</template>

<style lang="less">
footer {
  width: 100%;
  text-align: center;
  padding: 30px 0;
  color: #ccc;
  p {
    margin-top: 10px;
    font-size: 12px;
  }
  .wavelogo {
    width: 1.6rem;
    height: 1.6rem;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    background-color: #1989fa;
    .inner {
      position: relative;
      width: 1.6rem;
      height: 1.6rem;
      &:before,
      &:after {
        content: "";
        position: absolute;
        left: -150%;
        top: -330%;
        width: 400%;
        height: 400%;
        background: #fff;
        animation: wmove 4s linear infinite;
      }
      &:before {
        border-radius: 46%;
      }
      &:after {
        border-radius: 43%;
        opacity: 0.5;
      }
    }
  }
}
@keyframes wmove {
  to {
    transform: rotate(360deg);
  }
}
</style>