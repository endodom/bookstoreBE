<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(AuthorsTableSeeder::class);
        $this->call(OrdersTableSeeder::class);
        $this->call(BooksTableSeeder::class);
        $this->call(OrderlogsTableSeeder::class);
        $this->call(AddressesTableSeeder::class);

    }
}
