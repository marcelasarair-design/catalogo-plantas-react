// Select controlado. Recibe la lista de categorías disponibles
// (calculada a partir de los datos originales) más la opción "Todas".
function FiltroCategoria({ categorias, valor, onCambio }) {
  return (
    <select
      value={valor}
      onChange={(e) => onCambio(e.target.value)}
      className="filtro-categoria"
    >
      <option value="Todas">Todas</option>
      {categorias.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}

export default FiltroCategoria;
