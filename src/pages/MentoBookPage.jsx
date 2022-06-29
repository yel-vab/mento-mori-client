import './pages.css';
import nothingFound from '../assets/empty-db.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MentoTile from '../components/MentoTile';
import { Link } from 'react-router-dom';

const MentoBookPage = () => {
  const [mentos, modifyMentos] = useState([]);

  const retrieveMentos = async () => {
    const { data } = await axios.get('http://localhost:5000/api/mentos');
    modifyMentos(data);
  };

  const sortNewest = async (e) => {
    const { data } = await axios.get(
      'http://localhost:5000/api/mentos/sort-newest'
    );
    modifyMentos(data);
  };

  const sortAscending = async (e) => {
    const { data } = await axios.get(
      'http://localhost:5000/api/mentos/sort-a-to-z'
    );
    modifyMentos(data);
  };

  const sortDescending = async (e) => {
    const { data } = await axios.get(
      'http://localhost:5000/api/mentos/sort-z-to-a'
    );
    modifyMentos(data);
  };

  useEffect(() => {
    retrieveMentos();
  }, []);

  return (
    <section className="container-main">
      <Header />
      <div className="container-content">
        {mentos.length === 0 ? (
          <div className="container-empty-state">
            <img className="empty-db-image" src={nothingFound} alt="" />
            <p>
              No mentos yet!
            </p>
           <Link className="link" to="/record-new-mento">Record your first Mento here!</Link>
          </div>
        ) : (
          <div>
            <form className="container-sorting-filter">
              <span>Sort:</span>
              <select className="dropdown-filter">
                <option onClick={retrieveMentos}>Date recorded (Oldest first)</option>
                <option onClick={sortNewest}>Date recorded (Newest first)</option>
                <option onClick={sortAscending}>Alphabetically (A - Z)</option>
                <option onClick={sortDescending}>Alphabetically (Z - A)</option>
              </select>
            </form>
            <div className="mentos-container">
              {mentos.map((mento) => (
                <MentoTile key={mento._id} mento={mento} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default MentoBookPage;
