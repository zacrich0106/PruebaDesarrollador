import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/usuarios";

export interface Usuario {
  id?: number;
  nombre: string;
  email: string;
  password?: string;
  created_at?: string;
  updated_at?: string;
}

// Obtener todos los usuarios
export const getUsuarios = async (): Promise<Usuario[]> => {
  const response = await axios.get<Usuario[]>(API_URL);
  return response.data;
};

// Obtener un usuario por ID
export const getUsuarioById = async (id: number): Promise<Usuario> => {
  const response = await axios.get<Usuario>(`${API_URL}/${id}`);
  return response.data;
};

// Crear un usuario
export const createUsuario = async (usuario: Usuario): Promise<Usuario> => {
  const response = await axios.post<Usuario>(API_URL, usuario);
  return response.data;
};

// Actualizar un usuario
export const updateUsuario = async (id: number, usuario: Usuario): Promise<Usuario> => {
  const response = await axios.put<Usuario>(`${API_URL}/${id}`, usuario);
  return response.data;
};

// Eliminar un usuario
export const deleteUsuario = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};