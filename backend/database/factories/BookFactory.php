<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'uuid' => fake()->uuid(),
            'author' => fake()->name(),
            'isbn' => fake()->isbn13(),
            'publisher' => fake()->company(),
            'publication_year' => fake()->numberBetween(1900, 2022),
            'genre' => fake()->word(),
            'language' => fake()->languageCode(),
            'pages' => fake()->numberBetween(50, 1000),
            'description' => fake()->paragraph(),
            'price' => fake()->randomFloat(2, 5, 100),
            'quantity' => fake()->numberBetween(0, 100),
            'availability' => fake()->boolean(),
            'cover_image' => fake()->imageUrl(),
        ];
    }
}
