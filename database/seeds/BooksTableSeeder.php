<?php

use Illuminate\Database\Seeder;
use App\Book;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = App\User::all()->first();

        $book = new Book;
        $book->title= 'Harry Potter';
        $book->subtitle= 'Und ein Stein';
        $book->isbn= '1234561235';
        $book->rating='10';
        $book->description='Cool';
        $book->published= new DateTime();
        $book->price= 49.99;
        //map existing user to book
        $book->user()->associate($user);
        $book->save();

        $authors = App\Author::all()->pluck("id"); //man holt sich nur die Author "IDs"
        $book->authors()->sync($authors);
        $orders = \App\Order::all()->pluck('id');
        $book->orders()->sync($orders);
        $book->save();

        $book2 = new Book;
        $book2->title= 'Herr der Ringe';
        $book2->subtitle= 'Die Gefährten';
        $book2->isbn= '1234561236';
        $book2->rating='9';
        $book2->description='Cooler';
        $book2->published= new DateTime();
        $book2->price= 39.99;
        $book2->user()->associate($user);
        $book2->save();

        $image1 = new App\Image();
        $image1->title = "Cover 1";
        $image1->url = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/27/11/pile-of-books.jpg?w968";
        $image1->book()->associate($book);
        $image1->save();

        $image2 = new App\Image();
        $image2->title = "Cover 2";
        $image2->url = "https://ericasuter.com/wp-content/uploads/2015/04/books.png";
        $image2->book()->associate($book);
        $image2->save();

    }
}