import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import '/src/assets/Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        <h2 className="contacto-title">CONTACTO</h2>
        
        <div className="contacto-grid">
          {/* Información de contacto */}
          <div className="contacto-info">
            <h3 className="info-title">Información de Contacto</h3>
            
            <div className="info-items">
              <div className="info-item">
                <Phone className="info-icon" size={24} />
                <div>
                  <strong>Teléfono</strong>
                  <p>+51 980 585 880</p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="info-icon" size={24} />
                <div>
                  <strong>Email</strong>
                  <p>miksarSoporte@gmial.com</p>
                </div>
              </div>

              <div className="info-item">
                <MapPin className="info-icon" size={24} />
                <div>
                  <strong>Dirección</strong>
                  <p>Lima - Lima</p>
                </div>
              </div>

              <div className="info-item">
                <Clock className="info-icon" size={24} />
                <div>
                  <strong>Horario de Atención</strong>
                  <p>Lunes a <Domingo></Domingo>: 9:00 am - 10:00 pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="contacto-form-container">
            <form onSubmit={handleSubmit} className="contacto-form">
              <h3 className="form-title">Envíanos un Mensaje</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Mensaje"
                  required
                  className="form-textarea"
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                <Send size={20} />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;