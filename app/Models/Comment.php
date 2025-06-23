<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use SoftDeletes;

    protected $guarded = ['id'];

    protected static function booted()
{
    static::creating(function ($comment) {
        $showCount = self::where('status', 'show')->count();

        // Kalau belum ada 6 komentar yang tampil, auto set 'show'
        if ($showCount < 6) {
            $comment->status = 'show';
        } else {
            $comment->status = 'hide';
        }
    });
}

}
