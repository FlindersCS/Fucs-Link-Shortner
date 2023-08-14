import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RedirectPage from './RedirectPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/:shortCode" element={<RedirectPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
