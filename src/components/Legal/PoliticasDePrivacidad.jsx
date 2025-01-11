import React from 'react';  
import '/src/assets/PolíticasPrivacidad.css';  

const PoliticasDePrivacidad = ({ isOpen, onClose }) => {  
  if (!isOpen) return null; // No renderizar si el modal no está abierto  

  return (  
    <div className="modal-overlay">  
      <div className="politicas-container">  
        <header className="politicas-header">  
          <h1 className="politicas-title">Políticas de Privacidad - MIKSAR SORTEOS</h1>  
          <button className="close-button" onClick={onClose}>✖</button>  
        </header>  
        
        <section className="politicas-section">  
          <h2 className="politicas-section-title">1. Introducción</h2>  
          <p className="politicas-text">  
            En MIKSAR SORTEOS, valoramos su privacidad y nos comprometemos a proteger su información personal. Esta política explica cómo recopilamos, usamos y protegemos sus datos.  
          </p>  
        </section>  

        <section className="politicas-section">  
          <h2 className="politicas-section-title">2. Información que Recopilamos</h2>  
          <p className="politicas-text">  
            2.1. Recopilamos información personal que usted nos proporciona directamente al registrarse o participar en sorteos, incluyendo:  
          </p>  
          <ul className="politicas-list">  
            <li>Nombre y apellidos</li>  
            <li>Correo electrónico</li>  
            <li>Número de contacto</li>  
            <li>DNI/Identificación</li>  
          </ul>  
        </section>  

        <section className="politicas-section">  
          <h2 className="politicas-section-title">3. Uso de la Información</h2>  
          <p className="politicas-text">  
            Utilizamos su información para los siguientes propósitos:  
          </p>  
          <ul className="politicas-list">  
            <li>Administrar su cuenta y realizar sorteos</li>  
            <li>Comunicar información sobre su participación</li>  
            <li>Mejorar nuestros servicios y la experiencia del usuario</li>  
          </ul>  
        </section>  

        <section className="politicas-section">  
          <h2 className="politicas-section-title">4. Uso de Cookies</h2>  
          <p className="politicas-text">  
            Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Puede configurar su navegador para rechazar cookies, pero esto puede afectar su capacidad para utilizar algunas funciones de nuestro servicio.  
          </p>  
        </section>  

        <section className="politicas-section">  
          <h2 className="politicas-section-title">5. Seguridad de la Información</h2>  
          <p className="politicas-text">  
            Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado, pérdida o alteración. Sin embargo, ningún método de transmisión a través de Internet o método de almacenamiento electrónico es 100% seguro.  
          </p>  
        </section>  

        <section className="politicas-section">  
          <h2 className="politicas-section-title">6. Derechos del Usuario</h2>  
          <p className="politicas-text">  
            Usted tiene derecho a acceder, rectificar o eliminar su información personal en cualquier momento. Para ejercer estos derechos, puede contactarnos a través de los canales proporcionados en nuestro sitio web.  
          </p>  
        </section>  

        <footer className="politicas-footer">  
          <p>Última actualización: 5/01/2025</p>  
        </footer>  
      </div>  
    </div>  
  );  
};  

export default PoliticasDePrivacidad;