import React, { useEffect, useState } from 'react';

import { ArticuloService } from '../services/ArticuloService';

const ArticuloTable = () => {
    const [data, setData] = useState([]);
    const[articulos, setArticulos]=useState<import('../types/Articulo').Articulo[]>([]);

    //VARIABLE QUE MUESTRA EL LOADER HASTA QUE SE RECIBAN DATOS DE LA API
    const [isLoading, setIsLoading] = useState(true);

    //ACTUALIZA LA TABLA DESPUES DE CADA OPERACION EXITOSA
    const [refreshData] = useState(false);

    useEffect(() => {
        //LLAMAMOS A LA FUNCION PARA OBTENER LOS PRODUCTOS DECLARADOS EN EL SERVICE

        const fetchArticulo= async()=>{
            const articulos=await ArticuloService.getArticulos();
            setArticulos(articulos);
            setIsLoading(false);

        }
        
        fetchArticulo();
    }, [refreshData]);

    console.log(JSON.stringify(articulos,null,2));

    const handleRegisterClick = () => {
        console.log('Registrar nuevo artículo'); //aca vamos a manejar el registrar
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl text-gray-800 mb-4">Articulo</h1>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4" onClick={handleRegisterClick}>Registrar nuevo artículo</button>
            <table className="w-full border-collapse shadow-lg">
            <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Fecha Alta</th>
                        <th className="border p-2">CGI</th>
                        <th className="border p-2">Lote Óptimo</th>
                        <th className="border p-2">Modelo Inventario</th>
                        <th className="border p-2">Nombre Articulo</th>
                        <th className="border p-2">Precio Articulo</th>
                        <th className="border p-2">Punto Pedido</th>
                        <th className="border p-2">Stock Actual</th>
                        <th className="border p-2">Stock Seguridad</th>
                        <th className="border p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {articulos.map(articulos => (
                        <tr key={articulos.id} className="odd:bg-white even:bg-gray-100">
                            <td className="border p-2">{item.fecha_alta}</td>
                            <td className="border p-2">{item.cgi}</td>
                            <td className="border p-2">{item.lote_optimo}</td>
                            <td className="border p-2">{item.modelo_inventario}</td>
                            <td className="border p-2">{item.nombre_articulo}</td>
                            <td className="border p-2">{item.precio_articulo}</td>
                            <td className="border p-2">{item.punto_pedido}</td>
                            <td className="border p-2">{item.stock_actual}</td>
                            <td className="border p-2">{item.stock_seguridad}</td>
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

export default ArticuloTable;