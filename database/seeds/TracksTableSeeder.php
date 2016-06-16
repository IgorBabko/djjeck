<?php

use Illuminate\Database\Seeder;
use Djjack\Track;

class TracksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Mix::truncate();
        factory(Track::class, 20)->create();
    }
}
