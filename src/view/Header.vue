<template>
  <div class="header">
    <div class="content">
      <img class="logo" src="../assets/images/new/logo.png" alt="">
      <div class="nav">
        <div>{{language1 ? zh.Home : en.Home}}</div>
        <div>{{language1 ? zh.Github : en.Github}}</div>
        <div>{{language1 ? zh.Group : en.Group}}</div>
        <div>{{language1 ? zh.ContractUs : en.ContractUs}}</div>
        <div class="flex">
          <img src="../assets/images/new/gitHub_icon.png" alt="">
          <div>Get Status <i class="el-icon-arrow-right"></i></div>
        </div>
      </div>
      <div class="right">
        <el-dropdown @command="handleClick">
          <span class="el-dropdown-link text">
            {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="中文">中文</el-dropdown-item>
            <el-dropdown-item command="En">En</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

  </div>
</template>

<script>
import ZH from "../assets/script/zh.json";
import EN from "../assets/script/EN.json";
export default {
  props: ["input"],
  data() {
    return {
      value: this.input || "",
      language: "En",
      language1: false, // true 中文 false 英文
      zh: ZH,
      en: EN,
    };
  },
  watch: {
    input: function (val) {
      this.value = val;
    },
  },
  methods: {
    handleSearch() {
      this.$emit("searchData", this.value);
    },
    handleClick(command) {
      this.language = command;
      if (command == "中文") {
        this.language1 = true;
      } else {
        this.language1 = false;
      }
      this.$emit("switchLanguage", command);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 130px;
  background: #fff;
  color: #333;
  border-bottom: 2px solid #FAFAFA;
  .content {
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
    height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav{
      display: flex;
      width: 80%;
      justify-content: space-around;
      align-items: center;
      font-size: 18px;
      font-family: 'SourceHanSansCN-Regular';
      .flex{
        display: flex;
        justify-content: space-around;
        align-items: center;
        img{
          width: 32px;
          height: 31px;
          margin-right: 32px;
        }
        div{
          border: 1px solid #DEDFE4;
          height: 60px;
          width: 200px;
          text-align: center;
          line-height: 60px;
          i{
            margin-left: 20px;
          }
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #DEDFE4;
      width: 119px;
      height: 60px;
      i{
        margin-left: 10px;
      }
    }
  }
  .logo {
    width: 133px;
    height: 44px;
  }
  .language {
    width: 20px;
    height: 20px;
  }
  .text {
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #333;
    margin-left: 15px;
  }
}
@media only screen and (min-width: 1000px) and (max-width: 1300px) {
  .header .search {
    display: block;
  }
  .header .content {
    max-width: 1000px;
    padding: 0 20px;
  }
}
@media only screen and (max-width: 750px) {
  .header .search {
    display: none;
  }
}
</style>
<style lang="less">
.header {
  .el-input-group {
    width: 516px;
  }
  .el-input-group__append,
  .el-input-group__append button.el-button {
    background-color: #ffc421;
    color: #fff;
    border: none;
  }
  .el-input-group__prepend,
  .el-input__inner {
    background: #2b343f;
    border: none;
    color: #f5f6fa;
  }
  .el-input-group__prepend {
    border-right: 1px solid #323b48;
  }
}
</style>