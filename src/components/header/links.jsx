import React from "react";
import DropdownMenu from "./dropmenu";

const Links = () => {
  return (
    <nav className="navbar__links">
      <a href="/">Inicio</a>
      <a href="#paginaenconstruccion">Cine</a>
      <a href="#paginaenconstruccion">Series</a>
      <DropdownMenu />
    </nav>
  );
};

export default Links;
