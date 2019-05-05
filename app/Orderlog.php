<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Orderlog extends Model
{
    protected $fillable = [
        'note', 'adminNote', 'status', 'order_id'
    ];

    public function order() : BelongsTo  {
        return $this->belongsTo(Order::class);
    }

}
