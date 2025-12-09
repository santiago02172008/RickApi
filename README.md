# Rick and Morty Api 🧪

Una aplicación web moderna y adaptable (responsive) para explorar el multiverso de *Rick and Morty*. Construida con **React 18**, **TypeScript** y **Tailwind CSS**, este proyecto interactúa con la [Rick and Morty API](https://rickandmortyapi.com/) oficial para ofrecer una experiencia de navegación fluida.

## ✨ Características Principales

- **⚡ Alto Rendimiento:** Implementa `useTransition` y `memo` para asegurar un renderizado suave incluso durante la carga de datos pesada.
- **🔍 Búsqueda Inteligente:** Incluye una **barra de búsqueda con debounce** (retraso de 200ms) para filtrar personajes por nombre eficientemente sin saturar la API.
- **📄 Paginación:** Navegación sencilla a través de la base de datos de personajes con controles de "Siguiente" y "Anterior".
- **🎨 Interfaz Dinámica:** - Diseño Grid totalmente adaptable (Móvil/Escritorio).
  - Indicadores visuales de estado (🟢 Alive, 🔴 Dead, ⚫ Unknown).
  - Efectos Hover y estilos *glassmorphism* usando Tailwind CSS.
- **🔗 Carga de Datos Relacionales:** Recupera y resuelve automáticamente datos cruzados, como el *nombre del primer episodio* en el que apareció cada personaje.

## 🛠️ Tecnologías

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73C92?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

## 📂 Estructura del Proyecto

El proyecto sigue una **Arquitectura basada en Características** (Feature-based) para una mejor escalabilidad y mantenimiento:

```text
src/
├── assets/             # Recursos estáticos (imágenes)
├── common/             # Lógica compartida y constantes
│   ├── Constants/      # Constantes globales (URLs de API, Etiquetas UI)
│   └── hooks/          # Hooks personalizados (ej. useDebouncedValue)
├── features/           # Componentes específicos por funcionalidad
│   ├── characters/     # Lógica de personajes (Tarjetas, API, Hooks)
│   ├── Pagination/     # Controles de paginación
│   └── search/         # Componente de input de búsqueda
├── App.tsx             # Layout Principal
└── main.tsx            # Punto de entrada
````

## 🚀 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto localmente.

### Requisitos previos

  - Node.js (v16 o superior)
  - npm o yarn

### Pasos

1.  **Clonar el repositorio**

    ```bash
    git clone [https://github.com/tu-usuario/rick-and-morty-wiki.git](https://github.com/tu-usuario/rick-and-morty-wiki.git)
    cd rick-and-morty-wiki
    ```

2.  **Instalar dependencias**

    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo**

    ```bash
    npm run dev
    ```

4.  Abre tu navegador en `http://localhost:5173` (o el puerto que muestre tu terminal).

## 🧩 Código Destacado: Hook Personalizado de Debounce

Para optimizar el rendimiento y reducir las peticiones de red innecesarias, se utiliza un hook personalizado que maneja el retraso en el input de búsqueda:

```typescript
// src/common/hooks/useDebounce.ts
export function useDebouncedValue<T = any>(value: T, wait: number) {
  const [_value, setValue] = useState(value);
  // ... lógica para retrasar la actualización usando setTimeout
  return [_value, cancel];
}
```

## 🤝 Contribuciones

Las contribuciones son lo que hace que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. Cualquier contribución que hagas será **muy apreciada**.

1.  Haz un Fork del Proyecto
2.  Crea tu Rama de Funcionalidad (`git checkout -b feature/NuevaFuncionalidad`)
3.  Haz Commit de tus Cambios (`git commit -m 'Agrega nueva funcionalidad increíble'`)
4.  Haz Push a la Rama (`git push origin feature/NuevaFuncionalidad`)
5.  Abre un Pull Request

## 📝 Licencia

Distribuido bajo la Licencia MIT.

-----

Hecho por TUNG TUNG SAHUR

```
```
