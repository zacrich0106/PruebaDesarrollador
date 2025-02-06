import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/prestamos";

export interface Prestamo {
  id?: number;
  usuario_id: number;
  libro_id: number;
  fecha_prestamo: string;
  fecha_devolucion: string;
}

export const createPrestamo = async (prestamo: Prestamo) => {
  try {
    const response = await axios.post(API_URL, prestamo, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear préstamo:", error);
  }
};