import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createLibro, getLibroById, updateLibro, Libro } from "../services/libroService";
import { Button, TextField, Typography/*, FormControlLabel, Checkbox */} from "@mui/material";

const LibroForm = () => {
  const [libro, setLibro] = useState<Libro>({ titulo: "", autor: "", genero: "", disponibilidad:" " });
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      cargarLibro(parseInt(id));
    }
  }, [id]);

  const cargarLibro = async (id: number) => {
    const data = await getLibroById(id);
    setLibro(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLibro({ ...libro, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      console.log(libro);
      await updateLibro(parseInt(id), libro);

    } else {
      console.log(libro);
      await createLibro(libro);
    }
    navigate("/");
  };

  return (
    <div>
      <Typography variant="h4">{id ? "Editar Libro" : "Nuevo Libro"}</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Título" name="titulo" value={libro.titulo} onChange={handleChange} fullWidth required />
        <TextField label="Autor" name="autor" value={libro.autor} onChange={handleChange} fullWidth required />
        <TextField label="Género" name="genero" value={libro.genero} onChange={handleChange} fullWidth required />
        <TextField label="Cantidad" name="disponibilidad" value={libro.disponibilidad} onChange={handleChange} fullWidth required />
        
        <Button type="submit" variant="contained" color="primary">
          Guardar
        </Button>
      </form>
    </div>
  );
};

export default LibroForm;