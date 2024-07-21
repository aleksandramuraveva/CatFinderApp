import React from 'react';
import './App.css';
import DetailedCard from './components/DetailedCard';
import MainContent from './components/MainContent';
import NotFound from './components/NotFound';
import { Routes, Route } from 'react-router-dom';
// import {useContext} from 'react';
// import { ThemeContext} from "./contexts/themeContext";

const App: React.FC = () => {
  // const theme = useContext(ThemeContext);
  // console.log(theme)
  return (
    <>
      <Routes>
        <Route path="/" element={<MainContent />}>
          <Route path="details/:id" element={<DetailedCard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
