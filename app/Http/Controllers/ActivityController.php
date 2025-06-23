<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Material;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ActivityController extends Controller
{
    public function show()
    {
        $activities = Activity::get(['title', 'description', 'image', 'link']);

        return Inertia::render('aktivitas-page', [
            'activities' => $activities
            
        ]);
        
    }
}
