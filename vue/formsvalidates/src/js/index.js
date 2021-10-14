const validateNumber = (value) => /\d+/.test(value);
const validateTel = (value) => /^[+]*\d{7,10}$/.test(value);
const validateEmail = (value) => /.+[^@]@[\w,\d]+\.[\w]{2,}/.test(value);

/**
 * Función para validar input
 * @param {HTMLElement} el
 */
const inputSuccess = (el) => {
  el.nextElementSibling ? el.nextElementSibling.remove() : false;
  el.classList.remove("error");
  return true;
};

/**
 * Función para validar input
 * @param {HTMLElement} el
 */
const inputError = (el) => {
  const msg = el.getAttribute("placeholder");
  el.nextElementSibling ? el.nextElementSibling.remove() : false;
  el.insertAdjacentHTML("afterend", `<div class='tooltip data-error'>${msg}</div>`);
  el.classList.add("error");
  return false;
};

/**
 * Función que valida un input
 * @param {HTMLElement} el
 * @param {string} type Para determinar el tipo de input files
 */
const validateInput = (el, type = "") => {
  const value = el.value;
  if (el.type === "text") {
    return value ? inputSuccess(el) : inputError(el);
  }
  if (el.type === "number") {
    return validateNumber(value) ? inputSuccess(el) : inputError(el);
  }
  if (el.type === "tel") {
    return validateTel(value) ? inputSuccess(el) : inputError(el);
  }
  if (el.type === "email") {
    return validateEmail(value) ? inputSuccess(el) : inputError(el);
  }
  if (type === "image") {
    return el.files.length && /\.[jpg|png|gif]+$/.test(el.files[0].name) ? inputSuccess(el) : inputError(el);
  }
};

/**
 *
 * @param {NodeList} inputs
 */
const validateForm = (inputs) => {
  let response = false;

  inputs.forEach((el) => {
    let type = "";
    if (el.getAttribute("type") === "file") {
      if (el.getAttribute("accept") === "image/*") {
        type = "image";
      }
    }
    if (el.hasAttribute("required")) response = validateInput(el, type);
  });

  return response;
};

export { validateInput, validateForm };
