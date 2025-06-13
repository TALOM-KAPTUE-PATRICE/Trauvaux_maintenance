<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class InsertController extends Controller
{
  public function creerUser(){
    $users=[
      ["name"=>'gobert',
       "email"=>'gobert5@gmail.com',
       "password"=>Hash::make('gobert234678'),
      ],
      ["name"=>'sepa',
       "email"=>'sepa8@gmail.com',
       "password"=>Hash::make('sepa209784'),
      ],
      ["name"=>'achille',
       "email"=>'achille5@gmail.com',
       "password"=>Hash::make('achille984688'),
      ],
      ["name"=>'talom',
       "email"=>'kaptuepatrice5@gmail.com',
       "password"=>Hash::make('kaptue454699'),
      ],

     ];
       User::insert($users);
  }
}
