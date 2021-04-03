<template>
  <form>
    <div class="messagges" v-show="msg !== ''">{{ msg }}</div>
    <label for="username">Username</label>
    <input type="text" name="username" v-model="username" />
    <label for="password">Password</label>
    <input type="password" name="password" v-model="password" />
    <input
      class="submit animate__animated animate__wobble"
      type="button"
      value="Submit"
      @click="onClick"
    />
  </form>
</template>

<script>
export default {
  name: "login-component",
  data: function() {
    return {
      username: "",
      password: "",
      msg: ""
    };
  },
  methods: {
    onClick: function() {
      if (this.username !== "" && this.password !== "") {
        this.$emit("onSubmit", { user: this.username, pass: this.password });
      } else {
        this.setMessagges("Faltan datos");
      }
    },
    setMessagges: function(value) {
      this.msg = value;
      setTimeout(() => {
        this.msg = "";
      }, 2000);
    }
  }
};
</script>

<style>
form {
  display: flex;
  max-width: 300px;
  flex-direction: column;
  align-items: center;
}

label {
  align-self: flex-start;
  margin: 5px 25px;
}

input {
  padding: 5px;
  font-family: Roboto;
  color: var(--color-letra);
  background-color: var(--color-input);
  border-radius: 5px;
  border: 0;
}

.submit {
  margin-top: 15px;
}
</style>
