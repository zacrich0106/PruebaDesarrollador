<?php

namespace App\Http\Controllers;

use App\Models\Libro; // Asegúrate de tener el modelo Libro
use Illuminate\Http\Request;

class LibroController extends Controller
{
    // Método para obtener todos los libros
    public function index()
    {
        $libros = Libro::all();
        return response()->json($libros);
    }
    // Método para crear un nuevo libro
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|string|max:255',
            'autor' => 'required|string|max:255',
            'genero' => 'required|string|max:255',
            'disponibilidad' => 'required|string|max:255',
        ]);

        $libro = Libro::create($request->all());

        return response()->json($libro, 201);
    }

    
   

    // Método para obtener un libro específico
    public function show($id)
    {
        $libro = Libro::find($id);

        if (!$libro) {
            return response()->json(['message' => 'Libro no encontrado'], 404);
        }

        return response()->json($libro);
    }

    // Método para actualizar un libro
    public function update(Request $request, $id)
    {
        $libro = Libro::find($id);

        if (!$libro) {
            return response()->json(['message' => 'Libro no encontrado'], 404);
        }

        $request->validate([
            'titulo' => 'string|max:255',
            'autor' => 'string|max:255',
            'genero' => 'string|max:255',
            'disponibilidad' => 'string|max:255',
        ]);

        $libro->update($request->all());

        return response()->json($libro);
    }

    // Método para eliminar un libro
    public function destroy($id)
    {
        $libro = Libro::find($id);

        if (!$libro) {
            return response()->json(['message' => 'Libro no encontrado'], 404);
        }

        $libro->delete();

        return response()->json(['message' => 'Libro eliminado correctamente']);
    }
}
