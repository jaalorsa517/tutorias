<template lang="pug">
  section.Home
    h1 Este es el Home de la aplicación
    router-link(to="/about") ir a ABOUT
    row.row-home(
      name="Jaime"
      :class="isActive ? 'active' : ''"
      @click.native="isActive = !isActive"
      )
</template>

<script lang="ts">
import Vue from "vue";
import row from "@/components/rowComponent.vue";

export default Vue.extend({
  name: "Home",
  components: {
    row
  },
  data: function() {
    return {
      isActive: false
    };
  }
});
</script>

<style lang="stylus">
.row-home.active
  background-color #82cc82
</style>
