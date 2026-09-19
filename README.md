# Catálogo Plantas React

Proyecto hecho con Vite + React.

## Instalación

npm install
npm run dev

## Análisis

## 1. ¿Qué se guarda en el estado y qué se calcula al renderizar, y por qué esa separación?

En el estado se guardan los datos originales, como la lista de elementos, y lo que el usuario escribe en la búsqueda o selecciona en la categoría. El resultado del filtro se calcula al renderizar usando esos datos. Esto se hace así para que los datos originales nunca se pierdan y siempre se pueda recalcular la lista completa, y para que la lista filtrada se actualice correctamente cuando cambien los datos o los filtros.

## 2. ¿Qué le ocurriría a la aplicación si el resultado del filtro se guardara en el estado con `setElementos(...)`?

Se reemplazaría la lista original por la lista filtrada. Por ejemplo, si hay 100 elementos y el filtro muestra 20, los otros 80 se perderían del estado. Entonces, aunque el usuario