import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MentoBookPage from './pages/MentoBookPage';
import RecordMentoPage from './pages/RecordNewMento';
import MentoPage from './pages/MentoPage';
import NotFoundPage from './pages/NotFoundPage';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MentoBookPage />} />
      <Route path="/mento/:id" element={<MentoPage />} />
      <Route path="/record-new-mento" element={<RecordMentoPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
