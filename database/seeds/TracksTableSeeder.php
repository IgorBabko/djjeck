<?php

use Illuminate\Database\Seeder;
use Djjeck\Track;

class TracksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Track::truncate();
        factory(Track::class, 20)->create();
    }
}
