<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class client extends Model
{

    public function tickets(){
        return $this->hasMany(ticket::class);
    }
    public function getclients(){
        $result = DB::table('clients')->select('id','nomClient')->get();
         return $result;
     }
    use HasFactory;
}
