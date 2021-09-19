<template>
  <div>
    <h2>GATOS</h2>
    <router-link :to="{ name: 'leon', params: { nombre: 'leoncito' } }">Ir al leon</router-link>
  </div>
</template>
<script>
export default {
  methods: {
    getName: () => {
      return 1 + 2;
    },
  },
  mounted: function() {
    localStorage.setItem("user", "admin");
  },
};
</script>
