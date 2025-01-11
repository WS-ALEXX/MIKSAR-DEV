import React from 'react';
import '/src/assets/Container.css';



const Container = ({ sorteoInfo }) => {



  return (
    <section id="inicio" className="ticket-section">
      
      <div className="ticket-container">
        <div className="content-wrapper">
          <h1 className="main-title">
            ¡Aprovecha cada oportunidad y conviértete en un ganador con 
            <span className="brand-highlight">Miksar!</span>
          </h1>
          
          <p className="main-description">
            Descubre la mejor experiencia en sorteos: compra tus tickets y participa por la oportunidad de 
            ganar una increíble variedad de premios. ¡Miksar transforma tu suerte en grandes emociones! 
            🎉
          </p>

          <div className="button-container">
            <a href="#comprar" className="primary-button">
              <span className="button-icon">🎫</span>
              COMPRAR TICKET
            </a>
            <a href="#detalles"className="secondary-button">
              <span className="button-icon">📋</span>
              DETALLE DEL SORTEO
            </a>
          </div>
        </div>

        <div className="decoration-element">
          <span className="floating-emoji">🎁</span>
          <span className="floating-emoji delayed">🎯</span>
          <span className="floating-emoji more-delayed">🎪</span>
        </div>
      </div>
    </section>
  );
};

export default Container;