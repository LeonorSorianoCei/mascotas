import React from "react";
import DatosMascotas from "../../db/db";
import "./TarjetaEspecifica.css";
import Slider from "../slider/Slider";
import Accordion from "../accordion/Accordion";

const TarjetaEspecifica = ({ nombreMascota }) => {
  // Buscar la mascota específica por su nombre
  const mascota = DatosMascotas.mascotas.find(
    (mascota) => mascota.nombre === nombreMascota
  );

  // Comprobar si se encontró la mascota
  if (!mascota) {
    return <p>No se encontró la mascota.</p>;
  }

  const { raza, edad, imagenes, descripcion, nombre, estado } = mascota;

  // Verificar si la mascota está perdida para mostrar el botón
  const mostrarBoton = estado === "Perdido";

  return (
    <>
    <div className="container-TarjetaEspecifica">
      <h1>{nombre}</h1>
      <div className="img-contenedor"><Slider mascota={imagenes} /></div>
      <div><Accordion mascota={mascota} /></div>

      {mostrarBoton && <button className="btn-encontrado">¡Lo encontré!</button>}
      {/**que este boton se muestre solo si estamos dentro de perdidos */}
    </div>
    </>
  );
};

export default TarjetaEspecifica;
