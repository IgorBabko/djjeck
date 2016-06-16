<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(Djjeck\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
    ];
});

$factory->define(Djjeck\Mix::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->paragraph,
        'cover' => $faker->imageUrl($width = 1024, $height = 768),
        'url' => 'https://s3.eu-central-1.amazonaws.com/djjeck/DJ+JECK+-+Fresh+Sound+2015.mp3',
    ];
});

$factory->define(Djjeck\Track::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->paragraph,
        'cover' => $faker->imageUrl($width = 1024, $height = 768),
        'url' => 'https://s3.eu-central-1.amazonaws.com/djjeck/DJ+JECK+-+Happy+Christmas+2016.mp3',
    ];
});
