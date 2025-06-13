<?php

namespace App\Http\Controllers;
use App\Models\Student;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getData(){

        $studentModel = new Student();
        $data = $studentModel->getStudent() ;
         return response()->json($data);
    }

    public function addData( Request $req){

        $studentModel = new Student();
        $result = $studentModel->addStudent($req->all()) ;
        
    }
}
