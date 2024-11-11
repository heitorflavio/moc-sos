<?php

use App\Models\Category;
use App\Models\User;

test('store', function () {
    $user = User::factory()->create();


    $response = $this->actingAs($user)->post(route('categories.store'), [
        'name' => 'Category Name',
        'description' => 'Category Description',
    ]);

    $response->assertStatus(302);

    $this->assertDatabaseHas('categories', [
        'name' => 'Category Name',
        'description' => 'Category Description',
    ]);
});


test('update', function () {
    $user = User::factory()->create();
    $category = Category::factory()->create();

    $response = $this->actingAs($user)->put(route('categories.update', $category), [
        'name' => 'Category Name Updated',
        'description' => 'Category Description Updated',
    ]);

    $response->assertStatus(302);

    $this->assertDatabaseHas('categories', [
        'name' => 'Category Name Updated',
        'description' => 'Category Description Updated',
    ]);
});
