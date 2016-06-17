<?php

namespace Djjeck\Http\Controllers;

use Illuminate\Http\Request;
use Djjeck\Http\Requests;
use Djjeck\Track;

class TracksController extends Controller
{
    public function getAll()
    {
        return Track::all();
    }

    public function getOne(Track $track)
    {
        return $track;
    }
}
