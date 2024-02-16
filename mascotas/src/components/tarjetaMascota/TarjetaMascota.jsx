import React from "react";
import './TarjetaMascota.css';

const TarjetaMascota = ({ nombre, imagen, descripcion, raza }) => {
  return (
    <div className="tarjeta-mascota">
      <div className="imagen-mascota">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="informacion-mascota">
        <h2 className="nombre-mascota">{nombre}</h2>
        <h3>{raza}</h3>
        <p className="descripcion-mascota">{descripcion}</p>
      </div>
    </div>
  );
};

export default TarjetaMascota;
