![MercadoLibre](./favicon.svg "MercadoLibre")

# MercadoLibre challenge Frontend

Repositorio para desarrollo y entrega del test práctico para frontend developers de Mercado Libre.

# Autor

Tomás Martín Vera

# Ejecución

El repositorio trae preparado la configuración de docker compose con los siguientes archivos:

- `./backend/Dockerfile`
- `./backend/Dockerfile`
- `./frontend/Dockerfile`

Para ejecutar el proyecto solo debe correr el comando `docker compose up` en la raíz del repositorio y eso levantarán los aplicativos en las siguientes URls:

- Frontend: http://localhost:9081/
- Backend: http://localhost:9080/

# Observaciones

Por los cambios en las políticas de autenticación de los servicios de Mercado Libre no fue posible realizar todos los endpoints del backend de la forma solicitada en el instructivo, por lo que se tuvo que usar otro endpoint provisto para realizar la búsqueda de productos que ocupaba un formato de datos distintos, y en el frontend se utilizó los datos recuperados de la búsqueda para hacer un mock up de la vista de detalle de producto, por lo que si ingresa a la vista de detalle directamente por la URL será redirigido a la home, debe ingresar haciendo click en las cards de la vista de resultados de búsqueda.
