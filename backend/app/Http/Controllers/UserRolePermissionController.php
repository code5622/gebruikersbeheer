<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserRolePermission;
use Illuminate\Support\Facades\DB;

class UserRolePermissionController extends Controller
{
    public function users_roles_permissions() {
        $users_roles_permissions = UserRolePermission::all();
        return $users_roles_permissions;
    }

    public function user_role_permission($user_id, $role_id, $permission_id) {
        $user_role_permission = UserRolePermission::where([
            ['user_id', '=', $user_id],
            ['role_id', '=', $role_id],  
            ['permission_id', '=', $permission_id],                        
        ])->firstOrDault();

        return $user_role_permission;
    }   
    
    public function user_role($user_id, $role_id) {
        $user_role = DB::table('user_role_permissions')
                        ->where('user_id', '=', $user_id) 
                        ->where('role_id', '=', $role_id)         
                        ->value('role_id');                
                        //->first();
                        
        //echo $user_role;
        return $user_role;
    }     
}
