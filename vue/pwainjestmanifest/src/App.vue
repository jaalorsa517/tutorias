<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/pokemons">Pokemons</router-link>
    </div>
    <router-view />
    <popUp title="Nueva versión" msg="Por favor refresque la página" v-if="isUpdateSW" @onSubmit="updateWindow" />
  </div>
</template>

<script>
import popUp from "@/components/Notification.vue";

export default {
  components: { popUp },
  data() {
    return {
      isUpdateSW: false,
    };
  },
  methods: {
    updateWindow() {
      window.location.reload();
    },
  },
  mounted() {
    window.addEventListener("message", (e) => {
      if (e.data.msg === "SW_UPDATED") {
        window.caches.keys().then((cache) => {
          cache.forEach((name) => {
            window.caches.delete(name);
          });
        });
        this.isUpdateSW = true;
      }
    });
  },
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

#nav {
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
