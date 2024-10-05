import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Sidebar komponens importálása
import Home from './pages/Home';
import WordList from './pages/WordList';
import AddWord from './pages/AddWord';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar /> 
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wordlist" element={<WordList />} />
            <Route path="/addword" element={<AddWord />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
