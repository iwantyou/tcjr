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
<style lang="scss" scoped>
</style>
