import React, { useState, useEffect } from "react";
import "./navbar.css";
import Logo from "../logo/logo";
import Links from "../links/links";
import SearchIcon from "../searchicon/searchicon";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Escuchar el desplazamiento de la página para aplicar el cambio de fondo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Cuando el scroll pase los 50px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar__left">
        <Logo />
        <Links />
      </div>
      <SearchIcon />
    </header>
  );
};

export default Navbar;