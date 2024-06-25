import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 shadow text-white">
            <ul className="flex justify-around list-none">
                <li><Link className="text-white font-bold hover:underline active:underline" to="/">Inicio</Link></li>
                <li><Link className="text-white font-bold hover:underline" to="/articulo">Artículos</Link></li>
                <li><Link className="text-white font-bold hover:underline" to="/demanda">Demanda</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;