<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Articles extends Model
{
    //
    protected $table = 'articles';
    protected $fillable = [
        'title',
        'content',
        'slug',
        'created_at',
        'updated_at',
        'published_at',
    ];
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'published_at' => 'datetime',
    ];
}
