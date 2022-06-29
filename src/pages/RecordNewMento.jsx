import './pages.css';
import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RecordMentoPage = () => {
  const [mento, setMento] = useState({
    recipient: '',
    message: '',
  });
  const [mentoSubmitted, toggleMentoSubmitted] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
    const newMento = { ...mento };
    newMento[e.target.id] = e.target.value;
    setMento(newMento);
    console.log(newMento);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/mento', {
        recipient: mento.recipient,
        message: mento.message,
      })
      .then((res) => {
        console.log(res.data);
      });
    toggleMentoSubmitted(true);
  };

  const newMentoHandler = (e) => {
    e.preventDefault();
    toggleMentoSubmitted(false);
  };

  return (
    <section className="container-main">
      <Header />
      <div className="container-content">
        {mentoSubmitted ? (
          <div className="container-form">
            <p>Mento recorded!</p>
            <button onClick={newMentoHandler}>Add new Mento?</button>
          </div>
        ) : (
          <form className="container-form" onSubmit={submitHandler}>
            <div className="form-item">
              <label for="recipient">For:</label>
              <input
                onChange={changeHandler}
                id="recipient"
                placeholder="Name of recipient"
              />
            </div>
            <div className="form-item">
              <label for="message">Message:</label>
              <textarea
                onChange={changeHandler}
                id="message"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button type="Submit">Submit</button>
          </form>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default RecordMentoPage;
