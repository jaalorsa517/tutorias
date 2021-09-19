<template>
  <div>
    <header class="header"></header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  watch: {
    $route(newValue) {
      console.log(newValue);
    },
  },
};
</script>

<style>
.header {
  width: 100%;
  height: 40px;
  background-color: red;
}
</style>
