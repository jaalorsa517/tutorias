<template lang="pug">
  section.About
    h1 Este es el About de la aplicación
    router-link(to="/") ir al HOME
    row.row-about(
      v-for="name,key in names" 
      :key="key" 
      :name="name"
      @click.native="onClick(key)"
      ref="buttonRef"
      )
</template>

<script lang="js">
import row from "@/components/rowComponent.vue";

export default {
  name: "About",
  components: {
    row
  },
  data: function() {
    return {
      names: ["Jaime", "Jose", "Paola", "Catalina", "Liseth", "Mauricio"],
      isActive: false
    };
  },
  methods:{
    onClick:function(i){
      let rowCurrent =this.$refs.buttonRef[i].$el.classList;
      if (rowCurrent.contains('active')){
        rowCurrent.remove('active')
      }
      else{
        rowCurrent.add('active')
      }
    }
  }
}
</script>

<style lang="stylus">
.row-about.active
  background-color #f5f
</style>
