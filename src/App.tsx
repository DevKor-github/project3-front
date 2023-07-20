import React, { useState } from 'react';
import Page from './Page/Page';
import Nav from './Nav/Nav';
import './App.css';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('mappage');

  return (
    <div className="App-container">
      <Page currentPage={currentPage} />
      <Nav setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;