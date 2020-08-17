<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostsController extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    public function store(Request $request)
    {
        dd($request->config->data);
        // $data = request()->validate([
        //     'data' => ['require'],
        // ]);

        // $imagePath = request('data')->store('uploads', 'public');

        // auht()->user()->post()->create([
        //     'image' => $imagePath,
        // ]);

        // auht()->user()->post()->create($request->config->data);

        // dd($imagePath);
        return $request;

    }
}
