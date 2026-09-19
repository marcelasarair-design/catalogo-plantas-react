\# Catálogo Plantas React



Proyecto hecho con Vite + React.



\## Instalación



npm install

npm run dev



\## Análisis



\### 1. ¿Qué se guarda en el estado y qué se calcula al renderizar, y por qué esa separación?



En el estado se guardan los datos originales, como la lista de elementos, y lo que el usuario escribe en la búsqueda o selecciona en la categoría. El resultado del filtro se calcula al renderizar usando esos datos. Esto se hace así para que los datos originales nunca se pierdan y siempre se pueda recalcular la lista completa, y para que la lista filtrada se actualice correctamente cuando cambien los datos o los filtros.



\### 2. ¿Qué le ocurriría a la aplicación si el resultado del filtro se guardara en el estado con `setElementos(...)`?



Se reemplazaría la lista original por la lista filtrada. Por ejemplo, si hay 100 elementos y el filtro muestra 20, los otros 80 se perderían del estado. Entonces, aunque el usuario quite el filtro, la aplicación ya no tendría los 100 elementos originales para mostrarlos. Por eso es mejor mantener los datos originales y calcular el filtro aparte.



\### 3. ¿Qué pasa si al `useEffect` se le quita el arreglo de dependencias, y por qué?



El `useEffect` se ejecutaría después de cada renderizado, aunque no haya cambiado la búsqueda o la categoría. Esto puede hacer que se ejecute código innecesariamente y, si dentro del efecto se cambia un estado, incluso podría provocar un ciclo infinito de renderizados. Por eso se usa `\[busqueda, categoria]`, para que el efecto solo se ejecute cuando esos valores cambien.

