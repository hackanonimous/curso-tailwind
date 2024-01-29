# Tailwindcss

el siguiente repositorio es un curso  del framework de css tailwindcss donde voy tocando las clases de utilidad que tiene tailwindcss, estilo personlizados colores componentes y mas, la refererencia del curso esta sacado de la documentacion oficial de [tailwindcss](https://tailwindcss.com/docs/guides/vite)

**Indice**

- [1. Instalacion](#id1)

## 1. Instalacion

Se realizara la instalacion para `React` con `Vite` para otros framework o librerias basada en `JavaScript` consultar la [documentacion](https://tailwindcss.com/docs/installation), 

----

Instalaremos `tailwindcss` en nuestro proyecto como una dependencia de desarrollo.

```bash
#dependiendo del manejador de paquete que usemos
#npm
npm install -D tailwindcss postcss autoprefixer
#pnpm
pnpm install -D tailwindcss postcss autoprefixer
```

----

Generamos los archivos de configuracion `tailwind.config.js` y `postcc.config.js` 

```bash
npx tailwindcss init -p
```

---

La configuracion basica sera indicarle los ficheros y estenciones con las que trabajermos en nuestro proyecto esta configuracion basica la haremos en nuestor archivo `tailwind.config.js` en la llave `content` agregaremos la siguiente configuracion.

```js
/** @type {import("tailwindcss"),Config}*/
export default {
    content: [
        "./index.html".
        "./src/**/*.{js,ts,jsx,tsx}",
    ],    
}

```

---

Agregamos las directivas en nuestro archivo raiz de css en vite este archivo se encuentra en la direccion `src/main.css` o puede ser `src/main.css`, *recordemos:* debera ser el archivo **root** de nuestro estilos **css**, agregaremos las siguientes directivas.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
