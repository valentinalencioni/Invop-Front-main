import Articulo from "../types/Articulo"

const baseURL = 'http://localhost:8080/'

export const ArticuloService={
    getArticulos:async (): Promise<Articulo[]>=>{
        const response = await fetch('${baseURL}api/v1/articulos',{
            method: "GET", 
            headers: {
                'Accept': '*/*',
            'Authorization': `Bearer ` + localStorage.getItem('token'),
            'Content-Type': 'application/json'
            },
        })
        const data = await response.json();
        return data; 
    }
}