<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactsController;


Route::get('/get_all_contacts', [ContactsController::class, 'getAllContacts']);
Route::post('/add_contact', [ContactsController::class, 'addContact']);
// Route::get('/add_contact', [ContactsController::class, 'addContact']);
Route::post('/edit_contact/{id}', [ContactsController::class, 'editContact']);
Route::delete('/delete_contact/{id}', [ContactsController::class, 'deleteContact']);
