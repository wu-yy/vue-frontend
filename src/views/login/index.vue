<template>
  <div class="login-container">
    <div class="header">
      <div class="content">
        <img class="logo" src="../../assets/404_images/404_cloud.png" @click="$router.push('/news/index')">
        <div style="font-size: 16px;margin: 0 10px;font-weight: 800;flex: 1">原子回声科技有限公司</div>
        <img class="logo" src="../../assets/404_images/404_cloud.png" @click="$router.push('/news/index')">
        <div style="font-size: 16px;margin: 0 10px;font-weight: 800">原子回声</div>
      </div>
    </div>
    <el-card style="width: 350px;position: absolute;right: 20%;top:20%">
      <div style="border-bottom: 2px solid #67C23A;font-weight: 550;font-size: 16px;width: 65px;padding: 10px 0"> 快捷登录
      </div>
      <el-form :model="loginForm" style="padding: 30px 0" ref="loginForm">
        <el-form-item>
          <el-input v-model="loginForm.phone" placeholder="请输入手机号">
            <template slot="prepend">+86</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.code" placeholder="请输入短信验证码">
            <template slot="append">
              <el-button :disabled="codeSecond!==60" style="width: 140px;" @click="getCode">{{ getCodeBtn }}</el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" style="width: 100%;">登录</el-button>
        </el-form-item>
        <el-form-item style="text-align: center">
          <span>没有账号？</span>
          <span style="color: #67C23A;cursor: pointer">联系管理员</span>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      getCodeBtn: '获取短信验证码',
      codeSecond: 60
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    getCode() {
      this.timer = setInterval(() => {
        if (this.codeSecond > 0) {
          this.getCodeBtn = this.codeSecond--
        } else {
          this.getCodeBtn = '获取短信验证码'
          this.codeSecond = 60
          window.clearInterval(this.timer)
        }
      }, 1000)
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: white;
  background: #2EC13C;

  .logo {
    width: 40px;
    height: 40px;
    margin: 5px 0px 5px 20px
  }

  .content {
    margin: 0 auto;
    display: flex;
  }
}

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #fff;
  overflow: hidden;

  ::v-deep .el-card {
    border-radius: 10px;
  }

}
</style>
