import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
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
  const goBack = useHistory();

  const params = useParams<CampParams>();

  function deleteCamp(id: number) {
    console.log(id);
    api
      .delete(`campings/${id}`)
      .then(() => {
        return alert(`Camping ${camp?.name}, foi deletado!`), goBack.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function loadCamp(id: string) {
    api
      .get(`campings/${id}`)
      .then((response) => {
        setCamp(response.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    loadCamp(params.id);
  }, [params.id]);

  return (
    <div id="page-camping">
      <Link to="/">
        <img src={LogoImg} className="logo-camping-fire" alt="Camping Fire" />
      </Link>

      <Link to="/">
        <button className="btn-back">Voltar</button>
      </Link>

      <div className="container">
        {!camp ? (
          <h1>Carregando</h1>
        ) : (
          <div className="card">
            <img src={camp.image ? camp.image : CampImage} alt="Camping" />
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
              <button className="trash" onClick={() => deleteCamp(camp._id)}>
                <BsFillTrashFill size="24" />
              </button>

              <Link to={`/edit-camping/${camp._id}`}>
                <button className="edit">
                  <BsPencil size="24" />
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Camping;
