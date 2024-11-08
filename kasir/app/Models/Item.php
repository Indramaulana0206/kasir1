<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Item extends Model
{
    use HasFactory;

    protected $guarded = [];
    // /**
    //  * fillable
    //  * 
    //  * @var array
    //  */
    // protected $fillable = [
    //     'title',
    //     'content',
    //     'stok',
    //     'harga',
    // ];
    
}
