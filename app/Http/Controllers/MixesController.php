<?php

namespace Djjeck\Http\Controllers;

use Illuminate\Http\Request;
use Djjeck\Http\Requests;
use Djjeck\Mix;

class MixesController extends Controller
{
    public function getAll()
    {
        return Mix::all();
    }

    public function getOne(Mix $mix)
    {
        return $mix;
    }
}
