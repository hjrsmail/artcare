<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Information;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function show()
    {
        $comments = Cache::remember('home_comments', 60, function () {
            return Comment::where('status', 'show')
                ->select(['id', 'username', 'comment', 'school_origin'])
                ->latest()
                ->take(6)
                ->get();
        });

        $informations = Cache::remember('home_infos', 60, function () {
            return Information::select(['id', 'title', 'image'])
                ->latest()
                ->take(3)
                ->get();
        });

        return Inertia::render('welcome', [
            'comments' => $comments,
            'informations' => $informations,
        ]);
    }
}
