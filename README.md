# Final PAV2 - 03/07/2025

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.2.

## Development server frontend

To start a local development server, run:

```bash
ng serve
```
## Development server backend

To start a local development json-server, run:

```bash
npx json-server db.json
```

## Enunciado: Gestión de Autos (AMBC)

El objetivo de este proyecto es implementar las funcionalidades faltantes para Crear, Editar y Eliminar autos (AMBC) en la aplicación. A continuación, se describen las tareas principales y las condiciones específicas que se deben cumplir:

### Tareas a completar:
1. **Implementar el AMBC de Autos**:
  - Completar la lógica correspondiente a las acciones de **Crear**, **Editar** y **Eliminar**.
  - Los fragmentos del código donde se deben implementar estas funcionalidades están marcados con comentarios `TODO`.

2. **Validar formularios**:
  - Asegurarse de que las validaciones del formulario de Crear/Editar se ejecuten correctamente.
  - Mostrar mensajes de error claros en pantalla cuando ocurran errores de validación.

### Validaciones de los campos del formulario:
- **Marca**:
  - Es un campo requerido.
  - Debe contener al menos 3 caracteres.

- **Modelo**:
  - Es un campo requerido.
  - Debe contener al menos 3 caracteres.

- **Año**:
  - Es un campo requerido.
  - El valor debe estar entre **1900** y **2025**.

- **Fecha ingreso**:
  - Es un campo requerido.
  - El valor debe mayor o igual a fecha actual.
