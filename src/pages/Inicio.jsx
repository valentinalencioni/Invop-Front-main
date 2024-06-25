import React from 'react';

const Inicio = () => {
    return (
        <div className="p-4 flex flex-col justify-between h-screen">
            <h1 className="text-center text-5xl text-gray-800 font-bold p-4">PROYECTO FINAL DE INVESTIGACIÓN OPERATIVA</h1>
            <div className='mb-16'>
                <h2 className="text-2xl text-gray-600 mt-4 font-bold">Integrantes:</h2>
                <ul className="list-disc list-inside">
                    <li>Fernández Matías</li>
                    <li>Lencioni Valentina</li>
                    <li>Mezzabotta Tomás</li>
                    <li>Van Megroot Gonzalo</li>
                </ul>
            </div>
        </div>
    );
};

export default Inicio;