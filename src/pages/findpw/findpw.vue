<template>
  <div class="findpassword">
    <div class="findpw-box">
      <div class="findpw-header"></div>
      <h3 class="text-center" style="padding: 10px 0 20px 0 ">找回密码</h3>
      <el-form ref="findform" :rules="rules" :model="findform" label-width="70px">
        <el-form-item label="手机号" props="phone">
          <el-input v-model="findform.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="验证码" props="code">
          <el-input v-model="findform.code" placerholder="请输入验证码"></el-input>
        </el-form-item>
        <div class="text-center" style="padding-top:40px;">
          <el-button type="primary" @click.prevent="findpw">找回密码</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'findpw',
  data () {
    return {
      findform: {
        phone: null,
        code: null
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { length: 11, message: '手机号长度必须为11位', trigger: 'blur' }
        ],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    };
  },
  methods: {
    findpw () {
      this.$refs.findform.validate(valid => {
        if (valid) {
          this.$message('找回密码成功');
        } else {
          alert('错误');
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.text-center {
  text-align: center;
}
.findpassword {
  // background: url(../../assets/images/backg.jpg);
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 5%;
  .findpw-box {
    padding: 10px 20px 20px;
    box-sizing: content-box;
    margin: 0 auto;
    width: 400px;
    background-color: #fff;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
    border-radius: 5px;
  }
}
</style>
