<?php

namespace App\Http\Controllers;

use App\Models\Counselor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CounselorController extends Controller
{
     public function show()
    {
        $counselors = Counselor::get(['name', 'no_whatsapp']);

        return Inertia::render('konselor-page', [
            'counselors' => $counselors
            
        ]);
        
    }
}
