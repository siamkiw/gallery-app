@extends('layouts.app')

@section('content')


<div class="container">
    <div class="justify-content-center">


        @guest
            @if (Route::has('register'))
            <script>window.location = "/login";</script>
            @endif
        @else
        <div id="app">
            <App></App>
        </div>
        @endguest

        {{-- <div id="app">
            <App></App>
        </div> --}}
    </div>  
</div>
@endsection
