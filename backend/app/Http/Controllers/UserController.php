<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function users() {
        return User::all();   
    }

    public function user_role($id) {
        $user = User::find($id);
        // foreach ($user->roles as $role) {
        //     echo $role->role_name . '<br>';
        //    
        // }  
        return $user->roles->toJson(JSON_PRETTY_PRINT);
    }    

    public function roles() {
        $roles = Role::all(); 
        return $roles->toJson(JSON_PRETTY_PRINT);
    }      

    public function user_permissions($id) {
        $user = User::find($id);
        return $user->permissions->toJson(JSON_PRETTY_PRINT);
    }      

    public function authorization() {
        /* 
        SELECT urp.user_id, users.last_name, roles.role_name, permissions.permission_name
        FROM user_role_permissions as urp
        JOIN users ON urp.user_id = users.id
        JOIN roles ON urp.role_id = roles.id
        JOIN permissions ON urp.permission_id = permissions.id;
        */

        $user_role_permissions = DB::table('user_role_permissions as urp')
                    ->join('users', 'urp.user_id', '=', 'users.id')
                    ->join('roles', 'urp.role_id', '=', 'roles.id')
                    ->join('permissions', 'urp.permission_id', '=', 'permissions.id')                    
                    ->select('urp.user_id', 'users.first_name', 'users.last_name', 'users.email', 'urp.role_id', 'roles.role_name', 'urp.permission_id', 'permissions.permission_name')
                    ->get();

        // $user_role_permissions = DB::table('user_role_permissions as urp')
        // ->join('users', 'urp.user_id', '=', 'users.id')
        // ->join('roles', 'urp.role_id', '=', 'roles.id')
        // ->join('permissions', 'urp.permission_id', '=', 'permissions.id')                    
        // ->select('urp.user_id', 'users.last_name', )->distinct()
        // ->get();                    
   
        return $user_role_permissions->toJson(JSON_PRETTY_PRINT);
    }    

    public function user($id) {
        return User::find($id);    
    }    

    public function update(Request $request, $id) {
        return $request;
        $user = [
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),    
        ];
        User::find($id)->update($user);    
    }

    public function remove($id) {
        User::destroy($id);
    }   
    
    public function attach_user_role_permission($user_id, $role_id, $permission_id) {
        return User::find($user_id)->role_permissions()->attach($permission_id, ['role_id' => $role_id]);
    }   
    
    public function detach_user_role_permission($user_id, $role_id, $permission_id) {
        DB::table('user_role_permissions')
            ->where('user_id', '=', $user_id)
            ->where('role_id', '=', $role_id)    
            ->where('permission_id', '=', $permission_id)                                                   
            ->delete();
    }      

    public function attach_role($user_id, $role_id) {
        return User::find($user_id)->roles()->attach($role_id);
    }

    public function detach_role($user_id, $role_id) {
        return User::find($user_id)->roles()->detach($role_id);
    }

    public function attach_permission($user_id, $permission_id) {
        return User::find($user_id)->permissions()->attach($permission_id);
    }

    public function detach_permission($user_id, $permission_id) {
        return User::find($user_id)->permissions()->detach($permission_id);
    }    
}
