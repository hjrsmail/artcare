<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\GuideController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [CommentController::class, 'index'])->name('home');

Route::post('/ulasan', [CommentController::class, 'store']);

Route::get('/panduan', [GuideController::class, 'show']);

Route::get('/assesment-awal', function () {
    return Inertia::render('assesment/assesment-awal');
});
Route::get('/assesment-akhir', function () {
    return Inertia::render('assesment/assesment-akhir');
});
Route::get('/materi', function () {
    return Inertia::render('materi-page');
});


