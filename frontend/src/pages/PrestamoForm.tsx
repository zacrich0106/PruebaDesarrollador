import { useState } from "react";
import { createPrestamo, Prestamo } from "../services/prestamoService";

const PrestamoForm = () => {
  const [prestamo, setPrestamo] = useState<Prestamo>({
    usuario_id: 0,
    libro_id: 0,
    fecha_prestamo: "",
    fecha_devolucion: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPrestamo((prev) => ({
      ...prev,
      [name]: name === "usuario_id" || name === "libro_id" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPrestamo(prestamo);
    setPrestamo({ usuario_id: 0, libro_id: 0, fecha_prestamo: "", fecha_devolucion: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="usuario_id" type="number" value={prestamo.usuario_id} onChange={handleChange} placeholder="Usuario ID" />
      <input name="libro_id" type="number" value={prestamo.libro_id} onChange={handleChange} placeholder="Libro ID" />
      <input type="date" name="fecha_prestamo" value={prestamo.fecha_prestamo} onChange={handleChange} />
      <input type="date" name="fecha_devolucion" value={prestamo.fecha_devolucion} onChange={handleChange} />
      <button type="submit">Registrar Préstamo</button>
    </form>
  );
};

export default PrestamoForm;