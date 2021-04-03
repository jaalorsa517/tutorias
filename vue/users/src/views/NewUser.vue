<template lang="pug">
  .New-User
    .banners(v-show="errors.length != 0")
      p {{errors}}
    form
      h2 Crear un nuevo usuario
      input(v-model="name" name="name" placeholder="Nombre")
      input(v-model="lastName" name="last_name" placeholder="Apellido")
      input(v-model="year" name="year" placeholder="Edad")
      button(@click.prevent="onSave") Crear
    router-link.link(to="/") Volver
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
  data: function() {
    return {
      name: "",
      lastName: "",
      year: "",
      errors: ""
    };
  },
  methods: {
    onSave: function() {
      if (this.name == "" || this.lastName == "" || this.year == "") {
        this.errors = "No puede haber datos vacíos";
        setTimeout(() => (this.errors = ""), 3000);
      } else {
        axios
          .post(
            "http://localhost:5000/users",
            {
              name: this.name,
              last_name: this.lastName,
              year: this.year
            },
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
          )
          .then((response) => this.$router.push({ name: "Home" }))
          .catch((error) => {
            this.errors = error;
            setTimeout(() => (this.errors = ""), 3000);
          });
      }
    }
  }
});
</script>

<style lang="stylus">
.banners
  margin 0

.New-User
  max-width 300px
  padding 15px
  margin auto
  color #444b60
  box-shadow 5px 5px 5px 5px #dfdfdf
  border-radius 15px

  form
    display flex
    flex-direction column
    align-items center
    margin 10px 0
    input
      margin 8px
      padding 2px
      color #444b60
    button
      margin 10px 0

  .link
    margin 10px 0
    color #42b983
</style>
