/**
* create by zhangxiang on 2021-11-20 10:38
* 类注释：
* 备注：
*/
<template>
  <div class="index">
    <div v-for="r in resultList" :key="r.url" class="item" :class="{single:index%2===1}">
      <div class="left-message" style="">
        <div class="title">
          {{r.abstract}}
        </div>
        <div style="margin-top: 10px;display: flex">
          <i class="el-icon-collection" />
          <span style="color: #2EC13C;padding-left: 10px">{{r.title}}</span>
          <el-link style="margin-left: 40px;" :href="r.url">查看原文 <i class="el-icon-view" />
          </el-link>
          <div style="flex: 1;" />
          <div style="margin-right: 20px">{{r.author}}</div>
          <div style="margin-right: 20px">{{r.date}}</div>
        </div>
      </div>
      <div style="flex: 1;padding: 10px">
        <div v-for="k in r.keyword" :key="k" >
          <div class="title">
            {{k}}
          </div>
        </div>
        <div style="margin-top: 10px">
          <i class="el-icon-warning"/>
          今天预测低走
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";

export default {
  name: 'Index',
  data: () => ({
    resultList: [],
    // return {
    //   list: 10
    // }
    currentPage: 1,
    totalPages: 0,
    PageSize: 4
  }),
  computed: {
     resultCount () {
      return this.resultList.length
    },
    empty () {
      return this.totalPages
    },
    pages () {
      const c = this.currentPage
      const t = this.totalPages
      if (t <= 10) {
        return Array.from({length: t}, (item, index) => index + 1)
      } else {
        if (c <= 5) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, '...', t]
        } else if (c >= t - 4) {
          return [1, '...', t - 8, t - 7, t - 6, t - 5, t - 4, t - 3, t - 2, t - 1, t]
        } else {
          return [1, '...', c - 3, c - 2, c - 1, c, c + 1, c + 2, c + 3, '...', t]
        }
      }
    }
  },
  created() {
    this.index(this.currentPage, this.PageSize)
  },
  methods: {
    index (PageId, PageSize) {
      axios.get(this.GLOBAL.BASE_URL + '/home/', {
        params: {page_id: PageId, page_size: PageSize}
      }).then(response => {
        this.resultList = response.data.docs
        this.totalPages = response.data.totalPages
      })
    },
    selectPage (item) {
      if (item === this.currentPage) return
      if (typeof item === 'string') return
      this.currentPage = item
      this.index(this.currentPage, this.PageSize)
    },
    prevOrNext (n) {
      this.currentPage += n
      if (this.currentPage < 1) {
        this.currentPage = 1
      } else if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages
      }
      this.index(this.currentPage, this.PageSize)
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
