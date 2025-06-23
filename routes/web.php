<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CounselorController;
use App\Http\Controllers\GuideController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MaterialController;
use App\Models\Counselor;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

// Route yang make controller
Route::get('/', [HomeController::class, 'show' ])->name('home');
Route::post('/ulasan', [CommentController::class, 'store']);
Route::get('/panduan', [GuideController::class, 'show']);
Route::get('/konselor', [CounselorController::class, 'show']);
Route::get('/aktivitas', [ActivityController::class, 'show']);
Route::get('/materi', [MaterialController::class, 'show']);

// Assesment Route
Route::get('/assesment-awal', function () {
    return Inertia::render('assesment/assesment-awal');
});
Route::get('/assesment-akhir', function () {
    return Inertia::render('assesment/assesment-akhir');
});

