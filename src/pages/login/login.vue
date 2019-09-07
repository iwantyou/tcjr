<template>
  <div class="login">
    <img src="../../assets/images/logo1.png" />
    <div class="login_box">
      <el-tabs v-model="name">
        <el-tab-pane label="扫码登录" name="a">
          <div class="qr">
            <qrcode value="hello,qrcode" :options="{size:200}"></qrcode>
            <div class="state">{{qrstatus}}</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="密码登录" name="b">
          <div>
            <!-- <h1>登录</h1> -->
            <div style="margin-top:30px">
              <el-input placeholder="请输入手机号码/邮箱/用户名" v-model="loginform.username">
                <i slot="prefix" class="el-input__icon el-icon-user-solid" style="font-size:18px"></i>
              </el-input>
            </div>
            <div style="margin-top:30px">
              <el-input placeholder="请输入密码" v-model="loginform.password" show-password>
                <i slot="prefix" class="el-input__icon el-icon-unlock" style="font-size:18px"></i>
              </el-input>
            </div>
            <div class="forget">
              <a href>忘记密码？</a>
            </div>
            <el-button type="warning" class="login_btn" @click="login">登录</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="register">
      <span>还没有账号?</span>
      <router-link to="/register">
        <span class="signup">免费注册</span>
      </router-link>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { login } from '@x';
import { Input, Button } from 'element-ui';
import jscookie from 'js-cookie';
import { mapState, mapGetters } from 'vuex';
Vue.use(Input);
Vue.use(Button);
export default {
  name: 'login',
  data () {
    return {
      loginform: {
        username: null,
        password: null
      },
      name: 'a'
    };
  },
  computed: {
    ...mapState({
      login1: state => state.user.login
    }),
    ...mapGetters(['qrstatus'])
  },
  methods: {
    login () {
      if (!this.loginform.username) return this.$message('用户名不能为空');
      if (!this.loginform.password) return this.$message('密码不能为空');
      login(this.loginform)
        .then(res => {
          if (res.code === 0) {
            this.$store.state.login = true;
            const { token } = res.data;
            jscookie.set('token', token);
            let query = decodeURIComponent(this.$route.query.redirect || '/');
            this.$router.push({ path: query });
          } else {
            this.$message(res.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.login {
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
  .qr {
    padding: 30px 0 15px 0;
    text-align: center;
    .state {
      padding-top: 30px;
    }
  }
  img {
    display: block;
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.5;
  }

  .login_box {
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

    .forget {
      padding: 10px 5px;
      text-align: right;
      a {
        font-size: 14px;
        color: #3ca6fc;
      }
    }
    .login_btn {
      width: 100%;
      margin-top: 50px;
      background-color: #ff9500;
      font-size: 20px;
    }
  }

  .register {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);

    span {
      font-size: 14px;
      color: #999;
    }
    .signup {
      color: #ff9500;
    }
  }
}
</style>
