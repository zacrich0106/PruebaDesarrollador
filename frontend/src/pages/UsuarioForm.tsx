import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createUsuario, getUsuarioById, updateUsuario, Usuario } from "../services/usuarioService";

const UsuarioForm = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario>({ nombre: "", email: "" });

  useEffect(() => {
    if (id) {
      fetchUsuario(Number(id));
    }
  }, [id]);

  const fetchUsuario = async (userId: number) => {
    try {
      const data = await getUsuarioById(userId);
      setUsuario(data);
    } catch (error) {
      console.error("Error al obtener usuario:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updateUsuario(Number(id), usuario);
      } else {
        await createUsuario(usuario);
      }
      navigate("/usuarios");
    } catch (error) {
      console.error("Error al guardar usuario:", error);
    }
  };

  return (
    <div>
      <h1>{id ? "Editar Usuario" : "Crear Usuario"}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={usuario.nombre} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={usuario.email} onChange={handleChange} required />
        <button type="submit">{id ? "Actualizar" : "Guardar"}</button>
      </form>
    </div>
  );
};

export default UsuarioForm;