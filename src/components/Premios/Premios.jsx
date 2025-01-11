import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';
import '/src/assets/Premios.css';


const Premios = ({ premios }) => {
  const getPremioIcon = (index) => {
    switch (index) {
      case 0:
        return <Trophy className="premio-icon premio-icon--gold" />;
      case 1:
        return <Award className="premio-icon premio-icon--silver" />;
      default:
        return <Star className="premio-icon premio-icon--bronze" />;
    }
  };

  const getPremioLabel = (index) => {
    switch (index) {
      case 0:
        return 'PRIMER PREMIO';
      case 1:
        return 'SEGUNDO PREMIO';
      case 2:
        return 'TERCER PREMIO';
      default:
        return PREMIO `${ index + 1 }`;
    }
  };

  return (
    <section id="premios" className="premios-section">
      <div className="premios-container">
        <h2 className="premios-title">
          <Trophy className="title-icon" />
          PREMIOS DEL SORTEO
        </h2>

        <div className="premios-grid">
          {premios.map((premio, index) => (
            <div
              key={index}
              className={`premio - card premio-card--${index === 0 ? 'gold' : index === 1 ? 'silver' : 'bronze'}`}
            >
          <div className="premio-header">
            {getPremioIcon(index)}
            <span className="premio-label">{getPremioLabel(index)}</span>
          </div>

          <div className="premio-content">
            <h3 className="premio-name">{premio}</h3>
          </div>

          <div className="premio-footer">
            <div className="premio-badge">#{index + 1}</div>
          </div>
        </div>
          ))}
      </div>
    </div>
    </section >
  );
};

export default Premios;