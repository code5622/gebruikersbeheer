<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Permission;

class RoleController extends Controller
{
    public function roles() {
        return Role::all();    
    }

    public function role($id) {
        return Role::find($id);    
    }   

    public function store(Request $request) {
        $role_name = $request->role_name;
        Role::create(['role_name' => $role_name]);
    }

    public function update(Request $request, $id) {
        $role = Role::find($id);
        $role->role_name = $request->role_name;
        $role->save();   
    }

    public function remove($id) {
        Role::destroy($id);       
    }       

    public function role_users($role_id) {
        $role = Role::find($role_id);
        return $role->users->toJson(JSON_PRETTY_PRINT);
    }

    public function role_permissions($role_id) {
        $role = Role::find($role_id);
        return $role->permissions->toJson(JSON_PRETTY_PRINT);
    } 

    public function roles_permissions() {
        // $roles_permissions = array();

        // $roles = Role::all();

        // foreach($roles as $role) {
        //     $permissions = array();
        //     $role_permissions = new \stdClass;              
        //     foreach($role->permissions as $permission) {
        //         $permission_id =  $permission->pivot->permission_id;
        //         $permission_name = Permission::find($permission_id)->permission_name;
        //         array_push($permissions, $permission_name);
        //     }
        //     $role_permissions->role = $role->role_name;
        //     $role_permissions->permissions = $permissions;

        //     array_push($roles_permissions, $role_permissions);
        // }    
     
        // return json_encode($roles_permissions, JSON_PRETTY_PRINT);
        $roles = Role::all();

        foreach($roles as $role) {
            echo $role->role_name . "<br>";
            echo $role->permissions . "<br><br>";
            // foreach($role->permissions as $item) {
            //     echo $item->permission_name;
            // }
        }

        //dd($roles);
    }     

    public function attach_permission($role_id, $permission_id) {
        return Role::find($role_id)->permissions()->attach($permission_id);
    }

    public function detach_permission($role_id, $permission_id) {
        return Role::find($role_id)->permissions()->detach($permission_id);
    }
}
