<template>
  <div class="day_records">
    <Header />
    <div class="container">
      <div class="center">
        <div class="item">
          <div class="cont">
            <p class="text">3</p>
            <p class="label">矿机数</p>
          </div>
          <img src="../assets/images/img_miner.png" />
        </div>
        <div class="item">
          <div class="cont">
            <p class="text">18.7M</p>
            <p class="label">算力</p>
          </div>
          <img src="../assets/images/img_power.png" />
        </div>
        <div class="item">
          <div class="cont">
            <p class="text">3</p>
            <p class="label">未分账</p>
          </div>
          <img src="../assets/images/img_coin.png" />
        </div>
        <div class="item">
          <div class="cont">
            <div class="num">
              <span>高度：</span>
              <b>2132</b>
            </div>
            <div class="num">
              <span>矿池算力：</span>
              <b>2132</b>
            </div>
            <div class="num">
              <span>总矿工数：</span>
              <b>2132</b>
            </div>
          </div>
        </div>
      </div>

      <div class="block">
        <h3 class="title">账单列表</h3>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="时间" width="180">
          </el-table-column>
          <el-table-column prop="name" label="数量(SAT)" width="180">
          </el-table-column>
          <el-table-column prop="address" label="交易 ID">
          </el-table-column>
          <el-table-column prop="address" label="状态" width="180">
          </el-table-column>
        </el-table>
      </div>

      <div class="block">
        <h3 class="title">矿机列表</h3>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="编号">
          </el-table-column>
          <el-table-column prop="name" label="矿机名">
          </el-table-column>
          <el-table-column prop="address" label="实时算力">
          </el-table-column>
          <el-table-column prop="address" label="平均算力">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
export default {
  name: "home",
  data() {
    return {
      tableData: [],
    };
  },
  components: {
    Footer,
    Header,
  },
  methods: {},
  mounted() {},
  destroyed() {},
};
</script>
<style lang="less" >
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.center {
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  .item {
    width: 280px;
    height: 120px;
    background: #ffffff;
    box-shadow: 1px 4px 8px 0px #dee3e8;
    border-radius: 6px;
    padding: 20px 20px 0 20px;
    display: flex;
    justify-content: space-between;
    &:nth-child(3) {
      width: 340px;
    }
    &:nth-child(4) {
      width: 230px;
    }
    .cont {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    img {
      width: 90px;
      height: 90px;
    }
    .label {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #9a9a9a;
    }
    .text {
      font-size: 32px;
      font-family: DINPro;
      font-weight: 500;
      color: #121212;
    }
    .num {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ffbc01;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #9a9a9a;
        line-height: 30px;
      }
    }
  }
}
.block {
  background: #fff;
  padding: 35px;
  margin-bottom: 40px;
  box-shadow: 1px 4px 8px 0px #dee3e8;
  border-radius: 6px;
  .title {
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #343434;
    margin-bottom: 35px;
  }
}
.el-table {
  thead tr,
  thead th {
    background: #f8f8f8;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #343434;
  }
}
@media only screen and (min-width: 1000px) and (max-width: 1300px) {
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
  .center {
    .item {
      width: 220px;
      height: 120px;
      &:nth-child(3) {
        width: 280px;
      }
      &:nth-child(4) {
        width: 180px;
      }
    }
  }
}
@media only screen and (max-width: 690px) {
  .center {
    .item {
      width: 50%;
    }
  }
}
</style>