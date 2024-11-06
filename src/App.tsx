import React from 'react';
import './App.css';
import DetailedCard from './components/DetailedCard';
import MainContent from './components/MainContent';
import NotFound from './components/NotFound';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainContent />}>
          <Route path="details/:name" element={<DetailedCard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
