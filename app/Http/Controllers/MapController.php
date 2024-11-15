<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Item;
use App\Models\Category;

class MapController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $items = Item::when($request->category, function ($query, $category) {
            return $query->where('category_id', $category);
        })->when($request->search, function ($query, $search) {
            return $query->where('name', 'like', '%' . $search . '%');
        })->get();

        return Inertia::render('Map', [
            'items' => $items,
            'categories' => Category::all(),
            'selectedCategory' => $request->category,
            'selectedSearch' => $request->search,
        ]);
    }
}
