<template>
  <section class="my-form">
    <form class="container form-data">
      <div class="container">
        <h2 class="title">Formulario básico</h2>
      </div>
      <div class="container ">
        <label class="form-data__label" role="label">Nombres</label>
        <input class="form-data__input" type="text" name="nombre" placeholder="Nombres" required @blur="validateInput($event)" />
      </div>
      <div class="container ">
        <label class="form-data__label" role="label">Email</label>
        <input class="form-data__input" type="email" name="email" placeholder="Email" required @input="validateInput($event)" />
      </div>
      <div class="container ">
        <label class="form-data__label" role="label">Edad</label>
        <input class="form-data__input" type="number" name="edad" placeholder="Edad" required @input="validateInput($event)" />
      </div>
      <div class="container ">
        <label class="form-data__label" role="label">Teléfono</label>
        <input
          class="form-data__input"
          type="tel"
          name="telephone"
          placeholder="Teléfono"
          required
          @focus="validateInput($event)"
          @blur="validateInput($event)"
        />
      </div>
      <div class="container ">
        <label class="form-data__label" role="label">Imagen</label>
        <input
          class="form-data__input"
          type="file"
          accept="image/*"
          name="nombre"
          placeholder="Imagen"
          required
          @input="validateInput($event, 'image')"
        />
      </div>
      <div class="container">
        <input class="form-data__input btn" type="button" value="Guardar" @click="onSubmit" />
      </div>
    </form>
  </section>
</template>
<script>
import { validateInput, validateForm } from "@/js/index.js";

export default {
  methods: {
    validateInput(evt, type = "") {
      return validateInput(evt.target, type);
    },
    onSubmit(evt) {
      const inputs = document.querySelectorAll(".form-data__input");
      if (validateForm(inputs)) {
        alert("Formulario listo para guardar");
      } else {
        alert("Formulario con errores");
      }
    },
  },
};
</script>

<style>
.title {
  margin: 0;
}
</style>
