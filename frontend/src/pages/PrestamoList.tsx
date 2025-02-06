import { useEffect, useState } from "react";
import { createPrestamo, Prestamo } from "../services/prestamoService";
import { useNavigate } from "react-router-dom";

const PrestamosList = () => {
  const [prestamos, setPrestamos] = useState<Prestamo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPrestamos();
      setPrestamos(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Lista de Préstamos</h1>
        <button
          onClick={() => navigate("/prestamos/nuevo")}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
        >
          + Nuevo Préstamo
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Usuario</th>
              <th className="py-2 px-4 text-left">Libro</th>
              <th className="py-2 px-4 text-left">Fecha Préstamo</th>
              <th className="py-2 px-4 text-left">Fecha Devolución</th>
              <th className="py-2 px-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {prestamos.length > 0 ? (
              prestamos.map((prestamo) => (
                <tr key={prestamo.id} className="border-b hover:bg-gray-100">
                  <td className="py-2 px-4">{prestamo.id}</td>
                  <td className="py-2 px-4">{prestamo.usuario_id}</td>
                  <td className="py-2 px-4">{prestamo.libro_id}</td>
                  <td className="py-2 px-4">{new Date(prestamo.fecha_prestamo).toLocaleDateString()}</td>
                  <td className="py-2 px-4">{new Date(prestamo.fecha_devolucion).toLocaleDateString()}</td>
                  <td className="py-2 px-4 text-center">
                    <button
                      onClick={() => navigate(`/prestamos/editar/${prestamo.id}`)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition-all"
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-4 text-center text-gray-500">
                  No hay préstamos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrestamosList;
