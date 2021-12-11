<script setup>
import { ref, watchEffect } from "vue";
import dic from "../js/dictionary";

const props = defineProps({
  info: Object,
});
const isLoad = ref(false);
const card = ref(null);

watchEffect(() => {
  if (isLoad.value) {
    card.value.style.borderColor = dic.colorsType[props.info.type];
  }
});
</script>

<template>
  <div class="card" ref="card">
    <div class="card__details">
      <div class="skeleton card__name card__skeleton card__skeleton--txt" v-if="!isLoad"></div>
      <p class="card__name" v-else>{{ info.name }}</p>
    </div>
    <div class="card__img">
      <div class="skeleton card__skeleton card__skeleton--img" v-if="!isLoad"></div>
      <img :src="info.img" :alt="info.name" loading="lazy" @load="isLoad = true" v-show="isLoad" />
    </div>
  </div>
</template>

<style>
.card {
  padding: 20px;
  margin: 10px;
  width: 300px;
  text-align: center;
  border-radius: 5px 5px 15px 15px;
  box-shadow: 1px 1px 5px #c3c3c3;
  border-top: 7px solid black;
  transition: border 600ms;
}
.card__img {
  width: 80%;
  max-height: 100%;
  margin: 5px auto;
}
.card__img img {
  width: 100%;
  height: 100%;
}
.card__name {
  text-transform: capitalize;
  font-weight: bold;
}
.card__skeleton {
  border-radius: 5px;
}
.card__skeleton--img {
  width: 240px;
  height: 240px;
}
.card__skeleton--txt {
  width: 100px;
  height: 15px;
  margin: auto;
  text-align: center;
}
</style>
