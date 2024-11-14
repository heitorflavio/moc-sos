<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Actions\Api\CepAction;
use App\Actions\Api\LocaleAction;
use App\Models\Item;
use Inertia\Inertia;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Items/Index', [
            'items' => Item::with('category')->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(
            'Items/Create',
            ['categories' => \App\Models\Category::all()]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreItemRequest $request)
    {
        try {
            $cep = new CepAction();
            $cep = $cep($request->zip_code);

            $locale = new LocaleAction();
            $locale = $locale($cep, $request->number);
            $request->validated();
        } catch (\Exception $e) {
            return back()->with('error', 'Invalid zip code.');
        }

        $item = Item::create($request->validated());
        $item->update([
            'latitude' => $locale['lat'],
            'longitude' => $locale['lng'],
            'city' => $cep['localidade'],
            'state' => $cep['estado'],
            'address' => $cep['logradouro'],
            'number' => $request->number,
            'neighborhood' => $cep['bairro'],
        ]);

        return back()->with('success', 'Item created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Item $item)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Item $item)
    {
        return Inertia::render('Items/Edit', [
            'item' => $item,
            'categories' => \App\Models\Category::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateItemRequest $request, Item $item)
    {
        try {
            $cep = new CepAction();
            $cep = $cep($request->zip_code);

            $locale = new LocaleAction();
            $locale = $locale($cep, $request->number);
            $request->validated();
        } catch (\Exception $e) {
            return back()->with('error', 'Invalid zip code.');
        }

        $item->update($request->validated());
        $item->update([
            'latitude' => $locale['lat'],
            'longitude' => $locale['lng'],
            'city' => $cep['localidade'],
            'state' => $cep['estado'],
            'address' => $cep['logradouro'],
            'number' => $request->number,
            'neighborhood' => $cep['bairro'],
        ]);

        return back()->with('success', 'Item updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item)
    {
        //
    }
}
