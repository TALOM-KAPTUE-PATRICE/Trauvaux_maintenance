<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\client;
use Illuminate\Support\Facades\DB;
use App\Models\User;
class ticket extends Model
{
    protected $fillable=['titreT','descriptionT','dateHeureT','user_id','client_id'];
    public function client(){
        return $this->belongsTo(client::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function besoin(){
        return $this->hasMany(besoin::class);
    }
    use HasFactory;
}
