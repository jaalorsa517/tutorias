<template>
  <input type="text" v-model="msg" />
</template>
<script>
  export default {
    data: function() {
      return {
        msg: '',
      };
    },
    watch: {
      msg: function() {
        this.$root.$emit('send', this.msg);
      },
    },
  };
</script>
