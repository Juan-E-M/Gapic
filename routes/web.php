<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AutosurveyController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('acceso'),
        'canRegister' => Route::has('registro'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/perfil', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/perfil', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/perfil', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    
    Route::get('/autoevaluacion', [AutosurveyController::class, 'autosurvey'])->name('autosurvey.index');
    Route::post('/autoevaluacion/guardar', [AutosurveyController::class, 'autosurvey_store'])->name('autosurvey.store');
    Route::get('/autoevaluacion/informacion/{user_id}', [AutosurveyController::class, 'autosurvey_information'])->name('autosurvey.information');


});

require __DIR__.'/auth.php';
