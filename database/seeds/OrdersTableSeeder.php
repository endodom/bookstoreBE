<?php

use Illuminate\Database\Seeder;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = App\User::all()->first();

        $order1 = new \App\Order();
        $order1->grossAmount = 49.99;
        $order1->netAmount = 39.99;
        $order1->status = 0;
        $order1->addressId = 1;
        $order1->user()->associate($user)->pluck('id');

        $order1->save();


    }
}
