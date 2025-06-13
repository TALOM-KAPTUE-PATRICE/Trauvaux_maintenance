<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\bonCommande;
use App\Models\besoin;
class facture extends Model
{
     protected $fillable=['numeroFacture','dateFacture','besoin_id','bon_commande_id'];

    public function besoin(){
        return $this->belongsTo(besoin::class);
    }
    public function commande(){
        return $this->belongsTo(bonCommande::class);
    }

    use HasFactory;

}
