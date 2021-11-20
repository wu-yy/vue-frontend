/**
* create by zhangxiang on 2021-11-20 10:38
* 类注释：
* 备注：
*/
<template>
  <div class="index">
    <div v-for="(item,index) in list" :key="index" class="item" :class="{single:index%2===1}">
      <div class="left-message" style="">
        <div class="title">
          解放路的撒发了司机问问号欧派接口了sad富家大发了多少富家大室了富家大室了附近商店弗利萨飞机啊是伐啦司法局哎说多了室了放假啊嗯嗯覅喷雾剂为将诶欧金融公司了给你看顺丰快递飞机来是否距离洒咖啡机撒啊李逵负荆爱迪生弗兰克斯
        </div>
        <div style="margin-top: 10px;display: flex">
          <i class="el-icon-collection" />
          <span style="color: #2EC13C;padding-left: 10px">亚洲狮子问题讨论</span>
          <el-link style="margin-left: 40px;">查看原文 <i class="el-icon-view" />
          </el-link>
          <div style="flex: 1;" />
          <div style="margin-right: 20px">张三</div>
          <div style="margin-right: 20px">2021-12-22 10:15:22</div>
        </div>
      </div>
      <div style="flex: 1;padding: 10px">
        <div class="title">
          发大水发撒范德萨发送到
        </div>
        <div style="margin-top: 10px">
          <i class="el-icon-warning"/>
          棉花方面
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Index',
  data() {
    return {
      list: 10
    }
  },
  computed: {},
  created() {
    this.loadData()
  },
  methods: {
    loadData() {

    }
  }
}
</script>

<style scoped lang="scss">
.index {
  height: 100%;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

  .item {
    background: #eee;
    display: flex;
  }

  .single {
    background: white;
  }

  .title {
    font-size: 14px;
    line-height: 20px;
    min-height: 40px;
    color: #333;
  }

  .left-message {
    flex: 3;
    border-right: 1px solid #aaa;
    padding: 10px;

  }

}
</style>
