<template>
  <div :class="isMobile ? 'header-mobile' : 'header'">
    <div class="content" v-show="!isMobile">
      <img class="logo" src="../assets/images/new/logo.png" alt="">
      <div class="nav">
        <div>{{lang.Home}}</div>
        <div>{{lang.Github}}</div>
        <div>{{lang.Group}}</div>
        <div>{{lang.ContractUs}}</div>
        <div class="flex">
          <img src="../assets/images/new/gitHub_icon.png" alt="">
          <div>{{lang.GetStatus}} <i class="el-icon-arrow-right"></i></div>
        </div>
      </div>
      <div class="right atom_cursor">
        <el-dropdown @command="handleClick" trigger="click" >
          <span class="el-dropdown-link text">
            {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="中文">中文</el-dropdown-item>
            <el-dropdown-item command="English">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <div v-show="isMobile" class="mobile-prefix atom_flex_between">


      <img class="logo" src="../assets/images/new/mobile_logo.png" alt="">
      <div class="right">
          <el-button type="default" class="right_wrapper">{{lang.GetStatus}} <i class="el-icon-arrow-right"/></el-button>
          <img src="../assets/images/new/menu.png" alt=""  @click="dialogVisible = true">
      </div>
      <el-dialog
        class="top-modal"
        :visible.sync="dialogVisible"
        width="90%"
        :destroy-on-close="false"
        :before-close="handleClose">
         <div slot="title" class="dialog-footer">
            <img class="logo-modal" style="height: 24px" src="../assets/images/new/logo.png" alt="">
        </div>
        <p class="out_wrap">
          Home
        </p>

        <p class="out_wrap">
          Github
        </p>

        <p class="out_wrap">
          Group
        </p>
        <p class="out_wrap">
          Contract Us
        </p>

        <p class="btn-item">
          <el-button type="default">{{lang.GetStatus}} <i class="el-icon-arrow-right"/></el-button>
        </p>

        <p class="btn-item">

          <el-dropdown @command="handleClick" :hide-on-click="true" trigger="click">

            <el-button type="default">
                {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>

            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="中文">中文</el-dropdown-item>
              <el-dropdown-item command="English">English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </p>

      </el-dialog>

    </div>

  </div>
</template>

<script>

import { computeDeviceModal } from '../utils/resize.js'
import { GET_LOCALE } from '../utils/locale.js'

export default {
  props: ["input"],
  data() {

    const LANG = GET_LOCALE();

    const lang = localStorage.getItem("current_lang");

    return {
      value: this.input || "",
      language: lang && lang === 'zh' ? "中文": "English",
      lang: LANG,
      isMobile:false,
      dialogVisible: false
    };
  },

  destroyed() {
    window.removeEventListener(
      "resize", this.handleResize
    )
  },

  mounted() {

    let deviceInfo = computeDeviceModal()

    if (deviceInfo.isMobile) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }

    window.addEventListener(
      "resize",
      this.handleResize
    )

  },

  watch: {
    input: function (val) {
      this.value = val;
    },
  },
  methods: {
    handleClose(done) {
      done()
    },
    handleResize() {
      const deviceInfo = computeDeviceModal();
        if (deviceInfo.isMobile) {
          this.isMobile = true
        } else {
          this.isMobile = false
        }
    },
    handleSearch() {
      this.$emit("searchData", this.value);
    },
    handleClick(command) {
      this.language = command;
      if (command == "中文") {
        localStorage.setItem("current_lang", "zh")
        this.lang = GET_LOCALE();
      } else {
        localStorage.setItem("current_lang", "en");
        this.lang = GET_LOCALE();

      }
      this.$emit("switchLanguage");
    },
  },
};
</script>

<style lang="less" scoped>
.atom_cursor {
  cursor: pointer;
}

.atom_flex_between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.atom_flex_center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header {
  width: 100%;
  height: 130px;
  background: #fff;
  color: #333;
  border-bottom: 2px solid #FAFAFA;
  .content {
    max-width: 1200px;
    // padding: 0 20px;
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
          cursor: pointer;
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

.header-mobile {
  height:80px;
  border-bottom: 1px solid #FAFAFA;

  .mobile-prefix {

    height: 100%;
    width: 100%;
    padding: 0 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;



    .logo {
      height: 30px;
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: space-between;


      .right_wrapper {
        border: 1px solid #DEDFE4;
        height: 40px;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
        padding: 0 10px;
        font-weight: 600;
      }

      img {
        width: 28px;
        height: 28px;
        margin-left: 10px;
      }
    }

  }

}

.top-modal {

  padding: 20px;

  .out_wrap {
    font-size: 16px;
    color: #14141A;
    margin: 20px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #FAFAFA;

  }
  .btn-item {
    margin: 10px 0;
  }
}
</style>
