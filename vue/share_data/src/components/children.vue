<template>
  <div class="children">
    <input type="text" placeholder="Msg para el padre" v-model="father" />
    <div class="children__msg-container">
      <p>
        <strong>
          Mensaje del hijo:
        </strong>
      </p>
      <p>{{ msg }}</p>
    </div>
    <div class="children__msg-container">
      <p>
        <strong>
          Mensaje del extraño:
        </strong>
      </p>
      <p>{{ msgOfOther }}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['msg'],
    data: function() {
      return {
        father: '',
        msgOfOther: '',
      };
    },
    watch: {
      father: function() {
        this.$emit('father', this.father);
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
  .children {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .children__msg-container {
    display: flex;
  }
</style>
