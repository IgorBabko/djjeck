<?php

use Illuminate\Database\Seeder;
use Djjack\Mix;

class MixesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Mix::truncate();
        factory(Mix::class, 20)->create();
    }
}
