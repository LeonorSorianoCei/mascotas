import React, { useState } from "react";
import DatosMascotas from "../../db/db";
import TarjetaMascota from "../tarjetaMascota/TarjetaMascota";
import TarjetaEspecifica from "../tarjetaEspecifica/TarjetaEspecifica";
import LightBox from "../lightbox/LightBox";
import "./Tabs.css";

const { mascotas } = DatosMascotas;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [paginaActual, setPaginaActual] = useState("tabs");
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);
  const [mostrarFichas, setMostrarFichas] = useState(true);
  
  const handleClickTab = (tabIndex) => {
    setActiveTab(tabIndex);
    setMostrarFichas(true);
    setPaginaActual("tabs");
  };

  const handleClickTarjeta = (nombreMascota) => {
    setMascotaSeleccionada(nombreMascota);
    setPaginaActual("TarjetaEspecifica");
    setMostrarFichas(false);
  };

  return (
    <section>
      <div>
        {mostrarFichas ? ( //si mostrar fichas es true que las muestre pero sin la informacion de tarjeta especifica, y si es false, que lo muestre por que se ha hecho click en una mascota
          <>
            {activeTab === 0 && (
              <MascotasList
                mascotas={mascotas.filter((mascota) => mascota.estado === "Perdido")}
                titulo="Perdidos"
                handleClickTarjeta={handleClickTarjeta}
                mostrarFichas={mostrarFichas}
              />
            )}
            {activeTab === 1 && (
              <MascotasList
                mascotas={mascotas.filter((mascota) => mascota.estado === "Encontrado")}
                titulo="Encontrados"
                handleClickTarjeta={handleClickTarjeta}
                mostrarFichas={mostrarFichas}
              />
            )}
          </>
        ) : (
          <TarjetaEspecifica nombreMascota={mascotaSeleccionada} />
        )}
      </div>
      <div className="Tabs-btns-container">
        <button onClick={() => handleClickTab(0)}>Perdidos</button>
        <button onClick={() => handleClickTab(1)}>Encontrados</button>
        <LightBox activeTab={activeTab} />
      </div>
    </section>
  );
};

const MascotasList = ({ mascotas, titulo, handleClickTarjeta, mostrarFichas }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      
      {mostrarFichas && (
        mascotas.map(({ nombre, imagen, raza, descripcion }, index) => (
          <button key={index} onClick={() => handleClickTarjeta(nombre)}>
            <TarjetaMascota
              nombre={nombre}
              raza={raza}
              imagen={imagen}
              descripcion={descripcion}
            />
          </button>
        ))
      )}
    </div>
  );
};

export default Tabs;
