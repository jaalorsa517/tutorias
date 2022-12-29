<script setup>
const props = defineProps({
  msg: { type: String, default: "El mensaje default" },
})

const emit = defineEmits(["showMsg"])

function showMsg() {
  emit("showMsg",`Este mensaje es ${props.msg} desde la prop`)
}

</script>

<template>
  <h3>{{`Este es el mensaje de la prop: ${props.msg}`}}</h3>
  <button @click="showMsg">Emitir mensaje</button>
  <RouterView></RouterView>
</template>

<style>
@import "./style.css";

#app{
  margin: auto;
  text-align: start;
}
</style>
