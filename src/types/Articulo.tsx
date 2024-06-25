import { ModeloInventario } from "./ModeloInventario";

export interface Articulo{
    id: number;
    fecha_alta: Date;
    fecha_baja: Date;
    cgi: number;
    lote_optimo: number; 
    modelo_inventario: ModeloInventario;
    "nombre-articulo": string;
    "precio-articulo": number;
    punto_pedido: number, 
    "stock-actual":number,
    stock_seguridad:number;
}

export default Articulo;