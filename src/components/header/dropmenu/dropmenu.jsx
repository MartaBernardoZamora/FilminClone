import React, { useState } from "react";
import "./dropmenu.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false); // Estado para manejar el color del botón

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive); // Cambia el estado de activo
  };

  return (
    <div className="dropdown">
      <button 
        className={`dropdown__toggle ${isActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        Más
      </button>
      {isOpen && (
        <ul className="dropdown__menu">
          <li><a href="#paginaenconstruccion">Novedades</a></li>
          <li><a href="#paginaenconstruccion">Próximamente</a></li>
          <li className="the-filmin-times">
            <a href="https://www.thefilmintimes.com/es/" target="_blank">The Filmin Times</a>
          </li>
          <li><a href="#https://www.filmin.es/blog" target="_blank">Blog</a></li>
          <li><a href="https://prensa.filmin.es/" target="_blank">Prensa</a></li>
          <li><a href="https://ayuda.filmin.es/es/support/home" target="_blank">Centro de ayuda</a></li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;