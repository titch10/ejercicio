import React from "react";

const Inicio = props => {
  return (
    <div onKeyDown={props.handleKeyDown}>
      <h4 className="py-2">Aplicacion para el presupuesto familiar</h4>
     
      <div className="text-right">
        <button className="btn btn-primary m-2" onClick={props.pasoNuevo}>
          Nuevo
        </button>
        <button className="btn btn-primary m-2" onClick={props.pasoNuevo}>
          Ver ultimo
        </button>
      </div>
    </div>
  );
};

export default Inicio;