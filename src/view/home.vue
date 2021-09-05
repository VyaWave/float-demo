<template>
  <div class="day_records">
    <Header @switchLanguage="switchLanguage" />

    <template v-if="!isMobile">

    <div class="block1">
      <div class="black"></div>

      <div class="left">
        <div class="oneline">
          {{lang.CRYPTO_WALLET}}
          <span></span>
        </div>
        <div class="twoline">
          {{lang.PrivateSecure}} <br/>
          {{lang.Communication}}

        </div>
        <div class="threeline">
          {{lang.FloatDesc}}
        </div>
        <div class="start atom_cursor">
          {{lang.GetStatus}} <i class="el-icon-arrow-right"></i>
        </div>
        <div class="fourline">
          <span>{{lang.Mews}}</span>
          {{lang.CryptoDesc}}
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
        <div class="title">{{lang.FloatBigTitle}}</div>
        <div class="tips">{{lang.FloatBigDesc}}</div>
        <div class="block2_flex">
          <div class="block2_left">
            <div class="con_flex">
              <div>
                <img src="../assets/images/new/check.png" alt="">
              </div>
              <div>
                <p class="title">{{lang.FloatBigTitle1}}</p>
                <p >{{lang.FloatBigDesc1}}</p>
              </div>
            </div>
            <div class="con_flex">
              <div>
                <img src="../assets/images/new/check.png" alt="">
              </div>
              <div>
                <p class="title">{{lang.FloatBigTitle2}}</p>
                <p >{{lang.FloatBigDesc2}}</p>
              </div>
            </div>
            <div class="con_flex">
              <div>
                <img src="../assets/images/new/check.png" alt="">
              </div>
              <div>
                <p class="title">{{lang.FloatBigTitle3}}</p>
                <p >{{lang.FloatBigDesc3}}</p>
              </div>
            </div>
          </div>

          <div class="block2_right">
            <img src="../assets/images/new/block2.png" width="482" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="block3">
        <div class="black"></div>
        <div class="cont">
          <img src="../assets/images/new/left_bg.png" class="left_bg"/>
          <div class="one">
            <div class="block-3-img"></div>
            <p class="title">5%</p>
            <p class="line"></p>
            <p class="con">{{lang.FloatMoney1}}</p>
          </div>
          <div class="one">
            <div class="block-3-img"></div>
            <p class="title">15%</p>
            <p class="line"></p>
            <p class="con">{{lang.FloatMoney2}}</p>
          </div>
          <div class="one">
            <div class="block-3-img"></div>
            <p class="title">80% {{lang.AirDrop}}</p>
            <p class="line"></p>
            <p class="con">{{lang.FloatMoney3}}</p>
          </div>
          <div class="last_block">
            <p>{{lang.FloatBigMoney}}</p>
          </div>
        </div>

    </div>
    <div class="container">



      <div class="block4">
        <p class="title">{{lang.EconomicModels}}</p>
        <p class="text">{{lang.EconomicModelsDesc}}</p>
        <div class="block4_flex">
          <p>{{lang.Model1}}</p>
          <p>{{lang.Model2}}</p>
          <p>{{lang.Model3}}</p>
        </div>
        <div class="block4_bg">
          <div> {{lang.Support1}} <span>{{lang.Support2}}</span></div>
        </div>
      </div>
      <div class="block5 flex">
        <div class="left">
          <div class="title">{{lang.Mobile}}</div>
          <div class="text">{{lang.MobileDesc}}</div>
          <div class="flex">
            <div class="download btn">
              <div>{{lang.IOSDownload}}</div>
              <div>{{lang.IOSDownloadName}}</div>
            </div>
            <div class="download download1 btn">
              <div>{{lang.AndroidDownload}}</div>
              <div>{{lang.AndroidDownloadName}}</div>
            </div>
          </div>
        </div>
        <div>
          <img class="xiaoguo" src="../assets/images/new/xiaoguo.png" alt="">
        </div>
      </div>
    </div>
    </template>
    <template v-else>

      <div class="block1_mobile">
        <div class="oneline">
           {{lang.CRYPTO_WALLET}}
          <span></span>
        </div>

        <div class="twoline">
          {{lang.PrivateSecure}}
           <br/>
          {{lang.Communication}}

        </div>
        <div class="threeline">
          {{lang.FloatDesc}}
        </div>
         <div class="start atom_cursor">
          {{lang.GetStatus}} <i class="el-icon-arrow-right"></i>
        </div>
      </div>

      <div class="block2_mobile">
          <img src="../assets/images/new/block1.png" width="600" alt="">
          <div class="bg_div"></div>
      </div>

       <div class="block3_mobile">
          <div class="big title">
            {{lang.OpenSource}}
          </div>
          <div class="big desc">
            {{lang.FloatBigDesc}}
          </div>

          <div class="title">
            {{lang.FloatBigTitle1}}
          </div>
          <div class="desc">
            {{lang.FloatBigDesc1}}
          </div>

          <div class="title">
            {{lang.FloatBigTitle2}}
          </div>
          <div class="desc">
            >{{lang.FloatBigDesc2}}
          </div>

          <div class="title">
            {{lang.FloatBigTitle3}}
          </div>
          <div class="desc">
            {{lang.FloatBigDesc3}}
          </div>
      </div>

      <div class="block4_mobile">
        <p class="notice_title">{{lang.FloatMoney}}</p>
        <div class="item_wrapper">
          <div class="item">
            <div class="block-4-img"></div>
            <p class="title">5%</p>
            <p class="line"></p>
            <p class="con">{{lang.FloatMoney1}}</p>
          </div>
          <div class="item">
            <div class="block-4-img"></div>
            <p class="title">15%</p>
            <p class="line"></p>
            <p class="con">{{lang.FloatMoney2}}</p>
          </div>
          <div class="item">
            <div class="block-4-img"></div>
            <p class="title">80% {{lang.AirDrop}}</p>
            <p class="line"></p>
            <p class="con">{{lang.FloatMoney3}}</p>
          </div>
        </div>
      </div>

      <div class="block5_mobile">
        <p class="title big">{{lang.EconomicModels}}</p>
        <p class="desc big">{{lang.EconomicModelsDesc}}</p>
        <div class="item-wrap">
          <p>{{lang.Model1}}</p>
          <p>{{lang.Model2}}</p>
        </div>
        <p class="item_out">{{lang.Model3}}</p>
      </div>

      <div class="block6_mobile">
        <p>{{lang.Support1}} <span>{{lang.Support2}}</span></p>
      </div>

      <div class="block7_mobile">
        <p class="app_title">
          {{lang.Mobile}}
        </p>

        <p class="app_desc">
          {{lang.Dapp}}
        </p>
        <div class="btn-warp">
            <div class="item">
              <img class="xiaoguo" src="../assets/images/new/mac_hover.png" alt="">
              <div>
                <div class="desc">{{lang.IOSDownload}}</div>
                <div class="title">{{lang.IOSDownloadName}}</div>
              </div>

            </div>
            <div class="item">
              <img class="xiaoguo" src="../assets/images/new/fill_hover.png" alt="">
              <div>
                <div class="desc">{{lang.AndroidDownload}}</div>
                <div  class="title">{{lang.AndroidDownloadName}}</div>
              </div>

            </div>
        </div>
        <img class="xiaoguo" src="../assets/images/new/xiaoguo.png" alt="">

      </div>

    </template>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
