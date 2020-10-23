import React, { useEffect, useState } from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import { BsFillTrashFill, BsPencil } from 'react-icons/bs';

// CSS STYLES
import '../styles/pages/Camping.css';

// IMAGES
import LogoImg from '../assets/images/logo.png';
import CampImage from '../assets/images/imagem01.png';
import { Camp } from '../models/CampModel';
import api from '../services/api';

interface CampParams {
  id: string;
}

function Camping() {
  const [camp, setCamp] = useState<Camp>();

  const params = useParams<CampParams>();

  useEffect(() => {
    api.get(`camping/${params.id}`).then((response) => {
      setCamp(response.data);
    });
  }, [params.id]);

  // tela de loading (pendente)
  if (!camp) {
    return <h1>Carregando</h1>;
  }

  return (
    <div id="page-camping">
      <Link to="/">
        <img src={LogoImg} className="logo-camping-fire" alt="Camping Fire" />
      </Link>

      <Link to="/">
        <button className="btn-back">Voltar</button>
      </Link>

      <div className="container">
        <div className="card">
          <img src={camp.image} alt="Camping" />
          <div className="content">
            <h4>{camp.name}</h4>
            <p>{camp.location.address}</p>
            <p>
              {camp.location.city} - {camp.location.state}
            </p>

            <p>{camp.description}</p>
            <p>Contato: {camp.contact}</p>
          </div>
          <div className="btn-group">
            <button className="trash">
              <BsFillTrashFill size="24" />
            </button>

            <Link to={`/edit-camping/${camp._id}`}>
              <button className="edit">
                <BsPencil size="24" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Camping;
