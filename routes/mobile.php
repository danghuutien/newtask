<?php

use App\Http\Controllers\mobile\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('mobile.home');