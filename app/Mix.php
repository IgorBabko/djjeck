<?php

namespace Djjeck;

use Illuminate\Database\Eloquent\Model;

class Mix extends Model
{
    public function tracks()
    {
        return $this->hasMany(Track::class);
    }
}
