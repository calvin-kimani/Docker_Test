<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/books', [BookController::class, 'index'])->name('books.index');
Route::post('/books/create', [BookController::class, 'create'])->name('books.create');
Route::get('/books/{bookUUID}', [BookController::class, 'show'])->name('books.show');
Route::post('/books/search', [BookController::class, 'search'])->name('books.search');