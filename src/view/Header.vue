<template>
  <div class="header">
    <div class="content">
      <img class="logo" src="../assets/images/logo.png" alt="">
      <div>
        <el-input placeholder="请输入内容" v-model="input1">
          <template slot="prepend">账号</template>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="right">
        <img class="language" src="../assets/images/icon_laug.png" alt="">
        <span class="text">语言</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
    };
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 90px;
  background: #222832;
  .content {
    max-width: 1200px;
    margin: 0 auto;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right {
      display: flex;
      align-items: center;
    }
  }
  .logo {
    width: 210px;
    height: 24px;
  }
  .language {
    width: 20px;
    height: 20px;
  }
  .text {
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #f5f6fa;
    margin-left: 15px;
  }
}
@media only screen and (min-width: 1000px) and (max-width: 1300px) {
  .header .content {
    max-width: 1000px;
  }
}
</style>
<style lang="less">
.header .el-input-group__append button.el-button {
  background-color: #ffc421;
}
</style>