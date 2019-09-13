<template>
  <UIWrap page="home">
    <UIHeader page="home"></UIHeader>
    <UIMain>
      <div class="home" v-loading="loading">
        <ul class="list">
          <li v-for="(e, index) in list" :key="index">
            <div class="left">
              <i :class="'el-icon-' + iconlist[e.url]"></i>
            </div>
            <div class="right">
              <h3 @click="intoDetail(e.url)">{{e.name}}</h3>
              <div class="tags">
                <div class="inner">
                  <span v-for="($e, $index) in e.tag" :key="$index">{{$e}}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </UIMain>
    <UIFooter></UIFooter>
  </UIWrap>
</template>

<script>
import UIWrap from "@common/ui/wrap/index.vue";
import UIHeader from "@common/ui/header/index.vue";
import UIFooter from "@common/ui/footer/index.vue";
import UIMain from "@common/ui/main/index.vue";

export default {
  data() {
    return {
      loading: false,
      list: [],
      iconlist: {
        skill: "view",
        work: "discover",
        project: "medal",
        education: "trophy"
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      this.$axios.get("/api/list").then(res => {
        if (res.code == 10000) {
          this.loading = false;
          this.list = res.data;
        }
      });
    },
    intoDetail(path) {
      this.$router.push({ path });
    }
  },
  components: {
    UIWrap,
    UIHeader,
    UIFooter,
    UIMain
  }
};
</script>

<style lang="less">
.home {
  .list {
    padding: 0 1.35rem;
    li {
      height: 4rem;
      padding: 1rem 0;
      border-radius: 10px;
      margin-bottom: 12px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      display: flex;
      .left {
        flex-basis: 3.5rem;
        flex-shrink: 0;
        .vertical-center;
        i {
          font-size: 1.6rem;
          color: #999;
        }
      }
      .right {
        width: calc(100% - 3.5rem);
        padding-right: 10px;
        h3 {
          font-size: 0.75rem;
        }
        .tags {
          margin-top: 10px;
          color: #666;
          width: 100%;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          .inner {
            display: flex;
            span {
              display: inline-block;
              margin-right: 10px;
              word-break: keep-all;
              font-size: 0.5rem;
              padding: 3px 5px;
              background: #ededed;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
}
</style>