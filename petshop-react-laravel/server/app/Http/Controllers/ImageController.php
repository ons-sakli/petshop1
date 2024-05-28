<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:2048', // Accepter tous les types d'images avec une taille maximale de 2048 Ko
            'product_id' => 'required|exists:products,id',
        ]);

        $product_id = $request->product_id;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = $product_id . '_image_' . time() . '.' . $image->extension();
            $path = $image->storeAs('public/products/' . $product_id, $imageName);

            $image = new Image();
            $image->product_id = $product_id;
            $image->image = $path;
            $image->save();
        }

        return response()->json(['message' => 'Image uploaded successfully']);
    }

    public function update(Request $request, Image $image)
    {
        $request->validate([
            'image' => 'required|image|max:2048', // Accepter tous les types d'images avec une taille maximale de 2048 Ko
            'product_id' => 'required|exists:products,id',
        ]);

        $product_id = $request->product_id;

        if ($request->hasFile('image')) {
            $existingImage = $image->image;
            Storage::delete($existingImage); // Supprimer l'ancienne image

            $imageFile = $request->file('image');
            $imageName = $product_id . '_image_' . time() . '.' . $imageFile->extension();
            $path = $imageFile->storeAs('public/products/' . $product_id, $imageName);

            $image->product_id = $product_id;
            $image->image = $path;
            $image->save();
        }

        return response()->json(['message' => 'Image updated successfully']);
    }

    public function destroy(Image $image)
    {
        $imagePath = $image->image;
        Storage::delete($imagePath); // Supprimer l'image du stockage

        $image->delete(); // Supprimer l'entrée de la base de données

        return response()->json(['message' => 'Image deleted successfully']);
    }
}
