<template>
  <section class="loading">
    <div class="loading__img"></div>
    <div class="loading__name"></div>
  </section>
</template>

<style>
.loading {
  width: 300px;
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
.loading__img,
.loading__name {
  width: 300px;
  background-color: gray;
}
.loading__img {
  height: 50px;
}
.loading__name {
  height: 50px;
}
</style>
