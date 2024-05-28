<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'category' => 'required|string',
            'brand' => 'required|string',
            'shipping' => 'boolean',
            'sku' => 'string',
            'thumbnail' => 'required|image', // Valider la miniature
            'images.*' => 'image', // Valider chaque image dans le tableau
        ];
    }
}
