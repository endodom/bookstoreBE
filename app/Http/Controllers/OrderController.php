<?php

namespace App\Http\Controllers;

use App\Address;
use App\Order;
use App\Orderlog;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

use App\Book;
use App\Image;
use App\Author;
use Psy\Util\Json;

class OrderController extends Controller
{
    public function addOrder (Request $request) : JsonResponse{

        $request = $this->parseRequest($request);
        DB::beginTransaction();

        try {

            //only frontendUser can execute an Order
            $role = DB::table('users')->where('id', $request['user_id'])->value('role');
            if ($role === 1) {

                $order = Order::create(
                    ['grossAmount' => 0,
                        'netAmount' => 0,
                        'status' => '0',
                        'addressId' => $request['addressId'],
                        'user_id' => $request['user_id']
                    ]
                );
                $netAmount = 0;

                if ($request['books'] && is_array($request['books'])) {
                    foreach ($request['books'] as $b) {
                        $order->books()->attach($b['id'], ['bookPrice' => $b['price'], 'bookCount' => $b['amount'],
                            'bookTitle' => $b['title']]);

                        $netAmount += $b['price'];
                    }
                }
                //sum the netAmount of all products
                $order['netAmount'] = $netAmount;

                //multiply the address driven tax with the netAmount
                $tax = DB::table('addresses')->where('id', $request['addressId'])->value('taxPercentage');
                $taxedVal = $netAmount * $tax;
                $order['grossAmount'] = $taxedVal + $netAmount;

                $order->save();

                $orderLog = Orderlog::create(
                    ['note' => "Ihre Bestellung ist eingegangen!",
                        'adminNote' => "",
                        'status' => '0',
                        'order_id' => $order['id']
                    ]
                );

                DB::commit();
                return response()->json($order, 201);
            }

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json('saving order failed' . $e->getMessage(), 420);
        }
    }

    public function updateStatus (Request $request, string $orderId) : JsonResponse
    {

        DB::beginTransaction();

        try {

            $order = Order::with(['orderlogs'])->where('id', $orderId)->first();
            if ($order != null) {
                $request = $this->parseRequest($request);
                $order->update(['status' => $request['status']]);

                $orderLog = Orderlog::create(
                    ['note' => $request['note'],
                        'adminNote' => $request['adminNote'],
                        'status' => $request['status'],
                        'order_id' => $orderId
                    ]
                );
                $order->save();

            }


            DB::commit();
            return response()->json($order, 201);
        }
        catch (\Exception $e) {
            DB::rollBack();
            return response()->json('updating order failed' . $e->getMessage(), 420);
        }


    }

    public function createAddress (Request $request) : JsonResponse
    {
        $request = $this->parseRequest($request);
        DB::beginTransaction();

        try {
            $country = $this->translateCountryCode($request['country']);

            if ($request['isMain'] == "true" || $request['isMain'] == 1){
                $this->unsetMain($request['user_id']);
            }

            $address = Address::create(
                ['street' => $request['street'],
                    'postcode' => $request['postcode'],
                    'city' => $request['city'],
                    'country' => $country[0],
                    'taxPercentage' => $country[1],
                    'isMain' => $request['isMain'],
                    'user_id' => $request['user_id']
                ]);


            $address->save();

            DB::commit();
            return response()->json($address, 201);
        }
        catch (\Exception $e) {
            DB::rollBack();
            return response()->json('updating order failed' . $e->getMessage(), 420);
        }
    }

    public function updateAddress(Request $request, int $addressId) : JsonResponse {

        DB::beginTransaction();

        try {

            $address = Address::where('id', $addressId)->first();

            $country = $this->translateCountryCode($request['country']);


            if ($address != null) {
                $request = $this->parseRequest($request);
                if ($request['isMain'] == "true"){
                    $this->unsetMain($request['user_id']);
                }

                $address->update([
                    'street' => $request['street'],
                    'postcode' => $request['postcode'],
                    'city' => $request['city'],
                    'country' => $country[0],
                    'taxPercentage' => $country[1],
                    'isMain' => $request['isMain']
                ]);
            }


            DB::commit();
            return response()->json($address, 201);
        }
        catch (\Exception $e) {
            DB::rollBack();
            return response()->json('updating order failed' . $e->getMessage(), 420);
        }
    }

    public function deleteAddress(int $id) : JsonResponse {
        $address = Address::where('id', $id)->first();
        if ($address != null) {
            $address->delete();
        }
        else {
            throw new \Exception("Address couldn't be deleted - does not exist");
        }
        return response()->json('address ' . $id . ' deleted', 200);
    }

    private function unsetMain(int $userId){
        $mainAddress = $this->getAddresses($userId);
        foreach ($mainAddress as $adr){
            $adr->update(['isMain' => false]);
        }
    }

    private function translateCountryCode(string $countryCode){
        if ($countryCode == "AT"){
            $tax = 0.10;
            $country = "Österreich";
            return [$country, $tax];
        }
        if ($countryCode == "DE"){
            $tax = 0.07;
            $country = "Deutschland";
            return [$country, $tax];
        }
        if ($countryCode == "CH"){
            $tax = 0.025;
            $country = "Schweiz";
            return [$country, $tax];
        }
    }

    public function getAddresses (int $userId) {
        $addresses = Address::where('user_id', $userId)
            ->get();
        return $addresses;
    }

    public function getMainAddressfromUser (int $userId) {
        $addresses = Address::where('user_id', $userId)->where('isMain', true)
            ->get();
        return $addresses;
    }


    public function index() {
        $orders = Order::with(['books', 'user'])->get();
        return $orders;
    }

    public function findByStatus (int $status) {
        $order = Order::where('status', $status)
            ->with(['books', 'user', 'books.images'])
            ->get();
        return $order;
    }

    public function findByUser (string $userId) {
        $order = Order::where('orders.user_id', '=', $userId)
            ->with(['books', 'books.images'])
            ->get();

        return $order;
    }

    public function getOrderlog (string $order_id) {
        $orderlogs = Orderlog::where('order_id', $order_id)
            ->get();

        return $orderlogs;
    }

    public function findBooksByOrder (int $orderid){
        $books = Book::join('book_order', 'books.id', '=', 'book_order.book_id')
            ->join('orders', 'book_order.order_id', '=', 'orders.id')
            ->with(['images', 'authors', 'user'])
            ->where('book_order.order_id', '=', $orderid)
            ->get();

        return $books;
    }

    public function getStatus (int $orderid) {
        $status = Order::where('id', $orderid)
            ->select('status')
            ->get();
        return $status;
    }

    public function sortByDesc () {
        $orders = Order::with(['books', 'user', 'books.images'])
            ->orderBy('created_at', 'desc')
            ->get();
        return $orders;
    }

    public function sortByAsc () {
        $orders = Order::with(['books', 'user', 'books.images'])
            ->orderBy('created_at', 'asc')
            ->get();
        return $orders;
    }


    private function parseRequest (Request $request) : Request {
        $date = new \DateTime($request->published);
        $request['published'] = $date;
        return $request;
    }
}
