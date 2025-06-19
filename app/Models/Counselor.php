<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Counselor extends Model
{
    protected $fillable = [
        'name',
        'img',
        'no_whatsapp',
    ];
}
