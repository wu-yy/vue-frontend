/**
* create by zx on 2021/11/15 10:39
* 类注释：
* 备注：
*/
<template>
  <div class="tab">
    <div
      v-for="(tab,index) in tabs"
      :key="index"
      class="tab-item"
      :class="{'tab-item-select':index===selectIndex}"
      @click="tabClick(tab,index)"
    >{{ tab.name }}</div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  name: 'Tab',
  components: {

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
      selectIndex: 0
    }
  },
  computed: {},
  watch: {
    $route(val) {
      this.selectIndex = this.tabs.findIndex(item => item.path === val.path)
    }
  },
  activated() {
  },
  mounted() {
    this.selectIndex = this.tabs.findIndex(item => item.path === this.$route.path)
  },
  created() {
  },
  methods: {
    tabClick(tab, index) {
      this.selectIndex = index
      this.$router.push({ path: tab.path })
    }
  }
}
</script>

<style lang="scss" scoped>
.tab{
  display: flex;
  flex: 1;
  height: 50px;
  .tab-item{
    color: white;
    font-size: 17px;
    cursor: pointer;
    margin-left: 30px;
    line-height: 48px;
  }
  .tab-item-select{
    border-bottom: 3px solid white;
  }
}

</style>
