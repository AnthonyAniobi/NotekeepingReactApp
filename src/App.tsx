import React from 'react'
import './App.css';
// pages
import Home from './pages/Home';
import Notes from './pages/Notes';
import Todo from './pages/Todo';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewEntry from './pages/NewEntry';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='notes' element={<Notes />} />
                <Route path='todo' element={<Todo />} />
                <Route path='new' element={<NewEntry />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App