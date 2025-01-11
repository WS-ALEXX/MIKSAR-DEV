import React, { useState } from 'react';  
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';  
import TerminosYCondiciones from '../Legal/TerminosCondiciones.jsx';  
import PoliticasDePrivacidad from '../Legal/PoliticasDePrivacidad.jsx';  

import '/src/assets/Footer.css';  

const Footer = () => {  
    const [isModalOpen, setModalOpen] = useState(false);  
    const [modalType, setModalType] = useState(null); // Para manejar qué modal se abre  
    const currentYear = new Date().getFullYear();  

    const openModal = (type) => {  
        setModalType(type);  
        setModalOpen(true);  
    };  

    return (  
        <footer className="footer">  
            <div className="footer-content">  
                {/* Sección principal */}  
                <div className="footer-main">  
                    {/* Información de la empresa */}  
                    <div className="footer-section">  
                        <h3 className="footer-title">MIKSAR SORTEOS</h3>  
                        <p className="footer-description">  
                            Sorteos confiables y transparentes para todos nuestros participantes.  
                            Tu oportunidad de ganar grandes premios está aquí.  
                        </p>  
                        <div className="footer-contact">  
                            <div className="contact-item">  
                                <Phone size={16} />  
                                <span>+51 980 585 880</span>  
                            </div>  
                            <div className="contact-item">  
                                <Mail size={16} />  
                                <span>miksarDev@gmail.com</span>  
                            </div>  
                            <div className="contact-item">  
                                <MapPin size={16} />  
                                <span>Lima - Lima</span>  
                            </div>  
                        </div>  
                    </div>  

                    {/* Enlaces rápidos */}  
                    <div className="footer-section">  
                        <h3 className="footer-title">Enlaces Rápidos</h3>  
                        <ul className="footer-links">  
                            <li><a href="#inicio">Inicio</a></li>  
                            <li><a href="#sorteos">Sorteos Activos</a></li>  
                            <li><a href="#ganadores">Ganadores</a></li>  
                            <li><a href="#nosotros">Sobre Nosotros</a></li>  
                            <li><a href="#contacto">Contacto</a></li>  
                        </ul>  
                    </div>  

                    {/* Legal */}  
                    <div className="footer-section">  
                        <h3 className="footer-title">Legal</h3>  
                        <ul className="footer-links">  
                            <li>  
                                <a href="#" onClick={(e) => { e.preventDefault(); openModal('terminos'); }} className="footer-link">  
                                    Términos y Condiciones  
                                </a>  
                            </li>  
                            <li>  
                                <a href="#" onClick={(e) => { e.preventDefault(); openModal('privacidad'); }} className="footer-link">  
                                    Política de Privacidad  
                                </a>  
                            </li>  
                            <li><a href="#cookies">Política de Cookies</a></li>  
                            <li><a href="#legales">Avisos Legales</a></li>  
                        </ul>  
                    </div>  

                    {/* Newsletter */}  
                    <div className="footer-section">  
                        <h3 className="footer-title">Hoja informativa</h3>  
                        <p className="footer-description">  
                            Suscríbete para recibir las últimas novedades y sorteos especiales.  
                        </p>  
                        <form className="footer-form">  
                            <input  
                                type="email"  
                                placeholder="Tu email"  
                                className="footer-input"  
                            />  
                            <button type="submit" className="footer-button">  
                                Suscribirse  
                            </button>  
                        </form>  
                    </div>  
                </div>  

                {/* Línea divisoria */}  
                <div className="footer-divider"></div>  

                {/* Sección inferior */}  
                <div className="footer-bottom">  
                    <p className="copyright">  
                        &copy; {currentYear} MIKSAR SORTEOS. Todos los derechos reservados.  
                    </p>  

                    {/* Redes sociales */}  
                    <div className="social-links">  
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">  
                            <Facebook size={20} />  
                        </a>  
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">  
                            <Twitter size={20} />  
                        </a>  
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">  
                            <Instagram size={20} />  
                        </a>  
                    </div>  

                    {/* Made with love */}  
                    <div className="made-with">  
                        Hecho con <Heart size={16} className="heart-icon" /> en Perú  
                    </div>  
                </div>  
            </div>  

            {/* Modal de Términos y Condiciones */}  
            {modalType === 'terminos' && (  
                <TerminosYCondiciones isOpen={isModalOpen} onClose={() => setModalOpen(false)} />  
            )}  
            {modalType === 'privacidad' && (  
                <PoliticasDePrivacidad isOpen={isModalOpen} onClose={() => setModalOpen(false)} />  
            )}  
        </footer>  
    );  
};  

export default Footer;