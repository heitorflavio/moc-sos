<?php

use App\Models\User;
use App\Models\Category;
use App\Models\Item;

test('store', function () {
    $user = User::factory()->create();
    $category = Category::factory()->create();

    $response = $this->actingAs($user)->post(route('items.store'), [
        'name' => 'Item Name',
        'description' => 'Item Description',
        'category_id' => $category->id,
        'zip_code' => '12345',
        'latitude' => '1.234567',
        'longitude' => '1.234567',
    ]);

    $response->assertStatus(302);

    $this->assertDatabaseHas('items', [
        'name' => 'Item Name',
        'description' => 'Item Description',
        'category_id' => $category->id,
        'zip_code' => '12345',
        'latitude' => '1.234567',
        'longitude' => '1.234567',
    ]);
});

test('update', function () {
    $user = User::factory()->create();
    $category = Category::factory()->create();
    $item = Item::factory()->create();

    $response = $this->actingAs($user)->put(route('items.update', $item), [
        'name' => 'Updated Item Name',
        'description' => 'Updated Item Description',
        'category_id' => $category->id,
        'zip_code' => '54321',
        'latitude' => '7.654321',
        'longitude' => '7.654321',
    ]);

    $response->assertStatus(302);

    $this->assertDatabaseHas('items', [
        'name' => 'Updated Item Name',
        'description' => 'Updated Item Description',
        'category_id' => $category->id,
        'zip_code' => '54321',
        'latitude' => '7.654321',
        'longitude' => '7.654321',
    ]);
});
