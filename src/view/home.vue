<template>
  <div class="day_records">
    <Header :input="input" @searchData="searchData" @switchLanguage="switchLanguage" />
    <div class="container">
      <div class="search">
        <el-input placeholder="Address ..." v-model="input">
          <template slot="prepend">{{language ? zh.acount : en.acount}}</template>
          <el-button slot="append" icon="el-icon-search" @click="queryTableData()"></el-button>
        </el-input>
      </div>
      <div class="center">
        <div class="item">
          <div class="cont">
            <p class="text">{{miners.list.length}}</p>
            <p class="label">{{language ? zh.miner : en.miner}}</p>
          </div>
          <img src="../assets/images/img_miner.png" />
        </div>
        <div class="item">
          <div class="cont">
            <p class="text">{{totalPower}}</p>
            <p class="label">{{language ? zh.power : en.power}}</p>
          </div>
          <img src="../assets/images/img_power.png" />
        </div>
        <div class="item">
          <div class="cont">
            <p class="text">{{amount_cur/1000}}</p>
            <p class="label">{{language ? zh.undivided : en.undivided}}</p>
          </div>
          <img src="../assets/images/img_coin.png" />
        </div>
        <div class="item">
          <div class="cont">
            <div class="num">
              <span>{{language ? zh.high : en.high}}：</span>
              <b>{{height}}</b>
            </div>
            <div class="num">
              <span>{{language ? zh.pool : en.pool}}：</span>
              <b>{{power}}</b>
            </div>
            <div class="num">
              <span>{{language ? zh.miners : en.miners}}：</span>
              <b>{{miner}}</b>
            </div>
          </div>
        </div>
      </div>

      <h3 class="title_phone">{{language ? zh.bill : en.bill}}</h3>

      <div class="block">
        <h3 class="title">{{language ? zh.bill : en.bill}}</h3>
        <el-table :data="transfers.list" style="width: 100%">
          <el-table-column prop="depend" :label="language ? zh.time : en.time" width="100">
          </el-table-column>
          <el-table-column :label="language ? zh.number : en.number" width="100">
            <template slot-scope="scope">
              {{scope.row.amount/10000}}
            </template>
          </el-table-column>
          <el-table-column prop="hash" :label="language ? zh.transactions : en.transactions">
          </el-table-column>
          <el-table-column :label="language ? zh.status : en.status" width="100">
            <template slot-scope="scope">
              {{scope.row.hash ? language ? zh.status2 : en.status2 : language ? zh.status1 : en.status1}}
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="page">
        <el-pagination v-if="transfers.total>10" background :prev-text="language ? zh.prev : en.prev" :pager-count="5" :next-text="language ? zh.next : en.next" layout="prev, pager, next" :total="transfers.total" @current-change="queryTableData" :current-page="transfers.page">
        </el-pagination>
      </div>

      <h3 class="title_phone">{{language ? zh.miner_list : en.preminer_list}}</h3>

      <div class="block">
        <h3 class="title">{{ language ? zh.miner_list : en.preminer_list}}</h3>
        <el-table :data="miners.list" style="width: 100%">
          <el-table-column type="index" :label="language ? zh.no : en.no" width="80">
          </el-table-column>
          <el-table-column prop="number" :label="language ? zh.name : en.name">
          </el-table-column>
          <el-table-column prop="power_cur" :label="language ? zh.real : en.real">
          </el-table-column>
          <el-table-column prop="power_average" :label="language ? zh.avg : en.avg">
          </el-table-column>
        </el-table>
      </div>

      <div class="page">
        <el-pagination v-if="miners.total>10" background :prev-text="language ? zh.prev : en.prev" :pager-count="5" :next-text="language ? zh.next : en.next" layout="prev, pager, next" :total="miners.total" @current-change="queryTableData" :current-page="miners.page">
        </el-pagination>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
