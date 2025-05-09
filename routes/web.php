<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'name' => 'Henry Baharudin Yusuf',
        'frameworks' => [
            'Laravel',
            'Livewire',
            'InertiaJS',
            'VueJS',
            'ReactJS',
            'AlpineJS',
            'TailwindCSS',
        ],
    ]);
});
