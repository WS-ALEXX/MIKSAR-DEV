import React, { useState, useEffect } from 'react';
import { ArrowRight, User, Ticket, Calculator, CreditCard, X, CheckCircle } from 'lucide-react';
import TerminosYCondiciones from '../Legal/TerminosCondiciones.jsx';

import '/src/assets/CompraTicket.css';

import ImgQRYape from '../../assets/img/QR-YAPE.webp'

const TOKEN = import.meta.env.VITE_API_TOKEN;
const PRECIO_TICKET = import.meta.env.VITE_COSTO_TICKET;
const API = import.meta.env.VITE_API_URL_PUBLIC;

const SuccessModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal success-modal">
        <div className="custom-modal-header">
          <button onClick={onClose} className="custom-close-button">
            <X size={24} />
          </button>
        </div>
        <div className="custom-modal-content">
          <div className="success-icon-wrapper">
            <CheckCircle size={50} className="success-check-icon" />
          </div>
          <h2 className="success-title">¡Reserva Exitosa!</h2>
          <div className="success-message">
            <p>Su reserva ha sido registrada correctamente.</p>
            <p>En los próximos <span className="highlight-text">30 minutos</span> validaremos su pago y le enviaremos una notificación al correo electrónico proporcionado.</p>
          </div>
          <button onClick={() => window.location.reload()} className="success-button">
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

