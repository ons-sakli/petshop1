<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', // You can keep this if you want to store custom filenames
        'path',
        'product_id',
    ];

    // Remove the 'boot' method and its contents (if it exists)
}
