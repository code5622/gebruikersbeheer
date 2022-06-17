<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\User;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $role, $user_id)
    {
        //if(!$request->user()->userHasRole($role)) {  
        if(!User::find($user_id)->userHasRole($role)) {                            
            abort(403, 'You are not authorized');
        }

        return $next($request);
    }
}
