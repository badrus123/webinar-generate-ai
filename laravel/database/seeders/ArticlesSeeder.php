<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Articles;
class ArticlesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Articles::create([
            'title' => 'Sample Article',
            'content' => 'This is a sample article.',
            'slug' => 'sample-article',
            'created_at' => now(),
            'updated_at' => now(),
            'published_at' => now(),
        ]);
    }
}
