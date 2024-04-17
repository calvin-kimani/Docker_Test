<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'uuid',
        'author',
        'isbn',
        'publisher',
        'publication_year',
        'genre',
        'language',
        'pages',
        'description',
        'price',
        'quantity',
        'availability',
        'cover_image',
    ];
}
