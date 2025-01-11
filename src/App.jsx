import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CompraTicket from './components/CompraTicket/CompraTicket';
import Container from './components/CompraTicket/Container'
import DetalleSorteo from './components/DetalleSorteo/DetalleSorteo';
import Premios from './components/Premios/Premios';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer'

import './index.css'


const App =  () => {
  const sorteoInfo = {
    nombre: "Gran Sorteo 2024",
    fecha: "30 de Diciembre 2024",
    precio: 50,
    disponibles: 100,
    premios: [
      "1er Premio: 1. Iphone 15 pro max",
      "2do Premio: 2. Premios de  S/ 500",
      "3er Premio: 5. Premios de S/ 100"
    ]
  };


  return (
    <div>
      <Navbar />
      <main>
        <div>
          <Container sorteoInfo={sorteoInfo} />
          <CompraTicket></CompraTicket>
        </div>
        <DetalleSorteo />
        <Premios premios={sorteoInfo.premios} />
        <Contacto />
        <Footer />
      </main>
    </div>
  );
};

export default App;