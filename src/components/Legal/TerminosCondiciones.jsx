import React from 'react';  
import '/src/assets/TerminosCondiciones.css';  

const TerminosYCondiciones = ({ isOpen, onClose }) => {  
  if (!isOpen) return null; // No renderizar si el modal no está abierto  

  return (  
    <div className="modal-overlay">  
      <div className="terminos-container">  
        <header className="terminos-header">  
          <h1 className="terminos-title">Términos y Condiciones - MIKSAR SORTEOS</h1>  
          <button className="close-button" onClick={onClose}>✖</button>  
        </header>  
        
        <section className="terminos-section">  
          <h2 className="terminos-section-title">1. Información General</h2>  
          <p className="terminos-text">  
            MIKSAR SORTEOS, es una plataforma de sorteos en línea que opera exclusivamente en el territorio de Perú. Al acceder y utilizar nuestros servicios, usted acepta estos términos y condiciones en su totalidad.  
          </p>  
        </section>  

        <section className="terminos-section">  
          <h2 className="terminos-section-title">2. Registro y Elegibilidad</h2>  
          <p className="terminos-text">  
            2.1. Para participar en los sorteos, los usuarios deben:  
          </p>  
          <ul className="terminos-list">  
            <li>Ser mayores de 18 años</li>  
            <li>Residir en Perú</li>  
            <li>Proporcionar información válida y verificable: DNI, nombres, apellidos, dirección, email y teléfono</li>  
          </ul>  
          <p className="terminos-text">  
            2.2. La empresa se reserva el derecho de verificar la identidad de los participantes en cualquier momento.  
          </p>  
        </section>  

        <section className="terminos-section">  
          <h2 className="terminos-section-title">3. Proceso de Compra y Participación</h2>  
          <p className="terminos-text">  
            3.1. Tras el registro exitoso, los usuarios podrán adquirir tickets para los sorteos disponibles.  
          </p>  
          <p className="terminos-text">  
            3.2. La confirmación de compra será enviada al correo electrónico registrado.  
          </p>  
          <p className="terminos-text">  
            3.3. Los tickets no son transferibles ni reembolsables, salvo en casos excepcionales determinados por la empresa.  
          </p>  
        </section>  

        <section className="terminos-section">  
          <h2 className="terminos-section-title">4. Limitaciones Geográficas</h2>  
          <p className="terminos-text">  
            4.1. Los sorteos están disponibles exclusivamente para residentes de Perú.  
          </p>  
          <p className="terminos-text">  
            4.2. La empresa se reserva el derecho de cancelar participaciones de usuarios fuera del territorio peruano.  
          </p>  
        </section>  

        <section className="terminos-section">  
          <h2 className="terminos-section-title">5. Responsabilidades y Garantías</h2>  
          <p className="terminos-text">  
            5.1. La empresa no se hace responsable por:  
          </p>  
          <ul className="terminos-list">  
            <li>Información incorrecta proporcionada por los usuarios</li>  
            <li>Fallas técnicas fuera de nuestro control</li>  
            <li>Pérdida de conexión durante el proceso de compra</li>  
          </ul>  
        </section>  

        <section className="terminos-section">  
          <h2 className="terminos-section-title">6. Protección de Datos</h2>  
          <p className="terminos-text">  
            6.1. Los datos personales serán tratados según la Ley de Protección de Datos Personales (Ley N° 29733).  
          </p>  
          <p className="terminos-text">  
            6.2. Al registrarse, el usuario autoriza el uso de sus datos para:  
          </p>  
          <ul className="terminos-list">  
            <li>Verificación de identidad</li>  
            <li>Comunicación sobre sorteos y resultados</li>  
            <li>Procesos administrativos relacionados con los sorteos</li>  
          </ul>  
        </section>  

        <footer className="terminos-footer">  
          <p>Última actualización: 5/01/2025</p>  
        </footer>  
      </div>  
    </div>  
  );  
};  

export default TerminosYCondiciones;