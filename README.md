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
yarn install or npm install
```

### 3. Iniciar el servidor

Una vez que las dependencias estén instaladas, puedes iniciar el servidor:

```bash
yarn or npm start
```

Por defecto, el servidor se ejecutará en http://localhost:3000.

### 4. GraphQL Playground

Puedes probar la API usando la interfaz integrada de GraphiQL en:

```bash
http://localhost:3000/graphql
```

### 5. Inicializar base de datos

Si tienes una base de datos nueva, puedes inicializarla con el comando

```bash
yarn init-db or npm run init-db
```
