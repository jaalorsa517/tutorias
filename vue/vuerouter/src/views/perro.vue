<template>
  <div>
    <h2>PERRO</h2>
    <router-link v-bind:to="{ name: 'zorro', query: { nombre: 'zorrin' } }">Al zorro</router-link>
  </div>
</template>
