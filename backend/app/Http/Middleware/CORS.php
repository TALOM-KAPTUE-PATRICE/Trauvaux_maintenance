<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CORS
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

        $headers=[
            'Access-Control-Allow-Origin:  *',
            'Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers:  Content-type, X-Auth-Token, Origin, Authorization, Accept, charset,boundary,Content-lenght'
        ];
        if($request->getMethod()=="OPTIONS"){
            return response('ok')->withHeaders($headers);

        }
        $response= $next($request);
        foreach($headers as $key => $value)
            $response->header($key , $value);

        return $response;

    }
}
