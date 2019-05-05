<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User;
        $user->name = 'testuser';
        $user->email = 'test@gmail.com';
        $user->password = bcrypt('secret');
        $user->firstname = 'Hugo';
        $user->lastname = 'Frontend';
        $user->role = '1'; //1 = FrontendUser, 0 = BackendUser
        $user->save();

        $user1 = new User;
        $user1->name = 'testadmin';
        $user1->email = 'testadmin@gmail.com';
        $user1->password = bcrypt('secret');
        $user1->firstname = 'Georg';
        $user1->lastname = 'Backend';
        $user1->role = '0'; //1 = FrontendUser, 0 = BackendUser
        $user1->save();

    }
}