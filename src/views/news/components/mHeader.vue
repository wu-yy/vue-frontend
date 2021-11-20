/**
* create by zhangxiang on 2021-11-20 10:03
* 类注释：
* 备注：
*/
<template>
  <div class="header">
    <div class="content">
      <div>
        <img class="logo" src="../../../assets/404_images/404_cloud.png" @click="$router.push('/news/index')">
      </div>
      <tab :tabs="tabs" />
      <el-input>
        <i slot="prefix" class="el-icon-search search" />
      </el-input>
      <img class="logo" src="../../../assets/404_images/404_cloud.png" @click="$router.push('/news/index')">
      <div style="font-size: 16px;margin: 0 10px;font-weight: 800">原子回声</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import tab from './tab'
export default {
  name: 'MHeader',
  components: {
    tab
  },
  props: {
    tabs: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {

    }
  },
  computed: {},
  activated() {
  },
  mounted() {
  },
  created() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

.header{
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: white;
  .logo{
    width: 40px;
    height: 40px;
    margin:5px 0px 5px 20px
  }
  .content{
    margin: 0 auto;
    display: flex;
  }
  ::v-deep  .el-input__inner{
    border-radius: 30px;
    width: 300px;
    height: 35px;
    border: 1px solid transparent;
    background: #ffffff77;
  }
  ::v-deep .el-input{
    width: 300px;
    height: 35px;
    margin-left: 50px;
  }
  ::v-deep .el-button.is-round{
    padding: 7px 23px;
  }
  .search{
    font-size: 16px;
    margin-left: 8px;
    padding-right: 3px;
    cursor: pointer;
    padding-top: 17px;
    color: #aaa;
  }
}

</style>
