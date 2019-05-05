<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    protected $fillable = [
        'netAmount', 'grossAmount', 'status', 'addressId', 'user_id'
    ];

    public function books() : BelongsToMany {
        return $this->belongsToMany(Book::class)->withTimestamps();

    }

    public function orderLogs() : HasMany {
        return $this->hasMany(Orderlog::class);
    }

    public function user() : BelongsTo {
        return $this->belongsTo(User::class);
    }


}
