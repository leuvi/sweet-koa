<template>
  <UIWrap>
    <UIHeader>
      <span>{{title}}</span>
      <em>{{describle}}</em>
    </UIHeader>
    <UIMain>
      <div class="education" v-loading="loading">
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
              <h3>{{e.school}}</h3>
              <p>专业：{{e.major}}</p>
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
      this.$axios.get("/api/education").then(res => {
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
.education {
  padding: 0 1.35rem;
  font-size: 0.55rem;
  .card {
    h3 {
      color: @accent-color;
    }
    p {
      margin-top: 10px;
      line-height: 1rem;
    }
  }
}
</style>