# TEST-BRYANT-MITCHELL

Página web que funciona como CRUD para diferentes clientes y productos

Desarrollado por:

- [Bryant Mckale Mtichell Cisneros](https://github.com/bratik121)

## ¿Como compilar el proyecto?

1.  Creamos una carpeta nueva:

    ![Creado carpeta](https://i.imgur.com/gPG5d8L.png)

2.  Clonamos el repositior:
    > En el ejemplo utilizaremos la terminal de Visual Studio Code

- Comando para clonar:
  ```
  git clone https://github.com/pcca23/TEST-BRYANT-MITCHELL.git
  ```
  ![Clonando repo](https://i.imgur.com/a45lmcX.png)

3.  Nos ubicamos en lla carpeta **TEST-BRYANT-MITCHELL**

- Comando:
  ```
  cd TEST-BRYANT-MITCHELL
  ```
  ![moviendome a la carpeta](https://i.imgur.com/q7I7Vab.png)

4.  Instalamos los modulos de node:

- Comando:
  ```
  npm i node-modules
  ```
  ![paquetes node instalados](https://i.imgur.com/KtuPQNX.png)

5. Ejecutamos el proyecto:

- Comando:
  ```
  npm run dev
  ```
  ![ejecutando el modo desarrollador vite](https://i.imgur.com/7w4QQRz.png)

6. Abrimos el enlace y listo:

![pagina web](https://i.imgur.com/4NT87nV.png)

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
