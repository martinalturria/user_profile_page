# User Profile Application

Esta es una aplicación de perfil de usuario construida con Next.js y React. Incluye funcionalidades como un formulario de contacto y una lista de intereses.

## Características

-   **Formulario de Contacto**: Permite a los usuarios enviar mensajes con validación de formulario.
-   **Lista de Intereses**: Muestra una lista de intereses del usuario.
-   **Pruebas Unitarias**: Se incluyen pruebas para los componentes principales usando Jest y React Testing Library.

## Instalación

1. Clona el repositorio:

    ```sh
    git clone https://github.com/martinalturria/user_profile_page
    cd user-profile
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

3. Inicia la aplicación en modo desarrollo:
    ```sh
    npm run dev
    ```

## Scripts Disponibles

-   `npm run dev`: Inicia el servidor de desarrollo.
-   `npm test`: Ejecuta las pruebas.

## Estructura del Proyecto

-   `src/`
    -   `pages/`: Componentes de Ruta para la Aplicación.
    -   `views/`: Vistas principales de la aplicación.
    -   `components/`: Componentes reutilizables de la aplicación.
    -   `hooks/`: Hooks personalizados.
    -   `interfaces/`: Definiciones de TypeScript para props y estados.
    -   `styles/`: Archivos de estilos CSS para los componentes.
    -   `data/`: Archivos de datos estáticos que simulan respuestas de API.
-   `tests/`: Tests unitarios y de integración para los componentes y vistas.

