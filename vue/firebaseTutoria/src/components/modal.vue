<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper" ref="wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>¿Qué desea hacer con el usuario?</h3>
            <span @click="$emit('close')">X</span>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('updateUser')">
                Modificarlo
              </button>
              <button class="modal-default-button" @click="$emit('deleteUser')">
                Borrarlo
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 250px;
  margin: 0px auto;
  padding: 20px 30px;
  position: relative;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-container span {
  height: 15px;
  padding: 5px;
  position: absolute;
  right: 10px;
  top: 10px;
  font-weight: 700px;
  font-size: 1.3em;
  text-align: center;
  line-height: 1;
  background: red;
  border-radius: 5px;
  transition: transform 800ms;
}

.modal-container span:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  display: flex;
  justify-content: center;
}

.modal-default-button {
  /* float: right; */
  margin: 10px;
  padding: 10px;
  font-size: 1.1em;
  font-weight: 600;
  letter-spacing: 1px;
  box-shadow: 5px 5px 10px #ddd;
  border: none;
  border-radius: 10px;
  background-color: #34953450;
  transition: background-color 900ms, color 500ms;
}
.modal-default-button:active,
.modal-default-button:hover {
  background-color: #349534;
  color: #ddd;
  cursor: pointer;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
