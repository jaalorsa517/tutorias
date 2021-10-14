<template>
  <div id="app">
    <MyForms />
  </div>
</template>

<script>
import MyForms from "@/components/MyForms.vue";
export default {
  name: "App",
  components: { MyForms },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
