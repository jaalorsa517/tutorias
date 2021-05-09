<template lang="pug">
  #app
    section.msg(v-show="msg !== ''") {{this.msg}}
    h2(v-animate-css="animation.tada") 🙄 {{action}} usuario
    form-user(
      @success="onSucess" 
      v-animate-css="animation.introLeft"
      ref="formUser"
      )
    hr
    h2(v-animate-css="animation.tada") 😮‍💨 Usuarios
    .cards-container(v-if="!isLoad" v-animate-css="animation.fade")
      modal(
        v-show="showModal"
        @close="showModal = false"
        @updateUser="onUpdate"
        @deleteUser="onDelete"
        )
      .empty(v-if="users.length < 1") 
        p(v-animate-css="animation.pulseSlow") 😔 No hay usuarios
      .cards(v-else)
        card-user(
          v-for="user in users" 
          :key="user.id" 
          :name="user.name" 
          :lastName="user.lastName"
          @click.native="onClick(user)"
          )
    .loading(v-else)
      .load(v-animate-css="animation.pulse") 🐢...

</template>

<script lang="ts">
  import Vue, { VueConstructor } from 'vue';
  import formUser from '@/components/formUser.vue';
  import cardUser from '@/components/cardUser.vue';
  import modal from '@/components/modal.vue';
  import firestore from '@/services/firebase/firestore';

  // Interface para el manejo de los datos del usuario
  interface user {
    id: string;
    name: string;
    lastName: string;
    msg?: string;
  }

  //Definir el tipo de datos para usar TS
  let msg: string | undefined = '';
  let users: user[] = [];
  let user: user;

  export default (Vue as VueConstructor<
    Vue & {
      $refs: {
        formUser: InstanceType<typeof formUser>;
      };
    }
  >).extend({
    name: 'App',
    components: {
      formUser,
      cardUser,
      modal,
    },
    data: function() {
      return {
        msg: msg,
        userSelected: user,
        users: users,
        action: 'Crear',
        isLoad: true,
        showModal: false,
        //animaciones
        animation: {
          pulse: {
            classes: 'pulse',
            duration: 1000,
            iteration: 'infinite',
          },
          pulseSlow: {
            classes: 'pulse',
            duration: 3000,
            iteration: 'infinite',
          },
          tada: {
            classes: 'tada',
          },
          fade: {
            classes: 'fadeIn',
            duration: 1000,
          },
          introLeft: {
            classes: 'slideInLeft',
          },
        },
      };
    },
    methods: {
      onSucess: function(data: user) {
        /**
         * Método para manejar el formulario
         */
        if (Object.keys(data).some(v => v === 'msg')) {
          const { msg } = data;
          this.showBanner(msg);
        } else {
          const { name, lastName } = data;
          if (this.action === 'Crear') {
            firestore
              .add({ name, lastName })
              .then(document => {
                this.showBanner('Usuario Creado');
                this.$refs.formUser.loadValues(this.action);
              })
              .catch(error => this.showBanner(error));
          } else {
            //Evento al modificar
            this.action = 'Crear';
            firestore
              .doc(this.userSelected.id)
              .update({ name, lastName })
              .then(document => {
                this.showBanner('Usuario Modificado');
                this.$refs.formUser.loadValues(this.action);
              })
              .catch(error => this.showBanner(error));
          }
          this.loadUsers();
        }
      },
      onClick: function(user: user) {
        /**
         * Método para manejar el click de las cards
         */
        this.showModal = true;
        this.userSelected = user;
      },
      onUpdate: function() {
        /**
         * Método para manejar el boton update del modal
         */
        this.action = 'Modificar';
        this.$refs.formUser.loadValues(this.action, this.userSelected.name, this.userSelected.lastName);
        this.showModal = false;
      },
      onDelete: function() {
        /**
         * Método para manejar el boton delete del modal
         */
        firestore
          .doc(this.userSelected.id)
          .delete()
          .then(document => {
            this.showBanner('Usuario Eliminado');
            this.loadUsers();
          })
          .catch(error => this.showBanner(error));
      },
      //Metodos varios
      loadUsers: function() {
        /**
         * Carga los usuarios de firebase
         */
        this.isLoad = true;
        firestore.get().then(querySnapshot => {
          this.users = [];
          querySnapshot.forEach(doc => {
            const { name, lastName } = doc.data();
            const user: user = { id: doc.id, name, lastName };
            this.users.push(user);
          });
        });
        this.isLoad = false;
      },
      showBanner: function(msg: string | undefined) {
        /**
         * Método para mostrar mensajes banner
         */
        this.msg = '👉🏽 ' + msg;
        setTimeout(() => (this.msg = ''), 2500);
      },
    },
    //Ciclos
    beforeMount: function() {
      this.loadUsers();
    },
  });
</script>

<style lang="stylus">
  #app
    font-family Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50

  .msg
    width 100%
    padding 20px
    font-size 1.5em
    text-align left
    background-color #34953450
    box-shadow 5px 5px 10px #ddd

  hr
    color #349534

  .cards
    display flex
    flex-wrap wrap
    margin-top 20px

  .loading
    margin-top 20px
    .load
      font-size 2em
      color #349534

  .empty
    margin auto
    font-size 2em
    color #349534
</style>
