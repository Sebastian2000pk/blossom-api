# Plan de Desarrollo Backend

### Resultado:

Una API básica que permite consultar personajes de Rick and Morty con un filtro por nombre y registro de logs en consola.

- [x] Inicializar un proyecto con `Express` y `GraphQL`.
- [x] Configurar GraphQL.
- [x] Crear una query `characters` que realice la búsqueda de personajes directamente en la API pública de Rick and Morty (sin base de datos).
- [x] Implementar la lógica para filtrar personajes por nombre (búsqueda simple).
- [x] Añadir un middleware que registre las solicitudes básicas en consola.
- [ ] Documentar cómo ejecutar y usar la API.

### Resultado:

La API ahora se conecta a una base de datos relacional, almacena los personajes, y permite consultas con múltiples filtros.

- [ ] Configurar Sequelize con MySQL o PostgreSQL.
- [ ] Crear migraciones y un modelo `Character` con los campos necesarios.
- [ ] Añadir la funcionalidad para inicializar la base de datos con 15 personajes de la API de Rick and Morty.
- [ ] Modificar la query `characters` para que los datos se obtengan de la base de datos en lugar de la API.
- [ ] Agregar filtros avanzados por `Status`, `Species`, y `Gender` en la query `characters`.
- [ ] Extender el middleware para registrar el método, ruta, y tiempo de ejecución de cada solicitud.
- [ ] Actualizar la documentación para explicar la instalación de la base de datos y cómo inicializarla.

### Resultado:

La API ahora almacena en caché los resultados de las consultas a Redis, mejorando el tiempo de respuesta para búsquedas repetidas.

- [ ] Configurar Redis para el almacenamiento en caché.
- [ ] Implementar la lógica en el resolver `characters` para buscar primero en caché antes de consultar la base de datos.
- [ ] Agregar una funcionalidad para limpiar el caché cuando se actualicen los datos.
- [ ] Optimizar la consulta para reducir el tiempo de ejecución y, opcionalmente, agregar un decorador que mida el tiempo de respuesta.
- [ ] Mejorar el middleware para que registre más detalles de cada solicitud.
- [ ] Actualizar la documentación para incluir instrucciones sobre cómo configurar Redis y el caché.

### Resultado:

La API ahora cuenta con funcionalidades avanzadas como actualización periódica de personajes, soft delete, y pruebas unitarias, con una arquitectura sólida y eficiente.

- [ ] Implementar un cron job que actualice los personajes cada 12 horas consultando la API pública de Rick and Morty.
- [ ] Implementar soft delete en los personajes (eliminación lógica en lugar de eliminación física).
- [ ] Implementar pruebas unitarias para la query `characters` utilizando Jest o Mocha.
- [ ] (Opcional) Refactorizar el código para usar TypeScript en todo el backend.
- [ ] (Opcional) Documentar la API utilizando Swagger.
- [ ] Actualizar la documentación para reflejar todos los cambios y nuevas funcionalidades.
