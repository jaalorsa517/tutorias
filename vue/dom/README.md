# Manipulación del Dom en VueJs

Hay ocasiones en que nace la necesidad de manipular algún elemento específico del DOM, como un input, h1, etc. La necesidad surge por tener que agregar clases, eventos, hijos, en fin, un sin fin de posibilidades.

En vue, existe una forma muy fácil de manipular el DOM, y no es con la instancia "\$el" (de esta manera es muy laborioso e inestable manipular el DOM). Es con "\$refs" (ref). Con ref, se crea una copia de referencia del elemento del DOM al que se le asignó un nombre a la directiva "ref".

`<h1 ref="title" @click="myfunction">Titulo</h1>`

Para agregar, por ejemplo, una clase a un elemento:
```
//Ejemplo usando object api
...
  myfunction: function(){
      this.$refs.title.classList.add("other-title")
  }
...
```
En ese ejemplo, se agrega la clase "other-title" a la etiqueta h1. Muy fácil, cierto?!

Ref tiene más usos que pueden ser muy útiles. Sí se usa ref en un componente, se puede acceder a sus variables y métodos.

Con todo lo anterior, ya se conoce otra forma más de aprovechar los superpoderes que tiene VueJs y lo bien estructurado y ordenado que es.

