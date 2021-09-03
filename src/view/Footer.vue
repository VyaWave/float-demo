<template>
  <div class="box">
    <div class="cont">
      <img class="float" src="../assets/images/new/Float.png" alt="">
      <img class="map" src="../assets/images/new/map.png" alt="">
      <div class="footer">Copyright © 2021 XXXXXXXXXXXXXXXXXX</div>
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
  .cont {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    height: 310px;
    align-items: center;
    position: relative;
    img{
      position: absolute;
      display: inline-block;
    }
    .float{
      top: 40px;
      left: 0;
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
      width: 100%;
      height: 30px;
      line-height: 30px;
      border-top: 1px solid #888;
      font-size: 12px;
      position: absolute;
      bottom: 0;
    }
  }
 
}
@media only screen and (min-width: 1000px) and (max-width: 1300px) {
  .box .cont {
    max-width: 1000px;
    padding: 0 20px;
  }
}
@media only screen and (max-width: 750px) {
  .box .social {
    display: none;
  }
  .footer {
    width: 100%;
    text-align: center;
  }
}
</style>
