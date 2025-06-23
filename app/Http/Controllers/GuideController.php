<?php

namespace App\Http\Controllers;

use App\Models\Guide;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class GuideController extends Controller
{
    public function show()
    {
        $guide = Cache::remember('guides', 60, function () {
            return Guide::latest()->first();
        });

        if (!$guide) {
            return Inertia::render('panduan-page', [
                'guide' => null,
            ]);
        }

        return Inertia::render('panduan-page', [
            'guide' => [
                'file_path' => '/storage/' . $guide->file_path, 
                'title' => $guide->title,
                'description' => $guide->description,
            ]
        ]);
    }
}
