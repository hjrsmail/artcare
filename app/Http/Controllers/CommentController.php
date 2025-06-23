<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommentController extends Controller
{

    public function store(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|string',
            'school_origin' => 'required|string',
            'comment' => 'required|string',
        ]);

        try {
    
        Comment::create($validated);
            return redirect()->back()->with('success', 'Ulasan berhasil dikirim!');
            } catch (\Exception $e) {
                dd($e->getMessage());
            }

    }

}
