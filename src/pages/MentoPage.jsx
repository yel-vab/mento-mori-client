import './pages.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UpdateForm from '../components/UpdateForm';
import DeletionComponent from '../components/DeletionComponent';

const MentoPage = () => {
  const { id } = useParams();
  const [mento, setMento] = useState({});
  const [messageArray, setMessageArray] = useState([]);
  const [mentoIsUpdated, toggleMentoIsUpdated] = useState(false);
  const [mentoDeleted, setMentoDeleted] = useState(false);
  const [showUpdateForm, toggleShowUpdateForm] = useState(false);
  const [showDeletionComponent, toggleShowDeletionComponent] = useState(false);

  const fetchMento = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/mento/${id}`);
    setMento({ ...data });
  };
  
  useEffect( async () => {
    await fetchMento();
  }, [showUpdateForm]);
  
 useEffect(() => {
   if (mento.message !== undefined) {
     setMessageArray(mento['message'].split(/\n/g));
   }
 }, [mento])
 

  useEffect(() => {
    if (mentoDeleted) {
      window.location.replace('/');
    }
  }, [showDeletionComponent]);

  const updateHandler = () => {
    toggleShowUpdateForm(true);
  };

  const deleteHandler = () => {
    toggleShowDeletionComponent(true);
  };

  return (
    <section className="container-main">
      <Header />
      {showDeletionComponent ? (
        <DeletionComponent
          mento={mento}
          setMento={setMento}
          toggleShowDeletionComponent={toggleShowDeletionComponent}
          mentoDeleted={mentoDeleted}
          setMentoDeleted={setMentoDeleted}
        />
      ) : (
        ''
      )}
      {showUpdateForm ? (
        <UpdateForm
          mento={mento}
          setMento={setMento}
          toggleShowUpdateForm={toggleShowUpdateForm}
          mentoIsUpdated={mentoIsUpdated}
          toggleMentoIsUpdated={toggleMentoIsUpdated}
          setMessageArray={setMessageArray}
        />
      ) : (
        ''
      )}
      <div className="container-content">
        <div className="container-mento">
          <div className="container-buttons">
            <button onClick={updateHandler}>
              <i className="fa fa-solid fa-pen"></i>
            </button>
            <button onClick={deleteHandler}>
              <i className="fa fa-solid fa-trash"></i>
            </button>
          </div>
          <h3 className="mento-recipient">{mento.recipient}</h3>
          {messageArray.length > 1 ? messageArray.map((paragraph) => <p className="mento-message">{paragraph}</p>) : <p className="mento-message">{mento.message}</p> }
          <p className="mento-sign-off">Hugs, Arielle</p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default MentoPage;
