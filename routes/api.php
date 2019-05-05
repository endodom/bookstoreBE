<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['api', 'cors']], function() {
    //hier sind die Rest
    //Calls welche KEINEN Login benötigen

    //TODO: get den Buchpreis, Buchtitel,

    Route::post('auth/login', 'Auth\ApiAuthController@login');

    Route::get('books', 'BookController@index');
    Route::get('book/{isbn}', 'BookController@findByISBN');
    Route::get('book/checkisbn/{isbn}', 'BookController@checkISBN');
    Route::get('books/search/{searchTerm}', 'BookController@findBySearchTerm');

});


// methods with auth
Route::group(['middleware' => ['api', 'cors', 'jwt-auth']], function() {
    //hier sind die Rest
    //Calls welche einen Login benötigen

    //execute an Order
    Route::post('order', 'OrderController@addOrder');

    //update an Order
    Route::put ('update/{orderId}', 'OrderController@updateStatus');

    //deliver the Status for an Order --> needed for Frontend-Check
    Route::get('order/getStatus/{orderid}','OrderController@getStatus');

    //show all orders for BE User
    Route::get('orders', 'OrderController@index');

    //filter for order with state
    Route::get('orders/by/{status}', 'OrderController@findByStatus');

    //filter for order with username
    Route::get('orders/findbyuser/{userId}', 'OrderController@findByUser');

    //gets all Orderlogs from one order
    Route::get('orders/{order_id}', 'OrderController@getOrderlog');

    //get all books from a specific order by the orderid
    Route::get('orders/findbooksbyorder/{orderId}', 'OrderController@findBooksByOrder');

    //get ordered list of orders, DESC
    Route::get('orders/sortd','OrderController@sortByDesc');

    //get ordered list of orders, ASC
    Route::get('orders/sorta','OrderController@sortByAsc');

    //creates new address and links it to the user
    Route::post('admin/address','OrderController@createAddress');

    //get all addresses from User
    Route::get('admin/address/{userId}','OrderController@getAddresses');

    Route::get('admin/mainaddress/{userId}','OrderController@getMainAddressfromUser');

    //update Address
    Route::put('admin/address/update/{addressId}','OrderController@updateAddress');

    //delete Address
    Route::delete('admin/address/update/{addressId}','OrderController@deleteAddress');

// update book
    Route::put('book/{isbn}', 'BookController@update');
// delete book
    Route::delete('book/{isbn}', 'BookController@delete');


// insert book
    Route::post('book', 'BookController@save');

    Route::post('auth/logout', 'Auth\ApiAuthController@logout');

    Route::get('auth/user', 'Auth\ApiAuthController@getCurrentAuthenticatedUser');

});

