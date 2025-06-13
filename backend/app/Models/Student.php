<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Student extends Model
{
    use HasFactory;
    public function getStudent(){

       $result = DB::table('student')->get();
        return $result;
    }

    public function addStudent($data){

           $result = DB::insert($data);
           return $result;
    }
}
