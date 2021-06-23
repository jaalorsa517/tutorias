<template>
  <div id="app" class="app">
    <section class="app__container">
      <form class="app__form">
        <h2>El padre</h2>
        <input class="app__input" type="text" placeholder="Msg para el hijo" v-model="dataShare" />
        <div class="app__msg-container">
          <p>
            <strong>
              Mensaje del hijo:
            </strong>
          </p>
          <p>{{ msgOfChildren }}</p>
        </div>
        <div class="app__msg-container">
          <p>
            <strong>
              Mensaje del extraño:
            </strong>
          </p>
          <p>{{ msgOfOther }}</p>
        </div>
      </form>
    </section>
    <section class="app__container">
      <h2>El hijo</h2>
      <children :msg="dataShare" @father="onFather" />
    </section>
    <section class="app__container">
      <h2>El otro</h2>
      <other />
    </section>
  </div>
</template>

<script>
  import children from '@/components/children.vue';
  import other from '@/components/other.vue';

  export default {
    name: 'App',
    components: {
      children,
      other,
    },
    data: function() {
      return {
        dataShare: '',
        msgOfChildren: '',
        msgOfOther: '',
      };
    },
    methods: {
      onFather(msg) {
        this.msgOfChildren = msg;
      },
    },
    beforeMount() {
      this.$root.$on('send', data => {
        this.msgOfOther = data;
      });
    },
  };
</script>

<style>
  #app {
    margin-top: 60px;
    max-width: 800px;
    margin: auto;
    color: #2c3e50;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  .app__container {
    margin: 1em;
    padding: 2em;
    box-shadow: 5px 5px 5px 1px #dddddd;
  }
  .app__form {
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .app__msg-container {
    display: flex;
  }
</style>
