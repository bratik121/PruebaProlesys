# TEST-BRYANT-MITCHELL

Página web que funciona como CRUD para diferentes clientes y productos

Desarrollado por:

- [Bryant Mckale Mtichell Cisneros](https://github.com/bratik121)

## ¿Como compilar el proyecto?

1.  Creamos una carpeta nueva:
    ![enter image description here](https://i.imgur.com/gPG5d8L.png)
2.  Clonamos el repositior:
    > En el ejemplo utilizaremos la terminal de Visual Studio Code

- Comando para clonar:
  ```
  git clone https://github.com/pcca23/TEST-BRYANT-MITCHELL.git
  ```
  ![enter image description here](https://i.imgur.com/a45lmcX.png)

3.  Nos ubicamos en lla carpeta **TEST-BRYANT-MITCHELL**

- Comando:
  ```
  cd TEST-BRYANT-MITCHELL
  ```
  ![enter image description here](https://i.imgur.com/q7I7Vab.png)

4.  Instalamos los modulos de node:

- Comando:
  ```
  npm i node-modules
  ```
  ![enter image description here](https://i.imgur.com/KtuPQNX.png)

5. Ejecutamos el proyecto:

- Comando:
  ```
  npm run dev
  ```
  ![enter image description here](https://i.imgur.com/7w4QQRz.png)

6. Abrimos el enlace y listo:

![enter image description here](https://i.imgur.com/4NT87nV.png)

## Configuracion e instalacion de las diferentes librerias y frameworks

### Vitejs

- Instalamos vite, el cual será nuestra herramienta de compilacion para el proyecto, su documentación la podremos encontrar en [vite](https://vitejs.dev/guide/), y para instalarlo usaremos los siguientes comandos:

  Instalación:

  ```

  npm create vite

  ```

### Diseño y animaciones de la página

- Para el diseño estaremos utilizando principalmente [tailwind](https://tailwindcss.com/docs/installation) como framework de Css para brindarle estilos a los componentes que creemos.

  instalación:

  ```
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```

- Para los iconos de la página utilizamos [react icons](https://react-icons.github.io/react-icons/)

  Instalación:

  ```
  npm install react-icons --save
  ```

- Para las animaciones se implemento [framer motion](https://www.framer.com/motion/?utm_source=google&utm_medium=adwords&utm_campaign=TW-WW-All-GS-UA-Traffic-20190326-Brand.Bmm_), dicha librería nos facilitara la tarea de crear las animaciones.

  instalacion:

  ```
  npm i framer-motion
  ```

### Enrutamiento

- Para el enrutamiento y la navegación se utilizó la librería [react router](https://reactrouter.com/en/main), la cual nos permite cambiar la url del navegador y realizar renderizados condicionales en base a la url.

  Instalación:

  ```
  npm install react-router-dom@6
  ```

### Redux Toolkit Kit Query

- Para el manejo de la Api y la arquitectura de datos utilizamos [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

  Instalación:

  ```
  npm install @reduxjs/toolkit react-redux
  ```

## Carpetas y archivos

Clasificación y descripción de las carpetas.

### Components

- En esta carpeta encontraremos todas las interfaces clasificadas por carpetas, en las mismas tendremos a la interfaz, su archivo css y los elementos que seas **propios** a dicha interfaz
  > No todas las interfaces tiene elementos propios

### Elements

- En esta carpeta encontraremos todos los elementos que no son propios a una interfaz
  - _Botones, inputs, spinners, etc..._

### Hooks

- En esta carpeta tendremos todos los custom hooks que se utilizaron en el proyecto

### Redux

- En esta carpeta encapsulamos todo el contenido que tiene que ver con redux y la arquitectura de los datos del proyecto
  - _La store, los diversos slices, los endpoinst y los types utilizados_

### Utils

- En estar carpeta encontraremos algunas de las funciones que se utilizaron en el proyecto.
  - _Validaciones, generadores, ect.._
