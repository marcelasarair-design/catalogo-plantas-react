// Entrada controlada: su "value" viene del estado del padre (App)
// y su "onChange" avisa al padre para actualizar ese estado.
function BarraBusqueda({ valor, onCambio }) {
  return (
    <input
      type="text"
      placeholder="Buscar por nombre..."
      value={valor}
      onChange={(e) => onCambio(e.target.value)}
      className="barra-busqueda"
    />
  );
}

export default BarraBusqueda;
