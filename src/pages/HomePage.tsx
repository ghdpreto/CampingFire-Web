import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// CSS STYLES
import '../styles/pages/HomePage.css';

// IMAGES
import LogoImg from '../assets/images/logo.png';

// Component
import CampItem from '../components/CampItem/CampItem';
import api from '../services/api';
import { Camp } from '../models/CampModel';

function HomePage() {
  const [camps, setCamps] = useState<Camp[]>([]);

  useEffect(() => {
    api.get('camps').then(response => {
      setCamps(response.data);
    });
  },[]);

  return (
    <div id="page-home">
      <Link to="/">
        <img src={LogoImg} className="logo-camping-fire" alt="Camping Fire" />
      </Link>

      <Link to="/Register">
        <button className="btn-register">Cadastrar Camping</button>
      </Link>

      <div className="search">
        <form>
          <input type="search" placeholder="Pesquisar Camping" />
          <button type="submit">Pesquisar</button>
        </form>
      </div>

      <div className="container">
        <div className="cards">
          {camps?.map((camp) => (
            <Link to="/Camping" className="link-to">
              <CampItem key={camp._id} camp={camp}/>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
