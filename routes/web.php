<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Stevebauman\Location\Facades\Location;

// use Inertia\Inertia;

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MapController;
use App\Http\Controllers\ItemController;


Route::get('/', MapController::class)->name('map');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    // Route::get('/dashboard', function () {
    //     return Inertia::render('Dashboard');
    // })->name('dashboard');

    Route::resource('categories', CategoryController::class);
    Route::resource('items', ItemController::class);
});
