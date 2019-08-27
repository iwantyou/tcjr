<template>
  <div class="register">
    <img src="../../assets/images/logo1.png" />
    <div class="register_box">
      <h1>注册账号</h1>
      <div class="info" style="margin-top:20px">
        <label for>电子邮箱：</label>
        <el-input placeholder="请输入邮箱账号" v-model="email"></el-input>
      </div>
      <div class="info" style="margin-top:20px">
        <label for>登录密码：</label>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      </div>
      <div class="info" style="margin-top:20px">
        <label for>确认密码：</label>
        <el-input placeholder="请输入密码" v-model="repassword" show-password></el-input>
      </div>
      <div class="agree">
        点击注册表示你同意
        <span style="color:blue">《用户使用协议》</span>
      </div>
      <el-button type="warning" class="register_btn" @click="regiser">立即注册</el-button>
    </div>
    <div class="login">
      <span>已有账号</span>
      <router-link to="/login">
        <span class="now">立即登录</span>
      </router-link>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { register, register1 } from '@x';
import { Input, Button } from 'element-ui';
Vue.use(Input);
Vue.use(Button);
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      repassword: ''
    };
  },
  methods: {
    regiser () {
      if (!this.email) return this.$message('email不能为空');
      if (!this.password) return this.$message('密码不能为空');
      if (!this.repassword) return this.$message('重复密码不能为空');
      if (this.password !== this.repassword) return this.$message('重复密码应与密码一致')
      var registerfrom = {
        username: this.email,
        password: this.password
      };
      var that = this;
      register1(registerfrom).then(function (res) {
        console.log(JSON.stringify(res));
        if (res.code === 0) {
          that.$message({
            message: res.data.message,
            type: 'success'
          });
          setTimeout(() => {
            that.$router.push('/login');
          }, 2000);
        } else {
          alert(res.msg);
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.register {
  height: calc(100% - 50px);
  width: 100%;
  background-image: url(../../assets/images/backg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  filter: alpha(opacity=70);
  -moz-opacity: 0.7;
  opacity: 0.7;

  img {
    display: block;
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.5;
  }

  .register_box {
    width: 400px;
    height: 400px;
    position: absolute;
    left: 50%;
    top: 160px;
    transform: translateX(-50%);
    border-radius: 0 0 5px 5px;
    background-color: #fff;
    border-top: 10px solid #ff6000;
    padding: 0 50px;

    h1 {
      font-size: 24px;
      text-align: center;
      padding: 20px 0;
      color: #ec4c48;
      letter-spacing: 4px;
    }

    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      label {
        font-size: 16px;
        width: 100px;
      }
    }
    .agree {
      text-align: center;
      padding-top: 10px;
      font-size: 12px;
    }
    .register_btn {
      width: 100%;
      margin-top: 40px;
      background-color: #ff9500;
      font-size: 20px;
    }
  }

  .login {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);

    span {
      font-size: 14px;
      color: #999;
    }
    .now {
      color: #ff9500;
    }
  }
}
</style>
