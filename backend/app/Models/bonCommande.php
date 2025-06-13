<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\besoin;
use App\Models\facture;
class bonCommande extends Model
{
    protected $fillable=['numeroBon','dateCommande','dateLivraison','modePaiement','codeProjet' , 'moyenPaiement','besoin_id'];

    public function besoin(){
        return $this->belongsTo(besoin::class);
    }

    public function tickets(){
        return $this->hasMany(facture::class);
    }
    use HasFactory;
}
