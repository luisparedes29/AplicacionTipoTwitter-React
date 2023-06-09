# Aplicacion tipo Twitter con React

Esta es una aplicación tipo CRUD desarrollada utilizando React vite y CSS para manejar los estilos y diseño responsive.

El objetivo principal de esta aplicación es permitir a los usuarios almacenar tweets y realizar operaciones básicas de creación, lectura, actualización y eliminación de tweets. La aplicación incluye funcionalidades adicionales como validación de campos, marcado de tweets como favoritos y persistencia de datos utilizando la API de LocalStorage del navegador.

## Características principales
- Interfaz de usuario intuitiva y atractiva.
- Formulario para ingresar el texto del tweet con validación de campo.
- Listado de tweets con opciones de like y eliminar.
- Renderizado dinámico en caso de que no existan tweets en el listado.
- Persistencia de datos en el navegador utilizando la API de LocalStorage.

## Tecnologías utilizadas
- React: Una biblioteca de JavaScript para construir interfaces de usuario interactivas.
- Vite: Un entorno de desarrollo rápido para aplicaciones web modernas.
- CSS: Lenguaje de hojas de estilo utilizado para el diseño y la presentación de la aplicación.

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

Esta aplicación utiliza la API de LocalStorage del navegador para persistir los datos de los tweets. Esto significa que los tweets agregados permanecerán en la lista incluso si recargas la página o cierras y vuelves a abrir la aplicación en el mismo navegador. Sin embargo, ten en cuenta que si borras los datos del navegador o utilizas otro navegador, los tweets almacenados se perderán.

## Contribución

Si deseas contribuir a este proyecto, puedes seguir los pasos a continuación:

1. Realiza un fork de este repositorio y clónalo en tu máquina local.
2. Crea una nueva rama para tu función o mejora: git checkout -b nombre-rama.
3. Realiza los cambios necesarios y realiza los commits correspondientes.
4. Envía tus cambios al repositorio remoto: git push origin nombre-rama.
5. Abre una solicitud de extracción en este repositorio.
