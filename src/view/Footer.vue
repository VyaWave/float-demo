<template>
  <div class="box">
    <div class="cont">
      <img class="float" src="../assets/images/new/Float.png" alt="">
      <img class="map" src="../assets/images/new/map.png" alt="">
      <div class="footer">
       <el-divider style="margin: 0"></el-divider>
        Copyright © 2021 XXXXXXXXXXXXXXXXXX
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.box {
  height: 310px;
  background: #1C1D28;
  color: #888;
  position: relative;

  .cont {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    height: 310px;
    align-items: center;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;

    img{
      position: absolute;
      display: inline-block;
    }
    .float{
      top: 40px;
      left: 30px;
      width: 59px;
      height: 18px;
    }
    .map{
      top: 100px;
      left: 25px;
      width: 177px;
      height: 73px;
    }
    .footer{
      box-sizing: border-box;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      position: absolute;
      bottom: 0;
      left: 20px;
      right: 20px;

      .el-divider {
        margin: 0;
        background: rgba(255, 255, 255, 0.1)
      }
    }
  }

}
</style>
