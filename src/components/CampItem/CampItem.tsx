import React from 'react';

// CSS
import './CampItem.css';

//ICONS

//IMAGES
import CampImage from '../../assets/images/imagem01.png';
import { Camp } from '../../models/CampModel';

interface CampItemProps {
  camp: Camp;
}

function CampItem(props: CampItemProps) {
  const { camp } = props;

  return (
    <div className="card">
      <img src={camp.image ? camp.image : CampImage} alt="Camping" />
      <div className="content">
        <h4>{camp.name}</h4>
        <p>{camp.location.address}</p>
        <p>
          {camp.location.city} - {camp.location.state}
        </p>
      </div>
      <div className="btn-group">
        <span>Ver mais...</span>
      </div>
    </div>
  );
}

export default CampItem;
