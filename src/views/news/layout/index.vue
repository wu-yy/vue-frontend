/**
* create by zhangxiang on 2021-11-20 10:01
* 类注释：
* 备注：
*/
<template>
  <div class="index">
    <div class="fixed-header">
      <mHeader :tabs="tabs" />
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import mHeader from '../components/mHeader'

export default {
  name: 'Index',
  components: {
    mHeader
  },
  props: {},
  data() {
    return {
      tabs: [
        { name: '资讯摘要', path: '/news/index' },
        { name: '数据分析', path: '/news/analysis' },
        { name: '业务决策', path: '/news/index' }
      ]
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

<style scoped lang="scss">
.index {
  height: 100%;
  min-width: 1000px;

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: 100%;
    background: #2EC13C;
    height: 50px;
    transition: width 0.28s;
  }

  .main {
    height: calc(100% - 50px);
    //padding-top: 50px;
  }
}
</style>
