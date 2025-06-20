<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TALOM
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
         header ('Access-Control-Allow-Origin:  *');
         header ('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
         header ('Access-Control-Allow-Headers:  Content-type, X-Auth-Token, Origin, Authorization, Accept, charset, boundary, Content-lenght');
        return $next($request);
    }
}
