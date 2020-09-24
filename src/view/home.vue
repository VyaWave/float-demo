<template>
  <div class="day_records">
    <Header />
    <div class="container">
      <div class="center">
        <div class="item">
          <div class="cont">
            <p class="text">{{miners.length}}</p>
            <p class="label">矿机数</p>
          </div>
          <img src="../assets/images/img_miner.png" />
        </div>
        <div class="item">
          <div class="cont">
            <p class="text">{{totalPower}}</p>
            <p class="label">算力</p>
          </div>
          <img src="../assets/images/img_power.png" />
        </div>
        <div class="item">
          <div class="cont">
            <p class="text">{{amount_cur/1000}}</p>
            <p class="label">未分账</p>
          </div>
          <img src="../assets/images/img_coin.png" />
        </div>
        <div class="item">
          <div class="cont">
            <div class="num">
              <span>高度：</span>
              <b>{{height}}</b>
            </div>
            <div class="num">
              <span>矿池算力：</span>
              <b>{{power}}</b>
            </div>
            <div class="num">
              <span>总矿工数：</span>
              <b>{{miner}}</b>
            </div>
          </div>
        </div>
      </div>

      <div class="block">
        <h3 class="title">账单列表</h3>
        <el-table :data="transfers" style="width: 100%">
          <el-table-column prop="depend" label="时间" width="180">
          </el-table-column>
          <el-table-column label="数量(SAT)" width="180">
            <template slot-scope="scope">
              {{scope.row.amount/10000}}
            </template>
          </el-table-column>
          <el-table-column prop="hash" label="交易 ID">
          </el-table-column>
          <el-table-column label="状态" width="180">
            <template slot-scope="scope">
              {{scope.row.hash ? '完成' : '正在转'}}
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="block">
        <h3 class="title">矿机列表</h3>
        <el-table :data="miners" style="width: 100%">
          <el-table-column type="index" label="编号" width="80">
          </el-table-column>
          <el-table-column prop="number" label="矿机名">
          </el-table-column>
          <el-table-column prop="power_cur" label="实时算力">
          </el-table-column>
          <el-table-column prop="power_average" label="平均算力">
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
      miners: [], // 矿机列表
      transfers: [], // 账单列表
      totalPower: "", // 算力
      amount_cur: "", // 未分账
      power: "", // 矿池算力：
      miner: "", // 总矿工数
      height: "", // 高度
    };
  },
  components: {
    Footer,
    Header,
  },
  methods: {
    queryData() {
      let url = "http://www.iobft.com:8101/Stats?style=2";
      this.axios.get(url).then((res) => {
        console.log(res.data);
        let arr = res.data.split(" ");
        console.log(arr);
        this.height = arr[0].split(":")[1];
        this.power = arr[1].split(":")[1];
        this.miner = arr[2].split(":")[1];
      });
    },
    queryTableData() {
      let url = "http://www.iobft.com:8101/Command?input=miner%20Y7ECVSUDQyiaoditKMbEEyu1KaoQiLGMj";
      this.axios.get(url).then((res) => {
        console.log(res.data);
        this.miners = res.data.miners;
        this.transfers = res.data.transfers;
        this.totalPower = res.data.totalPower;
        this.amount_cur = res.data.amount_cur;
      });
    },
  },
  mounted() {
    this.queryData();
    this.queryTableData();
  },
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
        width: 200px;
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