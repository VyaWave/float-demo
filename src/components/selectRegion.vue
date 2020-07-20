<template>
    <div>
      <van-cell :title="choosename" is-link  @click="showPopup" />
      <van-popup
        v-model="show"
        position="top"
        :style="{ maxHeight:'40%'}"
        >
            <van-cell v-for="(item,index) in regionList" :key="index" :title="item.regionTreeName"  @click="chooseitem(item)" />
        </van-popup>
    </div>
</template>

<script>
export default {
    name: "selectRegion",
    props: ['data','name'],
    data() {
        return {
        msg: "选择社区组件",
        show:false,
        choosename:'请选择社区',
        regionList:[]
        };
    },
    watch:{
        'data'(val){
            if(val){
                this.regionList=val;
            }
            
        },
        'name'(val){
            if(val){
                this.choosename=val
            }
        }
    },
    methods: {
        showPopup(){
            this.show=true;
        },
        onClose(){},
        chooseitem(item){
            this.choosename=item.regionTreeName;
            this.show=false;
            this.$emit('surecheck',item)
        },
    },
    mounted() {
        // console.log(this.data)
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>