<?php

namespace App\Http\Requests\Book;

use Illuminate\Foundation\Http\FormRequest;

class CreateBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|min:1|max:255',
            'author' => 'required|string|min:1|max:255',
            'isbn' => 'required|string|min:1|max:255',
            'publisher' => 'required|string|min:1|max:255',
            'publication_year' => 'required|numeric|year',
            'genre' => 'nullable|string|min:4|max:25',
            'language' => 'required|string|min:4|max:25',
            'pages' => 'nullable|numeric',
            'description' => 'required|string|max:1000|min:100',
            'price' => 'nullable|numeric|max:1000000',
            'quantity' => 'nullable|numeric|max:1000000',
            'availability' => 'nullable|boolean',
            'cover_photo' => 'nullable|image:jpeg,jpg,png|max:2048'
        ];
    }
}
