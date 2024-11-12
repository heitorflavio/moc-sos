<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MapController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\DashboardController;


Route::get('/', MapController::class)->name('map');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::resource('categories', CategoryController::class);
    Route::resource('items', ItemController::class);
});