import ZH from "../assets/script/zh.json";
import EN from "../assets/script/EN.json";
export default {
  name: "home",
  data() {
    return {
      host: "http://www.iobft.com:8101", //请求接口的域名
      miners: {
        list: [], // 矿机列表
        total: 0, // 矿机列表总条数
        page: 1, //当前页数
      },
      transfers: {
        list: [], // 账单列表
        total: 12, // 账单列表总条数
        page: 1, // 当前页数
      },
      totalPower: "", // 算力
      amount_cur: "", // 未分账
      power: "", // 矿池算力：
      miner: "", // 总矿工数
      height: "", // 高度
      input: "Y7ECVSUDQyiaoditKMbEEyu1KaoQiLGMj", //搜索条件
      language: true, // true 中文 false 英文
      zh: ZH,
      en: EN,
    };
  },
  components: {
    Footer,
    Header,
  },
  methods: {
    switchLanguage(data) {
      console.log(data);
      if (data == "中文") {
        this.language = true;
      } else {
        this.language = false;
      }
    },
    searchData(data) {
      this.input = data;
      this.queryTableData();
    },
    queryData() {
      let url = this.host + "/Stats?style=2";
      this.axios.get(url).then((res) => {
        console.log(res.data);
        let arr = res.data.split(" ");
        console.log(arr);
        this.height = arr[0].split(":")[1];
        this.power = arr[1].split(":")[1];
        this.miner = arr[2].split(":")[1];
      });
    },
    queryTableData(page) {
      let input = "miner " + this.input;
      let url = this.host + "/Command?input=" + input + "&index=" + page;
      console.log(url);
      this.axios.get(url).then((res) => {
        console.log(res.data);
        this.miners.list = res.data.miners;
        this.transfers.list = res.data.transfers;
        this.totalPower = res.data.totalPower;
        this.amount_cur = res.data.amount_cur;
      });
    },
  },
  mounted() {
    this.queryData();
    this.queryTableData(this.input);
  },
  destroyed() {},
};
</script>
<style lang="less" >
.container {
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
}
.search {
  display: none;
}
.center {
  margin: 50px 0;
  height: 120px;
  .item {
    width: 23%;
    height: 120px;
    background: #ffffff;
    box-shadow: 1px 4px 8px 0px #dee3e8;
    border-radius: 6px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    float: left;
    margin-right: 2%;
    &:nth-child(3) {
      width: 28%;
    }
    &:nth-child(4) {
      width: 20%;
      margin-right: 0;
    }
    .cont {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
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
      height: 20px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ffbc01;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
.title_phone {
  display: none;
}
.block {
  background: #fff;
  padding: 35px;
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
.page {
  background: #fff;
  padding: 15px 0 50px;
  margin-bottom: 60px;
  text-align: center;
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
#app {
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background: #222832;
  }
  .el-pagination.is-background .btn-next,
  .el-pagination.is-background .btn-prev,
  .el-pagination.is-background .el-pager li {
    background: #fff;
    border: 1px solid #cccccc;
    border-radius: 3px;
    &.btn-quicknext,
    &.btn-quickprev {
      border: none;
    }
  }
  .el-pagination.is-background .btn-next,
  .el-pagination.is-background .btn-prev {
    border: none;
    &:hover {
      color: #ffbc02;
    }
  }
}
@media only screen and (min-width: 1000px) and (max-width: 1300px) {
  .container {
    max-width: 1000px;
    .center .item img {
      width: 70px;
      height: 70px;
    }
  }
}
@media only screen and (min-width: 750px) and (max-width: 1000px) {
  .container {
    max-width: 1000px;
    .center .item img {
      width: 60px;
      height: 60px;
    }
  }
}
@media only screen and (max-width: 750px) {
  .container {
    max-width: 750px;
    margin: 0 auto;
    padding: 0 10px;
  }
  .search {
    display: block;
    margin: 20px 0;
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
    .el-input__inner {
      padding-top: 10px;
      padding-bottom: 10px;
      line-height: 20px;
    }
  }
  .container .center {
    height: 160px;
    margin: 20px 0;
    .item {
      width: 49%;
      height: 75px;
      margin-right: 2%;
      margin-bottom: 10px;
      padding: 10px;
      &:nth-child(2),
      &:nth-child(4) {
        width: 49%;
        margin-right: 0;
      }
      &:nth-child(3),
      &:nth-child(4) {
        margin-bottom: 0;
      }
      .label {
        font-size: 12px;
      }
      .text {
        font-size: 16px;
      }
      .num {
        font-size: 12px;
        span {
          font-size: 12px;
        }
      }
      img {
        width: 55px;
        height: 55px;
      }
    }
  }
  .title_phone {
    display: block;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #343434;
    margin: 30px 0 15px 15px;
  }
  .block {
    padding: 10px 8px;
    .title {
      display: none;
    }
  }
  .page {
    padding-bottom: 35px;
    margin-bottom: 30px;
  }
}
</style>