<template>
  <main>
    <!-- <img :src="src" width="100%" height="400" /> -->
    <h1 class="animate__animated animate__bounce">Bienvenidos</h1>
    <h3>Login, ingrese los datos</h3>
    <Login @onSubmit="onClick" ref="loginChild" />
    <router-link to="/" class="link">
      No estás registrado? Haz click acá
    </router-link>
  </main>
</template>

<script>
import Login from "../components/LoginComponent.vue";

export default {
  data: function() {
    return {
      username: "fulano",
      password: "123",
      src: "https://i.ibb.co/KqpkJ3P/python.png"
    };
  },
  components: {
    Login
  },
  methods: {
    onClick: function(datas) {
      if (datas.user === this.username && datas.pass === this.password) {
        this.$route.params.user = datas.user;
        this.$route.params.pass = datas.pass;
        this.$router.push("/welcome");
      } else {
        this.$refs.loginChild.setMessagges("Los datos son incorrectos");
      }
    }
  }
};
</script>

<style>
main {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 300px;
}
main > h1 {
  margin: auto;
  font-family: "Bangers", cursive;
  text-align: center;
  color: var(--color-titulo);
}

main > h3 {
  margin: 25px auto;
  text-align: center;
}

.link {
  margin: 30px auto;
  text-decoration: none;
  text-align: center;
  color: var(--color-letra);
}
</style>
