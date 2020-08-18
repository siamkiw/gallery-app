<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    public function store()
    {

        info('This is some useful information.');
        // dd(json_encode($request));
        // dd('hello');
        // // $data = request()->validate([
        // //     'data' => ['require'],
        // // ]);

        $data = request()->validate([
            'imageName' => 'required',
            'contentType' => 'required',
            'size' => 'required',
            'fullPath' => 'required',
        ]);

        return redirect('/');
        // $imagePath = request('data')->store('uploads', 'public');

        // auht()->user()->post()->create([
        //     'image' => $imagePath,
        // ]);

        // auht()->user()->post()->create($request->config->$data);

        // dd($imagePath);
        // return $request;

    }
}
