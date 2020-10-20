import React from 'react';

// CSS
import "./CampItem.css";

//ICONS
import { BsFillTrashFill, BsPencil } from "react-icons/bs";

//IMAGES
import CampImage from "../../assets/images/imagem01.png";
import { Link } from 'react-router-dom';
import { Camp } from '../../models/CampModel';


interface CampItemProps {
  camp: Camp
}

function CampItem(props: CampItemProps) {
  const {camp} = props

  return (
    <div className="card">
      <img src={camp.image} alt="Camping"/>
      <div className="content">
  <h4>{camp.name}</h4>
  <p>{camp.location.address}</p>
        <p>{camp.location.city} - {camp.location.state}</p>
      </div>
      <div className="btn-group">
        <button className="trash">
          <BsFillTrashFill size="24"/>
        </button>

        <Link to="/EditCamping">
          <button className="edit">
            <BsPencil size="24"/>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CampItem;
