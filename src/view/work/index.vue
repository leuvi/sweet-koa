<template>
  <UIWrap>
    <UIHeader>
      <span>{{title}}</span>
      <em>{{describle}}</em>
    </UIHeader>
    <UIMain>
      <div class="work" v-loading="loading">
        <el-timeline>
          <el-timeline-item
            v-for="(e, index) in list"
            :key="index"
            size="large"
            icon="el-icon-time"
            :timestamp="`${e.startDate}-${e.endDate}`"
            placement="top"
          >
            <el-card class="card">
              <div class="logo">
                <img :src="require(`@images/logo_${e.logo}.jpg`)" alt="">
              </div>
              <h3>{{e.compony}}</h3>
              <p class="tag">
                <span v-for="(tag, $index) in e.tag" :key="$index">{{tag}}</span>
              </p>
              <p><i class="el-icon-user-solid"></i> {{e.position}}</p>
              <p v-for="(info, $index) in e.info" :key="$index">{{info}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
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
      title: "",
      describle: "",
      list: []
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.loading = true;
      this.$axios.get("/api/work").then(res => {
        if (res.code == 10000) {
          this.loading = false;
          this.title = res.data.name;
          this.describle = res.data.describle;
          this.list = res.data.list;
        }
      });
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
.work {
  padding: 0 1.35rem;
  font-size: 0.55rem;
  .card {
    position: relative;
    .logo {
      position: absolute;
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      right: .5rem;
      top: .5rem;
      img {
        width: 100%;
      }
    }
    h3 {
      color: @accent-color;
    }
    .tag {
      span {
        display: inline-block;
        margin-right: 10px;
        padding: 4px 6px;
        line-height: 1;
        font-size: 12px;
        background: #ededed;
        border-radius: 3px;
        margin-top: 10px;
      }
    }
    p {
      margin-top: 10px;
      line-height: 1rem;
    }
  }
}
</style>