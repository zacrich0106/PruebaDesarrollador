import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/libros"; // Ajusta la URL según tu backend

export interface Libro {
  id?: number;
  titulo: string;
  autor: string;
  genero: string;
  disponibilidad: string;
}

// Obtener todos los libros
export const getLibros = async () => {
  const response = await axios.get<Libro[]>(API_URL);
  return response.data;
};

// Obtener un libro por ID
export const getLibroById = async (id: number) => {
  const response = await axios.get<Libro>(`${API_URL}/${id}`);
  return response.data;
};

// Crear un nuevo libro
export const createLibro = async (libro: Libro) => {
  console.log()
  return await axios.post(API_URL, libro);
};

// Actualizar un libro existente
export const updateLibro = async (id: number, libro: Libro) => {
  return await axios.put(`${API_URL}/${id}`, libro);
};

// Eliminar un libro
export const deleteLibro = async (id: number) => {
  return await axios.delete(`${API_URL}/${id}`);
};