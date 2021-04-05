# Consumo de api

En JavaScript, el consumo de api se puede hacer de varias formas; pero en esta ocasión se va a mostrar 2 formas:
* **Fetch** 
* **Axios**

## Fetch

Es una manera "nativa", proporcionado gracias a la fundación Mozilla. [https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)

La estructura de una consulta fetch es:

```
fetch(url,options)
```
**Explicación**
* **url:** un String con la url de la api. Tiene que incluir el protocolo para evitar fallos. El protocolo más común es http o https.
* **options:** un Objeto con los parámetros para la consulta. 
  + **method:** un string con el verbo http ('GET','POST','PUT',etc).
  + **mode:** un String con las siguientas posibilidades: 'cors', 'no-cors', 'same-origin'
  + **cache:** un String con las siguientes posiblidades: *default, no-cache, reload
  + **credentials:** un String con las siguientes posiblidades: include, *same-origin, omit
  + **headers:** Un objeto con las cabeceras personalizadas. Ejemplo: 'Content-Type': 'application/json'
  + **redirect:** un String con las siguientes posiblidades: manual, *follow, error
  + **referrerPolicy:** un String con las siguientes posiblidades: no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  + **body:** un Objeto.

Fetch devuelve una **promesa**.

##### Ejemplo de get con fetch

```
fetch(
  "http://localhost:5000/users", {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-type": "application/json",
        }
    })
      .then((response) => response.json()) //La respuesta hay que convertirla a Json
      .then((data) => (this.users = data.data))
      .catch((error) => console.log(error));
```

## Axios

Es una librería que facilita el consumo de las api. [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)

### Get

```
//get de manera estática
axios.get(url,options)
```

Los parámetros para el get estático son:
* **url:** un String con la url de la api. Tiene que incluir el protocolo para evitar fallos. El protocolo más común es http o https.
* **options:** un Objeto con los parámetros para la consulta.

##### Ejemplo de get estático con axios

```
axios
  .get("http://localhost:5000/users")
  .then((response) => (this.users = response.data.data))
  .catch((error) => {
    this.errors = error;
    setTimeout(() => (this.errors = ""), 3000);
  });
```
### Post

```
//post de manera estática
axios.post(url,body,options)
```

Los parámetros para el get estático son:
* **url:** un String con la url de la api. Tiene que incluir el protocolo para evitar fallos. El protocolo más común es http o https.
* **body:** Un Objeto con el cuerpo de la consulta.
* **options:** un Objeto con los parámetros para la consulta.

##### Ejemplo de post con axios

```
axios
  .post(
    "http://localhost:5000/users",
    {
      name: this.name,
      last_name: this.lastName,
      year: this.year
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
  .then((response) => this.$router.push({ name: "Home" }))
  .catch((error) => {
    this.errors = error;
    setTimeout(() => (this.errors = ""), 3000);
});
```