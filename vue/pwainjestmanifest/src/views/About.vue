<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img class="about__img" :src="logo" alt="mi_logo" />
    <img class="about__img" :src="logo2" alt="mi_logo2" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/mi_logo.png"),
      logo2: require("@/assets/Version-2.png"),
    };
  },
};
</script>

<style>
.about__img {
  width: 450px;
  margin: 10px;
}
</style>
