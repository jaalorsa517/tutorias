<template lang="pug">
section.form-user
  form
    input(placeholder="Nombre" v-model="name" )
    input(placeholder="Apellido" v-model="lastName" )
    button.button-user(@click.prevent="onClick" @keyup.enter="onClick") {{action}}
    
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: function() {
    return {
      name: "",
      lastName: "",
      action: "Crear"
    };
  },
  methods: {
    onClick: function() {
      /**
       * Método que valida y emite el evento al padre
       */
      if (this.name !== "" && this.lastName !== "") {
        this.$emit("success", { name: this.name, lastName: this.lastName });
      } else {
        this.$emit("success", { msg: "No pueden haber datos vacíos" });
      }
    },
    loadValues: function(action: string,name: string ="", lastName: string="") {
      /**
       * Método para reiniciar los datos del componente
       */
      this.name = name;
      this.lastName = lastName;
      this.action = action;
    }
  }
});
</script>

<style lang="stylus">
.form-user
  margin 20px 0
  input
    margin 5px
    padding 10px
    font-size 1.1em
    letter-spacing 1px
    color #2c3e50
    box-shadow 5px 5px 10px #ddd
    border-radius 10px
    border 0
    &:focus
      outline 3px solid #349534

  .button-user
    margin 10px
    padding 10px
    font-size 1.1em
    font-weight 600
    letter-spacing 1px
    box-shadow 5px 5px 10px #ddd
    border none
    border-radius 10px
    background-color #34953450
    transition background-color 900ms, color 500ms
    &:active, &:hover
      background-color #349534
      color #ddd
      cursor pointer
</style>
