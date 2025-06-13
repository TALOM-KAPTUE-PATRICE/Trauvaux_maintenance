<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\devis;
use App\Models\besoin;

class demandeAchat extends Model
{

    public function besoin(){
        return $this->belongsTo(besoin::class);
    }
    public function devis(){
        return $this->belongsTo(devis::class);
    }
    use HasFactory;
}
