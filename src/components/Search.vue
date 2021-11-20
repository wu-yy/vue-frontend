/* eslint-disable */
<template>
<div class="container" align="center">
    <div class="head">
        <router-link to="/">
            <img class="logo" src="../assets/logo.png">
        </router-link>
        <!-- <v-text-field class="search-box" type="text" v-model="query" placeholder="输入问题"/> -->
        <input class="search-box" type="text" v-model="query" placeholder="输入问题">
        <v-btn class="search-btn" @click="submitQuery">搜索</v-btn>
    </div>
    <div class="resultContainer">
        <!-- <h5 class="text-center" style="color:black;margin:10px 0px 10px 0px" align="center">
            共找到{{resultCount}}条搜索结果
        </h5>-->
        <li v-for="r in resultList" :key="r.url">
            <div class="result">
                <a class="title" :href="r.url" > {{r.title}} </a>
                <span class="snippet"> {{r.snippet}}  </span>
            </div>
        </li>
        <!-- <p v-if="empty" class="icon_noRes">
          抱歉，没有找到与<span style="font-family:宋体">“</span> <em>{{ query }}</em> <span style="font-family:宋体">”</span>相关的网页。
        </p> -->
    </div>
    <div class="pageContainer">
      <ul class="pagesInner">
        <li @click="prevOrNext(-1)"><span class="page" aria-hidden="true">&lt;</span></li>
        <li v-for="(item, index) in pages" :key="index" @click="selectPage(item)">
          <span class="page" v-if="item != currentPage" >{{item}}</span>
          <span style="color: rgba(0,0,0,.87);" class="page" v-else >{{item}}</span>
        </li>
        <li @click="prevOrNext(1)"><span class="page" aria-hidden="true">&gt;</span></li>
      </ul>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data: () => ({
    resultList: [],
    query: '',
    currentPage: 1,
    totalPages: 0
  }),
  created () {
    this.query = this.$route.query.query
    console.log('query from home', this.query)
    this.search(this.query, this.currentPage - 1)
  },
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
  methods: {
    search (query, pageid) {
      axios.get('http://localhost:8888/search/', {
        params: {query: query, pageid: pageid}
      }).then(response => {
        this.resultList = response.data.docs
        this.totalPages = response.data.totalPages
      })
    },
    submitQuery () {
      this.$router.push({path: this.$route.path, query: {query: this.query}})
      console.log('query submitted', this.query)
      this.search(this.query, this.currentPage - 1)
    },
    selectPage (item) {
      if (item === this.currentPage) return
      if (typeof item === 'string') return
      this.currentPage = item
      this.search(this.query, this.currentPage - 1)
    },
    prevOrNext (n) {
      this.currentPage += n
      if (this.currentPage < 1) {
        this.currentPage = 1
      } else if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages
      }
      this.search(this.query, this.currentPage - 1)
    }
  }
}
</script>

<style scoped>
  .container li{
    list-style-type:none;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: center;
    margin:50px 0px 50px 0px;
  }
  .logo {
    margin-right: 30px;
    height: 50px;
    width: 50px;
  }
  .search-box {
    width: 800px;
    height: 30px;
  }
  .search-btn {
    margin-left: 30px;
    background: #dfd7d7;
    padding: 8px 20px 8px 20px;
    border-radius: 20px;
  }
  .search-btn:hover {
    color: red;
  }

  .resultContainer {
  }
  .result {
    margin: 0px 300px 50px 300px;
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 20px;
  }
  .snippet {
    text-align: left;
    margin-top: 10px;
  }

  .pageContainer ul li {
    margin: 0px 0px 50px 0px;
    display: inline-flex;
    list-style-type:none;
  }
  .page {
    width: 20px;
    height: 20px;
    color: white;
    background: gray;
    cursor: pointer;
    padding: 10px;
    margin: 0 10px 0 10px;
    border-radius: 10px;
  }
  .page:hover {
    text-decoration: underline;
    color: red;
  }
  .page:active {
    color: red;
  }
</style>
