<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index() 
    {
        return response()->json([
            'data' => Item::latest()->get(),
            'message' => 'List Item',
        ]);
    }
}
