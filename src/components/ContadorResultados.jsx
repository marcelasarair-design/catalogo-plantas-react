function ContadorResultados({ cantidadFiltrada, total }) {
  return (
    <p className="contador-resultados">
      {cantidadFiltrada} de {total} elementos
    </p>
  );
}

export default ContadorResultados;
