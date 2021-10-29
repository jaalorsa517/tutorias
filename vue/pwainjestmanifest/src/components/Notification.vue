<template>
  <section class="notificationPop">
    <div class="notificationPop__container">
      <h3 class="notificationPop__title">{{ title }}</h3>
      <p class="notificationPop__msg">{{ msg }}</p>
      <button class="notificationPop__submit" @click="$emit('onSubmit')">Aceptar</button>
    </div>
  </section>
</template>

<script>
export default {
  props: { title: { type: String }, msg: { type: String } },
};
</script>

<style>
.notificationPop {
  padding: 15px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 14px;
  text-align: center;
  z-index: 1000;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 5px #42b983;
}
.notificationPop__container {
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
}
.notificationPop__submit {
  appearance: none;
  border: none;
  border-radius: 5px;
  background-color: #42b983;
  padding: 10px;
  cursor: pointer;
}
.notificationPop__submit:hover {
  opacity: 0.7;
}
.notificationPop__submit:active {
  transform: scale(0.97);
}
</style>
