<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LibroController;
use App\Http\Controllers\api\PrestamoController;
use App\Http\Controllers\api\UsuarioController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::apiResource('libros', LibroController::class);

// Rutas para gestión de usuarios
Route::apiResource('usuarios', UsuarioController::class);

// Rutas para gestión de préstamos
Route::apiResource('prestamos', PrestamoController::class);