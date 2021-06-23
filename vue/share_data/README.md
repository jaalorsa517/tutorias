# Share Data

## Descripción

En Vue, de manera tradicional, se puede compartir información entre componentes sí están estrechamente ligados; es decir, de "padre" a "hijo" (mediante props) y de "hijo" a "padre" (mediante eventos). Pero que pasaría si se necesita compartir información entre 2 "hermanos", o "tatarabuelo" y "bisnieto"?

Vue permite muchas funcionalidades, que no están visibles fácilmente en la documentación y pocos saben y comparten estos tipos de tips. Entre las funcionalidades "unicornio" se encuentra una que sigue el principio de comunicación a través de eventos.

La instancia **\$root** es la que se crea al momentos de iniciar la aplicación web. Esta instancia cuenta con una manera de generar eventos personalizados, y por ende de transferir datos a través de toda la aplicación web. **\$emit** y **\$on** son los canales para transmitir información a cualquier parte de la aplicación web.

```
//En un componente cualquiera
...
  msg: function() {
        this.$root.$emit('send', this.msg);
      }
...

//En otro componente cualquiera
...
  beforeMount() {
      this.$root.$on('send', data => {
        this.msgOfOther = data;
      });
    }
...
```

Con $emit envío la información y con $on recibo la información. Pueden haber tanto $on o $emit como se requiera. Hay que recordar que $emit y $on son métodos de la instancia \$root.
