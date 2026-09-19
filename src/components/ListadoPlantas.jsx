// Solo recibe por props el resultado YA calculado en App.
// No guarda nada en estado propio ni modifica los datos originales.
function ListadoPlantas({ plantas }) {
  if (plantas.length === 0) {
    return (
      <p className="lista-vacia">
        No se encontraron plantas con esos filtros.
      </p>
    );
  }

  return (
    <ul className="listado-plantas">
      {plantas.map((planta) => (
        // key es el id estable del dato, nunca el índice del arreglo
        <li key={planta.id} className="planta-item">
          <span className="planta-nombre">{planta.nombre}</span>
          <span className="planta-categoria">{planta.categoria}</span>
          <span className="planta-valor">${planta.valor.toFixed(2)}</span>
        </li>
      ))}
    </ul>
  );
}

export default ListadoPlantas;
