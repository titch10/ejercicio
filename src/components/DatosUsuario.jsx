import React from "react";

const DatosUsuario = props => {
  return (
    <div onKeyDown={props.handleKeyDown}>
      <h4 className="py-2">Años</h4>
      <h5 className="py-2">Defina los años para los cuales quiere generar su presupuesto</h5>
      <div className="form-group">
        <label htmlFor="">Año inicio:</label>
        <input
          type="text"
          name="yeari"
          className="form-control"
          onChange={props.handleInputChange}
          value={props.valores.yeari}
          autoFocus
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Año fin:</label>
        <input
          type="text"
          name="yearf"
          className="form-control"
          onChange={props.handleInputChange}
          value={props.valores.yearf}
        />
      </div>
      
      <div className="text-right">
        <button className="btn btn-primary m-2" onClick={props.pasoSiguiente}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default DatosUsuario;