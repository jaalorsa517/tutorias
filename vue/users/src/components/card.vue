<template lang="pug">
  .card-container
    .names-container
      h3.name {{name}}
      h3.last-name {{lastName}}
    h4.years {{years}}
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "card",
  props: ["name", "lastName", "years"]
});
</script>

<style scoped lang="stylus">
.card-container
  width 250px
  max-width 350px
  min-width 225px
  display flex
  justify-content center
  align-items center
  margin 10px
  color #444b60
  border-top 5px solid #42b983
  border-bottom-left-radius 10px
  border-bottom-right-radius 10px
  border-top-left-radius 5px
  border-top-right-radius 5px
  box-shadow 5px 5px 5px 5px #dfdfdf
  h3
    padding 0px 10px
    text-shadow 5px 5px 5px 5px #dfdfdf
  h4
    margin-left 20px
    text-shadow 5px 5px 5px 10px #dfdfdf
</style>
