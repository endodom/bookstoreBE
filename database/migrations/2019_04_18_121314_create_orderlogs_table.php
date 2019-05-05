<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderlogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orderlogs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('note');     //if there a troubles with the delivery or the order, the admin can type it here -->relevant for customer
            $table->string('adminNote')->nu;
            $table->integer('status');
            $table->timestamps();

            $table->integer('order_id')->unsigned();
            $table->foreign('order_id')
                ->references('id')->on('orders')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orderlogs');
    }
}
