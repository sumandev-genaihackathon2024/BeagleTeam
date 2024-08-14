import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CaseList from './CaseList';
import CaseDetails from './CaseDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cases" element={<CaseList />} />
        <Route path="/case/:id" element={<CaseDetails />} />
        <Route path="/" element={<CaseList />} />
      </Routes>
    </Router>
  );
}

export default App;