import React from 'react';
import '/src/assets/DetalleSorteo.css';

const DetalleSorteo = () => {
  return (
    <section id='detalles' className="raffle-section">
      <div className="raffle-container">
        <div className="raffle-header">
          <h1>🎉 Detalle del Sorteo</h1>
          <p>¡Prepárate para un evento emocionante!</p>
        </div>

        <div className="info-card">
          <h2>Información del Evento</h2>
          <div className="info-items">
            <div className="info-item">
              <span className="icon">📅</span>
              <div>
                <p className="label">Fecha</p>
                <p>14 de febrero de 2025</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">⏰</span>
              <div>
                <p className="label">Hora</p>
                <p>18:00 (hora local)</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">🔗</span>
              <div>
                <p className="label">Transmisión</p>
                <p>Recibirás un enlace por correo electrónico</p>
              </div>
            </div>
          </div>
        </div>

        <div className="alert-box">
          <span className="icon">📧</span>
          <p>
            Recibirás el enlace de acceso a la transmisión <strong>24 horas antes del evento</strong>.
            No olvides revisar tu correo electrónico.
          </p>
        </div>

        <div className="info-card">
          <h2>Detalles Importantes</h2>
          <p className="details-text">
            🎯 ¡MOMENTO DECISIVO EN VIVO!<br></br>
            El sorteo será legal y transparente, transmitido en directo por nuestras redes sociales.
            ¡No te pierdas el momento de los ganadores!
          </p>
          <div className="button-group">
            <button className="primary-button">
              <span>🔄</span> Compartir Evento
            </button>
            <button className="secondary-button">
              <span>📧</span> Verificar Correo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetalleSorteo;