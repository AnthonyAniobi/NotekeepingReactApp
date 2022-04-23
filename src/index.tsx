import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// pages
import Home from './pages/Home';
import Notes from './pages/Notes';
import Todo from './pages/Todo';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='notes' element={<Notes />} />
        <Route path='todo' element={<Todo />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
