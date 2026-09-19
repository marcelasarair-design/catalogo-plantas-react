import { useState, useEffect } from 'react';
import { plantas } from './data/plantas';
import BarraBusqueda from './components/BarraBusqueda';
import FiltroCategoria from './components/FiltroCategoria';
import ListadoPlantas from './components/ListadoPlantas';
import ContadorResultados from './components/ContadorResultados';
import './App.css';

function App() {
  // En el estado solo se guarda lo que el usuario escribió y eligió.
  // NUNCA se guarda aquí el resultado del filtro.
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  // Categorías únicas, derivadas de los datos originales (no hay que
  // escribirlas a mano ni guardarlas en estado).
  const categorias = [...new Set(plantas.map((p) => p.categoria))];

  // La lista visible se CALCULA en cada renderizado a partir del arreglo
  // original (plantas), combinando los dos filtros. plantas.js nunca cambia.
  const plantasFiltradas = plantas.filter((planta) => {
    const coincideBusqueda = planta.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoriaSeleccionada === 'Todas' ||
      planta.categoria === categoriaSeleccionada;

    return coincideBusqueda && coincideCategoria;
  });

  // Efecto secundario: registrar en consola cuántos resultados quedan
  // cada vez que cambia la búsqueda o la categoría (no en cada render).
  useEffect(() => {
    console.log(
      `Filtro aplicado -> búsqueda: "${busqueda}", categoría: "${categoriaSeleccionada}" -> ${plantasFiltradas.length} resultado(s)`
    );
  }, [busqueda, categoriaSeleccionada]);

  function limpiarFiltros() {
    setBusqueda('');
    setCategoriaSeleccionada('Todas');
  }

  return (
    <div className="app">
      <h1>Vivero — Catálogo de Plantas</h1>

      <div className="controles">
        <BarraBusqueda valor={busqueda} onCambio={setBusqueda} />
        <FiltroCategoria
          categorias={categorias}
          valor={categoriaSeleccionada}
          onCambio={setCategoriaSeleccionada}
        />
        <button onClick={limpiarFiltros} className="boton-limpiar">
          Limpiar filtros
        </button>
      </div>

      <ContadorResultados
        cantidadFiltrada={plantasFiltradas.length}
        total={plantas.length}
      />

      <ListadoPlantas plantas={plantasFiltradas} />
    </div>
  );
}

export default App;
