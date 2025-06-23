<?php

namespace App\Http\Controllers;

use App\Models\Material;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class MaterialController extends Controller
{
    public function show()
    {
        $materials = Cache::remember('materials', 60, function () {
            return Material::select([ 'title', 'description', 'img'])->get();
        });

        return Inertia::render('materi-page', [
            'material' => $materials
            
        ]);
        
    }
}
