<?php

use Illuminate\Database\Seeder;
use App\Address;

class AddressesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = App\User::all()->first();

        $address1 = new \App\Address();
        $address1->street = 'teststraße 4';
        $address1->postcode = 99999;
        $address1->city = 'Köln';
        $address1->country = 'Deutschland';
        $address1->taxPercentage = 0.07;
        $address1->isMain = false;
        $address1->user()->associate($user);
        $address1->save();

        $user2 = App\User::where('id', 2)->first();

        $address2 = new \App\Address();
        $address2->street = 'Grazer Straße 10';
        $address2->postcode = 4020;
        $address2->city = 'Linz';
        $address2->country = 'Österreich';
        $address2->taxPercentage = 0.10;
        $address2->isMain = false;
        $address2->user()->associate($user2);
        $address2->save();


    }




}
