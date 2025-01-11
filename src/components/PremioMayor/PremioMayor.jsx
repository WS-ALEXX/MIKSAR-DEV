import React from 'react';
import '/src/assets/PremioMayor.css';

const PremioMayor = ({ img_path, title = "Premio Mayor", description = "¡Gran Premio!" }) => {
  return (
    <section id="premio-mayor" className="premio-mayor">
      <div className="premio-mayor__container">
        <h2 className="premio-mayor__title">{title}</h2>
        
        <div className="premio-mayor__image-wrapper">
          <img 
            src={img_path} 
            alt={title}
            className="premio-mayor__image"
          />
          <div className="premio-mayor__overlay">
            <p className="premio-mayor__description">{description}</p>
          </div>
        </div>

        <div className="premio-mayor__details">
          <div className="premio-mayor__badge">
            Premio Principal
          </div>
          <button className="premio-mayor__zoom-button">
            Ver detalles
          </button>
        </div>
      </div>
    </section>
  );
};

export default PremioMayor;