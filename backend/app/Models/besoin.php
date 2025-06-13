<?php

namespace App\Models;
use App\Models\ticket;
use App\Models\devis;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\demandeAchat;
use App\Models\facture;
class besoin extends Model
{
    
    public function ticket(){
        return $this->belongsTo(ticket::class);
    }

    public function facture(){
        return $this->hasMany(facture::class);
    }

    public function besoin(){
        return $this->hasMany(demandeAchat::class);
    }
    public function devis(){
        return $this->hasMany(devis::class);
    }
    use HasFactory;
}
