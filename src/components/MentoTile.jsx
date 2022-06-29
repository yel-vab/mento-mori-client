import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const MentoTile = ({ mento }) => {

  return (
    <div className="mento-tile">
      <p className="text-recipient">To: {mento.recipient},</p>
      <p className="text-message">{mento.message}</p>
      <Link to={`/mento/${mento._id}`} className="text-continue">
        (continue reading)
      </Link>
    </div>
  );
};

export default MentoTile;
