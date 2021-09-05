<template>
  <div class="day_records">
    <Header @switchLanguage="switchLanguage" />
      <div class="block1">
        <div class="black"></div>
        <div class="left">
          <div class="oneline">
            CRYPTO WALLET
            <span></span>
          </div>
          <div class="twoline">
            Private  Secure <br/>
            Communication
          </div>
          <div class="threeline">
            Float is a secure messaging app, crypto wallet, and Web3 browser built with state of the art technology.
          </div>
          <div class="start">
            Get Status <i class="el-icon-arrow-right"></i>
          </div>
          <div class="fourline">
            <span>MEWS</span>
            Crypto as a Public Good: Liberty
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <div class="right">
          <div class="block_img">
            <img src="../assets/images/new/block1.png" width="600" alt="">
          </div>
        </div>
      </div>
    <div class="container">
      
      <div class="block2">
        <div class="title">Float is an open source communication platform</div>
        <div class="tips">It belongs to one of the ecology of zhitu Public chain</div>
        <div class="block2_flex">
          <div class="block2_left">
            <div class="con_flex">
              <div>
                <img src="../assets/images/new/check.png" alt="">
              </div>
              <div>
                <p class="title">Chi Tu Foundation</p>
                <p >Developed by an international Float open source team supported by the Chi Graph Foundation</p>
              </div>
            </div>
            <div class="con_flex">
              <div>
                <img src="../assets/images/new/check.png" alt="">
              </div>
              <div>
                <p class="title">FLOAT APP</p>
                <p >Based on zhitu application public chain for interaction APP software, at the same time built zhitu wallet client</p>
              </div>
            </div>
            <div class="con_flex">
              <div>
                <img src="../assets/images/new/check.png" alt="">
              </div>
              <div>
                <p class="title">FOT Output</p>
                <p >Users pay for Float, spend FOT coins, and chat to mine FOT, which serves as the value of the Float ecosystem.</p>
              </div>
            </div>
          </div>
          
          <div class="block2_right">
            <img src="../assets/images/new/block2.png" width="482" alt="">
          </div>
        </div>
      </div>
      <div class="block3">
        <div class="one">
          <img src="../assets/images/new/block2.png" alt="">
          <p class="title">5%</p>
          <p class="line"></p>
          <p class="con">Owned by the FOT <br/> Foundation</p>
        </div>
        <div class="one">
          <img src="../assets/images/new/block2.png" alt="">
          <p class="title">15%</p>
          <p class="line"></p>
          <p class="con">Community donation</p>
        </div>
        <div class="one">
          <img src="../assets/images/new/block2.png" alt="">
          <p class="title">80% Air Drop</p>
          <p class="line"></p>
          <p class="con">(Chat mining, SAT pledge currency position air drop and others)</p>
        </div>
        <div class="last_block">
          <p>FOT issued a total of 800 million</p>
        </div>
      </div>
      <div class="block4">
        <p class="title">Economic Models</p>
        <p class="text">(The earlier you participate in chat mining, the more shares you will mine.)</p>
        <div class="block4_flex">
          <p>FOT consumed by user chat will be destroyed out of thin air, mining mode is chat mining.</p>
          <p>Use Float software to chat and mine, and participate to get FOT.</p>
          <p>Users chat mining income will be far more than consumption,FOT mining starts in a deflationary model,FOT will burn less and less, the supply will drive the value of FOThigher and higher.</p>
        </div>
        <div class="block4_bg">
          <div> Support the Harmonious Development Of <span>FOT and SAT</span></div>
        </div>
      </div>
      <div class="block5 flex">
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
.block1{
  position: relative;
  height: 600px;
  .black{
    width: 20%;
    height: 550px;
    background:#000;
    position: absolute;
    left: 80%;
  }
  .left{
    width: 1200px;
    position: absolute;
    left: 50%;
    margin-left: -600px;
    .oneline{
      font-size: 18px;
      font-weight: bold;
      color: #005FEA;
      letter-spacing: 3px;
      font-size: 18px;
      span{
        display: inline-block;
        margin-left: 15px;
        width: 170px;
        border-bottom: 2px solid #005FEA;
      }
    }
    .twoline{
      font-size: 64px;
      font-weight: 800;
      color: #14141A;
      margin-top: 20px;
      line-height: 70px;
    }
    .threeline{
      color:#656E7C;
      width: 487px;
      margin: 40px 0;
      font-size: 14px;
    }
    .fourline{
      color: #656E7C;
      font-size: 14px;
      margin-top: 100px;
      span{
        background: #14141A;
        color: #FFFFFF;
        margin-right: 15px;
        font-weight: 400;
        padding: 2px 5px;
      }
    }
  }
  .right{
    margin-top: 100px;
    height: 550px;
    background: url('../assets/images/new/right_bg.png') no-repeat;
    background-size: 100% 100%;
    width: 450px;
    margin-left: 750px;
    .block_img{
      position: absolute;
      left: 44%;
      margin-top: 54px;
      z-index: 1;
    }
    
  }
  .start{
    width: 203px;
    height: 60px;
    background: linear-gradient(90deg, #005FEA 0%, #00BDF9 100%);
    color: #FFFFFF;
    line-height: 60px;
    text-align: center;
    font-weight: bold;
    i{
      margin-left: 20px;
      font-weight: 800;
    }
  }
}
.block2{
  margin-top: 100px;
  text-align: center;
  font-family: Source Han Sans CN;
  height: 600px;
  .title{
    font-size: 40px;
    font-weight: 800;
    color: #14141A;
  }
  .tips{
    font-size: 18px;
    font-weight: 400;
    color: #656E7C;
  }
  .block2_flex{
    display: flex;
    justify-content: space-around;
    text-align: left;
    margin-top: 50px;
  }
  .block2_left{
    width: 50%;
  }
  .block2_right{
    margin-top: 60px;
    img{
      width: 400px;
    }
  }
  .con_flex{
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    color: #656E7C;
    margin-top: 50px;
    img{
      width: 30px;
      height: 30px;
      margin-right: 20px;
      margin-top: 10px;
    }
    .title{
      font-size: 24px;
      color: #14141A;
    }
  }
}
.container {
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  background: #fff;
  .flex{
    display: flex;
    justify-content: space-around;
  }
  .block3{
    display: flex;
    margin-top: 100px;
    height: 500px;
    .one{
      width: 274px;
      height: 313px;
      background: #fff;
      box-shadow: 0px 16px 14px 0px rgba(209, 209, 209, 0.12);
      position: relative;
      text-align: center;
      margin-right: 30px;
      img{
        margin-top: -100px;
        width: 130px;
        height: 178px;
      }
      .title{
        color: #14141A;
        margin-top: 50px;
        font-size: 22px;
      }
      .line{
        width: 26px;
        height: 3px;
        background: #2963FB;
        margin: 10px auto 30px;
      }
      .con{
        font-family: Source Han Sans CN;
        color: #656E7C;
        font-size: 12px;
        margin: 10px auto 30px;
      }
    }
    .last_block{
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: 800;
      color: #14141A;
      line-height: 56px;
      p{
        width: 300px;
      }
    }
  }
  .block4{
    height: 1300px;
    .title{
      color: #14141A;
      font-size: 40px;
      font-weight: 800;
    }
    .text{
      font-size: 14px;
      color: #656E7C;
      margin-bottom: 80px;
    }
    .block4_flex{
      display: flex;
      margin-bottom: 150px;
      p{
        border: 1px solid #DEDFE4;
        text-align: center;
        height: 200px;
        margin-right: 2%;
        font-size: 14px;
        width: 32%;
        padding: 25px 30px;
        line-height: 32px;
        display: flex;
        align-items: center;
        &:last-child{
          margin-right: 0;
        }
      }
    }
    .block4_bg{
      width: 1200px;
      height: 600px;
      background: url('../assets/images/new/block4.png') no-repeat;
      background-size: 100% 100%;
      font-size: 36px;
      font-weight: bold;
      div{
        width: 586px;
        margin: 0 auto;
        text-indent: 50px;
        padding-top: 190px;
      }
      span{
        color: #2963FB;
      }
    }
  }
  .block5{
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