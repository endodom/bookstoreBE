<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

</head>
<body>

<ul>
    @foreach($books as $book)
        <a href="book/{{$book->id}}">{{$book->title}}</a></li>
    @endforeach
</ul>
</body>
</html>
