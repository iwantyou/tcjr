<template>
  <div class="detail">这是详情页面</div>
</template>
<script>
import { getdetail } from "@x";
export default {
  name: "postDetail",
  data() {
    return {
      item_id: this.$route.params.id,
      itemData: ""
    };
  },
  methods: {
    getData() {
      getdetail({ item_id }).then(res => {
        console.log(JSON.stringify(res));
        if (res.code === 0) {
          const { itemData } = res.data;
        } else {
          this.$message({
            type: "warning",
            message: res.msg
          });
        }
      });
    }
  }
};
</script>
<style lang=less sscoped></style>