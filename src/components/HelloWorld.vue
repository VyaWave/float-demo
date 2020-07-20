<template>
  <div class="hello">
    <div>
      <ul class="nav-ul">
        <!-- <li class="nav-li">
          <span @click="routerTo('bigScreen')">晶晶大屏</span>
        </li> -->
        <li class="nav-li">
          <span @click="routerTo('dayRecords')">日历日历</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "helloWorld",
  data() {
    return {
      msg: "page :helloWorld"
    };
  },
  watch: {},
  methods: {
    routerTo(path) {
      this.$router.push(path);
    }
  },
  mounted: () => {
    // console.log("hello");
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.nav-ul {
  padding-top: 110px;
  .nav-li {
    margin: 10px 0;
    text-align: center;
  }
}
</style>
