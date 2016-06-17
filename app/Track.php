<?php

namespace Djjeck;

use Illuminate\Database\Eloquent\Model;

class Track extends Model
{
    public function mix()
    {
        return $this->belongsTo(Mix::class);
    }
}
