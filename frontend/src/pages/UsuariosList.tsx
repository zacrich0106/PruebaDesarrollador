import { useEffect, useState } from "react";
import { getUsuarios, deleteUsuario, Usuario } from "../services/usuarioService";
import { Link } from "react-router-dom";

const UsuariosList = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const data = await getUsuarios();
      setUsuarios(data);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  const handleDelete = async (id: number) => {
    await deleteUsuario(id);
    fetchUsuarios();
  };

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <Link to="/usuarios/create">➕ Crear Usuario</Link>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nombre} - {usuario.email}
            <Link to={`/usuarios/edit/${usuario.id}`}>✏️</Link>
            <button onClick={() => handleDelete(usuario.id!)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsuariosList;
