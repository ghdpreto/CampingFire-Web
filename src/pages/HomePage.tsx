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
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  function searchCamp(value: string) {
    if (value === '') {
      alert('Digite uma cidade!');
    } else {
      api
        .get(`campings?city=${value}`)
        .then((response) => {
          return setCamps(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function loadCamps() {
    api
      .get('campings')
      .then((response) => {
        // passando os valores para a variavel
        setCamps(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCamps();
  }, []);

  return (
    <div id="page-home">
      <Link to="/">
        <img src={LogoImg} className="logo-camping-fire" alt="Camping Fire" />
      </Link>

      <Link to="/register">
        <button className="btn-register">Cadastrar Camping</button>
      </Link>

      <div className="search">
        <input
          type="search"
          placeholder="Pesquisar Camping"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            searchCamp(name);
          }}
        >
          Pesquisar
        </button>
      </div>

      <div className="container">
        <div className="cards">
          {isLoading ? (
            <h1>Carregando...</h1>
          ) : !camps.length ? (
            <span>Nenhum Camping localizado =(</span>
          ) : (
            camps?.map((camp) => (
              <Link to={`/camping/${camp._id}`} className="link-to">
                <CampItem key={camp._id} camp={camp} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