import { computeDeviceModal } from '../utils/resize.js'
import { GET_LOCALE } from '../utils/locale.js'


export default {
  name: "home",
  data() {
    const LANG = GET_LOCALE();

    return {
      language: false, // true 中文 false 英文
      lang: LANG,
      isMobile: false
    };
  },
  components: {
    Footer,
    Header,
  },

  mounted() {

    let deviceInfo = computeDeviceModal()

      if (deviceInfo.isMobile) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }

      console.info("this.isMobile", this.isMobile)

    window.addEventListener(
      "resize", this.handleResize
    )

  },

  destroyed() {
    window.removeEventListener(
      "resize", this.handleResize
    )
  },

  methods: {

    switchLanguage() {
      this.lang = GET_LOCALE();
    },

    handleResize() {
      const deviceInfo = computeDeviceModal();
        if (deviceInfo.isMobile) {
          this.isMobile = true
        } else {
          this.isMobile = false
        }
    }
  },
};
</script>
<style lang="less" >


.atom_cursor {
  cursor: pointer;
}

.block1{
  position: relative;
  height: 600px;
  margin: 0 auto;
  // max-width: 1200px;
  .black{
    width: 40%;
    height: 550px;
    background:#000;
    position: absolute;
    left: 60%;
  }
  .left{
    max-width: 1200px;
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
    width: 250px;
    margin-left:  55%;
    .block_img{
      position: absolute;
      left: 50%;
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
.block3{
    display: flex;

    height: 619px;
    position: relative;
    padding: 173px 20px;
    margin-bottom: 160px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    .cont{
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      width: 100%;
    }

    .left_bg {

        position: absolute;
        height: 100%;
        top: 0;
        left: 0;

      }

    .block3-bg {
      background: url("../assets/images/new/left_bg.png");
      position: absolute;
      height: 500px;
      width: 200px;
    }

    .one{
      width: 240px;
      height: 290px;
      background: #fff;
      position: relative;
      text-align: center;
      margin-right: 30px;
      flex-shrink: 0;
      cursor: pointer;
      box-shadow: 0px 16px 14px 0px rgba(209, 209, 209, 0.12);
      border-radius: 5px;

      &:hover {

        margin-top: -5px;
        transition: 0.3s margin ease;

      }

      .block-3-img {

        margin: 0 auto auto;
        width: 130px;
        height: 178px;

        background: url("../assets/images/new/block2.png");
        background-size: cover;

        margin-top: -100px;

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

      display: flex;
      align-items: center;

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

  .block4{
    height: 1300px;
    max-width: 1200px;
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
        border-radius: 3px;
        cursor: pointer;

        &:hover {
          margin-top: -5px;
          transition: 0.3s ease;
          box-shadow: 0px 16px 14px 0px rgba(209, 209, 209, 0.12);

        }

        &:last-child{
          margin-right: 0;
        }
      }
    }
    .block4_bg{
      max-width: 1200px;
      height: 600px;
      background: url('../assets/images/new/block4.png') no-repeat;
      background-size: cover;
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


.block1_mobile {

  padding: 20px 15px 0;

    .oneline{
      font-size: 18px;
      font-weight: bold;
      color: #005FEA;
      letter-spacing: 3px;
      font-size: 12px;
      margin: 10px 0;
      span{
        display: inline-block;
        margin-left: 15px;
        width: 100px;
        border-bottom: 1px solid #005FEA;
      }
    }
    .twoline{
      font-size: 32px;
      font-weight: 800;
      color: #14141A;
      margin-top: 20px;
      line-height: 45px;
    }

    .threeline{
      color:#656E7C;
      width: 100%;
      margin: 20px 0;
      font-size: 14px;
      word-break: keep-all;
      line-height: 20px;
    }

    .start {
      width: 120px;
      height: 48px;
      background: -webkit-gradient(linear, left top, right top, from(#005FEA), to(#00BDF9));
      background: linear-gradient( 90deg, #005FEA 0%, #00BDF9 100%);
      color: #FFFFFF;
      line-height: 48px;
      text-align: center;
      font-weight: bold;
      margin: 15px 0;
    }

}

.block2_mobile {
  padding: 0 15px;
  position: relative;
  margin-top: 140px;


  img {
    position: relative;
    width: 100%;
    z-index: 2;
    margin-top: -100px;
  }

  .bg_div {
    box-sizing: border-box;
    position: absolute;
    z-index: 1;

    background: black;
    height: 100%;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    height: 200px;

  }

}

.block3_mobile {

  padding: 30px 15px;

  .title {
    font-size: 20px;
    color: #14141A;
    line-height: 32px;
    font-weight: bolder;

    &.big {
      font-size: 30px;
      line-height: 36px;
    }
  }

  .desc {
    font-size: 16px;
    color: #656E7C;
    margin: 12px 0;

    &.big {
      margin: 20px 0;
    }

  }
}

.block4_mobile {
  color: white;
  width: 100%;
  height: 360px;
  background: black;
  box-sizing: border-box;
  box-sizing: border-box;
  padding: 20px 0px 20px 20px;
  overflow: hidden;

  .notice_title {
    font-size: 20px;
    font-weight: bolder;
    font-weight: bolder;
    padding: 20px;
  }

  .item_wrapper {
    display: flex;
    flex-wrap: nowrap;
    padding-top: 60px;
    overflow: auto;

    .item {
      margin-right: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 150px;
      height: 150px;
      background: white;
      color: #14141A;
      flex-shrink: 0;
      padding: 50px 15px 15px;

      position: relative;

      .block-4-img {

        position: absolute;
        top: -45px;
        flex-shrink: 0;
        width: 65px;
        height: 90px;
        background: url("../assets/images/new/float1-1.png");
      }

      .title {
        font-size: 16px;
      }

      .line{
        width: 26px;
        height: 3px;
        background: #2963FB;
        margin: 10px auto 10px;
      }

      .con {
        color: #252930;
        font-size: 14px;
        text-align: center;
      }
    }
  }
}

.block5_mobile {

  padding: 20px 15px;

  .big.title {
    color: #14141A;
    font-weight: bolder;
    font-size: 30px;
    line-height: 36px;
    margin-top: 20px;
  }

  .desc.big {
    font-size: 16px;
    color: #656E7C;
    margin: 10px 0 20px;
  }

  .item-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      flex: 1;
      width: 115px;
      height: 120px;
      border: 1px solid #DEDFE4;
      padding: 15px;
      font-size: 14px;
      word-break: break-word;
      text-align: center;

      &:first-child {
        margin-right: 10px;
      }
    }
  }
  .item_out {
    border: 1px solid #DEDFE4;
    padding: 15px;
    font-size: 14px;
    margin-top: 20px;
  }
}

.block6_mobile {
  height:200px;
  background: url('../assets/images/new/block4.png') no-repeat;
  background-size: cover;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin-top: -15px;
    width: 90%;
    text-align: center;
    span{
      color: #2963FB;
    }
  }
}

.block7_mobile {

  .app_title {
    font-size: 24px;
    font-weight: bolder;
    text-align: center;
    margin: 20px 15px;
  }

  .app_desc  {
    margin: 10px 15px;
    color: #4b4e52;
    font-size: 14px;
    line-height: 20px;
  }

  img {
    box-sizing: border-box;
    width: 100%;
    padding: 15px;
  }

  .btn-warp {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;

    .item {

      background: #293149;
      flex: 1;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 15px;

      img {
        width: 60px;
      }

      &:first-child {
        margin-right: 10px;
      }

      .desc {
        color: #656E7C;
        font-size: 12px;
      }

      .title {
        color: white;
        font-size: 20px;
      }

    }

  }
}
</style>
