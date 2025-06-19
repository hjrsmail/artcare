<?php

namespace App\Http\Controllers;

use App\Models\Guide;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuideController extends Controller
{
    public function show()
{
    $guide = Guide::latest()->first(); 

    return Inertia::render('guide', [
        // 'guide' => [
        //     'file_path' => asset($guide->file_path),
        //     'title' => $guide->title,
        // ]
    ]);
}
}
