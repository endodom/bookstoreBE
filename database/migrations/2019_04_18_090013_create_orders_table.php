<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->decimal('grossAmount');
            $table->decimal('netAmount');
            $table->integer('status');
            $table->integer('addressId');
            $table->timestamps();

            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade');

        });
    }

    /*
     *
     * App\User::join('users', 'orders.id', '=', 'book_order.order_id')->join('books', 'book_order.book_id', '=',
     * 'books.id')->select('orders.id', 'books.title')->where('orders.id', '=', '1')->get();
     *
     * App\Order::join('book_order', 'orders.id', '=', 'book_order.order_id')->join('books', 'book_order.book_id', '=',
     * 'books.id')->select('orders.id', 'books.title')->where('orders.id', '=', '1')->get();
     */

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
