<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\demandeAchat;
use App\Models\besoin;
use App\Models\devis;

class Dacontroller extends Controller
{
    public function getDa(){

            $da = demandeAchat::with('besoin','devis')->get();
            return response()->json($da);


    }
}
