<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Prestamo;
use Illuminate\Http\Request;

class PrestamoController extends Controller
{
    // Listar todos los préstamos
    public function index()
    {
        return response()->json(Prestamo::all(), 200);
    }

    // Crear un nuevo préstamo
    public function store(Request $request)
{
    $request->validate([
        'usuario_id' => 'required|exists:usuarios,id',
        'libro_id' => 'required|exists:libros,id',
        'fecha_prestamo' => 'required|date',
        'fecha_devolucion' => 'required|date|after:fecha_prestamo',
    ]);

    $prestamo = Prestamo::create($request->all());

    return response()->json($prestamo, 201);
}

    // Mostrar detalles de un préstamo
    public function show($id)
    {
        $prestamo = Prestamo::find($id);
        if (!$prestamo) {
            return response()->json(['message' => 'Préstamo no encontrado'], 404);
        }
        return response()->json($prestamo, 200);
    }

    // Actualizar información de un préstamo (ejemplo: fecha de devolución)
    public function update(Request $request, $id)
    {
        $prestamo = Prestamo::find($id);
        if (!$prestamo) {
            return response()->json(['message' => 'Préstamo no encontrado'], 404);
        }

        $request->validate([
            'fecha_devolucion' => 'date|after:fecha_prestamo',
        ]);

        $prestamo->update($request->all());
        return response()->json($prestamo, 200);
    }

    // Eliminar un préstamo
    public function destroy($id)
    {
        $prestamo = Prestamo::find($id);
        if (!$prestamo) {
            return response()->json(['message' => 'Préstamo no encontrado'], 404);
        }

        $prestamo->delete();
        return response()->json(['message' => 'Préstamo eliminado correctamente'], 200);
    }
}