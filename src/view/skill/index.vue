<template>
  <UIWrap>
    <UIHeader>
      <span>{{title}}</span>
      <em>{{describle}}</em>
    </UIHeader>
    <UIMain>
      <div class="skill" v-loading="loading">
        <h3>
          <i class="el-icon-document"></i>熟悉以下技能和工具
        </h3>
        <ul class="tags">
          <li v-for="(tag, index) in tags" :key="index">{{tag}}</li>
        </ul>
        <h3>
          <i class="el-icon-document"></i>组件库
        </h3>
        <ul class="library">
          <li v-for="(e, index) in library" :key="index">
            <h4>名称：{{e.name}}</h4>
            <p>技术栈：{{e.skill}}</p>
            <p>{{e.describle}}</p>
            <p>
              <i class="el-icon-link"></i>
              <a :href="e.website" target="_blank">{{e.website}}</a>
            </p>
          </li>
        </ul>
        <h3>
          <i class="el-icon-document"></i>自我描述
        </h3>
        <ul class="list">
          <li v-for="(e, index) in list" :key="index">{{index + 1}}、{{e}}</li>
        </ul>
        <h3>
          <i class="el-icon-document"></i>联系方式
        </h3>
        <div class="email">
          <i class="el-icon-message"></i> Email：528046@qq.com
        </div>
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
      list: [],
      tags: [],
      library: []
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.loading = true;
      this.$axios.get("/api/skill").then(res => {
        if (res.code == 10000) {
          this.loading = false;
          this.title = res.data.name;
          this.describle = res.data.describle;
          this.library = res.data.library;
          this.tags = res.data.tags;
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
.skill {
  padding: 0 1.35rem;
  font-size: 0.55rem;
  h3 {
    font-size: 0.7rem;
    height: 1.5rem;
    border-bottom: 1px dashed #ededed;
    margin-top: 30px;
    &:first-child {
      margin: 0;
    }
    i {
      margin-right: 8px;
    }
  }
  .tags {
    padding-top: 5px;
    li {
      display: inline-block;
      margin-right: 10px;
      padding: 4px 8px;
      background: #ededed;
      border-radius: 5px;
      margin-top: 10px;
    }
  }
  .library {
    li {
      margin-top: 15px;
      background: #fffbf3;
      padding: 15px;
      border-radius: 5px;
      p {
        word-break: break-all;
        line-height: 1rem;
        margin-top: 10px;
        i {
          font-size: 0.7rem;
        }
      }
    }
  }
  .list {
    li {
      margin-top: 15px;
      background: #fffbf3;
      padding: 15px;
      border-radius: 5px;
      line-height: 1rem;
    }
  }
  .email {
    margin-top: 20px;
    i {
      font-size: 0.7rem;
    }
  }
}
</style>