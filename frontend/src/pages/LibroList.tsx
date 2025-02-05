import { useEffect, useState } from "react";
import { getLibros, deleteLibro, Libro } from "../services/libroService";
import { Link } from "react-router-dom";
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

const LibroList = () => {
  const [libros, setLibros] = useState<Libro[]>([]);

  useEffect(() => {
    cargarLibros();
  }, []);

  const cargarLibros = async () => {
    const data = await getLibros();
    setLibros(data);
  };

  const eliminarLibro = async (id: number) => {
    if (window.confirm("¿Estás seguro de eliminar este libro?")) {
      await deleteLibro(id);
      cargarLibros();
    }
  };

  return (
    <div>
      <Typography variant="h4">Lista de Libros</Typography>
      <Button variant="contained" color="primary" component={Link} to="/libro/nuevo">
        Agregar Libro
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Título</TableCell>
            <TableCell>Autor</TableCell>
            <TableCell>Género</TableCell>
            <TableCell>Disponibilidad</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {libros.map((libro) => (
            <TableRow key={libro.id}>
              <TableCell>{libro.id}</TableCell>
              <TableCell>{libro.titulo}</TableCell>
              <TableCell>{libro.autor}</TableCell>
              <TableCell>{libro.genero}</TableCell>
              <TableCell>{libro.disponibilidad}</TableCell>
              <TableCell>
                <Button color="primary" component={Link} to={`/libro/editar/${libro.id}`}>
                  Editar
                </Button>
                <Button color="secondary" onClick={() => eliminarLibro(libro.id!)}>
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default LibroList;