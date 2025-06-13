<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\InsertController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\BesoinController;
use App\Http\Controllers\Dacontroller;
use App\Http\Controllers\DevisController;
use App\Http\Controllers\FactureController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BonCommandController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Route::get('/student',[UserController::class,"getData"]);
Route::get('/clients',[TicketController::class,"recupere"]);
Route::post('/ticketData',[TicketController::class,"ajoutData"]);
Route::get('/users',[TicketController::class,"recupereUsers"]);
Route::get('/impression/{ticketID}',[TicketController::class,"impression"]);
Route::delete('/delTickets/{ticketID}',[TicketController::class,"deleteTickets"]);
//route besoin
Route::get('/besoin',[BesoinController::class,"getBseoin"]);
Route::delete('/delBesoin/{besoinID}',[BesoinController::class,"deleteBseoin"]);
Route::post('/addstudent',[UserController::class,"addData"]);
Route::get('/insert',[InsertController::class,"creerUser"]);
Route::get('/tickets',[TicketController::class,"affiche"]);
Route::get('/ticketsB',[TicketController::class,"afficheB"]);
//route DA
Route::get('/da',[Dacontroller::class,"getDa"]);
//route devis
Route::get('/devis',[DevisController::class,"afficheDevis"]);
Route::get('/impressionD/{idDevis}',[DevisController::class,"impression"]);
//route commande
Route::get('/commande',[BonCommandController::class,"afficheCommande"]);
//route facture
Route::get('/facture',[FactureController::class,"afficheFacture"]);

Route::get('csrf-token',function(){
   return response()->json(['crsf-token'=>crsf_token()
   ]);
});
