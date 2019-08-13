<template>
  <div class="findpassword">
    <div class="findpw-header"></div>
    <div class="text-center">找回密码</div>
    <el-form ref="findform" :rules="rules" :model="findform">
      <el-form-item label="手机号" props="phone">
        <el-input v-model="findform.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="验证码" props="code">
        <el-input v-model="findform.code" placerholder="请输入验证码"></el-input>
      </el-form-item>
      <div class="text-center">
        <el-button type="primary" @click.prevent="findpw">找回密码</el-button>
      </div>
    </el-form>
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
  background: url(../../assets/images/backg.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  margin: 0 auto;
}
</style>
