<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Image;
use App\Models\Thumbnail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index()
    {
        try {
            $products = DB::table('products')
                        ->join('thumbnails', 'products.id', '=', 'thumbnails.product_id')
                        ->select('products.*', 'thumbnails.thumbnail')
                        ->get();
        
            // Format the thumbnail path to be used in views
            $products->map(function ($product) {
                $product->thumbnail = asset($product->thumbnail);
                return $product;
            });
            
            return $products;
        } catch (\Exception $e) {
            // Handle exceptions
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    

    public function store(Request $request)
    {
        try {
            $fields = $request->validate([
                'name' => 'required|string',
                'description' => 'required|string',
                'price' => 'required',
                'category' => 'required|string',
                'brand' => 'required|string',
                'shipping' => 'boolean',
                'sku' => 'string',
                'thumbnail' => 'required|image', // Assurez-vous de valider également la miniature
                'images.*' => 'image', // Valider chaque image dans le tableau
            ]);

            // Créez le produit
            $product = Product::create($fields);
            $id = $product->id;

            // Enregistrez la miniature
            $thumbnail = $request->file('thumbnail');
            $tnName = $id.'_thumbnail_'.time().rand(1, 1000).'.'.$thumbnail->extension();
            $thumbnail->storeAs('public/products/'.$id, $tnName);
            $thumbnailPath = 'storage/products/'.$id.'/'.$tnName;

            // Enregistrez la miniature dans la table Thumbnail
            $t = new Thumbnail();
            $t->product_id = $id;
            $t->thumbnail = $thumbnailPath;
            $t->save();

            // Enregistrez les images complètes
            if ($request->hasFile('images')) {
                foreach($request->file('images') as $imageFile) {
                    $imageName = $id.'_image_'.time().rand(1,1000).'.'.$imageFile->extension();
                    $imageFile->storeAs('public/products/'.$id, $imageName);
                    $imagePath = 'storage/products/'.$id.'/'.$imageName;

                    // Enregistrez l'image dans la table Image
                    $image = new Image();
                    $image->product_id = $id;
                    $image->image = $imagePath;
                    $image->save();
                }
            }

            // Réponse de réussite
            return response()->json(['message' => 'Product created'], 201);
        } catch (\Exception $e) {
            // Handle exceptions
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getProduct($id) {
        try {
            $product = Product::find($id);
            if (!$product){
                return response()->json(['message' => 'No Product with the ID: '.$id], 404);
            }
            $product->images;
            return response()->json($product, 200);
        } catch (\Exception $e) {
            // Handle exceptions
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request)
    {
        try {
            $fields = $request->validate([
                'id' => 'required',
                'name' => 'required|string',
                'description' => 'required|string',
                'price' => 'required',
                'category' => 'required|string',
                'brand' => 'required|string',
                'shipping' => 'boolean',
                'sku' => 'string',
            ]);

            $product = Product::find($request->id);
            if (!$product) {
                return response()->json(['message' => 'No Product with the ID: '.$request->id], 404);
            }

            $product->update($fields);

            // Réponse de réussite avec les données mises à jour
            return response()->json(['message' => 'Product updated successfully', 'product' => $product], 200);
        } catch (\Exception $e) {
            // Handle exceptions
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $product = Product::find($id);
            if (!$product) {
                return response()->json(['message' => 'No Product with the ID: '.$id], 404);
            }

            // Supprimer les images associées
            foreach ($product->images as $image) {
                Storage::delete($image->image);
                $image->delete();
            }

            // Supprimer la miniature
            Storage::delete($product->thumbnail->thumbnail);
            $product->thumbnail->delete();

            // Supprimer le produit
            $product->delete();

            return response()->json(['message' => 'Product deleted successfully'], 200);
        } catch (\Exception $e) {
            // Handle exceptions
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}