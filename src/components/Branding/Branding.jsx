import React from "react";
import "../Branding/Branding.scss";
const Branding = () => {
  return (
    <div className="slider">
      <div className="slider-track">
        <div className="slide">
          <img
            src="src/assets/logos/ASICSAmerica.svg"
            alt=" Asics America Logo"
          />
        </div>
        <div className="slide">
          <img src="src/assets/logos/nike.svg" alt="Nike Logo" />
        </div>
        <div className="slide">
          <img src="src/assets/logos/puma.svg" alt="Puma Logo" />
        </div>
        <div className="slide">
          <img src="src/assets/logos/NewBalance.svg" alt="New Balance Logo" />
        </div>
        <div className="slide">
          <img src="src/assets/logos/HokaOneOne.svg" alt="Hoka One One Logo" />
        </div>
        <div className="slide">
          <img src="src/assets/logos/Fila.svg" alt="Fila logo" />
        </div>
        <div className="slide">
          <img src="src/assets/logos/UnderArmour.svg" alt="Under Armour Logo" />
        </div>
        <div className="slide">
          <img src="src/assets/logos/Reebok.svg" alt="Reebok Logo" />
        </div>
        <div className="slide">
          <img
            src="src/assets/logos/BrooksRunning.svg"
            alt="Brooks Running Logo"
          />
        </div>
        <div className="slide">
          <img src="src/assets/logos/adidas.svg" alt="Adidas Logo" />
        </div>
      </div>
    </div>
  );
};

export default Branding;
