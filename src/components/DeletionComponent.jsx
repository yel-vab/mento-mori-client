import { React, useState } from 'react';
import axios from 'axios';
import './components.css';

const DeletionComponent = ({
  mento,
  showDeletionComponent,
  toggleShowDeletionComponent,
  mentoDeleted,
  setMentoDeleted,
}) => {
  const deleteMentoHandler = (e) => {
    e.preventDefault();
    toggleShowDeletionComponent(false);
    axios.delete(`http://localhost:5000/api/mento/${mento._id}`).then(() => {
      window.location.replace('/');
    });
  };

  return (
    <div className="container-pop-up">
      <div className="container-deletion-component">
        <p>
          Are you sure you would like to delete this Mento for{' '}
          <strong>{mento.recipient}</strong>?
        </p>
        <form onSubmit={deleteMentoHandler}>
          <div className="deletion-component-buttons">
            <button
              onClick={() => {
                toggleShowDeletionComponent(false);
              }}
            >
              No
            </button>
            <button>Yes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeletionComponent;
