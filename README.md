---

---

# Tailwindcss (en construccion)

el siguiente repositorio es un curso  del framework de css tailwindcss donde voy tocando las clases de utilidad que tiene tailwindcss, estilo personlizados colores componentes y mas, la refererencia del curso esta sacado de la documentacion oficial de [tailwindcss](https://tailwindcss.com/docs/guides/vite)

**Indice**

* [1. Instalacion](#1-instalacion)

* [2. Color y Tamaño](#2-color-y-tamaño)
  
  * [Color](#color)
    
    * [Uso de Colores Personalizados](#uso-de-colores-personalizados)
  
  * [Tamaño](#tamaño)

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

La configuracion basica sera indicarle los ficheros que debera escuchar en busca de cambios, esta configuracion basica la haremos en nuestor archivo `tailwind.config.js` en el objeto de array `content` agregaremos la siguiente configuracion.

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

### Color

para definir los colores algun elemento de HTML debemos indicarle en un `className` el valor con el color que deseamos mostra tailwind por defecto ya tiene una lista de [colores](https://tailwindcss.com/docs/customizing-colors) pre estabecidos por ejemplo:

---

Para asignar un color devemos de especificar una clase con las siguiente estrutura `<nombre_propiedad>-<nombre_color>-<saturacion>`

- *nombre_propiedad:* si es un color de fondo `background` o un `color` su equivlente seria `bg` `text`

- *nombre_color* el nombre de colores pre establecidos de tailwind como `indigo`,`purple`,`blue` consulte la tabla de colores

- *saturacion:* en una escala entre `50-950` podemos indicar la saturacion del color siendo 50 el mas claro y el 950 siendo el mas oscuro 

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

---

#### Uso de colores personalizados

podemos personalizar los colores que usaremos en nuestro proyecto y no depender de los que trae por defecto tailwind para eso tenemposque configurar nuestro archivo `tailwind.config.js` en el objeto `theme.colors` especificaremos nuestros colres personalizados en mi caso personalizare algunos colores de la siguiente manera

```js
theme:{
    colors:{
        "disabled":"#edfcfe",
        "default":"#159cc5",
        "hover":"#157da5",
        "active":"##1c536e",       
    }
}
```

como vemos en el archivo de configuracion especificaremos nuestos colores con `llave:valor` en la llave especificaremos el nombre que le daremos a nuestro color estere sera la variable que usaremos en nuestras clases y en valor el codigo HEX del color.

para hacer el uso solo basta con especificar el color que tenemos configurado

```js
return(
    <div className="bg-default">mi color personalizado</div>
)
```

**Observacion:** una vez configurado nuestro colores no podremos hacer uso de los colores por defecto de tailwind

**Recomendacion:** de la documentacion se recomienda usar el nombre de colores de manera literal (ejm: rojo, amarillo,verde) en una escala numerica (donde 50 es claro y 950 el mas oscuro) de forma predeterminada en lugar de usar `primary`, `secondary` o `danger` 

---

podemos aplicar esta recomnedacion volviendo a configurar nuestro archivo de configuracion de la siguiente manera:

```js
theme:{
    colors:{
        "fountainBlue":{
        50:"#edfcfe",
        100:"#d3f4fa",
        200:"#ace8f5",
        300:"#72d6ee",
        400:"#31b9df",
        500:"#159cc5",
        600:"#157da5",
        700:"#176282",
        800:"#1c536e",
        900:"#1c465d",
        950:"#0d2d3f",
      }
    }
}
```

### Tamaño
