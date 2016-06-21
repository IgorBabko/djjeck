<?php

namespace Djjeck\Http\Controllers;

use Djjeck\Mix;

class MixesController extends Controller
{
    public function getAll()
    {
        return Mix::with('tracks')->get();
    }

    public function getOne($id)
    {
        return Mix::with('tracks')->first();
    }
}
