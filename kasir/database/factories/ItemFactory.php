<?php

namespace Database\Factories;
use App\Models\Item;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str; 

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'title' => fake()->word(),
            'content' => fake()->sentence(10),
            'stok' => Str::random(10),
            'harga' => fake()->word(),
        ];
    }
}
