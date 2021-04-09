<template lang="pug">
  .row-container
    span.name {{name}}
</template>

<script lang="js">
export default {
  props: ["name"],
}
</script>

<style lang="stylus">
.row-container
  display flex
  justify-content space-around
  margin 20px auto
  padding 15px
  max-width 300px
  background-color #f5f5f5
  border-radius 10px
  box-shadow 5px 5px 10px #ddd
  transition-duration 700ms
  &:hover
    cursor pointer
    transform scale(1.1)
</style>