const PaymentModal = ({ isOpen, onClose, onConfirm }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleConfirm = async () => {
    if (isProcessing) return; // Previene múltiples clicks
    
    setIsProcessing(true);
    try {
      const response = await onConfirm();
      if (response?.status === 200) {
        setShowSuccess(true);
      } else {
        alert("Hubo un error procesando el pago. Por favor intente nuevamente.");
      }
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      alert("Hubo un error procesando el pago. Por favor intente nuevamente.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="custom-modal-overlay">
        <div className="custom-modal payment-modal">
          <div className="custom-modal-header">
            <button onClick={onClose} className="custom-close-button">
              <X size={24} />
            </button>
          </div>
          <div className="custom-modal-content">
            <img
              src={ImgQRYape}
              alt="Payment QR"
              className="payment-qr-image"
            />
            <div className="payment-details">
              <h4 className="payment-number">Numero: 914626292</h4>
            </div>
            <div className="modal-buttons">
              <button 
                onClick={onClose} 
                className="cancel-button"
                disabled={isProcessing}
              >
                Cancelar
              </button>
              <button 
                onClick={handleConfirm} 
                className="confirm-button"
                disabled={isProcessing}
              >
                {isProcessing ? 'Procesando...' : 'Confirmar Pago'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          onClose();
        }}
        onConfirm={() => window.location.reload()}
      />
    </>
  );
};

const CompraTicket = () => {
  const [step, setStep] = useState(1);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    dni: '',
    nombres: '',
    apellidos: '',
    direccion: '',
    email: '',
    telefono: '',
    terminos: '',
    cantidadTicket: 1,
    costoTotal: 20,
    metodoPago: 'Yape',
    tipoMoneda: 'PEN',
    cuotas: 1,
  });
  const [cantidadTickets, setCantidadTickets] = useState(1);
  const [showPriceAnimation, setShowPriceAnimation] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    setShowPriceAnimation(true);
    const timer = setTimeout(() => setShowPriceAnimation(false), 300);
    return () => clearTimeout(timer);
  }, [cantidadTickets]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCantidadPreset = (cantidad) => {
    formData.cantidadTicket = cantidad;
    setCantidadTickets(cantidad);
  };

  const handleCantidadChange = (e) => {
    const valor = parseInt(e.target.value) || 0;
    formData.cantidadTicket = valor;
    setCantidadTickets(valor < 0 ? 0 : valor);
  };

  const calculateTotal = () => {
    var costo = cantidadTickets * PRECIO_TICKET;
    formData.costoTotal = costo;
    return costo;
  };

  const handlePaymentConfirmation = async () => {
    try {
      const response = await fetch(`${API}/user/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error en la solicitud:', errorData);
      }
      
      return response; // Retornamos la respuesta completa

    } catch (error) {
      console.error('Error processing payment:', error);
      throw error;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPaymentModalOpen(true);
  };

  const renderStepIndicator = () => (
    <div className="step-indicator">
      <div className={`step-item ${step === 1 ? 'active' : ''}`}>
        <div className="step-icon">
          <User size={16} />
        </div>
        <span>Datos Personales</span>
      </div>
      <div className="step-divider"></div>
      <div className={`step-item ${step === 2 ? 'active' : ''}`}>
        <div className="step-icon">
          <Ticket size={16} />
        </div>
        <span>Comprar Tickets</span>
      </div>
    </div>
  );

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const renderPersonalDataForm = () => (
    <form id='comprar' onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="form-container">
      <div className="form-card">
        <div className="form-header">
          <User className="form-header-icon" size={24} />
          <h2>Información Personal</h2>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>DNI</label>
            <input
              type="number"
              name="dni"
              value={formData.dni}
              onChange={handleInputChange}
              required
              placeholder="Ingresa tu DNI"
            />
          </div>

          <div className="form-group">
            <label>Nombres</label>
            <input
              type="text"
              name="nombres"
              value={formData.nombres}
              onChange={handleInputChange}
              required
              placeholder="Ingresa tus nombres"
            />
          </div>

          <div className="form-group">
            <label>Apellidos</label>
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleInputChange}
              required
              placeholder="Ingresa tus apellidos"
            />
          </div>

          <div className="form-group">
            <label>Dirección</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleInputChange}
              required
              placeholder="Ingresa tu dirección"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              required
              placeholder="+51 999 999 999"
            />
          </div>
          <div className="form-group terms-group">
            <label className='terms-label'>
              <input
                type="checkbox"
                name="terminos"
                checked={formData.terminos === 'True'}
                onChange={(e) => setFormData(prev => ({ ...prev, terminos: e.target.checked ? 'True' : '' }))}
                required
              />
              <span>Acepto los <a href="#" onClick={(e) => { e.preventDefault(); openModal('terminos'); }}> términos y condiciones</a></span>
            </label>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-next">
        Siguiente
        <ArrowRight size={20} />
      </button>
      <TerminosYCondiciones isOpen={isModalOpen} onClose={() => setModalOpen(false)} />  
    </form>
  );

  const renderTicketSelection = () => (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-card ticket-card">
        <div className="form-header">
          <Ticket className="form-header-icon" size={24} />
          <h2>Selección de Tickets</h2>
        </div>

        <div className="price-banner">
          <Calculator size={20} />
          <span>Precio por ticket: S/ {PRECIO_TICKET}.00</span>
        </div>

        <div className="ticket-selection">
          <div className="quick-selection">
            <label>Selección rápida</label>
            <div className="preset-buttons">
              <button
                type="button"
                onClick={() => handleCantidadPreset(2)}
                className="btn btn-preset"
              >
                <span className="ticket-amount">2</span>
                <span className="ticket-price">S/ {2 * PRECIO_TICKET}</span>
              </button>
              <button
                type="button"
                onClick={() => handleCantidadPreset(5)}
                className="btn btn-preset"
              >
                <span className="ticket-amount">5</span>
                <span className="ticket-price">S/ {5 * PRECIO_TICKET}</span>
              </button>
              <button
                type="button"
                onClick={() => handleCantidadPreset(10)}
                className="btn btn-preset"
              >
                <span className="ticket-amount">10</span>
                <span className="ticket-price">S/ {10 * PRECIO_TICKET}</span>
              </button>
            </div>
          </div>

          <div className="custom-selection">
            <label>Cantidad personalizada</label>
            <div className="quantity-input">
              <button
                type="button"
                className="quantity-btn"
                onClick={() => setCantidadTickets(prev => Math.max(0, prev - 1))}
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={cantidadTickets}
                onChange={handleCantidadChange}
                max="10"
              />
              <button
                type="button"
                className="quantity-btn"
                onClick={() => setCantidadTickets(prev => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className={`ticket-summary ${showPriceAnimation ? 'price-update' : ''}`}>
            <div className="summary-row">
              <span>Cantidad de tickets:</span>
              <span>{cantidadTickets}</span>
            </div>
            <div className="summary-row">
              <span>Precio por ticket:</span>
              <span>S/ {PRECIO_TICKET}.00</span>
            </div>
            <div className="summary-total">
              <span>Total a pagar:</span>
              <span>S/ {calculateTotal()}.00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="button-group">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="btn btn-secondary"
        >
          Volver
        </button>
        <button
          type="submit"
          className="btn btn-primary btn-pay"
          disabled={cantidadTickets === 0}
        >
          <CreditCard size={20} />
          Proceder al Pago
        </button>
      </div>
    </form>
  );

  return (
    <div className="compra-ticket">
      {renderStepIndicator()}
      {step === 1 ? renderPersonalDataForm() : renderTicketSelection()}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onConfirm={handlePaymentConfirmation}
      />
    </div>
  );
};

export default CompraTicket;