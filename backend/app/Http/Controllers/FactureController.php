<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\facture;
use App\Models\besoin;
use App\Models\bonCommande;

class FactureController extends Controller
{
     public function afficheFacture(){
        try{
            $facture = facture::with('besoin','bonCommande')->get();
            return response()->json($factures);

        }catch(\Exception $e){
            return response()->json(['error'=>'une erruer s\'est produite lors de la suppression du ticket.'],500);
        }
     }
}
