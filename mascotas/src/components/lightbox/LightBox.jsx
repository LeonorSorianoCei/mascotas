import React from "react";
import "./LightBox.css";

const LightBox = ({ activeTab }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleLightBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <button className="Lightbox-button" onClick={toggleLightBox}>
        ➕
      </button>
      {isOpen && (
        <div className="Lightbox-container">
          <div className="Lightbox-backdrop" onClick={toggleLightBox}></div>
          <div className="Lightbox-content">
            <button className="Lightbox-close" onClick={toggleLightBox}>
              X
            </button>
            {activeTab === 0 && <LightBoxAddPerdidos />}
            {activeTab === 1 && <LightBoxAddEncontrados />}
          </div>
        </div>
      )}
    </section>
  );
};

const LightBoxAddEncontrados = () => {
  return (
    <div>
      <h3>¿Qué encontraste?</h3>
      <button>Gatos</button>
      <button>Perros</button>
      <button>Otros</button>
    </div>
  );
};

const LightBoxAddPerdidos = () => {
  return (
    <div>
      <h3>¿Qué perdiste?</h3>
      <button>Gatos</button>
      <button>Perros</button>
      <button>Otros</button>
    </div>
  );
};

export default LightBox;