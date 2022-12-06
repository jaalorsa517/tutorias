<script>
import OptionApiVue from "./components/OptionApi.vue";
import sfc from "./components/sfc.vue";

export default {
  name: "App",
  components: { OptionApiVue, sfc },
};
</script>

<template>
  <div class="app__container">
    <OptionApiVue></OptionApiVue>
    <sfc></sfc>
  </div>
</template>

<style>
.app__container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
}
</style>
