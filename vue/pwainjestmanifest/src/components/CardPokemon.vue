<template>
  <section class="card">
    <img class="card__img" :src="link" :alt="name" />
    <h3 class="card__name">{{ name }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    link: { type: String, required: true },
    name: { type: String, required: true },
  },
};
</script>

<style>
.card {
  max-width: 300px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  box-shadow: 2px 2px 10px rgb(223, 223, 223);
  border-radius: 15px;
  cursor: pointer;
}
.card__img {
  width: 250px;
}
.card__name {
  text-transform: capitalize;
}
</style>
