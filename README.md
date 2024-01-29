---

---

# Tailwindcss

el siguiente repositorio es un curso  del framework de css tailwindcss donde voy tocando las clases de utilidad que tiene tailwindcss, estilo personlizados colores componentes y mas, la refererencia del curso esta sacado de la documentacion oficial de [tailwindcss](https://tailwindcss.com/docs/guides/vite)

**Indice**

* [1. Instalacion](#1. Instalacion)

* [2. Color y Tamaño](#2. Color y Tamaño)

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

La configuracion basica sera indicarle los ficheros que debera escuchar en busca de cambios, esta configuracion basica la haremos en nuestor archivo `tailwind.config.js` en la llave `content` agregaremos la siguiente configuracion.

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

## 2. Color y Tamaño

para definir los colores algun elemento de HTML debemos indicarle en un `className` el valor con el color que deseamos mostra tailwind por defecto ya tiene una lista de [colores](https://tailwindcss.com/docs/customizing-colors) pre estabecidos por ejemplo:

---

Para asignar un color devemos de especificar una clase con las siguiente estrutura `<nombre_propiedad>-<nombre_color>-<dureza>`

- *nombre_propiedad:* si es un color de fondo `background` o un `color` su equivlente seria `bg` `text`

- *nombre_color* el nombre de colores pre establecidos de tailwind como `indigo`,`purple`,`blue` consulte la tabla de colores

- *dureza:* en una escala entre `50-950` podemos indicar la dureza o el porcentaje del color siendo 50 el mas claro y el 950 siendo el mas oscuro 

ejemplo de uso:

```jsx
const Card=()=>{
    return(
        <div className="bg-purple-500">
            <p className="text-slate-100">hola mundo</p>
        </div>
    )
}
export default Card
```

como podemos notar tenemos un elemento `<div>` que le establecemos un color de fondo `purple` con un valor de `500`, tenemos tambine un elemento `<p>`que le asignamos un color `slate` con un valor `100`
