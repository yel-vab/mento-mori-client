import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components.css';

const UpdateForm = ({
  mento,
  setMento,
  toggleShowUpdateForm,
  mentoIsUpdated,
  toggleMentoIsUpdated,
}) => {
  const [duplicateMento, setDuplicateMento] = useState({ ...mento });

  const onChangeHandler = (e) => {
    const newData = { ...duplicateMento };
    newData[e.target.id] = e.target.value;
    setDuplicateMento(newData);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    toggleShowUpdateForm(false);
    axios
      .put(`http:///localhost:5000/api/mento/${mento._id}`, {
        ...duplicateMento,
      })
      .then(() => {
        window.location.reload();
      });
    toggleMentoIsUpdated(!mentoIsUpdated);
  };

  return (
    <div className="container-pop-up">
      <form className="container-update-form" onSubmit={onSubmitHandler}>
        <div className="update-form-item">
          <label>For:</label>
          <input
            id="recipient"
            value={duplicateMento.recipient}
            onChange={onChangeHandler}
          />
        </div>
        <div className="update-form-item">
          <label>Edit Message:</label>
          <textarea
            id="message"
            value={duplicateMento.message}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <div className="update-form-buttons">
          <button
            type="button"
            onClick={() => {
              toggleShowUpdateForm(false);
            }}
          >
            {' '}
            Cancel
          </button>
          <button type="Submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
