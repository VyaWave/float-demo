<template>
  <div class="day_records">
    <Header @switchLanguage="switchLanguage" />
    <div class="container">
      <div class="block1">

      </div>
      <div class="block2"></div>
      <div class="block3"></div>
      <div class="block4"></div>
      <div class="block5"></div>
      <div class="block6 flex">
        <div class="left">
          <div class="title">Mobile</div>
          <div class="text">Private messaging, secure crypto transactions, Web3 DApp browsing in your pocket.</div>
          <div class="flex">
            <div class="download btn">
              <div>Download on the</div>
              <div>App Store</div>
            </div>
            <div class="download download1 btn">
              <div>Download on the</div>
              <div>Android</div>
            </div>
          </div>
        </div>
        <div>
          <img class="xiaoguo" src="../assets/images/new/xiaoguo.png" alt="">
        </div>
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
import { GetQueryValue, GetValue } from "../assets/script/utils";
export default {
  name: "home",
  data() {
    return {
      language: false, // true 中文 false 英文
      zh: ZH,
      en: EN,
    };
  },
  components: {
    Footer,
    Header,
  },
  watch: {
    input: function (val) {
      let str = GetValue(val);
      document.title = "【" + str + "】Smartx pool";
    },
  },
  methods: {
    switchLanguage(data) {
      if (data == "中文") {
        this.language = true;
      } else {
        this.language = false;
      }
    },
  },
  mounted() {
  },
  destroyed() {},
};
</script>
<style lang="less" >
.container {
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  background: #fff;
  .flex{
    display: flex;
    justify-content: space-around;
  }
  .block1{
    height: 950px;
  }
  .block6{
    margin-bottom: 68px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #14141A;
    text-align: center;
    .left{
      width: 515px;
      img{
        display: inline-block;
        width: 40px;
        height: 40px;
      }
    }
    .title{
      font-size: 40px;
      font-weight: 800;
      margin: 26px 0 56px;
    }
    .text{
      color: #999;
      font-size: 16px;
      margin-bottom: 86px;
    }
    .download{
      transition: background 0.3s ease;
      width: 212px;
      height: 67px;
      background: #FFFFFF url('../assets/images/new/mac.png') no-repeat 10px center;
      box-shadow: 0px 6px 12px 0px rgba(229, 229, 229, 0.2);
      border-radius: 2px;
      background-size: 40px 40px;
      cursor: pointer;
      border-radius: 5px;


      padding: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;

      & > div {
        margin-left: 15px;

        &:first-child {
          color: #9c9696;
          font-size: 14px;
        }
      }

      &:hover{
        width: 212px;
        height: 67px;
        background: #2963FB url('../assets/images/new/mac_hover.png') no-repeat  10px center;
        background-size: 40px 40px;
        box-shadow: 0px 20px 40px 0px rgba(41, 99, 251, 0.5);
        color: #FFFFFF;


        & > div {

           &:first-child {

            color: white;

           }
        }

      }
    }
    .download1{
      background:  url('../assets/images/new/fill.png') no-repeat  10px center;
      background-size: 40px 40px;

      &:hover{
        width: 212px;
        height: 67px;
        background: #2963FB url('../assets/images/new/fill_hover.png') no-repeat  10px center;
        background-size: 40px 40px;
      }
    }
    .xiaoguo{
      width: 575px;
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
    padding: 0 5px;
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