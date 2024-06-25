import React, { useEffect, useState } from 'react';

const Demanda = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleRegisterClick = () => {
        console.log('Registrar Nueva Demanda'); //manejo de boton
    };

    const handlePredictionClick = () => {
        console.log('Realizar Predicción'); //manejo de boton
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl text-gray-800 mb-4">Demanda</h1>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4 mr-2" onClick={handleRegisterClick}>Registrar Nueva Demanda</button>
            <button className="bg-green-500 text-white py-2 px-4 rounded mb-4" onClick={handlePredictionClick}>Realizar Predicción</button>
            <table className="w-full border-collapse shadow-lg">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Articulo</th>
                        <th className="border p-2">Periodo</th>
                        <th className="border p-2">Prom. Movil Ponderado</th>
                        <th className="border p-2">PM Suavizado Exp</th>
                        <th className="border p-2">Regresión Lineal</th>
                        <th className="border p-2">D. Estacionalidad</th>
                        <th className="border p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id} className="odd:bg-white even:bg-gray-100">
                            <td className="border p-2">{item.articulo}</td>
                            <td className="border p-2">{item.periodo}</td>
                            <td className="border p-2">{item.promMovilPonderado}</td>
                            <td className="border p-2">{item.pmSuavizadoExp}</td>
                            <td className="border p-2">{item.regresionLineal}</td>
                            <td className="border p-2">{item.dEstacionalidad}</td>
                            <td className="border p-2">
                                <button className="bg-yellow-500 text-white py-1 px-2 rounded mr-2">Editar</button>
                                <button className="bg-red-500 text-white py-1 px-2 rounded">Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Demanda;