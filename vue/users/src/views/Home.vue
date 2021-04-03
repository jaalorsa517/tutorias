<template lang="pug">
  .Home
    .banners(v-show="errors.length != 0")
      p {{errors}}
    button.button(@click="getUsers") Cargar Usuarios
    button.button(@click="goUser") Nuevo Usuario
    .cards-container
      card(v-for="user in users" :key="user.id" :name="user.name" :lastName="user.last_name" :years="user.year_old")
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import card from "../components/card.vue";

export default Vue.extend({
  name: "Home",
  data: function() {
    return {
      users: [],
      errors: ""
    };
  },
  components: {
    card
  },
  methods: {
    getUsers: function() {
      // axios
      //   .get("http://localhost:5000/users")
      //   .then((response) => (this.users = response.data.data))
      //   .catch((error) => {
      //     this.errors = error;
      //     setTimeout(() => (this.errors = ""), 3000);
      //   });
      fetch("http://localhost:5000/users", {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-type": "application/json",
        }
      })
        .then((response) => response.json())
        .then((data) => (this.users = data.data))
        .catch((error) => console.log(error));
    },
    goUser: function() {
      this.$router.push({ name: "NewUser" });
    }
  }
});
</script>

<style lang="stylus">
.Home
  display flex
  flex-direction column
  align-items center
  justify-content center
  width 100vw
.banners
  width 98%
  margin 0px 20px
  padding 2px
  letter-spacing 1px
  text-align left
  border-radius 5px
  color white
  background-color rgba(66,185,131,0.8)
  box-shadow 5px 5px 5px #dfdfdf
  p
    margin 10px
    font-weight 600

.button
  max-width 250px
  margin 15px

.cards-container
  display flex
  justify-content center
  flex-wrap wrap
</style>
