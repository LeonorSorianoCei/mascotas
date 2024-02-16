import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ mascota }) => {
  const [activeItem, setActiveItem] = useState();

  const toggleAccordion = (itemId) => {
    setActiveItem((prevItem) => (prevItem === itemId ? null : itemId));
  };

  return (
    <section className="Accordion">

     {mascota.masInformacion && (
        <div className="Accordion-div">
          <button className="Accordion-btn" onClick={() => toggleAccordion("rasgosFisicos")}>
            Rasgos Físicos
          </button>
          {activeItem === "rasgosFisicos" && (
            <div>
            <p>Color: {mascota.rasgosFisicos.color}</p>
            <p>Edad: {mascota.rasgosFisicos.edad}</p>
          </div>
          )}
        </div>
      )}


      {mascota.datosContacto && (
        <div className="Accordion-div">
          <button className="Accordion-btn" onClick={() => toggleAccordion("datosContacto")}>
            Datos de Contacto
          </button>
          {activeItem === "datosContacto" && (
            <div>
              <p>Dueño: {mascota.datosContacto.nombreDueño}</p>
              <p>Teléfono: {mascota.datosContacto.telefono}</p>
              <p>Correo: {mascota.datosContacto.correo}</p>
            </div>
          )}
        </div>
      )}

      {mascota.masInformacion && (
        <div className="Accordion-div">
          <button className="Accordion-btn" onClick={() => toggleAccordion("masInformacion")}>
            Más Información
          </button>
          {activeItem === "masInformacion" && (
            <div>
              <p>{mascota.masInformacion}</p>
            </div>
          )}
        </div>
      )}

      


    </section>
  );
};

export default Accordion;
