<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bangers&family=Roboto:ital,wght@1,700&display=swap");
/* Roboto
'Bangers', cursive */

:root {
  --color-titulo: #f9f1f1;
  --color-letra: #59595e;
  --color-input: #ececec;
}
body {
  height: 95vh;
  background: linear-gradient(
    180.76deg,
    #86dbd4 45.88%,
    #ffffff 108.81%,
    rgba(134, 219, 212, 0) 108.82%
  );
  background-repeat: no-repeat;
}

html {
  padding: 0;
  margin: 0;
  font-family: Roboto;
  color: var(--color-letra);
}
</style>
