<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\besoin;
use App\Models\ticket;

class BesoinController extends Controller
{
    public function getBseoin(){

        $besoin= besoin::with('ticket')->get();
        return response()->json($besoin);
    }

    public function deleteBseoin($besoinID){
    try{
        $besoin= besoin::findOrFail($besoinID);
        $besoin->delete();

          return response()->json(['Message'=>'Le besoin a ete supprimer avec success']);

       }catch(\Exception $e){
          return response()->json(['error'=>'une erreur s\'est produite lors de la suppression du besoin.'],500);
       }

    }
}
