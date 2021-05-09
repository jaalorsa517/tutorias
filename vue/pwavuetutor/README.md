# Las PWA con Vue.js

Las aplicaciones web progresivas son aplicaciones que trabajan con una alta disponibilidad y se permite instalar en los dispositivos Android a modo de imitación de aplicación nativa.

Lo que permite estas características es poder trabajar con un archivo llamado Service Worker, el cual es, básicamente, un archivo que se ejecuta en background del explorador web, y permite cachear información y tener acceso a ciertas funcionalidades del dispositivo.

Las ventajas que tiene es:

- Luego de la primera carga de la página web, super velocidad de carga.
- Acceso a ciertos hardware del dispositivo.
- Disponibilidad Offline.

Las PWA tiene ciertas condiciones para su uso:

1. Funcionan solo en producción.
2. Se requiere que la aplicación esté servida a través de SSL (https).
3. Su correcto funcionamiento se evidencia en exploradores Chrome.

El avance de las PWA se debe gracias al equipo de google, el cual es el encargado, oficialmente, de proveer la herramienta que permite trabajar con los service workers.

El core de Vue, usa el plugin @vue/cli-plugin-pwa (https://cli.vuejs.org/core-plugins/pwa.html), el cual usa Workbox, plugin creado por el equipo de Google (https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#which_plugin_to_use).

Workbox maneja 5 estrategias para trabajar: "Cache only", "Cache first", "Networking first", "Networking only" y "Stale while revalidate".

El plugin de Vue, trabaja con 2 opciones: "GenerateSW" (Default) e "InjestManifest". La diferencia entre ellos radica en que, con la modalidad InjestManifest, se puede inyectar un service worker personalizado, permitiendo generar notificaciones, personalizar las estrategias para determinadas rutas, archivos, imágenes, etc; mientras que con la opción GenerateSW, es para trabajar con la estrategia Cache first, cachear toda la aplicación y no poder enviar notificaciones.

El mismo plugin de Vue (cli-plugin-pwa) con la opción "GenerateSW" tiene un error lógico, al momento de usarse sin pasarle parámetros de configuración. Dicho error es que cualquier navegador que haya abierto la aplicación, y esta haya sido cacheada, no se actualiza las mejoras de la aplicación. Para corregir este error, solo basta con agregar un objeto "worboxOptions" al objeto pwa, del "module.export", del archivo "vue.config.js". El objeto workbox debe tener "skipWaiting:true". Así:

```
//vue.config.js debe estar en la raíz del proyecto
module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting : true
    }
  }
}
```

Aplicando dicha configuración, se resuelve el error lógico y la aplicación se puede lanzar a producción sin preocupaciones a nuevas versiones de la aplicación no sean actualizadas.

