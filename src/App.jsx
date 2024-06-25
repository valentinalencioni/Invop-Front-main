import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Demanda from './pages/Demanda';
import ArticuloTable from './pages/ArticuloTable';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/articulo" element={<ArticuloTable />} />
                <Route path="/demanda" element={<Demanda />} />
            </Routes>
        </Router>
    );
}

export default App;