import React from 'react';
import './Footer.css';


function Footer() {
  return (
    
    <footer className="footerContainer">
     <section className="footerSection">
      <hr className="line"/>
      <div className="upperSection">
      
      <div className="upperLinks">
        <a href="https://ayuda.filmin.es/es/support/home" target="_blank" rel="noreferrer">Centro de ayuda</a>
        <a href="https://www.filmin.es/aviso-legal" target="_blank" rel="noreferrer">Aviso Legal</a>
        <a href="https://shorturl.at/fKlnU" target="_blank" rel="noreferrer">Prensa</a>
      </div>

      <div className="teamImgContainer">
        <a className="teamImg" href="https://github.com/erikamc99" target="_blank" rel="noreferrer">
          <img src="../src/assets/img/EricaM.jpeg" alt="Erica Montesinos-GitHub" title="Erica Montesinos-GitHub" />
        </a>
        <a className="teamImg" href="https://github.com/Grigory-Vladimiro" target="_blank" rel="noreferrer">
          <img src="../src/assets/img/GrigoryV.jpeg" alt="Grigory Vladimiro-GitHub" title="Grigory Vladimiro-GitHub" />
        </a>
        <a className="teamImg" href="https://github.com/juancastro000" target="_blank" rel="noreferrer">
          <img src="../src/assets/img/JuanC.jpeg" alt="Juan Esteban Castro-GitHub" title="Juan Esteban Castro-GitHub" />
        </a>
        <a className="teamImg" href="https://github.com/LannyRivero" target="_blank" rel="noreferrer">
          <img src="../src/assets/img/LannyR.png" alt="Lanny Rivero-GitHub" title="Lanny Rivero-GitHub" />
        </a>
        <a className="teamImg" href="https://github.com/laura-gm-456" target="_blank" rel="noreferrer">
          <img src="../src/assets/img/LauraGM.jpg" alt="Laura Garcia Muro-GitHub" title="Laura Garcia Muro-GitHub" />
        </a>
        <a className="teamImg" href="https://github.com/MartaBernardoZamora" target="_blank" rel="noreferrer">
          <img src="../src/assets/img/MartaB.jpeg" alt="Marta Bernardo Zamora-GitHub" title="Marta Bernardo Zamora-GitHub" />
        </a>
      </div>
     </div>
      
    <hr className="line"/>
      <div className="bottomSection">
       <div className="bottom">
         <a href="https://culture.ec.europa.eu/" target="_blank" rel="noreferrer">
           <img className="downLogos" src="../src/assets/img/CoEU.png" alt="Europa Creativa" />
         </a>
         <a href="https://www.cultura.gob.es/portada.html" target="_blank" rel="noreferrer">
           <img className="downLogos" src="../src/assets/img/GobDeEsp.png" alt="Gobierno de España" />
         </a>
         <a href="https://cultura.gencat.cat/ca/inici/" target="_blank" rel="noreferrer">
           <img className="downLogos" src="../src/assets/img/GenCatDdC.png" alt="Generalitat de Catalunya" />
         </a> 
       </div>
       
      <div className="footerText">
        <p>CINEMATIC Coders © Copyright 2025</p>
      </div>
      </div>

      </section>
    </footer>
  
    
  );
}

export default Footer;


