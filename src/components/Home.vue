/* eslint-disable */
<template>
<!-- 主页/搜索/结果页面-->
  <div class="container">
      <!-- <router-link to="/search"> -->
      <!-- </router-link> -->
      <img class="logo" src="../assets/logo.png">
      <div class="head">
          <input class="search-box" type="text" v-model="query" placeholder="输入问题">
          <v-btn class="search-btn" @click="submitQuery">搜索</v-btn>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      query: ''
    }
  },
  methods: {
    submitQuery () {
      console.log('query', this.query)
      this.$router.push({path: '/search', query: {query: this.query}})
    }
  }
}
</script>

<style scoped>
.logo {
    margin-top: 100px;
    height: 150px;
    width: 150px;
  }
  .search-box {
    max-width: 800px;
  }
  .head {
    margin:50px 0px 0px 0px;
  }
  .search-box {
    width: 800px;
    height: 30px;
    margin-bottom: 50px;
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
</style>
