import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/prestamos";

export interface Prestamo {
  id?: number;
  usuario_id: number;
  libro_id: number;
  fecha_prestamo: string;
  fecha_devolucion: string;
  created_at?: string;
  updated_at?: string;
}

// Obtener todos los préstamos
export const getPrestamos = async (): Promise<Prestamo[]> => {
  const response = await axios.get<Prestamo[]>(API_URL);
  return response.data;
};

// Obtener un préstamo por ID
export const getPrestamoById = async (id: number): Promise<Prestamo> => {
  const response = await axios.get<Prestamo>(`${API_URL}/${id}`);
  return response.data;
};

// Crear un préstamo
export const createPrestamo = async (prestamo: Prestamo): Promise<Prestamo> => {
  const response = await axios.post<Prestamo>(API_URL, prestamo);
  return response.data;
};

// Actualizar un préstamo
export const updatePrestamo = async (id: number, prestamo: Prestamo): Promise<Prestamo> => {
  const response = await axios.put<Prestamo>(`${API_URL}/${id}`, prestamo);
  return response.data;
};

// Eliminar un préstamo
export const deletePrestamo = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};