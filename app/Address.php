<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\User;

class Address extends Model
{
    protected $fillable = [
        'street', 'postcode', 'city', 'country', 'taxPercentage', 'user_id', 'isMain'
    ];

    public function user() : BelongsTo  {
        return $this->belongsTo(User::class);
    }
}
