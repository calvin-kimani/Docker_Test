<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Book\CreateBookRequest;
use App\Http\Requests\Book\SearchBookRequest;
use Illuminate\Support\Facades\Validator;
use App\Models\Book;

class BookController extends Controller
{
	protected function validateUuid(String $uuid)
	{
		$validator = Validator::make(['uuid' => $uuid], [
			'uuid' => 'required|uuid',
		]);

		if ($validator->fails()) {
			return false;
		}

		return true;
	}

	public function index(Request $request)
	{	
		$page = $request->input('page', 1);
		$_data = Book::paginate(12, ['*'], 'page', $page);

		$books = $_data->map(function($book){
			return [
				'url' => $book->uuid,
				'title' => $book->title,
				'author' => $book->author,
				'price' => $book->price,
				'isbn' => $book->isbn,
				'cover_image' => $book->cover_image,
			];
		});

		return response(compact('books'));
	}

	public function create(CreateBookRequest $request)
	{
		$book = $request->validated();

		return response(compact('book'));
	}

	public function show(String $bookUUID)
	{
		if(!$this->validateUuid($bookUUID)){
			return response()->json(["error" => "Book Not Found"]);
		}

		$book = Book::where('uuid', $bookUUID)->get()->first();
		

		return response(compact('book'));
	}

	public function search(SearchBookRequest $request)
	{
	    $validatedData = $request->validated();    
	    $_data = Book::where(function ($query) use ($validatedData) {
	        if (isset($validatedData['title'])) {
	            $query->where('title', 'like', '%' . $validatedData['title'] . '%');
	        }
	        
	        // if (isset($validatedData['author'])) {
	        //     $query->where('author', 'like', '%' . $validatedData['author'] . '%');
	        // }
	    })->get();

	    $books = $_data->map(function($book){
			return [
				'url' => $book->uuid,
				'title' => $book->title,
				'author' => $book->author,
				'price' => $book->price,
				'isbn' => $book->isbn,
				'cover_image' => $book->cover_image,
			];
		});



	    return response()->json(['books' => $books]);
	}	
}
