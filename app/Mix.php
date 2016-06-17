<?php

namespace Djjeck;

use Illuminate\Database\Eloquent\Model;
use Track;

class Mix extends Model
{
    public function tracks()
    {
        return $this->hasMany(Track::class);
    }
}
