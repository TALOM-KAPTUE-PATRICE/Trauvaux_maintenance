<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\bonCommande;
use App\Models\besoin;

class BonCommandController extends Controller
{
    public function afficheCommande(){

        $commande= bonCommande::with('besoin')->get();
        return response()->json($commande);

    }
}
