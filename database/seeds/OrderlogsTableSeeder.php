<?php

use Illuminate\Database\Seeder;

class OrderlogsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $logEntry1 = new \App\Orderlog();
        $logEntry1->note = "";
        $logEntry1->adminNote = "Bestellung derzeit bei der Anmeldung für Logistikpartner";
        $logEntry1->status = 1;
        $order1 = \App\Order::where('id', 1)->pluck("id");
        $logEntry1->order()->associate($order1->first());
        $logEntry1->save();

    }
}
