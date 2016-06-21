<?php

namespace Djjeck\Http\Controllers;

use Djjeck\Track;

class TracksController extends Controller
{
    public function getAll()
    {
        return Track::with('mix')->get();
    }

    public function getOne(Track $track)
    {
        return $track;
    }
}
