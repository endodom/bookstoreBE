<?php

use Illuminate\Database\Seeder;

class AuthorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $a1 = new \App\Author();
        $a1-> firstName = "Max";
        $a1-> lastName = "Maier";
        $a1->save();

        $a2 = new \App\Author();
        $a2-> firstName = "Jakob";
        $a2-> lastName = "Bachinie";
        $a2->save();

        $a3 = new \App\Author();
        $a3-> firstName = "Benjamin";
        $a3-> lastName = "Gusenbauer";
        $a3->save();
    }
}
