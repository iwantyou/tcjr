<template>
  <div>
    <p>123</p>
    <slot name="user" :user="title"></slot>
  </div>
</template>
<script>
export default {
  name: "shiyan",
  data() {
    return {
      user: {
        lastName: "duzibo",
        firstName: "xiewenli"
      }
    };
  },
  props: {
    title: {
      type: Object
    }
  }
};
</script>