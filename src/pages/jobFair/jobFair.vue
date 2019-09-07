<template>
  <div class="jobfire">
    <el-select v-model="msg1" size="medium">
      <i slot="prefix" class="el-icon-search"></i>
      <el-option v-for="item in msg" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  name: 'jobFair',
  data () {
    return {
      msg1: 1,
      msg: [
        {
          label: 1,
          value: 1
        },
        {
          label: 2,
          value: 2
        },
        {
          label: 3,
          value: 3
        },
        {
          label: 4,
          value: 4
        }
      ]
    };
  }
};
</script>
<<<<<<< HEAD
<style scoped>
.wrap-header{
  float:left;
  margin-right:-10px;
}
.wrap-content{
  width:100px;
  height:100px;
  float:left;
  background-color:#DD0B1B;
  color:#fff;
}
=======
<style lang="scss" scoped>
>>>>>>> befda58a0a0a465f2055c111388f3c826e1ad4f2
</style>
