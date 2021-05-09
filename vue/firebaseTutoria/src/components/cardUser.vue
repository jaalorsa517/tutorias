<template lang="pug">
section.card-user
  h3 🤖
  .name
    span.label Nombre
    span {{name}}
  .last-name
    span.label Apellido
    span {{lastName}}
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    name: { type: String, required: true },
    lastName: { type: String, required: true }
  }
});
</script>

<style lang="stylus" scope>
.card-user
  padding 20px
  margin 10px
  width auto
  max-width 250px
  min-width 100px
  font-size 1.2em
  letter-spacing 1px
  border-radius 5px
  border-top 3px solid #349534
  box-shadow 5px 5px 10px #ddd
  transition transform 700ms
  h3
    margin 5px
  &:hover
    transform scale(1.1)
    cursor pointer

  .label
    font-weight 700
    &:after
      padding-right 5px
      content ":"
</style>
