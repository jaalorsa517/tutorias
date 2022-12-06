const isShow = true;
const nombre = "Fulano";
const edad = 30;
const persona = { name: "John", age: 25 };
const ciudades = ["Londres", "New York", "Madrid", "Paris"];
const vehiculos = [
  { marca: "BMW", modelo: "Serie 3" },
  { marca: "Audi", modelo: "A4" },
];

let _isShow = isShow;
let _nombre = nombre;
let _edad = edad;

// let _persona = { ...persona };
let _persona = Object.assign({}, persona);
// let _persona = JSON.stringify(persona);
// _persona = JSON.parse(_persona);
let _ciudades = ciudades.map((item) => item);
// let _vehiculos = vehiculos.map((item) => ({ ...item }));
let _vehiculos = JSON.stringify(vehiculos);
_vehiculos = JSON.parse(_vehiculos);

console.log("***** RESULTADOS ANTES DE ********");
console.log("isShow", isShow, "isShow Clone", _isShow);
console.log("nombre", nombre, "nombre clone", _nombre);
console.log("edad", edad, "edad clone", _edad);
console.log("persona", persona, "persona clone", _persona);
console.log("ciudades", ciudades, "ciudades clone", _ciudades);
console.log("vehiculos", vehiculos, "vehiculos clone", _vehiculos);

_isShow = false;
_nombre = "Mengano";
_edad = 40;
_persona.name = "Jane";
_ciudades.push("Barcelona");
_vehiculos.push({ marca: "Mercedes Benz", modelo: "Clase C" });
_vehiculos[0].marca = "Renault";

console.log("***** RESULTADOS DESPUES DE ********");
console.log("isShow", isShow, "isShow Clone", _isShow);
console.log("nombre", nombre, "nombre clone", _nombre);
console.log("edad", edad, "edad clone", _edad);
console.log("persona", persona, "persona clone", _persona);
console.log("ciudades", ciudades, "ciudades clone", _ciudades);
console.log("vehiculos", vehiculos, "vehiculos clone", _vehiculos);
