# Rick and Morty GraphQL API with Express

Este proyecto es un servidor Express que interactúa con la **API de Rick and Morty** usando GraphQL. Te permite realizar consultas de personajes basadas en filtros como nombre, estado, especie y género a través de un endpoint de GraphQL.

## Características

- **API GraphQL**: Consulta personajes del universo de Rick y Morty.
- **Filtros**: Búsqueda por nombre, estado, especie y género del personaje.
- **GraphiQL**: Interfaz integrada de GraphiQL para probar consultas fácilmente.
- **Middleware de Registro**: Captura y registra las solicitudes entrantes para facilitar la depuración.

## Tecnologías

- **Node.js**
- **Express.js**
- **GraphQL**
- **TypeScript**

## Requisitos

- **Node.js**
- **yarn** or **npm**

## Comenzando

Sigue estos pasos para configurar y ejecutar el proyecto localmente.

### 1. Clonar el repositorio

```bash
git clone https://github.com/Sebastian2000pk/blossom-api
cd blossom-api
```

### 2. Instalar dependencias

Asegúrate de tener Node.js y npm instalados en tu máquina. Ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
yarn install
# o, si usas npm:
npm install
```

### 3. Configurar variables de entorno

Antes de iniciar el servidor, asegúrate de tener configuradas las variables de entorno necesarias. Crea un archivo `.env` en la raíz del proyecto con la configuración de tu base de datos y cualquier otra clave necesaria. Un ejemplo de configuración básica podría ser:

```env
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=rick_and_morty
```

### 4. Iniciar el servidor

Una vez que las dependencias estén instaladas, puedes iniciar el servidor:

```bash
yarn start
# o, si usas npm:
npm start
```

Por defecto, el servidor se ejecutará en http://localhost:3000.

### 5. GraphQL Playground

Puedes probar la API usando la interfaz integrada de GraphiQL en:

```bash
http://localhost:3000/graphql
```

### 6. Inicializar base de datos

Si necesitas inicializar una base de datos nueva, utiliza el siguiente comando:

```bash
yarn init-db
# o, si usas npm:
npm run init-db
```

> Nota: Asegúrate de haber configurado correctamente las variables de entorno para la conexión con la base de datos antes de ejecutar este comando.
