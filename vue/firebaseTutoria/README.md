# UsersFire

## Descripción

Proyecto que muestra el uso de VueJs y Firestorage.
Es un proyecto sencillo, tipo CRUD (Create Read Update Delete) con el objetivo de integrar las funciones necesarias para demostrar el uso de VueJs con los servicios de FireStorage.

## Demo

El aplicativo lo pueden probar en http://users-firestorage.jaalorsa.com

## Otras consideraciones

Firestore es un servicio brindado por firebase de Google. La documentación es https://firebase.google.com/docs/firestore?hl=es-419.
Para hacer un CRUD, a modo de resumen, es (Los ejemplos mostrados son cuando se configura una colección predeterminada):

- **Create:** firestore se puede usar 2 métodos que varían de acuerdo al modelo del negocio.
  - **add:** Método que crea un nuevo documento y firestore se encarga de generarle un id único. Este método devuelve una promesa con un objeto que contiene el id del documento creado.
    ```
    firestore.add().then(doc => doc.id)
    ```
  - **set:** Método que crea o modifica todo un documento (sobrescribir), pero hay que enviarle un id.
    ```
    firestore.doc(idDoc).set(data)
    ```
- **Read:** Método que hace la consulta a firestore y devuelve una promesa con un iterador (cuando se manda a llamar toda una colección).
  ```
  firestore.get().then(querySnapshot=>{
    querySnapshot.forEach(doc=> doc.data())
  })
  ```
- **Update:** Método que actualiza un documento. Se puede hacer también con el método set.
  ```
  firestore.doc(idDoc).update()
  ```
- **Delete:** Método que elimina un documento.
  ```
  firestore.doc(idDoc).delete()
  ```
