<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\demandeAchat;
use App\Models\besoin;
class devis extends Model
{
    protected $fillable=['descriptionDevis','','numeroDevis','typeTravaux','contrainteDev','effectifP','dureeLivrais','peinture','dateEmissDa','besoin_id'];
    public function devis(){
        return $this->hasMany(demandeAchat::class);
    }
    public function besoin(){
        return $this->belongsTo(besoin::class);
    }

    use HasFactory;
}
