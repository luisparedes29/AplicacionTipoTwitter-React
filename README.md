# Aplicacion tipo Twitter con React

Este repositorio contiene el código de una aplicación CRUD desarrollada con React Vite y Tailwind para manejar los estilos y diseño responsive. La aplicación permite almacenar y gestionar tweets de usuarios.

## Características principales
- Interfaz de usuario intuitiva y atractiva.
- Formulario para ingresar el texto del tweet con validación de campo.
- Listado de tweets con opciones de like y eliminar.
- Renderizado dinámico en caso de que no existan tweets en el listado.
- Persistencia de datos en el navegador utilizando la API de LocalStorage.

## Tecnologías utilizadas
- React: Una biblioteca de JavaScript para construir interfaces de usuario interactivas.
- Vite: Un entorno de desarrollo rápido para aplicaciones web modernas.
- Tailwind: Un framework CSS utilitario para construir interfaces web..

## Instalación

Sigue los pasos a continuación para configurar y ejecutar la aplicación en tu entorno local:

1. Clona este repositorio en tu máquina local utilizando el siguiente comando: git clone https://github.com/luisparedes29/AplicacionTipoTwitter-React.git

2. Navega al directorio del repositorio clonado: cd nombre-repositorio

3. Instala las dependencias utilizando npm: npm install
4. Inicia la aplicación: npm run dev

## Uso

Una vez que la aplicación esté en funcionamiento en tu navegador, podrás realizar las siguientes acciones:

- Ingresa el texto de un tweet en el formulario y haz clic en "Enviar" para agregarlo a la lista de tweets.
- Si el campo de texto está vacío o contiene caracteres no válidos, se mostrará un mensaje de error y se resaltará el campo en rojo.
- Los tweets se mostrarán en orden cronológico, con las opciones de "Like" y "Eliminar" disponibles para cada uno.
- Al hacer clic en el botón "Like", el tweet se marcará como favorito y el botón cambiará de color para reflejarlo.
- Al hacer clic en el botón "Eliminar", el tweet se eliminará de la lista.
- Si no hay tweets en el listado, se mostrará un mensaje indicando que no hay tweets disponibles.

## Persistencia de datos

Esta App utiliza una API GraphQL para persistir los datos de los tweets. Esto significa que los tweets agregados permanecerán en la lista incluso si recargas la página o cierras y vuelves a abrir la aplicación en el mismo navegador.

## Contribución

Si deseas contribuir a este proyecto, puedes seguir los pasos a continuación:

1. Realiza un fork de este repositorio y clónalo en tu máquina local.
2. Crea una nueva rama para tu función o mejora: git checkout -b nombre-rama.
3. Realiza los cambios necesarios y realiza los commits correspondientes.
4. Envía tus cambios al repositorio remoto: git push origin nombre-rama.
5. Abre una solicitud de extracción en este repositorio.
