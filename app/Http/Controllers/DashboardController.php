<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $categories = Item::with('category')
            ->selectRaw('category_id, count(*) as count')
            ->groupBy('category_id')
            ->get();

        $categoryNames = $categories->map(function ($item) {
            return $item->category->name;
        });

        $categoryCounts = $categories->map(function ($item) {
            return $item->count;
        });

        return Inertia::render('Dashboard', [
            'categoryNames' => $categoryNames,
            'categoryCounts' => $categoryCounts,
        ]);
    }
}
